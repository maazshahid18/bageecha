type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest text-green-mid uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display mt-2 text-3xl font-semibold text-blue-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-foreground/70">
          {description}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-green-light to-blue-primary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}