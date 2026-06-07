import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-ink-deep/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-2xl text-ink-deep tracking-tight">
          aiworkstyle
        </Link>
        <nav className="flex items-center gap-7 text-sm text-ink">
          <Link to="/essays" className="hover:text-ink-deep [&.active]:text-ink-deep [&.active]:underline underline-offset-4">
            Essays
          </Link>
          <Link to="/playbook" className="hover:text-ink-deep [&.active]:text-ink-deep [&.active]:underline underline-offset-4">
            Playbook
          </Link>
          <Link to="/about" className="hover:text-ink-deep [&.active]:text-ink-deep [&.active]:underline underline-offset-4">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
