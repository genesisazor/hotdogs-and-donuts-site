import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/hotdogs-donuts-lockup.png";
import patternTile from "@/assets/pattern-tile.jpg";
import itemClassic from "@/assets/item-classic-dog.jpg";
import itemChili from "@/assets/item-chili-dog.jpg";
import itemSprinkle from "@/assets/item-sprinkle-donut.jpg";
import itemChoco from "@/assets/item-choco-donut.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Dogs & Donuts | Snack Shop" },
      { name: "description", content: "Classic dogs, chili cheese dogs, and hand-glazed donuts made fresh every day at Hot Dogs & Donuts." },
      { property: "og:title", content: "Hot Dogs & Donuts | Snack Shop" },
      { property: "og:description", content: "Classic dogs, chili cheese dogs, and hand-glazed donuts made fresh every day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
];

const ITEMS = [
  { img: itemClassic, name: "Classic Dog", desc: "All-beef, snappy bun, yellow mustard zigzag", price: "6", tint: "bg-brand-orange/15" },
  { img: itemChili, name: "Chili Cheese Dog", desc: "House chili, molten cheddar, crispy onions", price: "8", tint: "bg-brand-primary/15" },
  { img: itemSprinkle, name: "Sprinkle Party", desc: "Vanilla glaze, rainbow sprinkles, pure joy", price: "4", tint: "bg-brand-pink/15" },
  { img: itemChoco, name: "Choco Glaze", desc: "Belgian chocolate glaze, brioche dough", price: "4", tint: "bg-brand-secondary/25" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/25">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Sticky nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b-2 border-brand-ink bg-background/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8"
        >
          <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-xl font-bold tracking-tight text-brand-ink sm:text-2xl">
            <span className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-brand-ink bg-brand-primary text-brand-cream">
              🌭
            </span>
            <span className="truncate">
              Hot Dogs <span className="text-brand-pink">&amp;</span> Donuts
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-bold uppercase tracking-widest text-brand-ink/80 transition-colors hover:text-brand-primary"
              >
                {n.label}
              </a>
            ))}
            <a href="#order" className="btn-primary text-sm">
              Order Pickup
            </a>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand-ink bg-brand-cream text-brand-ink transition-colors hover:bg-brand-secondary/30 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div
          id="mobile-menu"
          className={`md:hidden ${open ? "block" : "hidden"} border-t-2 border-brand-ink bg-background`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-lg font-bold text-brand-ink hover:bg-brand-secondary/25"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Order Pickup
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section
          id="top"
          className="relative px-4 pb-16 pt-6 sm:px-8 sm:pt-12"
        >
          <div
            className="card-outline relative mx-auto max-w-6xl overflow-hidden px-5 py-12 sm:px-10 sm:py-16 lg:py-24"
            style={{
              backgroundImage: `url(${patternTile})`,
              backgroundSize: "320px auto",
              backgroundRepeat: "repeat",
              backgroundColor: "var(--brand-mustard)",
            }}
          >
            {/* Light wash retains the pattern while keeping the foreground legible */}
            <div className="pointer-events-none absolute inset-0 bg-brand-mustard/35" />
            <div className="relative animate-fade-up mx-auto flex max-w-2xl flex-col items-center text-center">
              <img
                src={logo}
                alt="Hot Dogs & Donuts logo"
                width={975}
                height={235}
                fetchPriority="high"
                className="w-full max-w-[520px]"
              />
              <p className="mt-6 max-w-md rounded-2xl border-2 border-brand-ink bg-brand-cream px-4 py-3 text-pretty text-base font-semibold leading-relaxed text-brand-ink sm:px-6 sm:py-4 sm:text-lg">
                A chunky little snack shop serving classic dogs, chili cheese dogs, and hand-glazed donuts, made fresh every single day.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#order" className="btn-primary">
                  Order Pickup
                </a>
                <a href="#menu" className="btn-secondary">
                  See the Menu
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-brand-ink/70">
                <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Open Today</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={14} /> 11am – 10pm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between gap-4 sm:mb-14">
              <div className="min-w-0">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-pink">
                  [ Snack Menu ]
                </span>
                <h2 className="mt-2 font-display text-4xl font-bold leading-none tracking-tight text-brand-ink sm:text-6xl">
                  The <span className="text-brand-primary">Hits</span>.
                </h2>
              </div>
              <a
                href="#order"
                className="hidden shrink-0 items-center gap-1 text-sm font-bold uppercase tracking-widest text-brand-primary hover:underline sm:inline-flex"
              >
                Order now <ArrowRight size={16} />
              </a>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {ITEMS.map((d, i) => (
                <li
                  key={d.name}
                  className="animate-fade-up card-outline group flex flex-col overflow-hidden"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className={`overflow-hidden border-b-2 border-brand-ink ${d.tint}`}>
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={800}
                      className="aspect-square w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-3 p-4 sm:p-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-brand-ink sm:text-xl">{d.name}</h3>
                      <p className="mt-1 text-sm font-medium text-brand-ink/70">{d.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-full border-2 border-brand-ink bg-brand-secondary px-2.5 py-1 font-display text-sm font-bold text-brand-ink">
                      ${d.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Story */}
        <section
          id="story"
          className="relative px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <div
                className="card-outline aspect-square w-full overflow-hidden"
                style={{
                  backgroundImage: `url(${patternTile})`,
                  backgroundSize: "220px auto",
                }}
              >
                <div className="flex h-full w-full items-center justify-center bg-brand-pink/25 p-8 text-8xl sm:text-9xl">
                  🌭
                </div>
              </div>
            </div>
            <div className="max-w-lg lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">
                Since 2019
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-tight text-brand-ink sm:text-6xl">
                Two treats. <br />
                <span className="text-brand-pink">One tiny counter.</span>
              </h2>
              <p className="mt-5 text-pretty text-base font-medium leading-relaxed text-brand-ink/80 sm:text-lg">
                We fell in love with the corner snack stands of our childhoods, the smell of a griddle, a warm glazed donut in wax paper. So we opened one. No fuss, just the two things we love most, made carefully every day.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center sm:gap-4">
                <Stat n="24" label="Dog styles" />
                <Stat n="12" label="Donut flavors" />
                <Stat n="1" label="Tiny counter" />
              </div>
            </div>
          </div>
        </section>

        {/* Visit + Order */}
        <section
          id="visit"
          className="relative px-5 py-20 text-brand-cream sm:px-8 sm:py-24"
          style={{ backgroundColor: "var(--brand-ink)" }}
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-secondary">
                Come Say Hi
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-tight sm:text-6xl">
                Find <span className="text-brand-orange">the counter</span>.
              </h2>
              <dl className="mt-8 space-y-6 text-base sm:text-lg">
                <Info icon={<MapPin size={22} />} label="Address">
                  1208 Sprinkle Lane
                  <br />
                  Los Angeles, CA 90026
                </Info>
                <Info icon={<Clock size={22} />} label="Hours">
                  <div className="space-y-1">
                    <Row l="Mon – Thu" r="11 – 10 pm" />
                    <Row l="Fri – Sat" r="11 – 12 am" />
                    <Row l="Sunday" r="10 – 8 pm" />
                  </div>
                </Info>
                <Info icon={<Phone size={22} />} label="Pickup">
                  <a href="tel:+13235550129" className="underline underline-offset-4 hover:text-brand-orange">
                    (323) 555-0129
                  </a>
                </Info>
              </dl>
            </div>

            <form
              id="order"
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border-2 border-brand-cream/20 bg-brand-cream p-6 text-brand-ink shadow-[0_8px_0_0_rgba(0,0,0,0.35)] sm:p-8"
            >
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Order for Pickup
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-ink/70">
                We'll text you when it's ready, usually under 15 minutes.
              </p>
              <div className="mt-6 grid gap-4">
                <Field label="Name" id="r-name" type="text" autoComplete="name" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Pickup date" id="r-date" type="date" />
                  <Field label="Pickup time" id="r-time" type="time" />
                </div>
                <Field label="How many treats?" id="r-count" type="number" min={1} max={24} defaultValue={2} />
                <Field label="Phone" id="r-phone" type="tel" autoComplete="tel" />
                <button type="submit" className="btn-primary mt-2 w-full">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="border-t-2 border-brand-ink bg-background px-5 py-12 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <span className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
              Hot Dogs <span className="text-brand-pink">&amp;</span> Donuts
            </span>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-brand-ink px-4 font-bold text-brand-ink hover:bg-brand-pink hover:text-brand-cream"
              >
                <Instagram size={16} /> @hotdogsdonuts
              </a>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-ink/60">
              © 2026 Snack Shop Co.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="card-outline p-4">
      <div className="font-display text-3xl font-bold text-brand-primary sm:text-4xl">{n}</div>
      <div className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-brand-ink/70">
        {label}
      </div>
    </div>
  );
}

function Info({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 shrink-0 text-brand-orange">{icon}</span>
      <div className="min-w-0">
        <dt className="font-mono text-xs uppercase tracking-widest text-brand-cream/60">
          {label}
        </dt>
        <dd className="mt-1 font-semibold">{children}</dd>
      </div>
    </div>
  );
}

function Row({ l, r }: { l: string; r: string }) {
  return (
    <div className="flex justify-between gap-6">
      <span>{l}</span>
      <span className="font-mono text-brand-cream/80">{r}</span>
    </div>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

function Field({ label, id, className, ...rest }: FieldProps) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink/70"
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className={`h-12 w-full rounded-xl border-2 border-brand-ink/80 bg-white px-4 text-base font-semibold text-brand-ink outline-none transition focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/25 ${className ?? ""}`}
      />
    </div>
  );
}