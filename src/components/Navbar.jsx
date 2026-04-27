export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-blue-600" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-amber-500/60 bg-zinc-900 font-mono text-sm font-semibold tracking-tighter text-amber-400 transition group-hover:border-amber-400">
            AK
          </span>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white sm:text-base">Aurum Keys</p>
            <p className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:block">
              Zürich · demo atelier
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-10 font-mono text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 md:flex">
          <a href="#shop" className="border-b border-transparent pb-0.5 transition hover:border-amber-400 hover:text-white">
            Shop
          </a>
          <a href="#features" className="border-b border-transparent pb-0.5 transition hover:border-amber-400 hover:text-white">
            Atelier
          </a>
          <a href="#reviews" className="border-b border-transparent pb-0.5 transition hover:border-amber-400 hover:text-white">
            Patrons
          </a>
          <a href="#faq" className="border-b border-transparent pb-0.5 transition hover:border-amber-400 hover:text-white">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden border border-zinc-600 bg-zinc-900 px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-300 transition hover:border-amber-500/60 hover:text-white sm:inline-block"
          >
            Sign in
          </button>
          <button
            type="button"
            className="relative flex items-center gap-2 border border-amber-500/80 bg-amber-500 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-400"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Bag
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center border border-zinc-950 bg-blue-600 px-1 font-mono text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
