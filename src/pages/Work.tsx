import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    icon: "🛍️",
    category: "D2C Fashion Brand",
    title: "LumiWear — Brand Launch",
    results: "0 → 42K followers in 90 days · ₹18L revenue in Month 1",
    color: "bg-pink-500/10 border-pink-500/20"
  },
  {
    icon: "💪",
    category: "Fitness Studio Chain",
    title: "ZenoFit — Paid Ads Scale",
    results: "₹30K ad spend → ₹2.4L revenue · 8× ROAS",
    color: "bg-brand-accent/10 border-brand-accent/20"
  },
  {
    icon: "⚙️",
    category: "B2B SaaS Startup",
    title: "GrowStack — Website + LinkedIn",
    results: "320% increase in inbound leads · 6 enterprise deals closed",
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: "🍕",
    category: "Restaurant & F&B Brand",
    title: "SpiceRoute — Social Relaunch",
    results: "12K to 89K followers · Viral reel with 4.2M views",
    color: "bg-orange-500/10 border-orange-500/20"
  },
  {
    icon: "🏠",
    category: "Real Estate Developer",
    title: "NovaNest — Full Funnel",
    results: "140 qualified leads in 45 days · ₹4.2Cr in property inquiries",
    color: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    icon: "🎤",
    category: "Personal Brand / Creator",
    title: "Priya Sharma — Authority Build",
    results: "Monetized at 10K · ₹6L in course sales within 60 days",
    color: "bg-purple-500/10 border-purple-500/20"
  }
];

export default function Work() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 italic tracking-tighter">
            OUR <span className="text-brand-accent">WORK</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-black leading-tight mb-6 italic">
            Case Studies & <br /> Results We're Proud Of.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl font-black italic">
            Work isn't portfolio material until it moves a business forward. These did.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-[2rem] border ${study.color} group hover:scale-[1.02] transition-all cursor-default relative overflow-hidden`}
            >
              <div className="text-3xl mb-4">{study.icon}</div>
              <p className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-2">{study.category}</p>
              <h3 className="text-2xl font-display font-black mb-4 italic leading-tight">{study.title}</h3>
              <p className="text-lg font-bold leading-relaxed">{study.results}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center bg-brand-accent rounded-[2.5rem] p-12 md:p-16 text-brand-surface"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black mb-6 italic tracking-tighter">
            YOUR BUSINESS COULD BE NEXT.
          </h2>
          <p className="text-lg md:text-xl font-black mb-10 italic max-w-2xl mx-auto opacity-90">
            Every case study started with one conversation. Let's have yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-surface text-brand-accent px-8 py-4 rounded-full text-lg font-black italic hover:scale-105 transition-all shadow-2xl"
          >
            BOOK FREE AUDIT <ArrowUpRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
