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
    <section className="py-20 px-8" style={{ background: "var(--color-warm-white)" }}>
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 animate-fade-up">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-salmon mb-2">
            Om Oss
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-dark leading-[1.1]">
            God sushi ska inte <span className="text-cherry">kosta skjortan</span>.
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.1em]">
            私たちについて
          </p>
        </header>

        <div className="grid grid-cols-2 gap-12 items-center max-w-[800px] mx-auto max-sm:grid-cols-1 max-sm:gap-8">
          <div>
            <p className="text-mid leading-[1.8] mb-4 text-[1.02rem]">
              Haru Sushi är en familjeägd hämtsushirestaurang i Oskarshamn. Vi
              tror att riktigt god japansk mat ska vara tillgänglig för alla —
              utan att kompromissa med kvalitet eller smak.
            </p>
            <p className="text-mid leading-[1.8] mb-4 text-[1.02rem]">
              Allt lagas färskt på beställning. Välj bland nigiri, maki,
              friterad maki, sushiburrito, pokébowl, varmrätter och mycket mer.
            </p>
          </div>

          <div
            className="bg-white rounded-3xl py-12 px-8 text-center rotate-2 transition-transform duration-400 relative shadow-[0_12px_40px_rgba(46,31,31,0.12)] hover:rotate-0 hover:scale-[1.02] max-sm:rotate-1 border-2 border-blush"
          >
            {/* sticker top-right */}
            <div className="absolute -top-3 -right-3 bg-blush text-dark font-extrabold text-[0.72rem] py-1.5 px-2.5 rounded-xl rotate-[8deg] shadow-md">
              🍣 Hämtsushi
            </div>
            {/* sticker bottom-left */}
            <div className="absolute -bottom-3 -left-3 bg-[#fce08a] text-dark font-extrabold text-[0.72rem] py-1.5 px-2.5 rounded-xl -rotate-[6deg] shadow-md">
              💛 Familjeägt
            </div>
            <span className="text-[3.5rem] block mb-4 animate-float">🍱</span>
            <p className="font-display text-[1.15rem] text-cherry">
              Lagat med kärlek sedan dag ett
            </p>
            <span className="absolute top-[-10px] right-[-10px] text-[1.8rem] pointer-events-none rotate-[15deg] animate-float hidden" style={{ animationDuration: "4s" }}>
              🥢
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mt-14 justify-center">
          {badges.map((b) => (
            <span
              key={b.label}
              className="bg-white border-2 border-blush rounded-full py-2 px-5 text-[0.85rem] font-bold text-mid transition-all duration-200 hover:-translate-y-0.5 hover:rotate-[-2deg] hover:border-salmon hover:shadow-[0_4px_12px_rgba(46,31,31,0.08)] flex items-center gap-1.5"
            >
              {b.icon} {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
