"use client";

import { useState } from "react";
import { menuItems } from "@/lib/mock-data";
import { MENU_ITEM_CATEGORY, MENU_ITEM_ICON } from "@/lib/constants";
import { cn } from "@/lib/cn";

const CATEGORY_LIST = Object.entries(MENU_ITEM_CATEGORY).map(([, value]) => value);

function tagClass(tag: string) {
  if (tag === "Vegetarisk") return "tag-veg";
  if (tag === "Hot") return "tag-hot";
  if (tag === "Rå") return "tag-raw";
  if (tag === "Dryck") return "tag-drink";
  return "tag-other";
}

export default function Meny() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_LIST[0]);
  const [clickedCat, setClickedCat] = useState<string | null>(null);

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    setClickedCat(cat);
    setActiveCategory(cat);
    setTimeout(() => setClickedCat(null), 800);
  };

  return (
    <section className="py-2 lg:py-16 px-8 relative overflow-hidden" style={{ background: "var(--color-cream)" }}>
      {/* Bg kanji */}
      <span className="absolute font-jp text-cherry/[0.04] text-[8rem] top-[3%] right-[2%] pointer-events-none animate-float-wild" style={{ animationDuration: "9s" }}>食</span>
      <span className="absolute font-jp text-cherry/[0.03] text-[6rem] bottom-[5%] left-[1%] pointer-events-none animate-float-wild" style={{ animationDuration: "11s", animationDelay: "2s" }}>品</span>

      <div className="max-w-250 mx-auto relative z-1">
        <header className="text-center mb-10">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-salmon mb-2 animate-slide-up">
            🍽️ Vad vill du äta?
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] text-dark leading-[1.1] animate-pop-in animate-neon-glow" style={{ animationDelay: "0.1s" }}>
            Vår Meny
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.1em] animate-fade-up" style={{ animationDelay: "0.25s" }}>
            メニュー
          </p>
        </header>

        {/* Category buttons — staggered nav-link-in */}
        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {CATEGORY_LIST.map((cat, i) => (
            <button
              key={cat}
              className={cn(
                "py-2 px-4 rounded-full font-body font-extrabold text-[0.82rem] cursor-pointer border-2 transition-all duration-200 animate-nav-link-in",
                cat === activeCategory
                  ? "bg-cherry text-white border-cherry shadow-[0_4px_14px_rgba(201,64,64,0.35)] animate-glow-pulse scale-[1.08]"
                  : "bg-white text-mid border-border hover:-translate-y-1.5 hover:border-cherry hover:text-cherry hover:shadow-[0_6px_16px_rgba(201,64,64,0.18)] hover:scale-[1.05] animate-rubber-band",
                clickedCat === cat && "animate-elastic-pop"
              )}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — remounts on category change → all cards animate in */}
        <div key={activeCategory} className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border-2 border-border transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.8deg] hover:shadow-[0_18px_40px_rgba(46,31,31,0.12)] hover:border-salmon group relative overflow-hidden animate-bounce-down animate-jello"
              style={{ animationDelay: `${i * 0.055}s` }}
            >
              {/* Shimmer top bar on hover */}
              <div className="accent-bar" />

              <div className="flex items-start gap-2.5 mb-2">
                {/* Icon — tada on hover, zoom-spin on entrance */}
                <span className="text-2xl leading-none shrink-0 transition-transform duration-300 group-hover:animate-tada animate-zoom-spin"
                  style={{ animationDelay: `${0.25 + i * 0.05}s` }}>
                  {MENU_ITEM_ICON[item.iconId] || item.iconId}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[0.95rem] text-dark leading-[1.3] animate-slide-up"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}>
                    {item.label}
                  </h3>
                  {item.subDescription && (
                    <span className="block font-jp text-[0.72rem] text-light font-normal mt-0.5 animate-fade-up"
                      style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                      {item.subDescription}
                    </span>
                  )}
                </div>
                {/* Price — zoom pulse + heartbeat on group hover */}
                <span className="font-display text-base text-cherry whitespace-nowrap shrink-0 group-hover:animate-heartbeat animate-zoom-pulse"
                  style={{ animationDelay: `${0.15 + i * 0.05}s`, animationDuration: "3s" }}>
                  {item.price} kr
                </span>
              </div>

              {item.description && (
                <p className="text-[0.82rem] text-light leading-relaxed animate-fade-up"
                  style={{ animationDelay: `${0.45 + i * 0.05}s` }}>
                  {item.description}
                </p>
              )}

              {item.tags.length > 0 && (
                <div className="flex gap-1 flex-wrap mt-2.5">
                  {item.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={cn(
                        "text-[0.68rem] font-bold py-0.5 px-2 rounded-full tracking-[0.05em] transition-all duration-200 hover:scale-115 hover:-translate-y-0.5 cursor-default animate-elastic-pop",
                        tagClass(tag)
                      )}
                      style={{ animationDelay: `${0.5 + i * 0.05 + ti * 0.06}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
