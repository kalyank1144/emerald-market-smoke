import { useEffect, useState, type CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { store } from "@/data/store";

export function Hero() {
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    let frame = 0;
    const update = () => {
      const range = Math.max(window.innerHeight, 1);
      setShift(Math.min(1, window.scrollY / range));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const style = { "--shift": String(shift) } as CSSProperties;

  return (
    <section id="top" className="relative min-h-svh overflow-hidden" style={style}>
      <img
        src="/images/hero.jpg"
        alt=""
        className="hero-photo absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="hero-copy relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pt-28 pb-28 md:pb-16">
        <p className="text-xs font-medium tracking-[0.22em] text-ember uppercase">{store.cityLine}</p>
        <h1 className="font-display text-display mt-4 max-w-4xl font-medium text-ivory">{store.name}</h1>
        <p className="mt-5 max-w-xl text-lg text-ivory/90">{store.tagline}</p>
        <p className="mt-3 max-w-xl text-sm text-mist">{store.lede}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#featured" className="press rounded-full bg-ember px-5 py-3 text-sm font-medium text-ink">
            See the shelf
          </a>
          <a
            href="#visit"
            className="press rounded-full border border-ivory/25 px-5 py-3 text-sm font-medium text-ivory"
          >
            Hours & map
          </a>
        </div>
        <a
          href="#featured"
          className="mt-12 inline-flex items-center gap-2 text-xs tracking-widest text-mist uppercase"
        >
          <ArrowDown className="size-4" />
          Scroll
        </a>
      </div>
    </section>
  );
}
