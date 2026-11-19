import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "The conditions under which OTI Business Limited issues refunds for courier services.",
};

const content = `<p><strong>OTI BUSINESS LIMITED</strong><br>Effective Date: 27th February 2026</p>
<p>At OTI BUSINESS LIMITED, we are committed to delivering reliable and time-critical courier services. This Refund Policy outlines the conditions under which refunds may be issued.</p>
<hr>
<h2>1. Booking Confirmation</h2>
<p>Once a booking is confirmed and a courier has been dispatched, costs are immediately incurred, including driver allocation, fuel, and operational planning. Refund eligibility will depend on the stage of service at the time of cancellation.</p>
<hr>
<h2>2. Cancellation Before Dispatch</h2>
<p>If a booking is cancelled <strong>before a courier has been dispatched</strong>, a full refund may be issued.</p>
<p>Refunds will be processed using the original payment method within a reasonable timeframe.</p>
<hr>
<h2>3. Cancellation After Dispatch</h2>
<p>If cancellation occurs <strong>after the courier has been dispatched but before collection</strong>, a partial refund may be issued. A dispatch or administration fee may be deducted to cover operational costs.</p>
<hr>
<h2>4. Cancellation After Collection</h2>
<p>Once goods have been collected, refunds are generally not available, as the service is actively being performed. Charges will apply for the completed portion of the journey and any return transport if required.</p>
<hr>
<h2>5. Failed Collection or Delivery</h2>
<p>Refunds may not be issued if collection or delivery fails due to:</p>
<ul>
<li>
<p>Incorrect address details</p>
</li>
<li>
<p>No recipient available at the delivery location</p>
</li>
<li>
<p>Inaccessible premises</p>
</li>
<li>
<p>Inaccurate shipment information</p>
</li>
</ul>
<p>Additional charges may apply for re-attempted delivery.</p>
<hr>
<h2>6. Service Issues</h2>
<p>If you believe our service did not meet agreed standards, please contact us immediately. Each case will be reviewed individually, and where appropriate, a partial or full refund may be considered.</p>
<hr>
<h2>7. Processing of Refunds</h2>
<p>Approved refunds will be processed to the original payment method. Processing times may vary depending on the payment provider.</p>
<hr>
<h2>8. Contact Us</h2>
<p>For refund requests or service concerns, please contact:</p>
<p><strong>OTI BUSINESS LIMITED</strong><br>Phone: +44 7858699922<br>Email: <a href="mailto:info@otibusinesslimited.co.uk">info@otibusinesslimited.co.uk</a></p>`;

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero title="Refund Policy" />
      <LegalContent html={content} />
    </>
  );
}
