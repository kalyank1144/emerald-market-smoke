import { useState } from "react";
import type { Product } from "@/data/store";
import { Catalog } from "@/components/shop/catalog";
import { Chapter } from "@/components/shop/chapter";
import { Featured } from "@/components/shop/featured";
import { Footer } from "@/components/shop/footer";
import { Header } from "@/components/shop/header";
import { Hero } from "@/components/shop/hero";
import { ProductDialog } from "@/components/shop/product-dialog";
import { Visit } from "@/components/shop/visit";

export function ShopPage() {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <main id="main" className="pb-16 md:pb-0">
        <Hero />
        <Featured onOpen={setProduct} />
        <Chapter />
        <Catalog onOpen={setProduct} />
        <Visit />
      </main>
      <Footer />
      <ProductDialog product={product} onClose={() => setProduct(null)} />
    </>
  );
}
