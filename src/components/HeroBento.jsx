/** Aurum hero: editorial + “spec sheet” strips — not a generic bento */
export default function HeroBento() {
  return (
    <section className="relative border-b border-zinc-800 bg-zinc-950">
      <div className="pointer-events-none absolute right-0 top-0 h-[120%] w-1/2 max-w-xl skew-x-[-8deg] bg-gradient-to-b from-amber-500/10 via-transparent to-blue-600/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-amber-500/90">
              Serial · AK-2026-DEMO
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Boards machined like instruments —{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(244,244,245,0.35)" }}>
                voiced
              </span>{" "}
              <span className="bg-gradient-to-r from-amber-300 to-blue-400 bg-clip-text text-transparent">in gold.</span>
            </h1>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-zinc-400 sm:text-base">
              Aurum Keys is our fictional atelier name: obsessive tolerances, fictional switch names, and a cart that only
              exists in the navbar. Built to read like a boutique spec sheet, not a template drop.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                className="inline-flex border border-white bg-white px-8 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-950 transition hover:bg-zinc-200"
              >
                Enter shop
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 underline decoration-amber-500/60 underline-offset-4 transition hover:text-white"
              >
                Read the craft notes →
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="border border-zinc-700 bg-zinc-900/40 p-1">
              <div className="border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 border-b border-dashed border-zinc-700 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Build sheet</p>
                    <p className="mt-1 font-display text-xl font-bold text-white">TKL / Obsidian</p>
                  </div>
                  <span className="border border-amber-500/50 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    In stock (mock)
                  </span>
                </div>
                <dl className="mt-4 space-y-3 font-mono text-[11px] text-zinc-400">
                  {[
                    ["Case", "6061-T6, bead blast"],
                    ["Plate", "FR4, 1.5mm"],
                    ["Mount", "Gasket, 70A"],
                    ["Finish", "PVD blue weight"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                      <dt className="uppercase tracking-wider text-zinc-500">{k}</dt>
                      <dd className="text-right text-zinc-200">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 grid grid-cols-6 gap-0.5 border border-zinc-800 bg-black/30 p-2">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="aspect-square bg-zinc-800" style={{ opacity: 0.35 + (i % 4) * 0.15 }} />
                  ))}
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">Layout preview · CSS only</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 sm:absolute sm:-bottom-6 sm:left-4 sm:right-4 sm:mt-0">
              <div className="min-w-[140px] flex-1 border border-blue-900/50 bg-gradient-to-br from-blue-950/90 to-zinc-950 px-4 py-3">
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-blue-300/80">Keycaps</p>
                <p className="mt-1 font-display text-sm font-semibold text-white">Dune / dusk</p>
              </div>
              <div className="min-w-[140px] flex-1 border border-amber-900/40 bg-gradient-to-br from-amber-950/50 to-zinc-950 px-4 py-3">
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-amber-400/80">Switches</p>
                <p className="mt-1 font-display text-sm font-semibold text-white">Gold glide 45g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
