import Link from "next/link";

const highlights = [
  { icon: "🍣", title: "Färsk Sushi", text: "Lagad med kärlek och riktiga råvaror, varje dag." },
  { icon: "🌿", title: "Veganskt", text: "Stort utbud av veganska alternativ genom hela menyn." },
  { icon: "🥡", title: "Hämta & Njut", text: "Beställ online och hämta hos oss — snabbt och smidigt." },
];

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center py-16 px-8 pb-24 bg-gradient-to-br from-cream via-blush to-[#f7cdc0] relative overflow-hidden">
        <span className="absolute font-jp font-light text-cherry/6 pointer-events-none select-none text-[8rem] top-[8%] left-[5%] animate-float" style={{ animationDuration: "6s" }}>寿</span>
        <span className="absolute font-jp font-light text-cherry/6 pointer-events-none select-none text-[6rem] top-[15%] right-[8%] animate-float" style={{ animationDuration: "7s", animationDelay: "1s" }}>司</span>
        <span className="absolute font-jp font-light text-cherry/6 pointer-events-none select-none text-[5rem] bottom-[20%] left-[10%] animate-float" style={{ animationDuration: "8s", animationDelay: "2s" }}>鮮</span>
        <span className="absolute font-jp font-light text-cherry/6 pointer-events-none select-none text-[7rem] bottom-[15%] right-[5%] animate-float" style={{ animationDuration: "6.5s", animationDelay: "0.5s" }}>春</span>

        <div className="max-w-[600px] relative z-1 animate-fade-up-slow">
          <p className="text-[0.78rem] font-bold tracking-[0.1em] uppercase text-mid mb-6">
            Prisvärd hämtsushi &middot; Oskarshamn
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,5.5rem)] leading-none text-cherry mb-1 [text-shadow:2px_2px_0_rgba(184,59,59,0.08)] animate-pop-in">
            Haru Sushi
          </h1>
          <p className="text-[2.5rem] my-2 animate-float">🍣</p>
          <p className="font-jp text-[clamp(1rem,2.5vw,1.4rem)] text-mid font-light tracking-[0.15em] mb-6">
            はるすし
          </p>
          <p className="text-[1.05rem] text-mid max-w-[440px] mx-auto mb-10 leading-[1.7]">
            Färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och
            hämta — enkelt, gott och prisvärt.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/meny"
              className="inline-flex items-center gap-2 py-3 px-7 rounded-full font-bold text-[0.9rem] bg-cherry text-white shadow-[0_4px_15px_rgba(184,59,59,0.25)] transition-all duration-200 hover:-translate-y-[3px] hover:-rotate-1 hover:shadow-[0_6px_25px_rgba(184,59,59,0.35)]"
            >
              Se Menyn
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 py-3 px-7 rounded-full font-bold text-[0.9rem] bg-transparent text-cherry border-2 border-dashed border-border transition-all duration-200 hover:-translate-y-[3px] hover:-rotate-1 hover:border-cherry hover:border-solid"
            >
              Hitta Oss
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] max-sm:h-10">
            <path d="M0,40 C200,100 400,0 600,50 C800,100 1000,10 1200,40 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="bg-white border-b border-border">
        <div className="max-w-[1000px] mx-auto py-16 px-8 grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="text-center p-6 px-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] group"
            >
              <span className="text-[2.5rem] block mb-3 transition-transform duration-300 group-hover:animate-wiggle">
                {h.icon}
              </span>
              <h3 className="font-display text-[1.1rem] text-cherry mb-1">
                {h.title}
              </h3>
              <p className="text-[0.9rem] text-mid leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-8 text-center bg-cream">
        <div className="max-w-[1000px] mx-auto">
          <span className="text-5xl block mb-2 animate-float">🍜</span>
          <h2 className="font-display text-[2.5rem] text-dark mb-2">Hungry?</h2>
          <p className="text-base text-mid mb-8">
            Kolla in hela menyn eller se dagens luncherbjudande.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/meny"
              className="inline-flex items-center gap-2 py-3 px-7 rounded-full font-bold text-[0.9rem] bg-cherry text-white shadow-[0_4px_15px_rgba(184,59,59,0.25)] transition-all duration-200 hover:-translate-y-[3px] hover:-rotate-1 hover:shadow-[0_6px_25px_rgba(184,59,59,0.35)]"
            >
              Hela Menyn
            </Link>
            <Link
              href="/lunch"
              className="inline-flex items-center gap-2 py-3 px-7 rounded-full font-bold text-[0.9rem] bg-transparent text-cherry border-2 border-dashed border-border transition-all duration-200 hover:-translate-y-[3px] hover:-rotate-1 hover:border-cherry hover:border-solid"
            >
              Lunchmeny
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
