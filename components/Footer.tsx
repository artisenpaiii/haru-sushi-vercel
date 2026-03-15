import { metaLocation } from "@/lib/mock-data";

export function Footer() {
  const loc = metaLocation;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/60 text-center py-12 px-8 relative z-1 border-t-[3px] border-dashed border-white/8">
      <div>
        <span className="font-display text-2xl text-blush block mb-0.5 transition-transform duration-300 animate-wobble">
          Haru Sushi
        </span>
        <p className="font-jp text-xs tracking-[0.2em] opacity-40 mb-4">
          はるすし
        </p>
        <p className="text-sm mb-2">
          {loc.address}, {loc.zipcode} {loc.city}
        </p>
        <p className="text-xs opacity-40">&copy; {year} Haru Sushi</p>
        <p className="text-xs opacity-30 mt-2">Powered by Ramirez</p>
      </div>
    </footer>
  );
}
