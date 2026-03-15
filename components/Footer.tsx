import { metaLocation } from "@/lib/mock-data";

export function Footer() {
  const loc = metaLocation;
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
        <p className="text-sm mb-2">
          {loc.address}, {loc.zipcode} {loc.city}
        </p>
        <div className="text-xl my-4 animate-pulse-slow">🍣 💛 🍣</div>
        <p className="text-xs opacity-40">&copy; {year} Haru Sushi. Gjord med kärlek.</p>
      </div>
    </footer>
  );
}
