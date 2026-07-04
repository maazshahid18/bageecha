import { siteConfig } from "@/lib/site-config";

export function FAQSection() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-green-dark/10">
      {siteConfig.faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-blue-navy">
            {faq.question}
            <span className="ml-4 text-green-mid transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 pr-8 text-sm leading-relaxed text-foreground/70">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}