import { TimelineEntry } from "@/content/types";
import { FadeIn } from "@/components/motion/FadeIn";

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-100 hidden sm:block" />

      <div className="space-y-8">
        {entries.map((entry, i) => (
          <FadeIn key={entry.id} delay={i * 0.08}>
            <div className="sm:pl-12 relative">
              {/* Dot */}
              <div className="absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full bg-lime-300 border-2 border-white shadow-sm -translate-x-1/2 hidden sm:block" />

              <div className="bg-white border border-neutral-100 rounded-xl p-5 hover:shadow-sm transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-neutral-900 text-base">
                    {entry.title}
                  </h3>
                  <span className="text-xs text-neutral-500 font-medium bg-neutral-50 px-2.5 py-1 rounded-full shrink-0">
                    {entry.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-lime-700 mb-2">
                  {entry.organization}
                </p>
                {entry.description && (
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {entry.description}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
