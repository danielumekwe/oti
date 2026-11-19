import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms that govern courier and logistics services provided by OTI Business Limited across the UK.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero title="Terms and Conditions" />
      <LegalContent>
        <p>
          These terms govern the courier and logistics services provided by OTI
          Business Limited across the UK. By booking a service with us, you agree to
          the terms below.
        </p>
        <h3>Bookings</h3>
        <p>
          Bookings are confirmed once accepted and, where applicable, paid for. We will
          provide an estimated collection and delivery window.
        </p>
        <h3>Customer Responsibilities</h3>
        <p>
          Customers must provide accurate collection and delivery details, and ensure
          goods are suitably packaged for transport.
        </p>
        <h3>Prohibited Items</h3>
        <p>
          We do not transport illegal, hazardous, or otherwise prohibited items. Please
          contact us if you are unsure whether an item can be transported.
        </p>
        <h3>Payment</h3>
        <p>Payment is required at the time of booking unless otherwise agreed in writing.</p>
        <h3>Liability</h3>
        <p>
          Our liability for loss or damage is limited in accordance with our insurance
          cover and applicable law.
        </p>
        <h3>Delivery Timing and Cancellations</h3>
        <p>
          While we aim to meet quoted collection and delivery times, these are
          estimates. Cancellations are handled in line with our Refund Policy.
        </p>
        <h3>Data Protection</h3>
        <p>We handle personal data in accordance with our Privacy Policy.</p>
        <h3>Governing Law</h3>
        <p>These terms are governed by the laws of England and Wales.</p>
      </LegalContent>
    </>
  );
}
