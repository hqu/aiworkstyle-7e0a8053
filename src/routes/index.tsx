import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Workstyle — Coming soon" },
      { name: "description", content: "A new field guide for building AI workstyle skills. Anyone can learn them. Launching soon." },
      { property: "og:title", content: "AI Workstyle — Coming soon" },
      { property: "og:description", content: "Build the AI workstyle skills that win in a competitive job market. Launching soon." },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="mx-auto w-full max-w-4xl px-6 pt-10">
        <p className="font-display text-2xl text-ink-deep tracking-tight">aiworkstyle</p>
      </header>

      <main className="flex-1 mx-auto w-full max-w-3xl px-6 flex items-center">
        <div className="py-24">
          <p className="text-sm uppercase tracking-[0.22em] text-ink-soft mb-10">
            Coming soon
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink-deep leading-[1.05]">
            Anyone can build an
            <span className="italic"> AI workstyle.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg sm:text-xl text-ink leading-relaxed">
            The job market is changing fast. The people who get ahead won't be the most technical — they'll be the ones who learn to work alongside AI with skill and judgment.
          </p>

          <p className="mt-5 max-w-xl text-lg sm:text-xl text-ink leading-relaxed">
            We're building a simple, plain-spoken guide to help you get there. No hype. No jargon. Just the habits and skills that make you stand out.
          </p>

          {submitted ? (
            <p className="mt-12 font-display text-2xl text-ink-deep">
              Thanks — you'll be the first to know.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b-2 border-ink-deep px-1 py-2 text-ink-deep placeholder:text-ink-soft focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-ink-deep text-paper px-6 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="mx-auto w-full max-w-4xl px-6 pb-10 text-sm text-ink-soft">
        © {new Date().getFullYear()} aiworkstyle.com
      </footer>
    </div>
  );
}
