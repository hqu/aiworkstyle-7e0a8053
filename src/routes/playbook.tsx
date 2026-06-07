import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "Playbook — AI Workstyle" },
      { name: "description", content: "Practical recipes for using AI in daily work. Short, specific, copy-paste ready." },
      { property: "og:title", content: "Playbook — AI Workstyle" },
      { property: "og:description", content: "Practical AI recipes for daily work." },
    ],
  }),
  component: Playbook,
});

const recipes = [
  {
    n: "01",
    title: "Match my voice in email",
    when: "When you write the same kind of email over and over.",
    how: "Paste 3 real emails you've sent. One line: 'Here is how I write. Match this.' Then ask for drafts.",
  },
  {
    n: "02",
    title: "Turn a messy meeting into a one-pager",
    when: "After a call where ten things got decided and nobody took notes.",
    how: "Paste the transcript. Ask for: decisions, owners, deadlines, open questions. In that order.",
  },
  {
    n: "03",
    title: "Pressure-test an idea before the meeting",
    when: "Before pitching something you're nervous about.",
    how: "Describe the idea, then ask: 'Argue against this. What would a skeptical VP say?' Edit accordingly.",
  },
  {
    n: "04",
    title: "Draft a polite no",
    when: "When you need to decline without burning the relationship.",
    how: "Give it the ask, the reason, and the relationship. Ask for three versions: warm, brief, formal.",
  },
  {
    n: "05",
    title: "Learn a new tool in 20 minutes",
    when: "When a new app, library, or feature lands on your plate.",
    how: "Ask it to teach you in three steps, with one exercise after each. Then actually do the exercises.",
  },
  {
    n: "06",
    title: "Read a long document, fast",
    when: "PDF, RFP, contract, research paper.",
    how: "Paste it. Ask for: the argument in two sentences, the three things that matter most, the one thing easy to miss.",
  },
];

function Playbook() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-24 w-full">
        <p className="text-sm uppercase tracking-[0.22em] text-ink-soft mb-6">Playbook</p>
        <h1 className="font-display text-5xl sm:text-6xl text-ink-deep">
          Recipes you can use this afternoon.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink">
          Short, specific, and tested. Each one is a single workflow you can try once and decide if it earns a permanent spot.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {recipes.map((r) => (
            <article key={r.n} className="border-t border-ink-deep pt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">№{r.n}</p>
              <h2 className="mt-3 font-display text-2xl text-ink-deep">{r.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-wider text-ink-soft">When</p>
              <p className="text-ink">{r.when}</p>
              <p className="mt-3 text-sm uppercase tracking-wider text-ink-soft">How</p>
              <p className="text-ink">{r.how}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
