import { useEffect, useRef, useState } from "react";
import { chapters } from "@/data/store";

export function Chapter() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    const update = () => {
      const node = ref.current;
      if (!node) return;
      const total = node.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(-node.getBoundingClientRect().top, 0), Math.max(total, 1));
      setProgress(total > 0 ? passed / total : 0);
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
  }, [reduce]);

  const index = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;

  if (reduce) {
    return (
      <section className="border-y border-line bg-ink-soft" aria-label="What we keep">
        {chapters.map((chapter) => (
          <article key={chapter.kicker} className="relative min-h-[70svh] overflow-hidden">
            <img src={chapter.image} alt={chapter.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="hero-shade absolute inset-0" />
            <div className="relative flex min-h-[70svh] flex-col justify-end px-4 py-16">
              <p className="text-xs tracking-[0.22em] text-ember uppercase">{chapter.kicker}</p>
              <h2 className="font-display text-chapter mt-3 max-w-3xl text-ivory">{chapter.title}</h2>
            </div>
          </article>
        ))}
      </section>
    );
  }

  return (
    <section ref={ref} className="chapter relative border-y border-line" aria-label="What we keep">
      <div className="sticky top-0 flex h-svh items-end overflow-hidden">
        {chapters.map((chapter, slide) => (
          <img
            key={chapter.kicker}
            src={chapter.image}
            alt={slide === index ? chapter.alt : ""}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              slide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="hero-shade absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16">
          <p className="text-xs tracking-[0.22em] text-ember uppercase">{chapters[index]?.kicker}</p>
          <h2 className="font-display text-chapter mt-3 max-w-3xl text-ivory">{chapters[index]?.title}</h2>
          <div className="mt-8 h-px w-40 bg-line">
            <div className="h-px origin-left bg-ember" style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
