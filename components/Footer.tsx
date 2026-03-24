import { metaLocation } from "@/lib/mock-data";

export function Footer() {
  const loc = metaLocation;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/60 text-center py-14 px-8 relative z-1 border-t-[3px] border-dashed border-white/10 overflow-hidden">
      {/* Floating bg kanji */}
      <span className="absolute font-jp text-white/[0.03] text-[9rem] top-[-20px] left-[5%] pointer-events-none animate-float-wild" style={{ animationDuration: "8s" }}>寿</span>
      <span className="absolute font-jp text-white/[0.03] text-[7rem] bottom-[-10px] right-[6%] pointer-events-none animate-float-wild" style={{ animationDuration: "10s", animationDelay: "3s" }}>司</span>

      <div className="relative z-1">
        {/* Brand name — neon on dark = ghostly glow */}
        <span className="font-display text-[2.2rem] text-blush block mb-0.5 animate-wobble animate-neon-glow"
          style={{ animationDuration: "3s" }}>
          🍣 Haru Sushi
        </span>

        <p className="font-jp text-xs tracking-[0.22em] opacity-40 mb-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          はるすし — prisvärd hämtsushi
        </p>

        <p className="text-sm mb-3 animate-slide-left" style={{ animationDelay: "0.35s" }}>
          {loc.address}, {loc.zipcode} {loc.city}
        </p>

        {/* Triple hearts — staggered heartbeat */}
        <div className="text-xl my-4 flex justify-center gap-3">
          <span className="animate-heartbeat inline-block" style={{ animationDelay: "0s" }}>🍣</span>
          <span className="animate-heartbeat inline-block" style={{ animationDelay: "0.35s" }}>💛</span>
          <span className="animate-heartbeat inline-block" style={{ animationDelay: "0.7s" }}>🍣</span>
        </div>

        <p className="text-xs opacity-40 animate-fade-up-slow" style={{ animationDelay: "0.5s" }}>
          &copy; {year} Haru Sushi. Gjord med kärlek.
        </p>
      </div>
    </footer>
  );
}
