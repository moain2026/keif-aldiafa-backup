"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  HERO_IMG as heroImg,
  COFFEE_IMG as coffeeImg,
  CATERING_IMG as cateringImg,
  TEA_IMG as teaImg,
  EVENT_IMG as eventImg,
  WAITER_IMG as waiterImg,
  EQUIP_IMG as equipImg,
  PORTFOLIO_IMG as portfolioImg,
  KITCHEN_IMG as kitchenImg,
  DATES_IMG as datesImg,
  FOOD_IMG as foodImg,
} from "@/lib/images";

const WA = "966535636933";

type FilterType = "all" | "events" | "hospitality" | "food" | "behind";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: FilterType;
  tags: string[];
}

const projects: Project[] = [
  { id: 1, image: eventImg, title: "حفل زفاف فاخر", description: "ضيافة متكاملة لحفل زفاف ٣٠٠ ضيف بأرقى التقديمات", category: "events", tags: ["زفاف", "ضيافة", "فاخر"] },
  { id: 2, image: coffeeImg, title: "القهوة السعودية الأصيلة", description: "تقديم القهوة السعودية بأسلوب تراثي في مؤتمر دولي", category: "hospitality", tags: ["قهوة", "تراث", "مؤتمر"] },
  { id: 3, image: cateringImg, title: "مؤتمر الأعمال الدولي", description: "ضيافة كاملة لمؤتمر ٥٠٠ مشارك على مدار ثلاثة أيام", category: "events", tags: ["مؤتمر", "أعمال", "دولي"] },
  { id: 4, image: teaImg, title: "جلسة شاي ملكية", description: "جلسة شاي فاخرة بأفضل أنواع الشاي العالمي", category: "hospitality", tags: ["شاي", "فاخر", "ملكي"] },
  { id: 5, image: waiterImg, title: "حفل تخرج جامعي", description: "فريق مضيفين محترف لحفل تخرج بجامعة الملك سعود", category: "events", tags: ["تخرج", "جامعة", "احتفال"] },
  { id: 6, image: datesImg, title: "تمور فاخرة محشوة", description: "تشكيلة تمور فاخرة محشوة بالمكسرات واللوز", category: "food", tags: ["تمور", "حلويات", "فاخر"] },
  { id: 7, image: equipImg, title: "معدات التقديم", description: "أحدث معدات التقديم والتجهيز لمناسبة حكومية كبرى", category: "behind", tags: ["معدات", "تجهيز", "احترافي"] },
  { id: 8, image: portfolioImg, title: "حفل افتتاح مشروع", description: "ضيافة فاخرة لحفل افتتاح مشروع عقاري كبير", category: "events", tags: ["افتتاح", "عقاري", "فاخر"] },
  { id: 9, image: kitchenImg, title: "كواليس التحضير", description: "نظرة خلف الكواليس في مطبخنا المركزي", category: "behind", tags: ["كواليس", "تحضير", "جودة"] },
  { id: 10, image: foodImg, title: "بوفيه متكامل", description: "تجهيز بوفيه فاخر متكامل بأصناف متنوعة", category: "food", tags: ["بوفيه", "متكامل", "أصناف"] },
  { id: 11, image: heroImg, title: "فعالية موسم الرياض", description: "مشاركتنا في تقديم ضيافة موسم الرياض الثالث", category: "events", tags: ["موسم", "رياض", "فعالية"] },
  { id: 12, image: coffeeImg, title: "ضيافة VIP", description: "ضيافة خاصة لكبار الضيوف في مناسبة حكومية", category: "hospitality", tags: ["VIP", "حكومي", "خاص"] },
];

const filters: { key: FilterType; label: string; icon: string }[] = [
  { key: "all", label: "الكل", icon: "◎" },
  { key: "events", label: "المناسبات", icon: "🎪" },
  { key: "hospitality", label: "الضيافة", icon: "☕" },
  { key: "food", label: "التقديمات", icon: "🍽" },
  { key: "behind", label: "خلف الكواليس", icon: "🎬" },
];

function PortfolioItem({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const handleMouseDown = () => { longPressTimer.current = setTimeout(() => setShowModal(true), 500); };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} onClick={() => setShowModal(true)} onMouseDown={handleMouseDown} onMouseUp={clearTimer} onMouseLeave={clearTimer} onTouchStart={handleMouseDown} onTouchEnd={clearTimer} onKeyDown={handleKeyDown} tabIndex={0} role="button" aria-label={`عرض تفاصيل ${project.title}`} className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid mb-4 focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]">
        <ImageWithFallback src={project.image} alt={project.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ aspectRatio: project.id % 3 === 0 ? "3/4" : project.id % 2 === 0 ? "4/5" : "1/1" }} loading="lazy" />
        <div className="absolute inset-0 img-overlay" />
        <div className="absolute inset-0 bg-[#B8860B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full text-[#B8860B]" style={{ fontSize: "0.6rem", background: "rgba(10,8,2,0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(184,134,11,0.3)" }}>{tag}</span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-[#F5F5DC]" style={{ fontSize: "0.95rem", fontWeight: 700 }}>{project.title}</h3>
          <p className="text-[#F5F5DC]/50 text-xs mt-1">{project.description}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} onClick={(e) => e.stopPropagation()} className="relative max-w-lg w-full rounded-3xl overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.98), rgba(15,12,5,0.99))", border: "1px solid rgba(184,134,11,0.25)", boxShadow: "0 40px 80px rgba(0,0,0,0.8)" }}>
              <button onClick={() => setShowModal(false)} className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-[#F5F5DC]/60 hover:text-[#F5F5DC]" style={{ background: "rgba(0,0,0,0.5)" }}>✕</button>
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 img-overlay" />
              </div>
              <div className="p-6">
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[#B8860B] text-xs" style={{ background: "rgba(184,134,11,0.1)", border: "1px solid rgba(184,134,11,0.2)" }}>{tag}</span>
                  ))}
                </div>
                <h2 className="text-[#F5F5DC] mb-2" style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "'Tajawal', sans-serif" }}>{project.title}</h2>
                <p className="text-[#F5F5DC]/60 text-sm mb-6">{project.description}</p>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`مرحباً، رأيت مشروع "${project.title}" وأود حجز خدمة مشابهة.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-white" style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }}>
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  احجز خدمة مشابهة
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <Breadcrumbs />
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(184,134,11,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ أعمالنا ✦</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[#F5F5DC] mb-4" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>معرض <span className="gold-gradient-text">أعمالنا</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">لمحة عن مناسباتنا السابقة وخدماتنا المتميزة التي قدمناها لعملائنا الكرام</motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-4 mb-12">
        <div className="max-w-5xl mx-auto flex justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <motion.button key={f.key} whileTap={{ scale: 0.95 }} onClick={() => setActiveFilter(f.key)} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-300" style={{ background: activeFilter === f.key ? "rgba(184,134,11,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${activeFilter === f.key ? "rgba(184,134,11,0.4)" : "rgba(184,134,11,0.1)"}`, color: activeFilter === f.key ? "#B8860B" : "rgba(245,245,220,0.5)", fontWeight: activeFilter === f.key ? 700 : 400 }}>
              <span>{f.icon}</span>
              <span>{f.label}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="columns-2 md:columns-3 gap-4">
              {filtered.map((project) => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center p-8 sm:p-12 rounded-3xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <h2 className="text-[#F5F5DC] mb-3" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, fontFamily: "'Tajawal', sans-serif" }}>أعجبك ما رأيت؟</h2>
              <p className="text-[#F5F5DC]/50 text-sm mb-6 max-w-lg mx-auto">تواصل معنا الآن ودعنا نصنع لك مناسبة استثنائية</p>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، لقد اطلعت على معرض أعمالكم وأرغب في ترتيب مماثل.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white" style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                احجز الآن عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
