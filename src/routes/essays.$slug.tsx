import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getEssay, essays } from "@/lib/essays";

export const Route = createFileRoute("/essays/$slug")({
  loader: ({ params }) => {
    const essay = getEssay(params.slug);
    if (!essay) throw notFound();
    return { essay };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.essay.title} — AI Workstyle` },
          { name: "description", content: loaderData.essay.dek },
          { property: "og:title", content: loaderData.essay.title },
          { property: "og:description", content: loaderData.essay.dek },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-5xl text-ink-deep">Essay not found</h1>
        <p className="mt-4 text-ink-soft">It may have been moved or renamed.</p>
        <Link to="/essays" className="mt-8 inline-block border-b-2 border-ink-deep text-ink-deep pb-1">
          Back to essays
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-display text-3xl text-ink-deep">Something went wrong</h1>
        <button onClick={reset} className="mt-6 border-b-2 border-ink-deep text-ink-deep pb-1">Try again</button>
      </div>
    </div>
  ),
  component: EssayPage,
});

function EssayPage() {
  const { essay } = Route.useLoaderData() as { essay: import("@/lib/essays").Essay };
  const idx = essays.findIndex((e) => e.slug === essay.slug);
  const next = essays[idx + 1] ?? essays[0];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-2xl px-6 pt-20 pb-16">
          <Link to="/essays" className="text-sm text-ink-soft hover:text-ink-deep underline underline-offset-4">
            ← Essays
          </Link>
          <p className="mt-12 text-xs uppercase tracking-[0.22em] text-ink-soft">
            {essay.date} · {essay.readingTime}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl text-ink-deep">
            {essay.title}
          </h1>
          <p className="mt-6 text-xl text-ink-soft italic leading-relaxed">{essay.dek}</p>

          <div className="mt-12 prose-essay space-y-7">
            {essay.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-ink-deep" : ""}
              >
                {p}
              </p>
            ))}
          </div>
        </article>

        <div className="mx-auto max-w-2xl px-6 pb-24">
          <hr className="rule-hairline" />
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-soft">Read next</p>
            <Link
              to="/essays/$slug"
              params={{ slug: next.slug }}
              className="mt-3 block font-display text-2xl text-ink-deep hover:underline underline-offset-4 decoration-1"
            >
              {next.title}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
