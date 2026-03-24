import { lunchItems, metaOpeningHours } from "@/lib/mock-data";

const LUNCH_EMOJIS = ["🍣", "🥗", "🍗", "🌯"];

export default function Lunch() {
  const lunchHourEntry = metaOpeningHours.entries.find((e) =>
    e.label.toLowerCase().includes("lunch")
  );
  const lunchHours = lunchHourEntry
    ? `${lunchHourEntry.label} ${lunchHourEntry.from}–${lunchHourEntry.to}`
    : "";

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-cherry to-[#a03030] text-white relative overflow-hidden">
      {/* decorative floaters */}
      <span className="absolute font-jp text-white/5 text-[8rem] top-[5%] left-[3%] pointer-events-none animate-float" style={{ animationDuration: "7s" }}>春</span>
      <span className="absolute font-jp text-white/5 text-[6rem] bottom-[8%] right-[4%] pointer-events-none animate-float" style={{ animationDuration: "9s", animationDelay: "2s" }}>食</span>

      <div className="max-w-[1000px] mx-auto relative z-1">
        <header className="text-center mb-12 animate-fade-up">
          <div className="text-[4rem] mb-2 animate-float inline-block" style={{ animationDuration: "5s" }}>🍱</div>
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-white/70 mb-2">
            {lunchHours}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] text-white leading-[1.1] [text-shadow:2px_2px_0_rgba(0,0,0,0.12)]">
            Lunchmeny
          </h1>
          <p className="font-jp text-[0.9rem] text-white/50 mt-1 tracking-[0.1em]">
            ランチメニュー
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-w-[800px] mx-auto">
          {lunchItems.map((item, i) => (
            <div
              key={item.id}
              className="bg-white/12 border-2 border-dashed border-white/25 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-1deg] hover:bg-white/22 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group"
            >
              <span className="text-[2.2rem] block mb-2 transition-transform duration-300 group-hover:animate-wiggle">
                {LUNCH_EMOJIS[i % LUNCH_EMOJIS.length]}
              </span>
              <p className="font-extrabold text-[0.82rem] tracking-[0.08em] uppercase opacity-75 mb-1">
                {item.label}
              </p>
              {item.description && (
                <p className="text-sm opacity-70 mb-2">{item.description}</p>
              )}
              <p className="font-display text-[1.2rem] mb-1.5">
                {item.price} kr
              </p>
              {item.alternatives.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1.5 justify-center">
                  {item.alternatives.map((alt) => (
                    <span
                      key={alt.label}
                      className="text-xs opacity-70 bg-white/15 py-0.5 px-2 rounded-full"
                    >
                      {alt.label} {alt.price} kr
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[0.9rem] opacity-75 font-bold">
          🥤 Lägg till dryck för 20 kr
        </p>
      </div>
    </section>
  );
}
