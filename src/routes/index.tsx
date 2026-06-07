import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { essays } from "@/lib/essays";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Workstyle — A field guide to working well with AI" },
      { name: "description", content: "Plain-spoken essays on how AI quietly makes curious professionals more capable." },
      { property: "og:title", content: "AI Workstyle" },
      { property: "og:description", content: "A field guide to working well with AI." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = essays.slice(0, 3);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Manifesto hero */}
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <p className="text-sm uppercase tracking-[0.22em] text-ink-soft mb-8">
            Issue 01 · A field guide
          </p>
          <h1 className="font-display text-5xl sm:text-7xl text-ink-deep">
            AI won't take your job.
            <span className="block italic text-ink-soft">It will take your busywork.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl text-ink leading-relaxed">
            AI Workstyle is a plain-spoken guide for curious professionals. No hype, no doom — just honest writing about the new capabilities you have this year that you didn't have last year, and how to actually use them.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <Link
              to="/essays"
              className="inline-flex items-center gap-2 border-b-2 border-ink-deep pb-1 text-ink-deep font-medium hover:gap-3 transition-all"
            >
              Read the essays
              <span aria-hidden>→</span>
            </Link>
            <Link to="/playbook" className="text-ink-soft hover:text-ink-deep underline underline-offset-4">
              Or jump to the playbook
            </Link>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <hr className="rule-hairline" />
        </div>

        {/* Featured essays */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl sm:text-4xl">Recent essays</h2>
            <Link to="/essays" className="text-sm text-ink-soft hover:text-ink-deep underline underline-offset-4">
              View all
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {featured.map((essay, i) => (
              <Link
                key={essay.slug}
                to="/essays/$slug"
                params={{ slug: essay.slug }}
                className="group block"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
                  №{String(i + 1).padStart(2, "0")} · {essay.readingTime}
                </p>
                <h3 className="font-display text-2xl text-ink-deep group-hover:underline underline-offset-4 decoration-1">
                  {essay.title}
                </h3>
                <p className="mt-3 text-ink leading-relaxed">{essay.dek}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Start here */}
        <section className="bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-ink-soft mb-6">Start here</p>
            <h2 className="font-display text-4xl sm:text-5xl text-ink-deep">
              The new literacy is knowing what to ask.
            </h2>
            <p className="mt-8 mx-auto max-w-xl text-lg text-ink">
              Three short pieces to change how you reach for AI tomorrow morning.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
              {essays.map((e) => (
                <Link
                  key={e.slug}
                  to="/essays/$slug"
                  params={{ slug: e.slug }}
                  className="block border-t border-ink-deep pt-4 hover:opacity-70 transition-opacity"
                >
                  <p className="font-display text-lg text-ink-deep">{e.title}</p>
                  <p className="mt-2 text-sm text-ink-soft">{e.readingTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
