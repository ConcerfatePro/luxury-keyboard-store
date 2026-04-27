import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/products";

export default function ShopSection({ onAddToCart }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const catOk = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const searchOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.switchType.toLowerCase().includes(q) ||
        p.caseMaterial.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [category, query]);

  return (
    <section id="shop" className="scroll-mt-20 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 border-l-4 border-amber-500 pl-5 sm:pl-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Catalog</h2>
          <p className="max-w-xl font-mono text-xs uppercase tracking-wider text-zinc-500">
            Filter layouts · search by switch or case copy — mock inventory only
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-zinc-800 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-x-1 gap-y-2 border-b border-zinc-800 pb-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`relative px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition ${
                  category === c ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {c}
                {category === c && <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-amber-500" />}
              </button>
            ))}
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="QUERY_SKU_OR_SWITCH"
              className="w-full border border-zinc-700 bg-zinc-900 py-2.5 pl-3 pr-3 font-mono text-xs text-white placeholder-zinc-600 outline-none transition focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/40"
            />
          </label>
        </div>

        <div className="mt-12 grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col border-l-4 border-transparent bg-zinc-900 transition hover:border-amber-500 hover:bg-zinc-900/80"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.accent} p-5 transition duration-500 group-hover:brightness-110`}>
                <span className="inline-block border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-100">
                  {p.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex gap-px opacity-90">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className="h-5 flex-1 bg-zinc-950/70" />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-zinc-800 p-5">
                <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Switch</p>
                <p className="text-sm text-zinc-300">{p.switchType}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Case</p>
                <p className="text-sm text-zinc-300">{p.caseMaterial}</p>
                <div className="mt-5 flex items-center justify-between border-t border-dashed border-zinc-700 pt-4">
                  <p className="font-mono text-lg font-bold text-amber-400">${p.price}</p>
                  <button
                    type="button"
                    onClick={() => onAddToCart()}
                    className="border border-blue-500/80 bg-blue-600 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-blue-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-8 text-center font-mono text-xs text-zinc-500">No matches — widen filters.</p>
        )}
      </div>
    </section>
  );
}
