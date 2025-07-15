 "use client";

import { FC, useEffect, useRef } from "react";
import { Sparkles, ShieldCheck, Users2, TrendingUp } from "lucide-react";

type WhyItem = {
  img: string;
  Icon: FC<{ size?: string | number; className?: string }>;
  title: string;
  desc: string;
};

// Demo images: You can use your own assets or Unsplash/Illustrations
const imgExpert =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=120&h=120&facepad=3&q=80";
const imgSecurity =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=120&h=120&facepad=3&q=80";
const imgResults =
  "https://images.unsplash.com/photo-1519340333755-c2c5a3f49e4b?auto=format&fit=facearea&w=120&h=120&facepad=3&q=80";
const imgClient =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=120&h=120&facepad=3&q=80";

const items: WhyItem[] = [
  {
    img: imgExpert,
    Icon: Sparkles,
    title: "Expert Solutions",
    desc: "Our experienced team provides innovative, industry-leading solutions tailored to your needs."
  },
  {
    img: imgSecurity,
    Icon: ShieldCheck,
    title: "Trust & Security",
    desc: "Your data and privacy are protected with us. Security is at the core of all our operations."
  },
  {
    img: imgResults,
    Icon: TrendingUp,
    title: "Proven Results",
    desc: "Years of successful project deliveries and 100+ satisfied clients across industries."
  },
  {
    img: imgClient,
    Icon: Users2,
    title: "Customer First",
    desc: "We listen, understand, and evolve with our clients to ensure long-term partnerships."
  }
];

// Animated scroll-reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-8");
    function onScroll() {
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 64) {
        el.classList.remove("opacity-0", "translate-y-8");
        el.classList.add("opacity-100", "translate-y-0");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

export default function WhyChooseUsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]
        opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionProperty: "opacity,transform" }}
      id="why-choose-us"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[hsl(var(--primary))]">
          Why Choose Us?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-center text-[hsl(var(--muted-foreground))]">
          Our team is committed to delivering more than just solutions&mdash;we&apos;re here to empower your growth and long-term success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ Icon, img, title, desc }, idx) => (
            <div
              key={title}
              className="group bg-[hsl(var(--card))] border rounded-xl shadow-md px-6 py-8 flex flex-col items-center text-center
                transition-transform duration-400 hover:scale-105 hover:shadow-xl hover:border-[hsl(var(--primary))]
                cursor-pointer"
              style={{
                transitionProperty: "transform,box-shadow,border-color",
              }}
            >
              {/* --- Circle Image with fallback Icon --- */}
              <div className="w-20 h-20 rounded-full border-2 border-[hsl(var(--primary))] shadow mb-3 flex items-center justify-center bg-white overflow-hidden relative">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Icon fallback if image fails */}
                <Icon
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[hsl(var(--primary))] opacity-40"
                  size={40}
                />
              </div>
              {/* --- Title & Desc --- */}
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
