export const siteConfig = {
  name: "Bageecha",
  tagline: "The Party Lawn",
  fullName: "Bageecha The Party Lawn",
  description:
    "Premium party lawn in Gaya, Bihar for weddings, birthdays, school events, and celebrations. Capacity up to 600 guests.",
  url: "https://bageecha.alfibuilders.com",
  phone: "9006913858",
  whatsapp: "919006913858",
  email: "info@alfibuilders.com",
  capacity: 600,
  parentCompany: "Alfi Builders",
  parentUrl: "https://alfibuilders.com",
  location: {
    address: "Gaya, Bihar, India",
    city: "Gaya",
    state: "Bihar",
    mapsQuery: "Gaya, Bihar, India",
  },
  social: {
    instagram: "",
    facebook: "",
  },
  stats: [
    { label: "Guest Capacity", value: "600+" },
    { label: "Events Hosted", value: "500+" },
    { label: "Years of Trust", value: "10+" },
    { label: "Parking Space", value: "Ample" },
  ],
  amenities: [
    {
      title: "Spacious Lawn",
      description:
        "A beautifully maintained open lawn perfect for grand celebrations under the sky.",
      icon: "lawn",
    },
    {
      title: "Stage & Lighting",
      description:
        "Professional stage setup with ambient lighting for weddings and performances.",
      icon: "stage",
    },
    {
      title: "Catering Support",
      description:
        "Flexible catering arrangements — in-house options or your preferred caterer.",
      icon: "catering",
    },
    {
      title: "Parking",
      description:
        "Ample parking space for guests arriving by car, ensuring a hassle-free experience.",
      icon: "parking",
    },
    {
      title: "Decoration",
      description:
        "Customizable décor for weddings, birthdays, and themed events.",
      icon: "decor",
    },
    {
      title: "Power Backup",
      description:
        "Generator backup so your celebration never stops, day or night.",
      icon: "power",
    },
  ],
  events: [
    {
      slug: "weddings",
      title: "Weddings",
      description:
        "Create unforgettable wedding memories on our lush green lawn with elegant setups.",
      highlights: ["Mandap setup", "Reception area", "Bridal entry path"],
    },
    {
      slug: "birthdays",
      title: "Birthday Parties",
      description:
        "From kids' birthdays to milestone celebrations — we make every party special.",
      highlights: ["Theme décor", "DJ & music", "Cake cutting area"],
    },
    {
      slug: "school",
      title: "School Events",
      description:
        "Annual days, farewells, and cultural programs in a safe, spacious environment.",
      highlights: ["Stage for performances", "Seating arrangements", "Sound system"],
    },
    {
      slug: "corporate",
      title: "Corporate Events",
      description:
        "Team outings, product launches, and corporate gatherings with professional support.",
      highlights: ["AV setup", "Flexible layouts", "Catering packages"],
    },
  ],
  faqs: [
    {
      question: "What is the maximum guest capacity?",
      answer:
        "Bageecha can comfortably accommodate up to 600 guests for outdoor lawn events.",
    },
    {
      question: "Can we bring our own caterer?",
      answer:
        "Yes, outside catering is allowed. We also offer in-house catering options on request.",
    },
    {
      question: "Is parking available for guests?",
      answer:
        "Yes, we provide ample parking space for guest vehicles at the venue.",
    },
    {
      question: "How do I check availability and book?",
      answer:
        "Send us your event date, type, and guest count via the enquiry form or WhatsApp. Our team will confirm availability and share pricing.",
    },
    {
      question: "What are the booking timings?",
      answer:
        "Event timings are flexible. Standard packages include morning, evening, and full-day slots. Contact us for specific requirements.",
    },
  ],
} as const;