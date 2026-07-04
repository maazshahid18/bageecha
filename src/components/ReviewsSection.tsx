import { reviews } from "@/data/reviews";
import { siteConfig } from "@/lib/site-config";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-current" : "fill-none stroke-current opacity-30"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={`${review.name}-${review.date}`}
            className="rounded-2xl border border-green-dark/8 bg-white p-6 shadow-sm"
          >
            <Stars count={review.rating} />
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-5 border-t border-green-dark/8 pt-4">
              <p className="font-medium text-blue-navy">{review.name}</p>
              <p className="text-xs text-foreground/55">
                {review.event} · {review.date}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-cream px-6 py-8 text-center sm:flex-row">
        <p className="text-sm text-foreground/70">
          Had a great event at Bageecha? We&apos;d love your feedback on Google.
        </p>
        <a
          href={siteConfig.google.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-primary"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          View &amp; Review on Google
        </a>
      </div>
    </div>
  );
}