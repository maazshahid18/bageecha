"use client";

import { useMemo, useState } from "react";
import { bookedDates } from "@/data/booked-dates";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function AvailabilityCalendar() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const bookedSet = useMemo(() => new Set(bookedDates), []);

  const [view, setView] = useState(() => ({
    year: today.getFullYear(),
    month: today.getMonth(),
  }));

  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setMonth(d.getMonth() + 12);
    return d;
  }, [today]);

  const monthLabel = new Date(view.year, view.month, 1).toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const days = useMemo(() => {
    const firstDay = new Date(view.year, view.month, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
    const cells: Array<{ day: number | null; key: string }> = [];

    for (let i = 0; i < startOffset; i++) {
      cells.push({ day: null, key: `empty-${i}` });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({ day, key: toDateKey(view.year, view.month, day) });
    }
    return cells;
  }, [view.month, view.year]);

  function canGoPrev() {
    const current = new Date(view.year, view.month, 1);
    const min = new Date(today.getFullYear(), today.getMonth(), 1);
    return current > min;
  }

  function canGoNext() {
    const current = new Date(view.year, view.month, 1);
    const max = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
    return current < max;
  }

  function getDayStatus(day: number) {
    const date = new Date(view.year, view.month, day);
    date.setHours(0, 0, 0, 0);
    const key = toDateKey(view.year, view.month, day);

    if (date < today) return "past";
    if (bookedSet.has(key)) return "booked";
    return "available";
  }

  const styles = {
    past: "bg-gray-100 text-gray-400 cursor-default",
    booked: "bg-red-100 text-red-700 cursor-default",
    available:
      "bg-green-50 text-green-800 hover:bg-green-100 cursor-pointer ring-1 ring-green-200",
  };

  return (
    <div className="rounded-2xl border border-green-dark/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-blue-navy">
            Check Availability
          </h3>
          <p className="mt-1 text-sm text-foreground/60">
            Green dates are open. Always confirm on WhatsApp before booking.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setView((v) => {
                const d = new Date(v.year, v.month - 1, 1);
                return { year: d.getFullYear(), month: d.getMonth() };
              })
            }
            disabled={!canGoPrev()}
            className="rounded-lg border border-green-dark/15 px-3 py-1.5 text-sm disabled:opacity-40"
            aria-label="Previous month"
          >
            ←
          </button>
          <span className="min-w-[9rem] text-center text-sm font-semibold text-blue-navy">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={() =>
              setView((v) => {
                const d = new Date(v.year, v.month + 1, 1);
                return { year: d.getFullYear(), month: d.getMonth() };
              })
            }
            disabled={!canGoNext()}
            className="rounded-lg border border-green-dark/15 px-3 py-1.5 text-sm disabled:opacity-40"
            aria-label="Next month"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-medium text-foreground/50">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map(({ day, key }) =>
          day === null ? (
            <div key={key} />
          ) : (
            (() => {
              const status = getDayStatus(day);
              const dateKey = toDateKey(view.year, view.month, day);
              const content = (
                <span className="flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium sm:h-11">
                  {day}
                </span>
              );

              if (status === "available") {
                return (
                  <a
                    key={key}
                    href={buildWhatsAppUrl({ eventDate: dateKey })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.available}
                    title={`Enquire for ${dateKey}`}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={key} className={styles[status]} title={status}>
                  {content}
                </div>
              );
            })()
          )
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-foreground/60">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-green-100 ring-1 ring-green-200" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-red-100" />
          Booked
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-gray-100" />
          Past
        </span>
      </div>

      <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-xs leading-relaxed text-foreground/65">
        <strong className="text-foreground">How to update booked dates:</strong> When you
        confirm a booking, add that date to{" "}
        <code className="rounded bg-white px-1 py-0.5 text-[11px]">src/data/booked-dates.ts</code>{" "}
        and push to GitHub. Remove the date if a booking is cancelled. Vercel redeploys
        automatically in about a minute.
      </p>
    </div>
  );
}