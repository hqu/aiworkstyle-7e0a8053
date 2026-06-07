import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { essays } from "@/lib/essays";

export const Route = createFileRoute("/essays/")({
  head: () => ({
    meta: [
      { title: "Essays — AI Workstyle" },
      { name: "description", content: "Long-form writing on AI, work, and the new capabilities curious professionals have this year." },
      { property: "og:title", content: "Essays — AI Workstyle" },
      { property: "og:description", content: "Long-form writing on AI and work." },
    ],
  }),
  component: EssaysIndex,
});

function EssaysIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-24 w-full">
        <p className="text-sm uppercase tracking-[0.22em] text-ink-soft mb-6">Essays</p>
        <h1 className="font-display text-5xl sm:text-6xl text-ink-deep">
          Writing on AI and work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink">
          Honest, plain-spoken pieces. No hype, no doom. Read one with your morning coffee.
        </p>

        <div className="mt-16 space-y-12">
          {essays.map((essay, i) => (
            <Link
              key={essay.slug}
              to="/essays/$slug"
              params={{ slug: essay.slug }}
              className="group block border-t border-ink-deep/20 pt-8"
            >
              <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.18em] text-ink-soft">
                <span>№{String(i + 1).padStart(2, "0")}</span>
                <span>{essay.date} · {essay.readingTime}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink-deep group-hover:underline underline-offset-4 decoration-1">
                {essay.title}
              </h2>
              <p className="mt-3 text-ink leading-relaxed max-w-2xl">{essay.dek}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
