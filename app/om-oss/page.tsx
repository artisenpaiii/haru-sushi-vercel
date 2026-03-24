import { Sparkles } from "@/components/Sparkles";

const badges = [
  { icon: "🍣", label: "Färsk sushi dagligen" },
  { icon: "🌿", label: "Veganska alternativ" },
  { icon: "🌯", label: "Sushiburrito" },
  { icon: "🥗", label: "Pokébowl" },
  { icon: "🍱", label: "Bentobox-combo" },
  { icon: "💛", label: "Familjeägt" },
];

export default function OmOss() {
  return (
    <section className="py-20 px-8 relative overflow-hidden" style={{ background: "var(--color-warm-white)" }}>
      <Sparkles count={14} />

      {/* Bg kanji */}
      <span className="absolute font-jp text-cherry/[0.05] text-[8rem] top-[6%] left-[2%] pointer-events-none animate-float-wild" style={{ animationDuration: "8s" }}>私</span>
      <span className="absolute font-jp text-cherry/[0.04] text-[6rem] bottom-[10%] right-[3%] pointer-events-none animate-float-wild" style={{ animationDuration: "10s", animationDelay: "3s" }}>達</span>
      <span className="absolute font-jp text-salmon/[0.04] text-[5rem] top-[45%] right-[5%] pointer-events-none animate-float-wild" style={{ animationDuration: "12s", animationDelay: "1.5s" }}>愛</span>

      <div className="max-w-[1000px] mx-auto relative z-1">
        <header className="text-center mb-12">
          <p className="text-[0.78rem] font-extrabold tracking-[0.14em] uppercase text-salmon mb-2 animate-slide-up">
            Om Oss
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-dark leading-[1.1] animate-pop-in animate-neon-glow" style={{ animationDelay: "0.15s" }}>
            God sushi ska inte <span className="text-cherry animate-heartbeat inline-block" style={{ animationDuration: "2s" }}>kosta skjortan</span>.
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.12em] animate-fade-up" style={{ animationDelay: "0.3s" }}>
            私たちについて
          </p>
        </header>

        <div className="grid grid-cols-2 gap-12 items-center max-w-[820px] mx-auto max-sm:grid-cols-1 max-sm:gap-8">
          {/* Text column */}
          <div>
            <p className="text-mid leading-[1.9] mb-5 text-[1.02rem] animate-slide-left" style={{ animationDelay: "0.35s" }}>
              Haru Sushi är en familjeägd hämtsushirestaurang i Oskarshamn. Vi
              tror att riktigt god japansk mat ska vara tillgänglig för alla —
              utan att kompromissa med kvalitet eller smak.
            </p>
            <p className="text-mid leading-[1.9] mb-4 text-[1.02rem] animate-slide-left" style={{ animationDelay: "0.5s" }}>
              Allt lagas färskt på beställning. Välj bland nigiri, maki,
              friterad maki, sushiburrito, pokébowl, varmrätter och mycket mer.
            </p>
          </div>

          {/* Feature box — morph border + rotate-scale */}
          <div
            className="bg-white rounded-3xl py-12 px-8 text-center transition-all duration-500 relative shadow-[0_12px_40px_rgba(46,31,31,0.12)] hover:scale-[1.04] hover:rotate-0 border-2 border-blush animate-bounce-down animate-glow-box"
            style={{
              animationDelay: "0.4s",
              rotate: "2deg",
            }}
          >
            {/* Sticker top-right — wobbling */}
            <div className="absolute -top-4 -right-4 bg-blush text-dark font-extrabold text-[0.72rem] py-1.5 px-2.5 rounded-xl shadow-md animate-sticker-wobble">
              🍣 Hämtsushi
            </div>
            {/* Sticker bottom-left — wobbling other way */}
            <div className="absolute -bottom-4 -left-4 bg-[#fce08a] text-dark font-extrabold text-[0.72rem] py-1.5 px-2.5 rounded-xl shadow-md animate-sticker-wobble-l">
              💛 Familjeägt
            </div>

            {/* Main emoji — giant bounce */}
            <span className="text-[4rem] block mb-4 animate-bounce-big" style={{ animationDuration: "3s" }}>🍱</span>

            <p className="font-display text-[1.2rem] text-cherry animate-neon-glow" style={{ animationDuration: "3s" }}>
              Lagat med kärlek sedan dag ett
            </p>

            {/* Hidden chopsticks — now visible & animated */}
            <span className="absolute top-[-10px] left-[-10px] text-[1.8rem] pointer-events-none animate-spin-slow opacity-80">
              🥢
            </span>
          </div>
        </div>

        {/* Badges — staggered elastic pop + jello hover */}
        <div className="flex flex-wrap gap-3 mt-16 justify-center">
          {badges.map((b, i) => (
            <span
              key={b.label}
              className="bg-white border-2 border-blush rounded-full py-2.5 px-5 text-[0.88rem] font-bold text-mid transition-all duration-200 hover:-translate-y-1.5 hover:rotate-[-3deg] hover:border-cherry hover:shadow-[0_8px_20px_rgba(46,31,31,0.12)] flex items-center gap-2 cursor-default animate-badge-pop animate-jello"
              style={{ animationDelay: `${0.55 + i * 0.09}s` }}
            >
              <span className="animate-heartbeat inline-block" style={{ animationDelay: `${i * 0.2}s`, animationDuration: "2.5s" }}>
                {b.icon}
              </span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
