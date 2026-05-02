import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const serviceList = [
  {
    id: "smm",
    title: "Social Media Management",
    what: "Complete oversight of your social ecosystems—from posting schedules to high-level community management.",
    why: "Organic reach is dying, but community is everything. We keep your brand relevant 24/7.",
    results: ["300% Avg. Engagement Growth", "Active Community Management", "Crisis & PR Monitoring"],
    icon: "📱"
  },
  {
    id: "content",
    title: "Content Strategy & Scripts",
    what: "The biological blueprint of your content. We design narratives that hook instantly and retain indefinitely.",
    why: "Content without context is noise. We create scripts engineered for the algorithm and the human psyche.",
    results: ["Psychologically Optimized Hooks", "Monthly Content Pillars", "Viral-Engineered Scripting"],
    icon: "✍️"
  },
  {
    id: "video",
    title: "Short-Form Video & Design",
    what: "High-octane editing for TikTok, Reels, and YouTube Shorts. Paired with thumbnails that force a click.",
    why: "The first 3 seconds are the only 3 seconds that matter. We make them impossible to scroll past.",
    results: ["Premium Motion Graphics", "High-CTR Thumbnails", "Multi-Platform Formatting"],
    icon: "🎞️"
  },
  {
    id: "ads",
    title: "Paid Acquisition (Meta/TikTok/Google)",
    what: "Aggressive, scaled media buying. We go beyond 'boosting' posts and build full-funnel conversion systems.",
    why: "Growth doesn't happen by accident. We buy the data that leads to your best customers.",
    results: ["Industry-Leading ROAS", "Advanced Retargeting Funnels", "Creative Leak Testing"],
    icon: "🎯"
  },
  {
    id: "web",
    title: "Web & App Development",
    what: "Clean, high-performance digital environments built for conversion and speed.",
    why: "Social media is rented land. Your website is your digital HQ. It should look and perform like one.",
    results: ["Lightning Fast Performance", "Conversion-Centric UX/UI", "Modern Tech Stacks"],
    icon: "💻"
  },
  {
    id: "branding",
    title: "Branding & Growth Strategy",
    what: "Defining your unique market position and the roadmap to becoming an industry authority.",
    why: "Commodities compete on price. Brands compete on value. We make sure you're a brand.",
    results: ["Full Visual Identity", "Market Penetration Roadmap", "Competitor Neutralization"],
    icon: "💎"
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[52px] md:text-[72px] font-semibold leading-[1.1] tracking-tighter mb-8 text-white text-balance"
          >
            Our Arsenal of <br /><span className="text-brand-accent">Digital Domination</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">We don't offer tasks. We offer transformations. Each service is a gear in your growth engine.</p>
        </header>

        <div className="grid grid-cols-1 gap-24">
          {serviceList.map((service, idx) => (
            <motion.section
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start p-8 lg:p-16 rounded-[3rem] border border-brand-border transition-all duration-500 bg-brand-surface",
                idx % 2 === 0 ? "bg-brand-border/20" : ""
              )}>
                <div className="lg:col-span-5">
                  <div className="text-5xl mb-8">{service.icon}</div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white">{service.title}</h2>
                  <div className="space-y-4 mb-10">
                    <div className="flex gap-4">
                      <div className="mt-1"><ChevronRight className="w-5 h-5 text-brand-accent" /></div>
                      <p className="text-gray-400 leading-relaxed font-medium">{service.what}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-2xl border border-brand-border shadow-sm">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-brand-accent mb-4">Why it matters</h4>
                    <p className="text-gray-500">{service.why}</p>
                  </div>
                </div>

                <div className="lg:col-span-7 h-full flex flex-col justify-center">
                  <h4 className="font-bold mb-8 text-lg text-white">Expected Results:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.results.map((res) => (
                      <div key={res} className="p-5 bg-brand-accent/5 rounded-xl border border-brand-accent/10 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                        <span className="font-semibold text-white/90">{res}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 flex justify-end">
                    <button className="px-8 py-4 bg-brand-accent text-brand-surface rounded-full font-black hover:brightness-110 transition-colors">
                      Discuss this service
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
