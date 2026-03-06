"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  COFFEE_IMG as coffeeImg,
  TEA_IMG as teaImg,
  EQUIP_IMG as equipImg,
  DATES_IMG as datesImg,
  FOOD_IMG as foodImg,
} from "@/lib/images";

const WA = "966535636933";

interface OfferingItem { name: string; description: string; img: string; }
interface CategoryData { id: string; label: string; icon: string; description: string; items: OfferingItem[]; }

const categories: CategoryData[] = [
  {
    id: "hot", label: "المشروبات الحارة", icon: "☕", description: "قهوة سعودية أصيلة وشاي فاخر",
    items: [
      { name: "القهوة السعودية", description: "قهوة عربية أصيلة مع الهيل والزعفران", img: coffeeImg },
      { name: "الشاي الأحمر", description: "شاي فاخر بنكهات متعددة", img: teaImg },
      { name: "القهوة التركية", description: "قهوة تركية بالوجه التقليدي", img: coffeeImg },
      { name: "شاي الأعشاب", description: "أعشاب طبيعية منتقاة بعناية", img: teaImg },
      { name: "الكرك", description: "شاي كرك بالحليب والتوابل", img: teaImg },
      { name: "الشوكولاتة الساخنة", description: "شوكولاتة فاخرة ساخنة", img: coffeeImg },
    ],
  },
  {
    id: "cold", label: "المشروبات الباردة", icon: "🧊", description: "مشروبات منعشة وباردة",
    items: [
      { name: "عصائر طبيعية", description: "عصائر فواكه طازجة متنوعة", img: teaImg },
      { name: "موهيتو", description: "موهيتو منعش بنكهات متعددة", img: teaImg },
      { name: "سموذي فواكه", description: "سموذي طازج من أفضل الفواكه", img: teaImg },
      { name: "آيس لاتيه", description: "لاتيه مثلج بنكهات مختلفة", img: coffeeImg },
    ],
  },
  {
    id: "dates", label: "التمور والمكسرات", icon: "🌴", description: "تمور فاخرة ومكسرات منتقاة",
    items: [
      { name: "تمور سكري", description: "تمور سكري فاخرة من القصيم", img: datesImg },
      { name: "تمور عجوة", description: "عجوة المدينة المنورة الأصلية", img: datesImg },
      { name: "تمور مجدول", description: "تمور مجدول محشوة بالمكسرات", img: datesImg },
      { name: "مكسرات مشكلة", description: "تشكيلة مكسرات محمصة فاخرة", img: datesImg },
    ],
  },
  {
    id: "sweets", label: "الحلويات", icon: "🍰", description: "حلويات شرقية وغربية فاخرة",
    items: [
      { name: "بقلاوة فاخرة", description: "بقلاوة تركية أصلية بالفستق", img: foodImg },
      { name: "كنافة نابلسية", description: "كنافة بالجبن والقطر الأصلية", img: foodImg },
      { name: "معمول", description: "معمول بالتمر والفستق", img: foodImg },
      { name: "ميني كيك", description: "كيكات صغيرة بنكهات متنوعة", img: foodImg },
    ],
  },
  {
    id: "pastry", label: "المعجنات", icon: "🥐", description: "معجنات طازجة متنوعة",
    items: [
      { name: "كرواسان", description: "كرواسان فرنسي طازج", img: foodImg },
      { name: "سمبوسة", description: "سمبوسة بحشوات متنوعة", img: foodImg },
      { name: "فطائر", description: "فطائر ساخنة طازجة", img: foodImg },
    ],
  },
  {
    id: "equipment", label: "تأجير المعدات", icon: "⚙️", description: "معدات ضيافة فاخرة للإيجار",
    items: [
      { name: "ماكينات القهوة", description: "ماكينات إسبريسو احترافية", img: equipImg },
      { name: "سخّانات", description: "سخانات مشروبات متعددة", img: equipImg },
      { name: "أواني تقديم", description: "أواني وصحون تقديم فاخرة", img: equipImg },
      { name: "طاولات بوفيه", description: "طاولات بوفيه أنيقة", img: equipImg },
    ],
  },
];

export default function OfferingsClient() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedItem, setSelectedItem] = useState<OfferingItem | null>(null);
  const currentCat = categories[activeCategory];

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    if (selectedItem) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div>
      <Breadcrumbs />
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(184,134,11,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ تقديماتنا ✦</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[#F5F5DC] mb-4" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>تقديمات فاخرة<br /><span className="gold-gradient-text">تليق بضيوفكم</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">أرقى المشروبات والتقديمات من قهوة سعودية أصيلة وشاي فاخر وحلويات شرقية وغربية</motion.p>
        </div>
      </section>

      {/* TABS */}
      <section className="px-4 mb-12">
        <div className="max-w-5xl mx-auto flex justify-center gap-2 flex-wrap">
          {categories.map((cat, i) => (
            <motion.button key={cat.id} whileTap={{ scale: 0.95 }} onClick={() => setActiveCategory(i)} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-300" style={{ background: activeCategory === i ? "rgba(184,134,11,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${activeCategory === i ? "rgba(184,134,11,0.4)" : "rgba(184,134,11,0.1)"}`, color: activeCategory === i ? "#B8860B" : "rgba(245,245,220,0.5)", fontWeight: activeCategory === i ? 700 : 400 }}>
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ITEMS GRID */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentCat.items.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} onClick={() => setSelectedItem(item)} className="relative rounded-2xl overflow-hidden group cursor-pointer card-luxury" style={{ aspectRatio: "3/4" }}>
                    <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 img-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-[#F5F5DC]" style={{ fontSize: "1rem", fontWeight: 700 }}>{item.name}</h3>
                      <p className="text-[#F5F5DC]/50 text-xs mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 30 }} onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full rounded-3xl overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.98), rgba(15,12,5,0.99))", border: "1px solid rgba(184,134,11,0.25)", boxShadow: "0 40px 80px rgba(0,0,0,0.8)" }}>
              <button onClick={() => setSelectedItem(null)} className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-[#F5F5DC]/60 hover:text-[#F5F5DC]" style={{ background: "rgba(0,0,0,0.5)" }}>✕</button>
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback src={selectedItem.img} alt={selectedItem.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 img-overlay" />
              </div>
              <div className="p-6">
                <h2 className="text-[#F5F5DC] mb-2" style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "'Tajawal', sans-serif" }}>{selectedItem.name}</h2>
                <p className="text-[#F5F5DC]/60 text-sm mb-6">{selectedItem.description}</p>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${selectedItem.name}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-white" style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }}>
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  استفسر عبر واتساب
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
