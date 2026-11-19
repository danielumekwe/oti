export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function validateLead(data: Partial<LeadPayload>): string | null {
  if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
    return "All fields are required.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Please provide a valid email address.";
  }
  return null;
}

export async function sendLeadEmail(data: LeadPayload, formLabel: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !toEmail) {
    throw new Error("Email service is not configured.");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "OTI Business Limited <website@otibusinesslimited.co.uk>",
      to: [toEmail],
      reply_to: data.email,
      subject: `${formLabel}: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Failed to send email: ${body}`);
  }
}
