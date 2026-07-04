import { siteConfig } from "./site-config";

export type EnquiryData = {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
};

export function buildWhatsAppUrl(data: Partial<EnquiryData> = {}) {
  const lines = [
    "Hello Bageecha! I'd like to enquire about booking.",
    data.name ? `Name: ${data.name}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.eventType ? `Event: ${data.eventType}` : null,
    data.eventDate ? `Date: ${data.eventDate}` : null,
    data.guestCount ? `Guests: ${data.guestCount}` : null,
    data.message ? `Message: ${data.message}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function getCallUrl() {
  return `tel:+91${siteConfig.phone}`;
}