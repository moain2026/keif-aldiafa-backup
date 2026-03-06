"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { PARTNER_LOGOS } from "@/lib/images";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const partners = [
  { id: 1, name: "أرامكو السعودية", nameEn: "Saudi Aramco", logo: PARTNER_LOGOS[0], color: "#00A651", bg: "#001a0d" },
  { id: 2, name: "مجموعة بن لادن", nameEn: "Saudi Binladin Group", logo: PARTNER_LOGOS[16], color: "#B8860B", bg: "#1a1305" },
  { id: 3, name: "وزارة الطاقة", nameEn: "Ministry of Energy", logo: PARTNER_LOGOS[15], color: "#00BFFF", bg: "#00101a" },
  { id: 4, name: "النادي الأهلي", nameEn: "Al-Ahli FC", logo: PARTNER_LOGOS[5], color: "#009C5B", bg: "#001a0e" },
  { id: 5, name: "شركة الآفاق", nameEn: "Al Afaq", logo: PARTNER_LOGOS[21], color: "#C0A030", bg: "#1a1408" },
  { id: 6, name: "جامعة كاساو", nameEn: "Kasau University", logo: PARTNER_LOGOS[23], color: "#5B9BD5", bg: "#000d1a" },
  { id: 7, name: "شريك 1", nameEn: "Partner", logo: PARTNER_LOGOS[7], color: "#E8C84A", bg: "#1a1600" },
  { id: 8, name: "شريك 2", nameEn: "Partner", logo: PARTNER_LOGOS[8], color: "#FF6B35", bg: "#1a0c00" },
  { id: 9, name: "شريك 3", nameEn: "Partner", logo: PARTNER_LOGOS[9], color: "#7C3AED", bg: "#0d0018" },
  { id: 10, name: "شريك 4", nameEn: "Partner", logo: PARTNER_LOGOS[10], color: "#B8860B", bg: "#1a1305" },
  { id: 11, name: "شريك 5", nameEn: "Partner", logo: PARTNER_LOGOS[11], color: "#00A651", bg: "#001a0d" },
  { id: 12, name: "شريك 6", nameEn: "Partner", logo: PARTNER_LOGOS[12], color: "#D4A017", bg: "#1a1408" },
  { id: 13, name: "شريك 7", nameEn: "Partner", logo: PARTNER_LOGOS[13], color: "#00BFFF", bg: "#00101a" },
  { id: 14, name: "شريك 8", nameEn: "Partner", logo: PARTNER_LOGOS[14], color: "#E8C84A", bg: "#1a1600" },
  { id: 15, name: "شريك 9", nameEn: "Partner", logo: PARTNER_LOGOS[17], color: "#FF6B35", bg: "#1a0c00" },
  { id: 16, name: "شريك 10", nameEn: "Partner", logo: PARTNER_LOGOS[18], color: "#5B9BD5", bg: "#000d1a" },
];

function PartnerCard({ partner }: { partner: (typeof partners)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex-shrink-0 select-none" style={{ width: "clamp(130px, 35vw, 200px)" }}>
      <motion.div
        className="relative h-28 sm:h-32 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-grab active:cursor-grabbing transition-all duration-400"
        style={{
          background: hovered ? `linear-gradient(135deg, ${partner.bg}, rgba(25,20,8,0.9))` : "rgba(20,16,6,0.7)",
          border: hovered ? `1px solid ${partner.color}55` : "1px solid rgba(184,134,11,0.1)",
          boxShadow: hovered ? `0 8px 30px ${partner.color}22` : "none",
        }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center p-1.5" style={{ background: "rgba(255,255,255,0.05)" }}>
          <ImageWithFallback
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-center px-3">
          <p style={{ color: hovered ? "#F5F5DC" : "rgba(245,245,220,0.4)", fontSize: "0.7rem", fontWeight: 600, transition: "color 0.3s", lineHeight: 1.3 }}>{partner.name}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function PartnersSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl", loop: true, align: "center", dragFree: true, containScroll: "trimSnaps" });
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", () => setIsDragging(true));
    emblaApi.on("pointerUp", () => setIsDragging(false));
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", () => setIsDragging(true));
      emblaApi.off("pointerUp", () => setIsDragging(false));
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-[#B8860B] mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ نثق بهم ويثقون بنا ✦</p>
          <h2 className="text-[#F5F5DC] text-center" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.3, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>شركاء النجاح</h2>
          <div className="mt-4 mb-1 rounded-full mx-auto" style={{ width: 90, height: 2, background: "linear-gradient(90deg, transparent, #B8860B 30%, #D4A017 60%, transparent)" }} />
          <p className="text-[#F5F5DC]/40 text-sm mt-4">اسحب يميناً أو يساراً لاستعراض شركائنا</p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
        <div ref={emblaRef} className="overflow-hidden" style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          <div className="flex gap-4 px-4">
            {[...partners, ...partners].map((partner, i) => (
              <PartnerCard key={`${partner.id}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8 relative z-20">
          <motion.button onClick={scrollPrev} whileTap={{ scale: 0.92 }} className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: canScrollPrev ? "rgba(184,134,11,0.12)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(184,134,11,0.2)", color: canScrollPrev ? "#B8860B" : "rgba(245,245,220,0.2)" }} aria-label="السابق">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </motion.button>
          <div className="flex items-center gap-2 px-4 rounded-full" style={{ background: "rgba(184,134,11,0.06)", border: "1px solid rgba(184,134,11,0.12)" }}>
            <span className="text-[#B8860B]/50 text-xs">اسحب للتصفح</span>
          </div>
          <motion.button onClick={scrollNext} whileTap={{ scale: 0.92 }} className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: canScrollNext ? "rgba(184,134,11,0.12)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(184,134,11,0.2)", color: canScrollNext ? "#B8860B" : "rgba(245,245,220,0.2)" }} aria-label="التالي">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
