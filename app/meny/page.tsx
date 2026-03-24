"use client";

import { useState } from "react";
import { menuItems, categoryOrder } from "@/lib/mock-data";
import type { Allergen } from "@/lib/mock-data";
import { MENU_ITEM_ICON } from "@/lib/constants";
import { cn } from "@/lib/cn";

// Only show categories that have items
const CATEGORY_LIST = categoryOrder.filter((cat) =>
  menuItems.some((item) => item.category === cat)
);

const ALLERGEN_ICON: Record<Allergen, string> = {
  Gluten:   "🌾",
  Skaldjur: "🦐",
  Fisk:     "🐟",
  Ägg:      "🥚",
  Soja:     "🫘",
  Sesam:    "🌱",
  Mjölk:    "🥛",
};

const ALLERGEN_COLOR: Record<Allergen, string> = {
  Gluten:   "bg-amber-100 text-amber-800 border-amber-200",
  Skaldjur: "bg-pink-100 text-pink-800 border-pink-200",
  Fisk:     "bg-blue-100 text-blue-800 border-blue-200",
  Ägg:      "bg-yellow-100 text-yellow-800 border-yellow-200",
  Soja:     "bg-green-100 text-green-800 border-green-200",
  Sesam:    "bg-orange-100 text-orange-800 border-orange-200",
  Mjölk:    "bg-indigo-100 text-indigo-800 border-indigo-200",
};

function tagClass(tag: string) {
  if (tag === "Vegansk")  return "bg-moss/15 text-moss border border-moss/30";
  if (tag === "Signatur") return "bg-cherry/10 text-cherry border border-cherry/20";
  if (tag === "Populär")  return "bg-salmon/15 text-salmon border border-salmon/20";
  if (tag === "Premium")  return "bg-blush/40 text-mid border border-blush";
  return "bg-white text-light border border-border";
}

export default function Meny() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_LIST[0]);
  const [activeAllergens, setActiveAllergens] = useState<Set<Allergen>>(new Set());

  const toggleAllergen = (a: Allergen) => {
    setActiveAllergens((prev) => {
      const next = new Set(prev);
      next.has(a) ? next.delete(a) : next.add(a);
      return next;
    });
  };

  const filtered = menuItems.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (activeAllergens.size === 0) return true;
    // hide items that contain any selected allergen
    return !item.allergens?.some((a) => activeAllergens.has(a));
  });

  const allAllergens = Object.keys(ALLERGEN_ICON) as Allergen[];

  return (
    <section className="py-2 lg:py-16 px-8" style={{ background: "var(--color-cream)" }}>
      <div className="max-w-250 mx-auto">
        <header className="text-center mb-10 animate-fade-up">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-salmon mb-2">
            🍽️ Vad vill du äta?
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] text-dark leading-[1.1]">
            Vår Meny
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.1em]">
            メニュー
          </p>
        </header>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-6">
          {CATEGORY_LIST.map((cat) => (
            <button
              key={cat}
              className={cn(
                "py-1.5 px-4 rounded-full font-body font-extrabold text-[0.82rem] cursor-pointer border-2 transition-all duration-200",
                cat === activeCategory
                  ? "bg-cherry text-white border-cherry shadow-[0_4px_12px_rgba(201,64,64,0.25)]"
                  : "bg-white text-mid border-border hover:-translate-y-0.5 hover:border-cherry hover:text-cherry"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Allergen filter */}
        <div className="mb-8">
          <p className="text-center text-[0.75rem] font-extrabold tracking-[0.1em] uppercase text-light mb-3">
            Filtrera bort allergener
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {allAllergens.map((a) => (
              <button
                key={a}
                onClick={() => toggleAllergen(a)}
                className={cn(
                  "flex items-center gap-1.5 py-1 px-3 rounded-full text-[0.75rem] font-bold border transition-all duration-200",
                  activeAllergens.has(a)
                    ? "bg-dark text-white border-dark shadow-md scale-105"
                    : cn(ALLERGEN_COLOR[a], "hover:scale-105")
                )}
              >
                <span>{ALLERGEN_ICON[a]}</span>
                <span>{a}</span>
              </button>
            ))}
            {activeAllergens.size > 0 && (
              <button
                onClick={() => setActiveAllergens(new Set())}
                className="py-1 px-3 rounded-full text-[0.75rem] font-bold border border-dashed border-light text-light hover:border-cherry hover:text-cherry transition-colors duration-200"
              >
                Rensa filter
              </button>
            )}
          </div>
          {activeAllergens.size > 0 && (
            <p className="text-center text-[0.72rem] text-light mt-2">
              Visar rätter utan:{" "}
              <span className="font-bold text-dark">
                {[...activeAllergens].join(", ")}
              </span>
            </p>
          )}
        </div>

        {/* Menu grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-light font-body py-16">
            Inga rätter matchar ditt filter i denna kategori.
          </p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border-2 border-border transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:shadow-[0_12px_32px_rgba(46,31,31,0.1)] hover:border-blush group relative overflow-hidden"
              >
                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush to-salmon opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div className="flex items-start gap-2.5 mb-2">
                  <span className="text-2xl leading-none shrink-0 transition-transform duration-300 group-hover:animate-wiggle">
                    {MENU_ITEM_ICON[item.iconId ?? ""] || "🍣"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-[0.95rem] text-dark leading-[1.3]">
                      {item.label}
                    </h3>
                    {item.subDescription && (
                      <span className="block font-jp text-[0.72rem] text-light font-normal mt-0.5">
                        {item.subDescription}
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-base text-cherry whitespace-nowrap">
                      {item.price} kr
                    </span>
                    {item.price2 && (
                      <span className="block text-[0.7rem] text-light">
                        / {item.price2} kr
                      </span>
                    )}
                  </div>
                </div>

                {item.description && (
                  <p className="text-[0.82rem] text-light leading-relaxed mb-2">
                    {item.description}
                  </p>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex gap-1 flex-wrap mb-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "text-[0.68rem] font-bold py-0.5 px-2 rounded-full tracking-[0.05em]",
                          tagClass(tag)
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Allergens */}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="flex gap-1 flex-wrap mt-auto pt-2.5 border-t border-border/60">
                    {item.allergens.map((a) => (
                      <span
                        key={a}
                        title={a}
                        className={cn(
                          "flex items-center gap-1 text-[0.68rem] font-bold py-0.5 px-2 rounded-full border",
                          ALLERGEN_COLOR[a]
                        )}
                      >
                        <span>{ALLERGEN_ICON[a]}</span>
                        <span>{a}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
