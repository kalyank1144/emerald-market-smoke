import { addressLine, directionsHref, store } from "@/data/store";

export function Footer() {
  return (
    <>
      <footer className="border-t border-line bg-ink pb-20 md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl text-ivory">{store.name}</p>
            <p className="mt-3 max-w-sm text-sm text-mist">{store.tagline} A showcase for adults 21 and over.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.22em] text-ember uppercase">Visit</p>
            <p className="mt-3 text-sm text-ivory">{addressLine()}</p>
            <a href={store.phoneHref} className="mt-2 block text-sm text-ivory">
              {store.phoneDisplay}
            </a>
            <a href={`mailto:${store.email}`} className="mt-1 block text-sm text-mist">
              {store.email}
            </a>
            <a href={directionsHref()} className="mt-3 inline-block text-sm text-ember">
              Open map
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.22em] text-ember uppercase">Hours</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory">
              {store.hours.map((slot) => (
                <li key={slot.days}>
                  <span className="block text-mist">{slot.days}</span>
                  {slot.time}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs tracking-[0.22em] text-ember uppercase">Social</p>
            <ul className="mt-3 flex gap-4 text-sm">
              {store.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="text-ivory" rel="noreferrer" target="_blank">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-line px-4 py-4 text-center text-xs text-mist">
          21+ only. Product photos are stand-ins. Prices are samples and can change at the counter.
        </p>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-ink/92 backdrop-blur md:hidden">
        <a href={store.phoneHref} className="flex-1 py-4 text-center text-sm font-medium text-ivory">
          Call
        </a>
        <a
          href={directionsHref()}
          className="flex-1 border-l border-line py-4 text-center text-sm font-medium text-ember"
        >
          Directions
        </a>
      </div>
    </>
  );
}
