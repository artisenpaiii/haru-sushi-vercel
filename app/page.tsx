import Link from "next/link";
import { metaOpeningHours } from "@/lib/mock-data";
import { OrderButton } from "@/components/OrderButton";

const highlights = [
  { icon: "🍣", title: "Färsk Sushi", text: "Lagad med kärlek och riktiga råvaror, varje dag." },
  { icon: "🌿", title: "Veganskt", text: "Stort utbud av veganska alternativ genom hela menyn." },
  { icon: "🥡", title: "Hämta & Njut", text: "Beställ online och hämta hos oss — snabbt och smidigt." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center py-16 px-8 pb-28 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(242,196,176,0.45) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 20% 70%, rgba(168,196,154,0.25) 0%, transparent 60%), #fffaf4" }}
      >
        {/* Background kanji */}
        <span className="absolute font-jp font-light text-cherry/[0.06] pointer-events-none select-none text-[8rem] top-[8%] left-[5%] animate-float" style={{ animationDuration: "6s" }}>寿司</span>
        <span className="absolute font-jp font-light text-cherry/[0.06] pointer-events-none select-none text-[6rem] top-[15%] right-[8%] animate-float" style={{ animationDuration: "7s", animationDelay: "3s" }}>家</span>
        <span className="absolute font-jp font-light text-cherry/[0.06] pointer-events-none select-none text-[5rem] bottom-[20%] left-[10%] animate-float" style={{ animationDuration: "8s", animationDelay: "1.5s" }}>桜</span>

        <div className="max-w-[600px] relative z-1">
          {/* Bowl */}
          <div className="text-[4.5rem] mb-2 animate-pop-in animate-float inline-block" style={{ animationDuration: "6s" }}>🍣</div>

          {/* Badge */}
          <div className="inline-block bg-sage text-dark text-[0.78rem] font-extrabold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full mb-5 animate-pop-in" style={{ animationDelay: "0.15s" }}>
            🇸🇪 Prisvärd hämtsushi · Oskarshamn 🇯🇵
          </div>

          <h1 className="font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-none text-cherry mb-1 animate-pop-in"
            style={{ textShadow: "4px 4px 0 rgba(201,64,64,0.15)", animationDelay: "0.3s" }}>
            Haru Sushi
          </h1>

          <p className="font-jp text-[clamp(1rem,2.5vw,1.5rem)] text-light font-light tracking-[0.18em] mb-5 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            はるすし — prisvärd hämtsushi
          </p>

          <p className="text-[1.05rem] text-mid max-w-[440px] mx-auto mb-9 leading-[1.7] animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och hämta — enkelt, gott och prisvärt.
          </p>

          {/* Opening hours */}
          <div className="flex flex-col items-center gap-1 mb-8 animate-fade-up" style={{ animationDelay: "0.68s" }}>
            {metaOpeningHours.entries.filter(e => !e.avvikande).map((e) => (
              <span key={e.label} className="text-[0.8rem] text-mid font-semibold">
                <span className="text-light font-normal">{e.label}:</span>
                {" "}{e.closed ? <span className="text-cherry/70">Stängt</span> : `${e.from}–${e.to}`}
              </span>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap animate-fade-up" style={{ animationDelay: "0.75s" }}>
            <Link
              href="/meny"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-cherry text-white shadow-[0_4px_16px_rgba(201,64,64,0.35)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(201,64,64,0.4)]"
            >
              🍱 Se Menyn
            </Link>
            <Link
              href="/lunch"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-white text-cherry border-[2.5px] border-blush transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:border-cherry"
            >
              🍜 Lunchmeny
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-white text-cherry border-[2.5px] border-blush transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:border-cherry"
            >
              📍 Hitta Oss
            </Link>
            <OrderButton className="sm:hidden inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-sage text-dark shadow-[0_4px_16px_rgba(168,196,154,0.4)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(168,196,154,0.5)]" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] max-sm:h-10">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-cream)" />
          </svg>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="text-center text-blush text-2xl tracking-[0.5rem] py-4 bg-cream">· · 🌸 · ·</div>

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-cream border-b-2 border-dashed border-border">
        <div className="max-w-[1000px] mx-auto py-14 px-8 grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="text-center p-7 rounded-3xl border-2 border-dashed border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-1deg] hover:shadow-[0_10px_32px_rgba(46,31,31,0.09)] hover:border-blush group"
            >
              <span className="text-[2.8rem] block mb-3 transition-transform duration-300 group-hover:animate-wiggle" style={{ animationDelay: `${i * 0.5}s` }}>
                {h.icon}
              </span>
              <h3 className="font-display text-[1.15rem] text-cherry mb-1">{h.title}</h3>
              <p className="text-[0.9rem] text-mid leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-8 text-center bg-warm-white">
        <div className="max-w-[600px] mx-auto">
          <span className="text-[0.78rem] font-extrabold tracking-[0.15em] uppercase text-salmon block mb-3">🍽️ Vad vill du äta?</span>
          <span className="text-5xl block mb-2 animate-float" style={{ animationDelay: "1s" }}>🍜</span>
          <h2 className="font-display text-[clamp(2rem,5vw,2.8rem)] text-dark mb-2">Hungrig?</h2>
          <p className="text-base text-mid mb-8 leading-relaxed">
            Kolla in hela menyn eller se veckans luncherbjudande.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/meny"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-cherry text-white shadow-[0_4px_16px_rgba(201,64,64,0.35)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(201,64,64,0.4)]"
            >
              🍱 Hela Menyn
            </Link>
            <Link
              href="/lunch"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-white text-cherry border-[2.5px] border-blush transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:border-cherry"
            >
              🍣 Lunchmeny
            </Link>
            <OrderButton className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-sage text-dark shadow-[0_4px_16px_rgba(168,196,154,0.4)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(168,196,154,0.5)]" />
          </div>
        </div>
      </section>
    </>
  );
}
