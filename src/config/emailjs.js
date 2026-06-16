import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_7be56jq";
const TEMPLATE_ID = "template_3rfzapf";
const PUBLIC_KEY = "PyWW2cfQm78rclLOI";

// Reusable email sender for both forms
export function sendEnquiryEmail(data) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      project: data.project || "General Enquiry",
      message: data.message,
    },
    { publicKey: PUBLIC_KEY }
  );
}