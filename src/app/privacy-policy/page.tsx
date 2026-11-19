import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OTI Business Limited collects, uses, shares and protects personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <LegalContent>
        <p>
          OTI Business Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
          committed to protecting your privacy. This policy explains how we collect,
          use, share and protect personal data obtained through our website and courier
          services.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect your name, contact details, delivery address and payment
          information when you request a quote, book a courier service, or contact us
          through our website.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use your information to provide courier and logistics services, respond to
          enquiries, process bookings and payments, and improve our services.
        </p>
        <h3>Data Retention</h3>
        <p>
          We retain personal data only for as long as necessary to fulfil the purposes
          outlined in this policy, or as required by law.
        </p>
        <h3>Cookies</h3>
        <p>
          Our website may use cookies to improve your browsing experience. You can
          disable cookies through your browser settings.
        </p>
        <h3>Third-Party Links</h3>
        <p>
          Our website may contain links to third-party sites. We are not responsible for
          the privacy practices of those sites.
        </p>
        <h3>Your Rights Under UK GDPR</h3>
        <p>
          You have the right to access, correct, or request deletion of your personal
          data. To exercise these rights, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalContent>
    </>
  );
}
