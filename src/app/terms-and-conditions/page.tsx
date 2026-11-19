import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions governing courier and logistics services provided by OTI Business Limited.",
};

const content = `<h1>Terms and Conditions</h1>
<p><strong>OTI BUSINESS LIMITED</strong><br>Effective Date: 27th February 2026</p>
<p>These Terms and Conditions govern the provision of courier and logistics services by OTI BUSINESS LIMITED (“we”, “us”, “our”). By booking our services, you agree to be bound by these terms.</p>
<hr>
<h2>1. Services</h2>
<p>OTI BUSINESS LIMITED provides same-day courier services, dedicated onboard courier services, and related transport solutions across the United Kingdom.</p>
<p>All services are subject to availability and acceptance of booking.</p>
<hr>
<h2>2. Booking &amp; Confirmation</h2>
<p>A booking is considered confirmed once:</p>
<ul>
<li>
<p>A quotation has been accepted; and</p>
</li>
<li>
<p>Payment terms have been agreed or payment has been received.</p>
</li>
</ul>
<p>We reserve the right to refuse any booking at our discretion.</p>
<hr>
<h2>3. Customer Responsibilities</h2>
<p>The customer agrees to:</p>
<ul>
<li>
<p>Provide accurate collection and delivery details</p>
</li>
<li>
<p>Ensure goods are properly packaged and labelled</p>
</li>
<li>
<p>Declare the correct weight, dimensions, and value</p>
</li>
<li>
<p>Ensure items are lawful and safe for transport</p>
</li>
</ul>
<p>We reserve the right to refuse transport of prohibited or dangerous goods.</p>
<hr>
<h2>4. Prohibited Items</h2>
<p>Unless agreed in writing, we do not transport:</p>
<ul>
<li>
<p>Illegal substances</p>
</li>
<li>
<p>Hazardous materials</p>
</li>
<li>
<p>Explosives or flammable goods</p>
</li>
<li>
<p>Perishable items (unless pre-approved)</p>
</li>
<li>
<p>Cash or negotiable instruments</p>
</li>
</ul>
<p>It is the customer’s responsibility to ensure goods comply with UK transport regulations.</p>
<hr>
<h2>5. Delivery Times</h2>
<p>Estimated collection and delivery times are provided in good faith but are not guaranteed unless explicitly agreed in writing.</p>
<p>We are not liable for delays caused by:</p>
<ul>
<li>
<p>Traffic conditions</p>
</li>
<li>
<p>Weather disruptions</p>
</li>
<li>
<p>Accidents</p>
</li>
<li>
<p>Road closures</p>
</li>
<li>
<p>Events beyond our reasonable control</p>
</li>
</ul>
<hr>
<h2>6. Charges &amp; Payment</h2>
<p>Charges are based on:</p>
<ul>
<li>
<p>Distance</p>
</li>
<li>
<p>Service type</p>
</li>
<li>
<p>Urgency</p>
</li>
<li>
<p>Vehicle requirements</p>
</li>
<li>
<p>Weight and dimensions</p>
</li>
</ul>
<p>Payment terms will be agreed at the time of booking. Late payments may incur additional charges.</p>
<hr>
<h2>7. Cancellations</h2>
<p>Cancellation fees may apply depending on the stage of service at the time of cancellation. Please refer to our Refund Policy for further details.</p>
<hr>
<h2>8. Liability</h2>
<p>Our liability for loss or damage is limited to the declared value of the goods, subject to proof and any applicable insurance limits.</p>
<p>We are not liable for:</p>
<ul>
<li>
<p>Indirect or consequential losses</p>
</li>
<li>
<p>Loss of profit</p>
</li>
<li>
<p>Business interruption</p>
</li>
</ul>
<p>Customers are advised to ensure adequate insurance coverage for high-value items.</p>
<hr>
<h2>9. Insurance</h2>
<p>Goods are transported under applicable insurance arrangements. Coverage limits may apply. Additional insurance may be requested prior to booking.</p>
<hr>
<h2>10. Proof of Delivery</h2>
<p>Delivery confirmation will be provided via email, text message, or other agreed communication method upon completion.</p>
<hr>
<h2>11. Data Protection</h2>
<p>We process personal data in accordance with our Privacy Policy and UK GDPR regulations.</p>
<hr>
<h2>12. Force Majeure</h2>
<p>We shall not be liable for failure or delay in performance caused by circumstances beyond our reasonable control.</p>
<hr>
<h2>13. Governing Law</h2>
<p>These Terms and Conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
<hr>
<h2>14. Contact Information</h2>
<p>For questions regarding these Terms and Conditions, please contact:</p>
<p><strong>OTI BUSINESS LIMITED</strong><br>Phone: +44 7858699922<br>Email: <a href="mailto:info@otibusinesslimited.co.uk">info@otibusinesslimited.co.uk</a><br></p>`;

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms and Condition" />
      <LegalContent html={content} />
    </>
  );
}
