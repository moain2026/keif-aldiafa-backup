"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PartnersSlider } from "@/components/PartnersSlider";

import {
  HERO_IMG,
  COFFEE_IMG,
  CATERING_IMG,
  TEA_IMG,
  EVENT_IMG,
  WAITER_IMG,
  EQUIP_IMG,
  GALA_IMG,
  HOTEL_IMG,
  DATES_IMG,
} from "@/lib/images";
const WA = "966535636933";

const whyCards = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>, title: "خبرة متميزة", desc: "أكثر من ٨ سنوات في تقديم خدمات الضيافة الفاخرة للمناسبات الكبرى والمحافل الرسمية" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, title: "فريق احترافي", desc: "كوادر مدربة على أعلى معايير الضيافة الدولية والأصالة العربية" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>, title: "تقديمات فاخرة", desc: "أرقى المشروبات والتقديمات من قهوة سعودية وشاي وحلويات فاخرة" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, title: "تغطية المملكة", desc: "نصل إلى جميع مناطق المملكة بأسطول من المعدات الفاخرة" },
];

const moments = [
  { img: COFFEE_IMG, title: "القهوة السعودية الأصيلة", category: "مشروبات حارة" },
  { img: CATERING_IMG, title: "تجهيزات المناسبات الكبرى", category: "خدمات الضيافة" },
  { img: TEA_IMG, title: "جلسات الشاي الفاخرة", category: "مشروبات" },
  { img: WAITER_IMG, title: "فريق الضيافة المحترف", category: "الخدمات الرجالية" },
  { img: EVENT_IMG, title: "حفلات الزفاف الفاخرة", category: "مناسبات" },
  { img: EQUIP_IMG, title: "معدات التقديم الراقية", category: "المعدات" },
];

const testimonials = [
  { name: "أحمد العمري", role: "مدير فعاليات · أرامكو السعودية", text: "كيف الضيافة رفعت مستوى مناسباتنا إلى آفاق جديدة. الاحترافية والفخامة في كل تفصيلة.", rating: 5, avatar: "أ" },
  { name: "نورة الشمري", role: "صاحبة مناسبة · الرياض", text: "تجربة لا تُنسى، من أول لحظة حتى آخر لحظة. الفريق محترف وودود والتقديمات رائعة.", rating: 5, avatar: "ن" },
  { name: "فيصل الزهراني", role: "رجل أعمال · جدة", text: "اعتمدنا على كيف الضيافة في جميع فعاليات شركتنا منذ سنوات. لم نخيب ظننا أبداً.", rating: 5, avatar: "ف" },
];

const stats = [
  { num: "+500", label: "مناسبة ناجحة" },
  { num: "+50", label: "شريك موثوق" },
  { num: "+200", label: "عميل راضٍ" },
  { num: "8+", label: "سنوات خبرة" },
];

function SectionHeader({ label, title, center = true }: { label?: string; title: string; center?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`mb-14 ${center ? "text-center" : ""}`}>
      {label && <p className={`text-[#B8860B] mb-3 ${center ? "text-center" : ""}`} style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ {label} ✦</p>}
      <h2 className={`text-[#F5F5DC] ${center ? "text-center" : ""}`} style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.3, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>{title}</h2>
      <div className="mt-4 mb-1 rounded-full" style={{ width: center ? 90 : 70, height: 2, background: "linear-gradient(90deg, transparent, #B8860B 30%, #D4A017 60%, transparent)", margin: "12px auto 0" }} />
    </motion.div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-[#B8860B]" style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }} animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15], scale: [1, 1.5, 1] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

function MomentCard({ m, i }: { m: (typeof moments)[0]; i: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: i === 0 || i === 3 ? "3/4" : "4/3" }}>
      <ImageWithFallback src={m.img} alt={m.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" loading="lazy" />
      <div className="absolute inset-0 img-overlay" />
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[#B8860B]" style={{ fontSize: "0.65rem", background: "rgba(10,8,2,0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(184,134,11,0.3)", letterSpacing: "0.05em" }}>{m.category}</div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-[#F5F5DC]" style={{ fontSize: "0.95rem", fontWeight: 700 }}>{m.title}</h3>
        <motion.div className="mt-2 h-0.5 bg-[#B8860B] rounded-full" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: i * 0.08 + 0.4, duration: 0.5 }} style={{ originX: 1 }} />
      </div>
    </motion.div>
  );
}

function TestimonialCard({ t, i }: { t: (typeof testimonials)[0]; i: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="p-6 rounded-2xl card-luxury relative">
      <div className="absolute top-4 left-4 text-[#B8860B]/15" style={{ fontSize: "4rem", lineHeight: 1, fontFamily: "Georgia, serif" }}>&ldquo;</div>
      <div className="flex gap-0.5 mb-4">{Array.from({ length: t.rating }).map((_, si) => (<svg key={si} viewBox="0 0 20 20" fill="#B8860B" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
      <p className="text-[#F5F5DC]/70 text-sm leading-relaxed mb-5 relative z-10">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full flex items-center justify-center text-[#B8860B] flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.2), rgba(184,134,11,0.05))", border: "1px solid rgba(184,134,11,0.3)", fontSize: "1rem", fontWeight: 700 }}>{t.avatar}</div>
        <div><p className="text-[#F5F5DC]" style={{ fontSize: "0.9rem", fontWeight: 700 }}>{t.name}</p><p className="text-[#B8860B]/60 text-xs mt-0.5">{t.role}</p></div>
      </div>
    </motion.div>
  );
}

export function HomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const id = setInterval(() => { setActiveTestimonial((v) => (v + 1) % testimonials.length); }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[950px] overflow-hidden" aria-label="الشاشة الرئيسية">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <ImageWithFallback src={HERO_IMG} alt="كيف الضيافة - خدمات الضيافة الفاخرة" className="w-full h-[110%] object-cover object-center" priority={true} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/60 via-[#0f0f0f]/25 to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/40 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(184,134,11,0.06) 0%, transparent 65%)" }} />
        <Particles />
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-l from-[#B8860B] to-transparent" />
            <span className="text-[#B8860B]" style={{ fontSize: "0.75rem", letterSpacing: "0.4em" }}>SINCE 2016</span>
            <div className="h-px w-12 bg-gradient-to-r from-[#B8860B] to-transparent" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="text-[#F5F5DC] mb-2" style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 900, lineHeight: 1.1, textShadow: "0 4px 30px rgba(0,0,0,0.6)", fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>كيف الضيافة</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mb-4" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)", letterSpacing: "0.3em", color: "#B8860B" }}>KEIF AL-DIAFA</motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mb-6" style={{ width: 120, height: 2, background: "linear-gradient(90deg, transparent, #B8860B, #D4A017, transparent)" }} />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="text-[#F5F5DC]/75 max-w-xl mb-10" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.8 }}>منصة تجربة فاخرة تعكس جودة الضيافة السعودية الأصيلة<br className="hidden sm:block" />نحوّل كل مناسبة إلى لحظة لا تُنسى</motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.85 }} className="flex gap-3 flex-wrap justify-center">
            <Link href="/services" className="px-8 py-3.5 rounded-full text-[#0f0f0f] transition-all duration-300 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #B8860B, #D4A017, #B8860B)", backgroundSize: "200% auto", fontWeight: 800, fontSize: "0.95rem", boxShadow: "0 6px 25px rgba(184,134,11,0.4)" }}>اكتشف خدماتنا</Link>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10" style={{ border: "1px solid rgba(184,134,11,0.5)", color: "#B8860B", fontWeight: 600, fontSize: "0.95rem", backdropFilter: "blur(10px)" }}>تواصل معنا</a>
          </motion.div>
          <motion.div className="absolute bottom-8" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <div className="flex flex-col items-center gap-2" style={{ opacity: 0.5 }}>
              <span className="text-[#B8860B] text-xs" style={{ letterSpacing: "0.2em" }}>اكتشف</span>
              <div className="w-5 h-8 rounded-full border border-[#B8860B]/40 flex items-start justify-center pt-1.5"><motion.div className="w-1 h-2 rounded-full bg-[#B8860B]" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} /></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="py-8 px-4" aria-label="إحصائيات كيف الضيافة" style={{ background: "linear-gradient(90deg, rgba(184,134,11,0.04) 0%, rgba(184,134,11,0.08) 50%, rgba(184,134,11,0.04) 100%)", borderTop: "1px solid rgba(184,134,11,0.1)", borderBottom: "1px solid rgba(184,134,11,0.1)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><p className="gold-gradient-text" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 900, fontFamily: "var(--font-tajawal), 'Tajawal', sans-serif" }}>{s.num}</p><p className="text-[#F5F5DC]/55 text-sm mt-1">{s.label}</p></motion.div>))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <SectionHeader label="مزايانا التنافسية" title="لماذا كيف الضيافة؟" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyCards.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="card-luxury p-6 rounded-2xl relative overflow-hidden group"><div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-[#B8860B]/5 group-hover:bg-[#B8860B]/10 transition-colors duration-500" /><div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#B8860B] mb-5 relative z-10" style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.12), rgba(184,134,11,0.04))", border: "1px solid rgba(184,134,11,0.2)" }}>{card.icon}</div><h3 className="text-[#F5F5DC] mb-3 relative z-10" style={{ fontSize: "1.05rem", fontWeight: 700 }}>{card.title}</h3><p className="text-[#F5F5DC]/50 text-sm leading-relaxed relative z-10">{card.desc}</p></motion.div>))}
        </div>
      </section>

      {/* FEATURED MOMENTS */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #0d0b04 50%, #0f0f0f 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="من أعمالنا" title="لحظاتنا المميزة" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{moments.map((m, i) => (<MomentCard key={i} m={m} i={i} />))}</div>
          <div className="text-center mt-10"><Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#B8860B]/10" style={{ border: "1px solid rgba(184,134,11,0.3)", color: "#B8860B", fontWeight: 600, fontSize: "0.95rem" }}><span>استعرض جميع الأعمال</span><span className="text-sm">←</span></Link></div>
        </div>
      </section>

      {/* FEATURED SPLIT */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <ImageWithFallback src={GALA_IMG} alt="حفلات الضيافة الفاخرة" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 img-overlay" />
              <div className="absolute top-4 right-4 bottom-4 left-4 border border-[#B8860B]/15 rounded-2xl pointer-events-none" />
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(15,12,5,0.95), rgba(25,20,8,0.97))", border: "1px solid rgba(184,134,11,0.3)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}>
              <p className="gold-gradient-text" style={{ fontSize: "1.8rem", fontWeight: 900 }}>+500</p>
              <p className="text-[#F5F5DC]/60 text-xs">مناسبة ناجحة</p>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ تجربتنا ✦</p>
            <h2 className="text-[#F5F5DC] mb-5" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>نحن نصنع لحظات<br /><span className="gold-gradient-text">لا تُنسى</span></h2>
            <p className="text-[#F5F5DC]/55 text-sm leading-8 mb-7">منذ تأسيسنا عام ٢٠١٦، قدمنا خدماتنا لأكثر من ٥٠٠ مناسبة بمختلف أرجاء المملكة العربية السعودية، من حفلات الزفاف الفاخرة إلى الفعاليات الحكومية الكبرى. فلسفتنا بسيطة: «البساطة هي قمة التعقيد».</p>
            <div className="space-y-3 mb-8">
              {["فريق محترف مدرب على أعلى المعايير الدولية", "معدات فاخرة من أرقى موردي الضيافة", "تغطية لجميع مناطق المملكة", "استجابة فورية وخدمة شخصية"].map((feat, i) => (<div key={i} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(184,134,11,0.15)", border: "1px solid rgba(184,134,11,0.3)" }}><svg viewBox="0 0 16 16" fill="#B8860B" className="w-3 h-3"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" /></svg></div><span className="text-[#F5F5DC]/65 text-sm">{feat}</span></div>))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#0f0f0f]" style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", fontWeight: 700, fontSize: "0.9rem", boxShadow: "0 4px 20px rgba(184,134,11,0.3)" }}>اعرف أكثر عنّا<span>←</span></Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, #080602 0%, #0f0f0f 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="خدماتنا" title="باقة متكاملة من الضيافة الفاخرة" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[{ img: WAITER_IMG, title: "الخدمات الرجالية", sub: "Male Hospitality" }, { img: HOTEL_IMG, title: "الخدمات الفنية", sub: "Artistic Services" }, { img: EQUIP_IMG, title: "المعدات الفاخرة", sub: "Luxury Equipment" }, { img: DATES_IMG, title: "التقديمات الراقية", sub: "Luxury Offerings" }].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: "16/9" }}>
                <ImageWithFallback src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5"><p className="text-[#B8860B] text-xs mb-1" style={{ letterSpacing: "0.15em" }}>{s.sub}</p><h3 className="text-[#F5F5DC]" style={{ fontSize: "1.1rem", fontWeight: 700 }}>{s.title}</h3></div>
                <div className="absolute inset-0 bg-[#B8860B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="text-center"><Link href="/services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[#0f0f0f] transition-all duration-300 hover:shadow-xl hover:shadow-[#B8860B]/20 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", fontWeight: 700, boxShadow: "0 4px 20px rgba(184,134,11,0.3)" }}>استعرض جميع الخدمات<span>←</span></Link></div>
        </div>
      </section>

      <PartnersSlider />

      {/* TESTIMONIALS */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, #0d0b04 0%, #0f0f0f 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="ثقتكم تُلهمنا" title="آراء عملائنا الكرام" />
          <div className="hidden md:grid grid-cols-3 gap-5">{testimonials.map((t, i) => (<TestimonialCard key={i} t={t} i={i} />))}</div>
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}><TestimonialCard t={testimonials[activeTestimonial]} i={activeTestimonial} /></motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-5">{testimonials.map((_, i) => (<button key={i} onClick={() => setActiveTestimonial(i)} className="rounded-full transition-all duration-300" style={{ width: i === activeTestimonial ? 20 : 8, height: 8, background: i === activeTestimonial ? "#B8860B" : "rgba(184,134,11,0.25)" }} aria-label={`شهادة ${i + 1}`} />))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.08) 0%, transparent 70%)" }} />
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[#B8860B] mb-4" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ ابدأ رحلتك ✦</p>
          <h2 className="text-[#F5F5DC] mb-5" style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.25, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}>جاهزون لإضافة لمسة<span className="gold-gradient-text"> فخامة </span>لمناسبتك</h2>
          <p className="text-[#F5F5DC]/55 mb-10 leading-relaxed text-sm sm:text-base">تواصل معنا الآن واحصل على استشارة مجانية لتصميم تجربة ضيافة فاخرة لا تُنسى</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, fontSize: "1rem", boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              تواصل عبر واتساب
            </motion.a>
            <motion.a href="tel:+966535636933" className="flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#B8860B]/10" style={{ border: "1px solid rgba(184,134,11,0.35)", color: "#B8860B", fontWeight: 600, fontSize: "1rem" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              اتصل بنا الآن
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
