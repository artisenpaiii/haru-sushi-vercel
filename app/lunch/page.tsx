import { lunchItems, metaOpeningHours } from "@/lib/mock-data";

export default function Lunch() {
  const lunchHourEntry = metaOpeningHours.entries.find((e) =>
    e.label.toLowerCase().includes("lunch")
  );
  const lunchHours = lunchHourEntry
    ? `${lunchHourEntry.label} ${lunchHourEntry.from}–${lunchHourEntry.to}`
    : "";

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-cherry to-[#a03030] text-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative z-1">
        <header className="text-center mb-12 animate-fade-up">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-white/70 mb-2">
            {lunchHours}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-white leading-[1.1] [text-shadow:2px_2px_0_rgba(0,0,0,0.1)]">
            Lunchmeny
          </h1>
          <p className="font-jp text-[0.9rem] text-white/50 mt-1 tracking-[0.1em]">
            ランチメニュー
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-w-[800px] mx-auto">
          {lunchItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/12 border-2 border-dashed border-white/25 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:bg-white/22"
            >
              <p className="font-extrabold text-[0.78rem] tracking-[0.08em] uppercase opacity-75 mb-1">
                {item.label}
              </p>
              {item.description && (
                <p className="text-sm opacity-70 mb-1">{item.description}</p>
              )}
              <p className="font-display text-[1.1rem] mb-1">
                {item.price} kr
              </p>
              {item.alternatives.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {item.alternatives.map((alt) => (
                    <span
                      key={alt.label}
                      className="text-xs opacity-70 bg-white/15 py-0.5 px-2 rounded"
                    >
                      {alt.label} {alt.price} kr
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[0.9rem] opacity-70">
          Lägg till dryck för 20 kr
        </p>
      </div>
    </section>
  );
}
