"use client";

import { useState } from "react";
import { menuItems } from "@/lib/mock-data";
import { MENU_ITEM_CATEGORY, MENU_ITEM_ICON } from "@/lib/constants";
import { cn } from "@/lib/cn";

const CATEGORY_LIST = Object.entries(MENU_ITEM_CATEGORY).map(([, value]) => value);

export default function Meny() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_LIST[0]);

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-2 lg:py-20 px-8">
      <div className="max-w-250 mx-auto">
        <header className="text-center mb-12 animate-fade-up">
          <p className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-salmon mb-2">
            Vår Meny
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-dark leading-[1.1]">
            Menyn
          </h1>
          <p className="font-jp text-[0.9rem] text-light mt-1 tracking-[0.1em]">
            メニュー
          </p>
        </header>

        <div className="flex gap-1.5 flex-wrap justify-center mb-8">
          {CATEGORY_LIST.map((cat) => (
            <button
              key={cat}
              className={cn(
                "py-1.5 px-4 rounded-full font-body font-bold text-[0.82rem] cursor-pointer border-2 transition-all duration-200",
                cat === activeCategory
                  ? "bg-cherry text-white border-solid border-cherry"
                  : "bg-white text-mid border-dashed border-border hover:-translate-y-0.5 hover:border-cherry hover:text-cherry"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-border transition-all duration-300 hover:-translate-y-[3px] hover:-rotate-[0.5deg] hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)] group"
            >
              <div className="flex items-start gap-2.5 mb-2">
                <span className="text-2xl leading-none shrink-0 transition-transform duration-300 group-hover:animate-wiggle">
                  {MENU_ITEM_ICON[item.iconId] || item.iconId}
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
                <span className="font-display text-base text-cherry whitespace-nowrap shrink-0">
                  {item.price} kr
                </span>
              </div>
              {item.description && (
                <p className="text-[0.82rem] text-light leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.tags.length > 0 && (
                <div className="flex gap-1 flex-wrap mt-2.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.68rem] font-bold py-0.5 px-2 rounded-full tracking-[0.03em] bg-cream text-dark"
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
