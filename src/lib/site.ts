export const site = {
  name: "OTI Business Limited",
  tagline: "Your Trusted UK Courier Partner",
  phone: "+44 7858699922",
  phoneHref: "tel:+447858699922",
  email: "info@otibusinesslimited.co.uk",
  address: "7 Wilson Business Park, Initial Business Centre, Monsall Road, Manchester, M40 8WN",
  hours: "Mon - Sat - 9:00 - 18:00",
  logo: "/images/2026/02/64914ac5-7bbf-4639-ba03-601c0cbbf4e0.png",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Same Day Delivery", href: "/same-day-delivery" },
      { label: "Dedicated Onboard Courier Services", href: "/dedicated-onboard-courier-services" },
      { label: "Nationwide Delivery", href: "/nationwide-delivery" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Terms and Condition", href: "/terms-and-conditions" },
  ],
  services: [
    { label: "Same Day Delivery", href: "/same-day-delivery" },
    { label: "Dedicated Onboard Courier Services", href: "/dedicated-onboard-courier-services" },
    { label: "Nationwide Coverage", href: "/nationwide-delivery" },
  ],
};

export const services = [
  {
    slug: "same-day-delivery",
    title: "Same Day Delivery",
    cardTitle: "Same-Day Business Transport",
    description:
      "When time matters, our same-day courier service ensures rapid collection and direct delivery anywhere in the United Kingdom.",
    image: "/images/2026/02/fbf84dd4-72f9-4d52-8cd4-edbc30de58be.png",
  },
  {
    slug: "dedicated-onboard-courier-services",
    title: "Dedicated Onboard Courier Services",
    cardTitle: "Dedicated Onboard Courier Services",
    description:
      "For highly urgent, confidential, or high-priority shipments, our onboard courier service offers maximum speed and control.",
    image: "/images/2026/02/6ba2c83e-42f6-4419-ad00-97521e5834ff.png",
  },
  {
    slug: "nationwide-delivery",
    title: "Nationwide Coverage",
    cardTitle: "Nationwide Coverage",
    description:
      "We operate across the entire UK, providing rapid response collection and direct transport services wherever your business requires.",
    image: "/images/2026/02/ce7d7476-8ce4-4af7-a19e-aa71ee90bd6d.png",
  },
];

export type IndustryIcon = "plane" | "first-aid" | "speedometer" | "people" | "pie-chart";

export const industries: { title: string; description: string; icon: IndustryIcon }[] = [
  {
    icon: "plane",
    title: "AVIATION, AEROSPACE AND AIRCRAFT (AOG) COURIERS",
    description:
      "We are available 24/7 for direct drive tracked deliveries of aircraft parts across the UK at a moment's notice.",
  },
  {
    icon: "first-aid",
    title: "Medical, Pharmaceutical and Healthcare Delivery",
    description:
      "Our couriers deliver urgent medical equipment, supplies, and samples in a safe and secure manner throughout the UK.",
  },
  {
    icon: "speedometer",
    title: "Mining, Refinery, Oil & Gas Markets Transportation",
    description:
      "With a dedicated vehicle courier service, we can deliver your samples, machinery and spare parts across town, city or country.",
  },
  {
    icon: "people",
    title: "Governments, Education, Charities and Public Sector Transport",
    description:
      "Our delivery experts can ensure time-sensitive deliveries of documents and goods are made on time to your office, warehouse or store.",
  },
  {
    icon: "pie-chart",
    title: "Information Technology, Telecommunications, Banking, Financial Services",
    description:
      "With our fully tracked secure courier service, sending high-value equipment couldn’t be easier with our traceable delivery service.",
  },
  {
    icon: "speedometer",
    title: "Manufacturing, Engineering, Printing Industry Delivery",
    description:
      "We are experienced in delivering anything from engineering parts, pallets of printed literature to just in time inventory nationwide.",
  },
];

export const howItWorks = [
  {
    title: "Call For A Quote",
    description:
      "Our team is ready to respond immediately with a fast, competitive quote tailored to your requirements.",
  },
  {
    title: "Receive Quote & Transit Times",
    description:
      "Submit your delivery details and receive immediate pricing and estimated transit times from our logistics team.",
  },
  {
    title: "Booked, Invoiced & Paid",
    description:
      "Once you approve your quote, we immediately schedule collection and dispatch your delivery.\nAn official invoice is issued promptly, with secure and convenient payment options available.",
  },
  {
    title: "Courier Dispatched to Collect & Deliver",
    description:
      "Once confirmed, a dedicated courier is immediately assigned to your shipment.\nWe collect promptly and transport your goods directly to their destination without delay.",
  },
  {
    title: "Delivery Complete With Details Sent By eMail, Text or Fax",
    description:
      "Once your shipment is delivered, full delivery details are sent via email, text message, or fax — providing immediate proof and peace of mind.",
  },
];

export const faqs = [
  {
    question: "How quickly can you collect my shipment?",
    answer:
      "We aim to collect within 60 minutes of booking, depending on location and availability. Our rapid response service ensures your goods are moving as quickly as possible.",
  },
  {
    question: "Do you offer nationwide coverage?",
    answer:
      "Yes. We provide same-day and onboard courier services across the entire United Kingdom, including England, Scotland, Wales, and Northern Ireland.",
  },
  {
    question: "What types of items can you transport?",
    answer:
      "We handle urgent documents, high-value goods, business-critical consignments, sensitive equipment, and time-sensitive materials. If you’re unsure, contact our team to confirm suitability.",
  },
  {
    question: "What is an onboard courier service?",
    answer:
      "An onboard courier is a dedicated professional who travels directly with your shipment to its destination. This ensures maximum security, supervision, and the fastest possible transit time.",
  },
  {
    question: "Are your deliveries insured?",
    answer:
      "Yes. All consignments are handled with care and transported under appropriate insurance coverage for your peace of mind.",
  },
  {
    question: "How do I receive proof of delivery?",
    answer:
      "Once delivery is complete, confirmation details are sent promptly via email, text message, or fax.",
  },
  {
    question: "Do you operate outside normal business hours?",
    answer: "Yes. We provide 24/7 service, including evenings, weekends, and public holidays.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can call our team directly or submit your collection and delivery details through our quote request form for immediate pricing and transit times.",
  },
];

export const industryImages = [
  "/images/2026/02/6130535f-6cfa-4b35-8fbd-90466083cf86-768x512.png",
  "/images/2026/02/6ba2c83e-42f6-4419-ad00-97521e5834ff-768x512.png",
  "/images/2026/02/af0fc76e-ee34-4f66-9414-89ea6399430b-768x512.png",
  "/images/2026/02/b15bc0f4-b4a6-412f-8e3f-04eb32784964-768x512.png",
  "/images/2026/02/ce7d7476-8ce4-4af7-a19e-aa71ee90bd6d-768x512.png",
  "/images/2026/02/fbf84dd4-72f9-4d52-8cd4-edbc30de58be-768x512.png",
];
