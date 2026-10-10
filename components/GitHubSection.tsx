"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "newelle-dev";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  days: ContributionDay[];
}

interface ContributionData {
  total: { [year: string]: number };
  contributions: ContributionDay[];
}

// Build 52 weeks x 7 days grid, capped at today (no future days)
function buildWeeks(contributions: ContributionDay[]): ContributionWeek[] {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);

  while (startDate.getDay() !== 0) {
    startDate.setDate(startDate.getDate() - 1);
  }

  const map: Record<string, ContributionDay> = {};
  for (const day of contributions) {
    map[day.date] = day;
  }

  const weeks: ContributionWeek[] = [];
  const cursor = new Date(startDate);

  for (let w = 0; w < 53; w++) {
    const days: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = cursor.toISOString().slice(0, 10);
      if (dateStr <= todayStr) {
        days.push(map[dateStr] ?? { date: dateStr, count: 0, level: 0 });
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    if (days.length > 0) weeks.push({ days });
  }

  return weeks;
}

function getLevelClass(level: 0 | 1 | 2 | 3 | 4): string {
  switch (level) {
    case 0: return "bg-foreground/[0.06] dark:bg-foreground/[0.08]";
    case 1: return "bg-primary/25";
    case 2: return "bg-primary/50";
    case 3: return "bg-primary/75";
    case 4: return "bg-primary";
    default: return "bg-foreground/[0.06]";
  }
}

interface TooltipState {
  date: string;
  count: number;
  x: number;
  y: number;
}

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [totalThisYear, setTotalThisYear] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        if (!res.ok) throw new Error("Failed");
        const data: ContributionData = await res.json();
        setWeeks(buildWeeks(data.contributions));
        const currentYear = new Date().getFullYear().toString();
        setTotalThisYear(data.total[currentYear] ?? null);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
      setTooltip(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="github" className="py-16 px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Header row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-baseline justify-between mb-3"
        >
          <div className="flex items-baseline gap-3">
            <span className="section-label mb-0">GitHub</span>
            {totalThisYear !== null && (
              <span className="text-sm text-muted-foreground">
                {totalThisYear} contributions this year
              </span>
            )}
          </div>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            @{GITHUB_USERNAME}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Fixed Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full px-2.5 py-1 rounded-md bg-foreground text-background text-[11px] font-medium whitespace-nowrap shadow-lg"
            style={{ left: tooltip.x, top: tooltip.y - 8 }}
          >
            {tooltip.count === 0
              ? `No contributions on ${tooltip.date}`
              : `${tooltip.count} contribution${tooltip.count !== 1 ? "s" : ""} on ${tooltip.date}`}
          </div>
        )}

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto overflow-y-hidden py-2"
          onScroll={() => setTooltip(null)}
        >
          {isLoading && (
            <div className="h-28 rounded-lg bg-secondary animate-pulse" />
          )}

          {error && (
            <div className="h-28 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Could not load contribution graph
              </span>
            </div>
          )}

          {!isLoading && !error && weeks.length > 0 && (
            <div className="w-fit mx-auto min-w-max">
              {/* Day grid */}
              <div className="flex gap-[4px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.days.map((day, di) => (
                      <div
                        key={di}
                        className={`w-[12px] h-[12px] rounded-sm cursor-default transition-transform hover:scale-150 hover:z-10 relative ${getLevelClass(day.level)}`}
                        onMouseEnter={(e) => {
                          if (tooltipTimerRef.current) {
                            clearTimeout(tooltipTimerRef.current);
                          }
                          const target = e.currentTarget;
                          const rect = target.getBoundingClientRect();
                          const screenW = typeof window !== "undefined" ? window.innerWidth : 1000;
                          const clampedX = Math.max(90, Math.min(screenW - 90, rect.left + rect.width / 2));

                          tooltipTimerRef.current = setTimeout(() => {
                            setTooltip({
                              date: day.date,
                              count: day.count,
                              x: clampedX,
                              y: rect.top,
                            });
                          }, 200);
                        }}
                        onMouseLeave={() => {
                          if (tooltipTimerRef.current) {
                            clearTimeout(tooltipTimerRef.current);
                          }
                          setTooltip(null);
                        }}
                      />  
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
