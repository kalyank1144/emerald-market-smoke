import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { store } from "@/data/store";

const links = [
  { href: "#featured", label: "Featured" },
  { href: "#shop", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Hours" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const menu =
    open && mounted
      ? createPortal(
          <nav
            id="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col bg-ink px-6 pt-6 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-ivory">{store.name}</span>
              <button
                type="button"
                className="press grid size-11 place-items-center rounded-full border border-line text-ivory"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 font-display text-4xl text-ivory"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="press mt-8 rounded-full bg-ember px-5 py-4 text-center text-base font-medium text-ink"
              >
                Hours & location
              </a>
            </div>
          </nav>,
          document.body,
        )
      : null;

  return (
    <div className="sticky top-0 z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <p className="bg-ink-soft px-4 py-2 text-center text-xs tracking-wide text-mist">{store.ageNote}</p>
      <header
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-line bg-ink/90 backdrop-blur-md" : "border-transparent bg-ink/45 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="#top" className="flex items-center gap-3 text-ivory">
            <span className="mark" aria-hidden />
            <span className="font-display text-xl font-medium tracking-tight">{store.name}</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-mist transition-colors hover:text-ivory">
                {link.label}
              </a>
            ))}
            <a href="#visit" className="press rounded-full bg-ember px-4 py-2 text-sm font-medium text-ink">
              Visit
            </a>
          </nav>
          <button
            type="button"
            className="press grid size-11 place-items-center rounded-full border border-line text-ivory md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>
      {menu}
    </div>
  );
}
