import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Instagram, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import dishBurrata from "@/assets/dish-burrata.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import storyChef from "@/assets/story-chef.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryDrink from "@/assets/gallery-drink.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
];

const DISHES = [
  {
    img: dishOctopus,
    name: "Charred Octopus",
    desc: "Romesco, citrus lace, chili oil",
    price: "24",
  },
  {
    img: dishBurrata,
    name: "Sun-Gold Burrata",
    desc: "Heirloom tomato, basil, sourdough crumble",
    price: "18",
  },
  {
    img: dishPasta,
    name: "Wild Mushroom Pappardelle",
    desc: "Foraged mushrooms, aged parmesan, thyme",
    price: "26",
  },
  {
    img: dishPizza,
    name: "Margherita di Bufala",
    desc: "San Marzano, buffalo mozzarella, wood fire",
    price: "22",
  },
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
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20">
      {/* Skip link for a11y */}
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
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8"
        >
          <a
            href="#top"
            className="font-display text-2xl uppercase tracking-tight text-primary sm:text-3xl"
          >
            Clementine
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a href="#reserve" className="btn-primary text-sm">
              Book a Table
            </a>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/15 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`md:hidden ${open ? "block" : "hidden"} border-t border-border bg-background`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-lg font-semibold text-foreground hover:bg-primary/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book a Table
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative px-5 pb-16 pt-8 sm:px-8 sm:pt-16 lg:pt-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:text-left">
            <div className="animate-fade-up max-w-xl">
              <span className="inline-block rounded-full bg-secondary/40 px-4 py-1 font-mono text-xs uppercase tracking-widest text-brand-ink/70">
                Silver Lake · Est. 2019
              </span>
              <h1 className="mt-5 font-display text-[13vw] uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-8xl">
                Bright Flavors,
                <br />
                <span className="text-primary">Wild Hearts.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                Seasonal California soul served in a sun-drenched garden.
                Fresh, punchy, and unpretentious.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start sm:justify-center">
                <a href="#reserve" className="btn-primary">
                  Book a Table
                </a>
                <a href="#menu" className="btn-secondary">
                  View Menu
                </a>
              </div>
            </div>
            <div className="mt-12 w-full animate-fade-up lg:mt-0" style={{ animationDelay: "150ms" }}>
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                <img
                  src={heroImg}
                  alt="Colorful Mediterranean small plates on marble"
                  width={1280}
                  height={960}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between gap-4 sm:mb-14">
              <div className="min-w-0">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  [ Seasonal ]
                </span>
                <h2 className="mt-2 font-display text-4xl uppercase tracking-tight sm:text-5xl">
                  The Stars
                </h2>
              </div>
              <a
                href="#reserve"
                className="hidden shrink-0 items-center gap-1 text-sm font-semibold uppercase tracking-widest text-primary hover:underline sm:inline-flex"
              >
                Full menu <ArrowRight size={16} />
              </a>
            </div>

            <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10">
              {DISHES.map((d, i) => (
                <li
                  key={d.name}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="overflow-hidden rounded-2xl bg-stone-100">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={800}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold sm:text-xl">{d.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
                    </div>
                    <span className="shrink-0 font-mono text-lg font-bold text-primary">
                      ${d.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="bg-secondary/25 px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={storyChef}
                  alt="Chef in the Clementine kitchen"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 max-w-lg lg:order-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Our Philosophy
              </span>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
                From the earth, to the table.
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
                We believe in ingredients that speak for themselves. No fuss,
                just the honest glow of California produce and the warmth of
                a shared meal. Our menu changes with the season and whatever
                showed up beautiful at the market that morning.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <Stat n="12" label="Farms" />
                <Stat n="6" label="Years" />
                <Stat n="1" label="Wood oven" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section aria-label="Gallery" className="px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { src: galleryInterior, alt: "Sun-drenched dining room" },
              { src: dishPizza, alt: "Wood-fired pizza" },
              { src: galleryDrink, alt: "Citrus cocktail at the bar" },
              { src: dishBurrata, alt: "Burrata plate" },
            ].map((g) => (
              <div key={g.alt} className="overflow-hidden rounded-2xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Visit / Reserve */}
        <section id="visit" className="bg-brand-ink px-5 py-20 text-brand-cream sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-secondary">
                Visit Us
              </span>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-tight sm:text-5xl">
                Find Us
              </h2>
              <dl className="mt-8 space-y-6 text-base sm:text-lg">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-secondary" size={22} />
                  <div className="min-w-0">
                    <dt className="font-mono text-xs uppercase tracking-widest text-brand-cream/60">
                      Address
                    </dt>
                    <dd className="mt-1 font-medium">
                      1208 Clementine Way
                      <br />
                      Silver Lake, CA 90026
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-secondary" size={22} />
                  <div className="min-w-0">
                    <dt className="font-mono text-xs uppercase tracking-widest text-brand-cream/60">
                      Hours
                    </dt>
                    <dd className="mt-1 space-y-1">
                      <div className="flex justify-between gap-6">
                        <span>Tue – Thu</span>
                        <span className="font-mono">5 – 10 pm</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Fri – Sat</span>
                        <span className="font-mono">5 – 11 pm</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Sun brunch</span>
                        <span className="font-mono">10 – 3 pm</span>
                      </div>
                      <div className="flex justify-between gap-6 text-brand-cream/60">
                        <span>Monday</span>
                        <span>Closed</span>
                      </div>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-secondary" size={22} />
                  <div className="min-w-0">
                    <dt className="font-mono text-xs uppercase tracking-widest text-brand-cream/60">
                      Reservations
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="tel:+13235550129"
                        className="font-medium underline underline-offset-4 hover:text-secondary"
                      >
                        (323) 555-0129
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <form
              id="reserve"
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl bg-brand-cream p-6 text-brand-ink shadow-xl sm:p-8"
            >
              <h3 className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
                Reserve a Table
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll confirm by text within the hour.
              </p>
              <div className="mt-6 grid gap-4">
                <Field label="Name" id="r-name" type="text" autoComplete="name" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Date" id="r-date" type="date" />
                  <Field label="Time" id="r-time" type="time" />
                </div>
                <Field label="Party size" id="r-guests" type="number" min={1} max={12} defaultValue={2} />
                <Field label="Phone" id="r-phone" type="tel" autoComplete="tel" />
                <button type="submit" className="btn-primary mt-2 w-full">
                  Request Reservation
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="border-t border-border bg-background px-5 py-12 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <span className="font-display text-2xl uppercase tracking-tight text-primary">
              Clementine
            </span>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-foreground/70 hover:text-primary"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="mailto:hello@clementine.co"
                className="min-h-11 text-foreground/70 hover:text-primary"
              >
                hello@clementine.co
              </a>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              © 2026 Clementine Hospitality
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="font-display text-3xl text-primary sm:text-4xl">{n}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
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
        className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className={`h-12 w-full rounded-xl border border-border bg-white px-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20 ${className ?? ""}`}
      />
    </div>
  );
}
