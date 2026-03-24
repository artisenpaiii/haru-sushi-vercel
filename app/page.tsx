import Link from "next/link";
import { Sparkles } from "@/components/Sparkles";

const highlights = [
  { icon: "🍣", title: "Färsk Sushi", text: "Lagad med kärlek och riktiga råvaror, varje dag." },
  { icon: "🌿", title: "Veganskt", text: "Stort utbud av veganska alternativ genom hela menyn." },
  { icon: "🥡", title: "Hämta & Njut", text: "Beställ online och hämta hos oss — snabbt och smidigt." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center py-16 px-8 pb-28 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 80% 28%, rgba(242,196,176,0.6) 0%, transparent 65%), radial-gradient(ellipse 65% 55% at 18% 72%, rgba(168,196,154,0.35) 0%, transparent 60%), #fffaf4",
        }}
      >
        {/* Sparkle layer */}
        <Sparkles count={26} />

        {/* Spinning outer ring */}
        <div className="absolute pointer-events-none animate-spin-slow opacity-[0.07]"
          style={{ width: 500, height: 500, border: "2px dashed var(--color-blush)", borderRadius: "50%", top: "50%", left: "50%", marginTop: -250, marginLeft: -250 }} />
        {/* Counter-spin inner ring */}
        <div className="absolute pointer-events-none opacity-[0.05]"
          style={{ width: 320, height: 320, border: "2px dashed var(--color-salmon)", borderRadius: "50%", top: "50%", left: "50%", marginTop: -160, marginLeft: -160, animation: "spin360 12s linear infinite reverse" }} />

        {/* Background kanji — all wild floating with stagger */}
        <span className="absolute font-jp font-light text-cherry/[0.07] pointer-events-none select-none text-[10rem] top-[5%] left-[3%] animate-float-wild" style={{ animationDuration: "5.5s" }}>寿司</span>
        <span className="absolute font-jp font-light text-cherry/[0.07] pointer-events-none select-none text-[7rem] top-[10%] right-[5%] animate-float-wild" style={{ animationDuration: "7s", animationDelay: "1.5s" }}>家</span>
        <span className="absolute font-jp font-light text-cherry/[0.06] pointer-events-none select-none text-[6rem] bottom-[16%] left-[7%] animate-float-wild" style={{ animationDuration: "8s", animationDelay: "0.8s" }}>桜</span>
        <span className="absolute font-jp font-light text-salmon/[0.07] pointer-events-none select-none text-[4.5rem] bottom-[28%] right-[10%] animate-float-wild" style={{ animationDuration: "9s", animationDelay: "3s" }}>愛</span>
        <span className="absolute font-jp font-light text-moss/[0.06] pointer-events-none select-none text-[3.5rem] top-[42%] left-[1%] animate-float-wild" style={{ animationDuration: "10s", animationDelay: "0.3s" }}>美</span>
        <span className="absolute font-jp font-light text-cherry/[0.05] pointer-events-none select-none text-[5rem] top-[22%] left-[25%] animate-float-wild" style={{ animationDuration: "12s", animationDelay: "5s" }}>春</span>

        <div className="max-w-[640px] relative z-1">
          {/* Main sushi — zoom-spin entrance + permanent bounce-big */}
          <div className="text-[5.5rem] mb-3 inline-block animate-zoom-spin animate-bounce-big"
            style={{ animationDuration: "3.2s", display: "inline-block" }}>
            🍣
          </div>

          {/* Badge — elastic pop */}
          <div
            className="inline-block bg-sage text-dark text-[0.78rem] font-extrabold tracking-[0.12em] uppercase py-1.5 px-5 rounded-full mb-5 animate-elastic-pop animate-jello"
            style={{ animationDelay: "0.2s" }}
          >
            🇸🇪 Prisvärd hämtsushi · Oskarshamn 🇯🇵
          </div>

          {/* Title — neon glow + pop-in */}
          <h1
            className="font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-none text-cherry mb-1 animate-pop-in animate-neon-glow"
            style={{ animationDelay: "0.3s" }}
          >
            Haru Sushi
          </h1>

          {/* JP subtitle */}
          <p
            className="font-jp text-[clamp(1rem,2.5vw,1.5rem)] text-light font-light tracking-[0.2em] mb-5 animate-slide-up"
            style={{ animationDelay: "0.45s" }}
          >
            はるすし — prisvärd hämtsushi
          </p>

          {/* Body text — fade up */}
          <p
            className="text-[1.05rem] text-mid max-w-[440px] mx-auto mb-9 leading-[1.75] animate-fade-up"
            style={{ animationDelay: "0.58s" }}
          >
            Färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och hämta — enkelt, gott och prisvärt.
          </p>

          {/* Buttons — staggered elastic-pop */}
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/meny"
              className="btn-shimmer inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] text-white animate-elastic-pop"
              style={{ animationDelay: "0.7s" }}
            >
              🍱 Se Menyn
            </Link>
            <Link
              href="/lunch"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-white text-cherry border-[2.5px] border-blush transition-all duration-200 hover:-translate-y-2 hover:scale-[1.07] hover:border-cherry hover:shadow-[0_10px_28px_rgba(201,64,64,0.22)] animate-elastic-pop animate-rubber-band"
              style={{ animationDelay: "0.82s" }}
            >
              🍜 Lunchmeny
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-white text-cherry border-[2.5px] border-blush transition-all duration-200 hover:-translate-y-2 hover:scale-[1.07] hover:border-cherry hover:shadow-[0_10px_28px_rgba(201,64,64,0.22)] animate-elastic-pop animate-rubber-band"
              style={{ animationDelay: "0.94s" }}
            >
              📍 Hitta Oss
            </Link>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] max-sm:h-10">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-cream)" />
          </svg>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="text-center text-blush text-2xl tracking-[0.5rem] py-5 bg-cream flex justify-center items-center gap-3">
        <span className="animate-heartbeat inline-block" style={{ animationDelay: "0s" }}>·</span>
        <span className="animate-heartbeat inline-block" style={{ animationDelay: "0.2s" }}>·</span>
        <span className="animate-bounce-big inline-block" style={{ animationDuration: "2s" }}>🌸</span>
        <span className="animate-heartbeat inline-block" style={{ animationDelay: "0.4s" }}>·</span>
        <span className="animate-heartbeat inline-block" style={{ animationDelay: "0.6s" }}>·</span>
      </div>

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-cream border-b-2 border-dashed border-border">
        <div className="max-w-[1000px] mx-auto py-14 px-8 grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="text-center p-8 rounded-3xl border-2 border-dashed border-border bg-white transition-all duration-300 hover:-translate-y-2.5 hover:rotate-[-2deg] hover:shadow-[0_20px_48px_rgba(46,31,31,0.13)] hover:border-salmon group relative overflow-hidden animate-bounce-down animate-jello"
              style={{ animationDelay: `${i * 0.14}s` }}
            >
              <div className="accent-bar" />

              <span
                className="text-[3.2rem] block mb-3 transition-transform duration-200 group-hover:animate-tada animate-zoom-spin"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                {h.icon}
              </span>
              <h3 className="font-display text-[1.2rem] text-cherry mb-1.5 group-hover:animate-neon-glow animate-slide-up"
                style={{ animationDelay: `${0.5 + i * 0.12}s` }}>
                {h.title}
              </h3>
              <p className="text-[0.9rem] text-mid leading-relaxed animate-fade-up" style={{ animationDelay: `${0.62 + i * 0.12}s` }}>
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-8 text-center bg-warm-white relative overflow-hidden">
        <Sparkles count={12} />
        <div className="max-w-[600px] mx-auto relative z-1">
          <span className="text-[0.78rem] font-extrabold tracking-[0.15em] uppercase text-salmon block mb-4 animate-slide-up">
            🍽️ Vad vill du äta?
          </span>
          <span className="text-[4.5rem] block mb-2 animate-bounce-big animate-zoom-spin" style={{ animationDelay: "0.3s", animationDuration: "3.5s" }}>🍜</span>
          <h2 className="font-display text-[clamp(2rem,5vw,2.8rem)] text-dark mb-2 animate-pop-in animate-neon-glow" style={{ animationDelay: "0.2s", animationDuration: "3.5s" }}>
            Hungrig?
          </h2>
          <p className="text-base text-mid mb-9 leading-relaxed animate-fade-up" style={{ animationDelay: "0.35s" }}>
            Kolla in hela menyn eller se veckans luncherbjudande.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/meny"
              className="btn-shimmer inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] text-white animate-elastic-pop"
              style={{ animationDelay: "0.5s" }}
            >
              🍱 Hela Menyn
            </Link>
            <Link
              href="/lunch"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-extrabold text-[0.95rem] bg-white text-cherry border-[2.5px] border-blush transition-all duration-200 hover:-translate-y-2 hover:scale-[1.07] hover:border-cherry animate-elastic-pop animate-rubber-band"
              style={{ animationDelay: "0.62s" }}
            >
              🍣 Lunchmeny
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
