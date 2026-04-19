"use client";

import { metaContact, orderDisable } from "@/lib/mock-data";

interface OrderButtonProps {
  className?: string;
}

export function OrderButton({ className }: OrderButtonProps = {}) {
  const handleClick = () => {
    if (orderDisable) return;

    window.open(metaContact.orderUrl, "_blank", "noopener,noreferrer");
  };

  const defaultClassName = `sm:hidden inline-flex items-center gap-2 py-3 px-6 rounded-full font-extrabold text-[0.95rem] bg-sage text-dark shadow-[0_4px_20px_rgba(168,196,154,0.55)] transition-all duration-200
        ${orderDisable
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-[1.06] hover:shadow-[0_8px_28px_rgba(168,196,154,0.65)]"
        }`;

  return (
    <button
      onClick={handleClick}
      disabled={orderDisable}
      className={className
        ? `${className}${orderDisable ? " opacity-50 cursor-not-allowed pointer-events-none" : ""}`
        : defaultClassName}
    >
      🛒 Beställ
    </button>
  );
}