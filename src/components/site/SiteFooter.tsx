export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-ink-deep/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg text-ink-deep">aiworkstyle</p>
        <p>A field guide to working well with AI. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
