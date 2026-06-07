import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AI Workstyle" },
      { name: "description", content: "Why AI Workstyle exists, who it's for, and what it refuses to be." },
      { property: "og:title", content: "About — AI Workstyle" },
      { property: "og:description", content: "Why AI Workstyle exists." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-2xl px-6 py-24 w-full">
        <p className="text-sm uppercase tracking-[0.22em] text-ink-soft mb-6">About</p>
        <h1 className="font-display text-5xl sm:text-6xl text-ink-deep">
          A field guide, not a hype machine.
        </h1>

        <div className="prose-essay mt-12 space-y-7">
          <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-ink-deep">
            AI Workstyle exists because most writing about AI is either selling you something or scaring you. Neither is useful when you're sitting at your desk on a Tuesday, trying to get through the week.
          </p>
          <p>
            This site is for curious professionals — people who don't write code for a living, but who suspect the tools have gotten good enough that ignoring them is a quietly expensive choice.
          </p>
          <p>
            The promise is simple: short, honest essays and recipes that pay for the time it takes to read them. If a piece can't help you do something better by Friday, it doesn't run.
          </p>
          <p className="font-display text-2xl text-ink-deep !leading-snug border-l-2 border-ink-deep pl-6 my-10">
            The goal isn't to make you a power user. It's to make AI feel like a normal, useful part of how you already work.
          </p>
          <p>
            No course. No newsletter funnel. No "10x your output" energy. Just the kind of writing a friend would send you, if your friend happened to think about this for a living.
          </p>
        </div>

        <div className="mt-16">
          <Link to="/essays" className="inline-flex items-center gap-2 border-b-2 border-ink-deep pb-1 text-ink-deep font-medium hover:gap-3 transition-all">
            Start with the essays
            <span aria-hidden>→</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
