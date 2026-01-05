import ContactComponent from "./_components/contactcomponent";
// Page-specific metadata for Contact Page
export const metadata = {
  title: "Contact TREBO Consulting | IT & SAP Solutions Across Africa & UK",
  description:
    "Get in touch with TREBO Consulting for expert IT, SAP, and Digital Transformation solutions. Reach out to discuss your business technology needs across Africa, Europe, and the UK.",
  keywords: [
    "TREBO Consulting Contact",
    "IT Solutions Contact",
    "SAP Consultancy Contact",
    "Digital Transformation Inquiry",
    "Business Technology Support",
  ],
  openGraph: {
    title: "Contact TREBO Consulting | IT & SAP Solutions Across Africa & UK",
    description:
      "Reach out to TREBO Consulting to explore our IT, SAP, and Digital Transformation solutions tailored for businesses across Africa, Europe, and the UK.",
    url: "https://www.treboresources.com/contact",
    siteName: "TREBO Consulting",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://www.treboresources.com/logo.png",
        width: 1200,
        height: 630,
        alt: "TREBO Consulting Logo",
      },
    ],
  },
};
function ContactUsPage() {
  return <ContactComponent />;
}
export default ContactUsPage;
