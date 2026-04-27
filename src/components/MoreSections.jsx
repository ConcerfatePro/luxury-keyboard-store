import { useState } from "react";

const faqItems = [
  {
    q: "Is this a real store?",
    a: "No. Aurum Keys is a fictional brand for a frontend-only portfolio demo. Nothing here connects to inventory or payments.",
  },
  {
    q: "Do you ship internationally?",
    a: "In a real build, you would wire this to your logistics policy. For this mock, pretend we ship worldwide with tracked courier.",
  },
  {
    q: "Can I customize switches?",
    a: "The product grid demonstrates how a configurator could surface switch and case metadata. A live site would add a builder flow.",
  },
];

export default function MoreSections() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section id="features" className="scroll-mt-20 border-y border-zinc-800 bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500">Atelier pillars</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Why collectors ask for Aurum by name</h2>
          </div>
          <ol className="mt-12 grid gap-0 md:grid-cols-3">
            {[
              {
                title: "CNC & finish",
                body: "Every case line in the catalog is placeholder spec — in production you would publish alloy certs and QC photos.",
                n: "01",
              },
              {
                title: "Switch curation",
                body: "Fictional switch families let you demo filters without implying real manufacturer partnerships.",
                n: "02",
              },
              {
                title: "Concierge tuning",
                body: "Stabs, foam, and plate swaps become upsell lines. Here it is narrative only for layout.",
                n: "03",
              },
            ].map((f) => (
              <li key={f.title} className="border-t border-zinc-800 py-8 md:border-l md:border-t-0 md:border-zinc-800 md:px-6 md:py-6">
                <span className="font-mono text-4xl font-bold text-zinc-800">{f.n}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-zinc-700 bg-zinc-900 p-8 font-mono text-xs text-zinc-300">
              <div className="flex items-center justify-between border-b border-dashed border-zinc-600 pb-3 text-[10px] uppercase tracking-widest text-zinc-500">
                <span>Receipt_preview.txt</span>
                <span>VOID</span>
              </div>
              <h2 className="mt-6 font-display text-xl font-bold text-white">Bag (mock)</h2>
              <p className="mt-2 text-[11px] leading-relaxed text-zinc-500">
                No checkout — navbar count is the only cart state in this demo.
              </p>
              <ul className="mt-6 space-y-2">
                {["Aurum TKL Obsidian", "PBT keycap set (demo)"].map((line) => (
                  <li key={line} className="flex justify-between border-b border-zinc-800 py-2 text-[11px]">
                    <span className="text-zinc-200">{line}</span>
                    <span className="text-amber-400/90">—</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between border-t border-zinc-700 pt-4 text-[11px]">
                <span className="text-zinc-500">SUBTOTAL</span>
                <span className="font-bold text-white">$858.00</span>
              </div>
              <button
                type="button"
                className="mt-6 w-full border border-zinc-600 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-amber-500/60 hover:text-white"
              >
                Checkout disabled
              </button>
            </div>

            <div id="reviews" className="scroll-mt-20 border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500/90">Patrons</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">Field notes</h2>
              <div className="mt-8 space-y-8">
                {[
                  {
                    quote: "Reads like a micro-brand drop sheet — typography sells the price point without a single photo.",
                    who: "Jordan K. — fictional buyer",
                  },
                  {
                    quote: "The monospace receipt + spec column feels bespoke. Easy to pitch as a luxury commerce slice.",
                    who: "Samira L. — demo persona",
                  },
                ].map((t) => (
                  <blockquote key={t.who} className="border-l-2 border-blue-500/70 pl-5">
                    <p className="text-sm italic leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">{t.who}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-zinc-800 bg-zinc-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">FAQ</h2>
          <div className="mt-8 divide-y divide-zinc-800 border border-zinc-800">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-900"
                  >
                    {item.q}
                    <span className={`text-amber-500 transition ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && <p className="border-t border-zinc-800 px-4 py-4 text-sm leading-relaxed text-zinc-400">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[0.15em] text-white">Aurum Keys</p>
            <p className="mt-2 max-w-sm font-mono text-[10px] uppercase leading-relaxed text-zinc-600">
              Fictional atelier — not affiliated with any real manufacturer.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            © {new Date().getFullYear()} portfolio mock
          </p>
        </div>
      </footer>
    </>
  );
}
