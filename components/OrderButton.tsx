import { metaContact } from "@/lib/mock-data";

export function OrderButton() {
  return (
    <a
      href={metaContact.orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:hidden inline-flex items-center gap-2 py-3 px-6 rounded-full font-extrabold text-[0.95rem] bg-sage text-dark shadow-[0_4px_20px_rgba(168,196,154,0.55)] transition-all duration-200 hover:scale-[1.06] hover:shadow-[0_8px_28px_rgba(168,196,154,0.65)]"
    >
      🛒 Beställ
    </a>
  );
}
