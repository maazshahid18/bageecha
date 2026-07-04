export type Review = {
  name: string;
  event: string;
  rating: number;
  text: string;
  date: string;
};

/**
 * Paste real Google reviews here as you collect them.
 * Also link visitors to leave a review via siteConfig.google.reviewUrl
 */
export const reviews: Review[] = [
  {
    name: "Priya Sharma",
    event: "Wedding",
    rating: 5,
    text: "Beautiful lawn and very helpful staff. Our wedding guests loved the open space and lighting in the evening.",
    date: "December 2025",
  },
  {
    name: "Rahul Kumar",
    event: "Birthday Party",
    rating: 5,
    text: "Great venue for a large birthday celebration. Parking was easy and the stage setup was perfect for our program.",
    date: "November 2025",
  },
  {
    name: "St. Xavier's School",
    event: "Annual Day",
    rating: 5,
    text: "Spacious venue for our school annual function. Seating and sound arrangements were managed smoothly.",
    date: "October 2025",
  },
];