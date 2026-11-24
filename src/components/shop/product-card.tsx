import { categoryName, type Product } from "@/data/store";

type ProductCardProps = {
  product: Product;
  onOpen: (product: Product) => void;
};

export function ProductCard({ product, onOpen }: ProductCardProps) {
  const ask = product.price.toLowerCase().startsWith("ask");

  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      className="press group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-card border border-line bg-panel text-left transition-colors duration-300 hover:border-ember/70"
    >
      <span className="relative block aspect-square overflow-hidden bg-ink-soft">
        <img src={product.image} alt="" className="card-photo h-full w-full object-cover" />
      </span>
      <span className="flex flex-1 flex-col gap-2 px-4 py-4">
        <span className="text-xs tracking-widest text-ember uppercase">{categoryName(product.category)}</span>
        <span className="font-display text-2xl leading-none text-ivory">{product.name}</span>
        <span className="text-sm text-mist">{product.blurb}</span>
        <span className={`mt-auto pt-3 text-sm ${ask ? "font-display text-lg italic text-ivory" : "font-medium text-ember"}`}>
          {product.price}
        </span>
      </span>
    </button>
  );
}
