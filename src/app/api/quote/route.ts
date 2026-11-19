import { NextResponse } from "next/server";
import { validateLead, sendLeadEmail, type LeadPayload } from "@/lib/sendLead";

export async function POST(request: Request) {
  const data = (await request.json()) as Partial<LeadPayload>;

  const validationError = validateLead(data);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    await sendLeadEmail(data as LeadPayload, "Quote Request");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please call us instead." },
      { status: 502 }
    );
  }
}
