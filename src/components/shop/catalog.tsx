import { useState } from "react";
import { categories, products, productsIn, type CategoryId, type Product } from "@/data/store";
import { ProductCard } from "@/components/shop/product-card";
import { Reveal } from "@/components/shop/reveal";

type CatalogProps = {
  onOpen: (product: Product) => void;
};

type Filter = "all" | CategoryId;

export function Catalog({ onOpen }: CatalogProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? products : productsIn(filter);

  function choose(next: Filter) {
    setFilter(next);
    if (next !== "all") {
      document.getElementById("shelf")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <p className="text-xs tracking-[0.22em] text-ember uppercase">The shelf</p>
        <h2 className="font-display mt-3 text-4xl text-ivory md:text-5xl">Categories</h2>
        <p className="mt-3 max-w-xl text-sm text-mist">
          Six departments. Pick one to narrow the grid. Prices that move week to week say ask in store.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const count = productsIn(category.id).length;
          const active = filter === category.id;
          return (
            <Reveal key={category.id} delay={index * 60}>
              <button
                type="button"
                onClick={() => choose(active ? "all" : category.id)}
                className={`press group relative flex h-48 w-full overflow-hidden rounded-card border text-left ${
                  active ? "border-ember" : "border-line"
                }`}
                aria-pressed={active}
              >
                <img
                  src={category.image}
                  alt=""
                  className="card-photo absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/10" />
                <span className="relative mt-auto flex w-full items-end justify-between gap-3 p-4">
                  <span>
                    <span className="block font-display text-3xl text-ivory">{category.name}</span>
                    <span className="mt-1 block text-sm text-mist">{category.blurb}</span>
                  </span>
                  <span className="shrink-0 text-xs tracking-widest text-ember uppercase">{count}</span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      <div id="shelf" className="mt-14 flex flex-wrap gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterChip>
        {categories.map((category) => (
          <FilterChip
            key={category.id}
            active={filter === category.id}
            onClick={() => setFilter(category.id)}
          >
            {category.name}
          </FilterChip>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`press rounded-full border px-4 py-2 text-sm ${
        active ? "border-ember bg-ember text-ink" : "border-line text-ivory hover:border-ember/60"
      }`}
    >
      {children}
    </button>
  );
}
