import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "When refunds apply to OTI Business Limited courier bookings.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero title="Refund Policy" />
      <LegalContent>
        <p>
          This policy explains when refunds apply to courier bookings made with OTI
          Business Limited.
        </p>
        <h3>Cancellations Before Dispatch</h3>
        <p>A full refund is available if a booking is cancelled before a courier is dispatched.</p>
        <h3>Cancellations After Dispatch, Before Collection</h3>
        <p>
          A partial refund may apply if a booking is cancelled after dispatch but before
          collection has taken place.
        </p>
        <h3>After Collection</h3>
        <p>
          Refunds are generally unavailable once goods have been collected by our
          courier.
        </p>
        <h3>Failed Deliveries</h3>
        <p>
          Failed deliveries caused by issues such as an incorrect address, or the
          absence of someone to receive the goods, may not qualify for a refund.
        </p>
      </LegalContent>
    </>
  );
}
