import { products, type Product } from "@/data/store";
import { ProductCard } from "@/components/shop/product-card";
import { Reveal } from "@/components/shop/reveal";

type FeaturedProps = {
  onOpen: (product: Product) => void;
};

export function Featured({ onOpen }: FeaturedProps) {
  const featured = products.filter((product) => product.featured);

  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <p className="text-xs tracking-[0.22em] text-ember uppercase">On the front shelf</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl text-ivory md:text-5xl">Featured</h2>
          <p className="max-w-sm text-sm text-mist">
            Four things we usually have out. Tap a card for the note staff would give you. No cart.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <Reveal key={product.id} delay={index * 80} className="h-full min-w-0">
            <ProductCard product={product} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
