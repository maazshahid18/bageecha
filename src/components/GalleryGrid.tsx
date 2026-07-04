const placeholders = [
  { id: 1, label: "Wedding Setup", gradient: "from-green-dark/80 to-green-light/60" },
  { id: 2, label: "Lawn View", gradient: "from-blue-navy/80 to-blue-primary/60" },
  { id: 3, label: "Birthday Party", gradient: "from-green-mid/80 to-green-light/50" },
  { id: 4, label: "Evening Lights", gradient: "from-blue-primary/70 to-green-dark/70" },
  { id: 5, label: "Stage Area", gradient: "from-green-dark/70 to-blue-navy/80" },
  { id: 6, label: "Reception", gradient: "from-green-light/70 to-blue-primary/50" },
];

type GalleryGridProps = {
  limit?: number;
  showNote?: boolean;
};

export function GalleryGrid({ limit, showNote = true }: GalleryGridProps) {
  const items = limit ? placeholders.slice(0, limit) : placeholders;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} ${
              i === 0 && !limit ? "sm:col-span-2 sm:row-span-1 lg:aspect-[2/1]" : ""
            }`}
          >
            <div className="absolute inset-0 flex items-end p-5">
              <p className="font-display text-lg font-semibold text-white drop-shadow-md">
                {item.label}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            <div className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm">
              Photo coming soon
            </div>
          </div>
        ))}
      </div>
      {showNote && (
        <p className="mt-6 text-center text-sm text-foreground/50">
          Real venue photos will be added here. Share your best event photos to showcase Bageecha.
        </p>
      )}
    </div>
  );
}