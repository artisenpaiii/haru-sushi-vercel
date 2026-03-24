import { lunchItems, metaOpeningHours } from "@/lib/mock-data";
import { Sparkles } from "@/components/Sparkles";

const LUNCH_EMOJIS = ["🍣", "🥗", "🍗", "🌯", "🍱", "🥢"];

export default function Lunch() {
  const lunchHourEntry = metaOpeningHours.entries.find((e) =>
    e.label.toLowerCase().includes("lunch")
  );
  const lunchHours = lunchHourEntry
    ? `${lunchHourEntry.label} ${lunchHourEntry.from}–${lunchHourEntry.to}`
    : "";

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-cherry to-[#8f2828] text-white relative overflow-hidden">
      {/* Sparkles on dark bg */}
      <Sparkles count={16} />

      {/* Decorative wild-floating kanji */}
      <span className="absolute font-jp text-white/[0.06] text-[9rem] top-[4%] left-[2%] pointer-events-none animate-float-wild" style={{ animationDuration: "7s" }}>春</span>
      <span className="absolute font-jp text-white/[0.06] text-[7rem] bottom-[6%] right-[3%] pointer-events-none animate-float-wild" style={{ animationDuration: "9s", animationDelay: "2.5s" }}>食</span>
      <span className="absolute font-jp text-white/[0.04] text-[5rem] top-[40%] right-[8%] pointer-events-none animate-float-wild" style={{ animationDuration: "11s", animationDelay: "1s" }}>昼</span>
      <span className="absolute font-jp text-white/[0.04] text-[4rem] bottom-[30%] left-[6%] pointer-events-none animate-float-wild" style={{ animationDuration: "8.5s", animationDelay: "4s" }}>愛</span>

      {/* Spinning decorative ring */}
      <div className="absolute pointer-events-none animate-spin-slow opacity-[0.06]"
        style={{ width: 500, height: 500, border: "2px dashed white", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="max-w-[1000px] mx-auto relative z-1">
        <header className="text-center mb-12">
          {/* Big bouncing emoji entrance */}
          <div className="text-[4.5rem] mb-2 animate-zoom-spin animate-bounce-big inline-block" style={{ animationDuration: "3.5s", animationDelay: "0.1s" }}>🍱</div>

          <p className="text-[0.78rem] font-extrabold tracking-[0.15em] uppercase text-white/70 mb-2 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {lunchHours}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] text-white leading-[1.1] animate-pop-in animate-neon-glow"
            style={{ animationDelay: "0.35s", textShadow: "2px 2px 0 rgba(0,0,0,0.18)" }}>
            Lunchmeny
          </h1>
          <p className="font-jp text-[0.9rem] text-white/50 mt-1 tracking-[0.12em] animate-slide-up" style={{ animationDelay: "0.5s" }}>
            ランチメニュー
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-w-[820px] mx-auto">
          {lunchItems.map((item, i) => (
            <div
              key={item.id}
              className="bg-white/[0.13] border-2 border-dashed border-white/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1.5deg] hover:bg-white/[0.25] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] group relative overflow-hidden animate-bounce-down animate-jello"
              style={{ animationDelay: `${i * 0.09}s` }}
            >
              {/* Top shimmer bar */}
              <div className="accent-bar" />

              {/* Emoji — tada on hover */}
              <span className="text-[2.6rem] block mb-2 transition-transform duration-300 group-hover:animate-tada animate-zoom-spin"
                style={{ animationDelay: `${0.3 + i * 0.06}s` }}>
                {LUNCH_EMOJIS[i % LUNCH_EMOJIS.length]}
              </span>

              <p className="font-extrabold text-[0.82rem] tracking-[0.08em] uppercase opacity-80 mb-1 animate-slide-up"
                style={{ animationDelay: `${0.45 + i * 0.06}s` }}>
                {item.label}
              </p>

              {item.description && (
                <p className="text-sm opacity-70 mb-2 animate-fade-up" style={{ animationDelay: `${0.55 + i * 0.06}s` }}>
                  {item.description}
                </p>
              )}

              {/* Price — zoom pulse */}
              <p className="font-display text-[1.3rem] mb-1.5 animate-zoom-pulse group-hover:animate-heartbeat"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                {item.price} kr
              </p>

              {item.alternatives.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2 justify-center">
                  {item.alternatives.map((alt, ai) => (
                    <span
                      key={alt.label}
                      className="text-xs opacity-75 bg-white/20 py-0.5 px-2.5 rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/35 animate-elastic-pop"
                      style={{ animationDelay: `${0.6 + i * 0.06 + ai * 0.06}s` }}
                    >
                      {alt.label} {alt.price} kr
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drink notice */}
        <p className="text-center mt-10 text-[0.95rem] opacity-80 font-bold animate-elastic-pop animate-heartbeat"
          style={{ animationDelay: `${lunchItems.length * 0.09 + 0.2}s`, animationDuration: "2.5s" }}>
          🥤 Lägg till dryck för 20 kr
        </p>
      </div>
    </section>
  );
}
