import { metaLocation, metaOpeningHours } from "@/lib/mock-data";

export function Footer() {
  const loc = metaLocation;
  const hours = metaOpeningHours.entries.filter((e) => !e.avvikande);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/60 text-center py-12 px-8 relative z-1 border-t-[3px] border-dashed border-white/10">
      <div>
        <span className="font-display text-[2rem] text-blush block mb-0.5 animate-wobble">
          🍣 Haru Sushi
        </span>
        <p className="font-jp text-xs tracking-[0.2em] opacity-40 mb-4">
          はるすし — prisvärd hämtsushi
        </p>
        <p className="text-sm mb-4">
          {loc.address}, {loc.zipcode} {loc.city}
        </p>
        <div className="flex flex-col items-center gap-1 mb-4">
          {hours.map((e) => (
            <span key={e.label} className="text-xs">
              <span className="opacity-50">{e.label}:</span>
              {" "}<span className="opacity-80 font-semibold">{e.closed ? "Stängt" : `${e.from}–${e.to}`}</span>
            </span>
          ))}
        </div>
        <div className="text-xl my-4 animate-pulse-slow">🍣 💛 🍣</div>
        <p className="text-xs opacity-40">&copy; {year} Haru Sushi. Gjord med kärlek.</p>
        <p className="text-xs opacity-25 mt-1">Powered by Bryan Ramirez</p>
      </div>
    </footer>
  );
}
