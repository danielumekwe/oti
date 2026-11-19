import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OTI Business Limited collects, uses, shares and protects personal data.",
};

const content = `<p><strong>OTI BUSINESS LIMITED</strong></p>
<p>Effective Date: [Insert Date]</p>
<p>OTI BUSINESS LIMITED (“we”, “us”, “our”) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
<p>We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
<hr>
<h2>1. Information We Collect</h2>
<p>We may collect and process the following types of personal data:</p>
<h3>Personal Information</h3>
<ul>
<li>
<p>Full name</p>
</li>
<li>
<p>Company name</p>
</li>
<li>
<p>Email address</p>
</li>
<li>
<p>Phone number</p>
</li>
<li>
<p>Billing address</p>
</li>
<li>
<p>Collection and delivery addresses</p>
</li>
</ul>
<h3>Shipment Information</h3>
<ul>
<li>
<p>Package details (weight, dimensions, contents description)</p>
</li>
<li>
<p>Declared value</p>
</li>
<li>
<p>Delivery instructions</p>
</li>
</ul>
<h3>Technical Information</h3>
<ul>
<li>
<p>IP address</p>
</li>
<li>
<p>Browser type</p>
</li>
<li>
<p>Device information</p>
</li>
<li>
<p>Website usage data (via cookies)</p>
</li>
</ul>
<hr>
<h2>2. How We Use Your Information</h2>
<p>We use your information to:</p>
<ul>
<li>
<p>Provide and manage courier services</p>
</li>
<li>
<p>Process bookings and payments</p>
</li>
<li>
<p>Communicate delivery updates</p>
</li>
<li>
<p>Send invoices and confirmations</p>
</li>
<li>
<p>Respond to enquiries</p>
</li>
<li>
<p>Improve our website and services</p>
</li>
<li>
<p>Comply with legal and regulatory obligations</p>
</li>
</ul>
<p>We only process your personal data where we have a lawful basis to do so, including contractual necessity, legitimate interests, or legal compliance.</p>
<hr>
<h2>3. Sharing of Information</h2>
<p>We do not sell or rent your personal data.</p>
<p>We may share your information with:</p>
<ul>
<li>
<p>Delivery personnel and subcontracted drivers (where necessary)</p>
</li>
<li>
<p>Payment processors</p>
</li>
<li>
<p>IT and hosting providers</p>
</li>
<li>
<p>Legal or regulatory authorities if required by law</p>
</li>
</ul>
<p>All third parties are required to respect the security of your data.</p>
<hr>
<h2>4. Data Security</h2>
<p>We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction.</p>
<p>However, no internet-based transmission is completely secure, and we cannot guarantee absolute security.</p>
<hr>
<h2>5. Data Retention</h2>
<p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, including legal, accounting, or reporting requirements.</p>
<hr>
<h2>6. Your Rights</h2>
<p>Under UK GDPR, you have the right to:</p>
<ul>
<li>
<p>Access your personal data</p>
</li>
<li>
<p>Request correction of inaccurate data</p>
</li>
<li>
<p>Request erasure (where applicable)</p>
</li>
<li>
<p>Restrict or object to processing</p>
</li>
<li>
<p>Request data portability</p>
</li>
<li>
<p>Lodge a complaint with the Information Commissioner’s Office (ICO)</p>
</li>
</ul>
<p>To exercise your rights, please contact us using the details below.</p>
<hr>
<h2>7. Cookies</h2>
<p>Our website may use cookies to enhance user experience and analyse website traffic. You can manage cookie preferences through your browser settings.</p>
<hr>
<h2>8. Third-Party Links</h2>
<p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>
<hr>
<h2>9. Contact Us</h2>
<p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
<p><strong>OTI BUSINESS LIMITED</strong><br>Email: <a href="mailto:info@otibusinesslimited.co.uk">info@otibusinesslimited.co.uk</a><br>Phone: +44 7858699922<br>Address: 7 Wilson Business Park, Initial Business Centre, Monsall Road, Manchester, M40 8WN</p>
<hr>
<h2>10. Updates to This Policy</h2>
<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <LegalContent html={content} />
    </>
  );
}
