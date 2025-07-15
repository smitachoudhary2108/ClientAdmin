"use client";
import { Briefcase, Layers, Globe2, Smile } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase size={32} className="text-[hsl(var(--primary))]" />,
    title: "Decades of Experience",
    desc: "With years of dedication in the industry, we deliver proven expertise across diverse domains."
  },
  {
    icon: <Layers size={32} className="text-[hsl(var(--primary))]" />,
    title: "Comprehensive Services",
    desc: "From idea to execution and beyond, our end-to-end approach drives success for every client."
  },
  {
    icon: <Globe2 size={32} className="text-[hsl(var(--primary))]" />,
    title: "Global Impact",
    desc: "Empowering businesses worldwide with scalable, future-ready technology and creative solutions."
  },
  {
    icon: <Smile size={32} className="text-[hsl(var(--primary))]" />,
    title: "Client-Centric",
    desc: "We listen, adapt, and grow alongside you—your vision is our mission."
  }
];

// You can replace this Unsplash image with your own asset for production use
const aboutImg =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80";

export default function AboutUsSection() {
  return (
    <section
      className="w-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-20 px-4 md:px-0"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="w-full relative group overflow-hidden min-h-[320px] rounded-2xl shadow-xl border bg-[hsl(var(--card))]">
          <img
            src={aboutImg}
            alt="About us"
            className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
            style={{ borderRadius: "1rem", minHeight: "320px", maxHeight: "400px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/80%)] via-transparent to-transparent" />
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--primary))] mb-3">About Us</h2>
          <div className="h-1 w-20 bg-[hsl(var(--primary))] rounded-full mb-6" />
          <p className="mb-8 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
            We are a team of passionate professionals committed to unleashing creative potential and driving real results.
            Our mission is to provide robust, user-focused solutions that empower businesses to succeed in today&apos;s dynamic digital world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-lg bg-[hsl(var(--card))] border shadow-sm 
                  hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="flex-shrink-0 bg-[hsl(var(--primary)/0.12)] rounded-full w-12 h-12 flex items-center justify-center"
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
