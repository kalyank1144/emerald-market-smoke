import { useEffect, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import {
  addressLine,
  directionsHref,
  mapEmbedSrc,
  store,
  todayRow,
} from "@/data/store";
import { Reveal } from "@/components/shop/reveal";

export function Visit() {
  const [row, setRow] = useState<string | null>(null);

  useEffect(() => {
    setRow(todayRow());
  }, []);

  return (
    <section id="about" className="border-t border-line bg-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-ember uppercase">The shop</p>
          <h2 className="font-display mt-3 text-4xl text-ivory md:text-5xl">About the counter</h2>
          <div className="mt-6 space-y-4 text-sm text-mist">
            {store.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <img
            src="/images/shelves.jpg"
            alt="Glass pieces on dark wood shelves under warm light"
            className="mt-8 aspect-3/2 w-full rounded-card object-cover"
            width={1728}
            height={1152}
          />
        </Reveal>

        <div id="visit" className="flex flex-col gap-4">
          <Reveal>
            <article className="rounded-card border border-line bg-panel p-6">
              <div className="flex items-center gap-2 text-ember">
                <Clock className="size-4" />
                <h3 className="text-xs tracking-[0.22em] uppercase">Hours</h3>
              </div>
              <dl className="mt-5">
                {store.hours.map((slot) => {
                  const current = row === slot.days;
                  return (
                    <div
                      key={slot.days}
                      className={`flex items-baseline justify-between gap-4 border-b border-line py-3 text-sm last:border-b-0 ${
                        current ? "text-ivory" : "text-mist"
                      }`}
                    >
                      <dt className="flex items-center gap-2">
                        {current ? <span className="size-1.5 rounded-full bg-ember" aria-hidden /> : null}
                        {slot.days}
                        {current ? <span className="text-xs text-ember">Today</span> : null}
                      </dt>
                      <dd className="font-medium text-ivory">{slot.time}</dd>
                    </div>
                  );
                })}
              </dl>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="overflow-hidden rounded-card border border-line bg-panel">
              <div className="p-6">
                <div className="flex items-center gap-2 text-ember">
                  <MapPin className="size-4" />
                  <h3 className="text-xs tracking-[0.22em] uppercase">Location</h3>
                </div>
                <p className="font-display mt-4 text-3xl text-ivory">{store.address.line1}</p>
                <p className="mt-1 text-sm text-mist">
                  {store.address.city}, {store.address.region} {store.address.postal}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={store.phoneHref}
                    className="press inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-medium text-ink"
                  >
                    <Phone className="size-4" />
                    {store.phoneDisplay}
                  </a>
                  <a
                    href={directionsHref()}
                    className="press inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-ivory"
                  >
                    Directions
                  </a>
                </div>
              </div>
              <iframe
                title={`Map showing ${store.name}`}
                src={mapEmbedSrc()}
                className="map-frame h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="px-6 py-3 text-xs text-mist">{addressLine()}</p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/storefront.jpg"
              alt="The shop front at dusk, window glowing amber"
              className="aspect-video w-full rounded-card object-cover"
              width={1792}
              height={1008}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
