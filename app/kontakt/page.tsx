import { metaContact, metaLocation, metaOpeningHours } from "@/lib/mock-data";

export default function Kontakt() {
  const loc = metaLocation;
  const contact = metaContact;
  const regularHours = metaOpeningHours.entries.filter((e) => !e.avvikande);
  const avvikandeHours = metaOpeningHours.entries.filter((e) => e.avvikande);

  return (
    <section className="py-20 px-8">
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 animate-fade-up">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-salmon mb-2">
            Vi ses snart!
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-dark leading-[1.1]">
            Hitta Oss
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.1em]">
            アクセス
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-border text-center transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-salmon">
            <h3 className="font-display text-[1.1rem] text-cherry mb-2.5">
              Adress
            </h3>
            <p className="text-[0.9rem] text-mid leading-[1.8]">
              {loc.address}
              <br />
              {loc.zipcode} {loc.city}
              <br />
              {loc.country}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-border text-center transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-salmon">
            <h3 className="font-display text-[1.1rem] text-cherry mb-2.5">
              Öppettider
            </h3>
            <p className="text-[0.9rem] text-mid leading-[1.8]">
              {regularHours.map((entry) => (
                <span key={entry.label}>
                  {entry.label}: {entry.from} – {entry.to}
                  <br />
                </span>
              ))}
            </p>
            {avvikandeHours.length > 0 && (
              <>
                <h4 className="text-[0.82rem] font-bold text-salmon mt-4 mb-1">
                  Avvikande öppettider
                </h4>
                <p className="text-[0.85rem] text-mid leading-[1.8]">
                  {avvikandeHours.map((entry) => (
                    <span key={entry.label}>
                      {entry.label}: {entry.from} – {entry.to}
                      <br />
                    </span>
                  ))}
                </p>
              </>
            )}
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-border text-center transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-salmon">
            <h3 className="font-display text-[1.1rem] text-cherry mb-2.5">
              Kontakt
            </h3>
            <p className="text-[0.9rem] text-mid leading-[1.8]">
              <a
                href={`tel:${contact.phone}`}
                className="text-cherry font-bold transition-colors duration-200 hover:text-salmon"
              >
                {contact.phone}
              </a>
              <br />
              {contact.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
