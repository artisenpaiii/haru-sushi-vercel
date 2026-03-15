const badges = [
  "Färsk sushi dagligen",
  "Veganska alternativ",
  "Sushiburrito",
  "Pokébowl",
  "Bentobox-combo",
  "Familjeägt",
];

export default function OmOss() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 animate-fade-up">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-salmon mb-2">
            Om Oss
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-dark leading-[1.1]">
            God sushi ska inte kosta skjortan.
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

          <div className="bg-gradient-to-br from-blush to-[#f7cdc0] rounded-3xl py-12 px-8 text-center rotate-2 transition-transform duration-300 relative shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:rotate-0 hover:scale-[1.02] max-sm:rotate-1">
            <span className="text-[3.5rem] block mb-4 animate-float">🍱</span>
            <p className="font-display text-[1.1rem] text-cherry">
              Lagat med kärlek sedan dag ett
            </p>
            <span className="absolute top-[-10px] right-[-10px] text-[1.8rem] pointer-events-none rotate-[15deg] animate-float" style={{ animationDuration: "4s" }}>
              🥢
            </span>
            <span className="absolute bottom-[-8px] left-[-8px] text-[1.8rem] pointer-events-none -rotate-[10deg] animate-float" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
              ❤️
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-12 justify-center">
          {badges.map((b) => (
            <span
              key={b}
              className="bg-white border-2 border-dashed border-border rounded-full py-1.5 px-4 text-[0.82rem] font-bold text-mid transition-all duration-200 hover:-translate-y-0.5 hover:-rotate-2 hover:border-salmon"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
