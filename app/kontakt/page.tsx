import { metaContact, metaLocation, metaOpeningHours } from "@/lib/mock-data";
import { Sparkles } from "@/components/Sparkles";

export default function Kontakt() {
  const loc = metaLocation;
  const contact = metaContact;
  const regularHours = metaOpeningHours.entries.filter((e) => !e.avvikande);
  const avvikandeHours = metaOpeningHours.entries.filter((e) => e.avvikande);

  const cards = [
    {
      emoji: "📍",
      delay: 0,
      emojiAnim: "0s",
      title: "Adress",
      content: (
        <p className="text-[0.9rem] text-mid leading-[1.9]">
          {loc.address}<br />{loc.zipcode} {loc.city}<br />{loc.country}
        </p>
      ),
    },
    {
      emoji: "🕐",
      delay: 0.13,
      emojiAnim: "1.5s",
      title: "Öppettider",
      content: (
        <>
          <p className="text-[0.9rem] text-mid leading-[1.9]">
            {regularHours.map((entry) => (
              <span key={entry.label}>{entry.label}: {entry.from} – {entry.to}<br /></span>
            ))}
          </p>
          {avvikandeHours.length > 0 && (
            <>
              <h4 className="text-[0.82rem] font-bold text-salmon mt-4 mb-1 animate-slide-up">Avvikande öppettider</h4>
              <p className="text-[0.85rem] text-mid leading-[1.9]">
                {avvikandeHours.map((entry) => (
                  <span key={entry.label}>{entry.label}: {entry.from} – {entry.to}<br /></span>
                ))}
              </p>
            </>
          )}
        </>
      ),
    },
    {
      emoji: "📞",
      delay: 0.26,
      emojiAnim: "3s",
      title: "Kontakt",
      content: (
        <p className="text-[0.9rem] text-mid leading-[1.9]">
          <a
            href={`tel:${contact.phone}`}
            className="text-cherry font-bold transition-all duration-200 hover:text-salmon hover:animate-neon-glow"
          >
            {contact.phone}
          </a>
          <br />{contact.email}<br /><br />
          <span className="text-[0.82rem] opacity-70 animate-bounce-big" style={{ animationDuration: "3s" }}>Bokningar välkomna!</span>
        </p>
      ),
    },
  ];

  return (
    <section className="py-20 px-8 relative overflow-hidden" style={{ background: "var(--color-warm-white)" }}>
      <Sparkles count={12} />

      {/* Bg kanji */}
      <span className="absolute font-jp text-cherry/[0.04] text-[8rem] top-[5%] right-[4%] pointer-events-none animate-float-wild" style={{ animationDuration: "9s" }}>場</span>
      <span className="absolute font-jp text-cherry/[0.04] text-[6rem] bottom-[8%] left-[3%] pointer-events-none animate-float-wild" style={{ animationDuration: "11s", animationDelay: "2s" }}>所</span>

      <div className="max-w-[1000px] mx-auto relative z-1">
        <header className="text-center mb-14">
          <p className="text-[0.78rem] font-extrabold tracking-[0.14em] uppercase text-salmon mb-2 animate-slide-up">
            Vi ses snart!
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-dark leading-[1.1] animate-pop-in animate-neon-glow"
            style={{ animationDelay: "0.15s" }}>
            Hitta Oss
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.12em] animate-fade-up" style={{ animationDelay: "0.3s" }}>
            アクセス
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-8 border-2 border-dashed border-border text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1.5deg] hover:shadow-[0_16px_40px_rgba(46,31,31,0.12)] hover:border-salmon group relative overflow-hidden animate-bounce-down animate-jello"
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div className="accent-bar" />

              <span className="text-[2.8rem] block mb-4 animate-wave-float group-hover:animate-tada"
                style={{ animationDelay: card.emojiAnim, animationDuration: "5s" }}>
                {card.emoji}
              </span>

              <h3 className="font-display text-[1.25rem] text-cherry mb-3 group-hover:animate-neon-glow animate-slide-up"
                style={{ animationDelay: `${card.delay + 0.15}s` }}>
                {card.title}
              </h3>

              <div className="animate-fade-up" style={{ animationDelay: `${card.delay + 0.25}s` }}>
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
