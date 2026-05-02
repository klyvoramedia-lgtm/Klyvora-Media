import { motion } from 'motion/react';
import { Target, Eye, Zap, Award } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32">
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[52px] md:text-[72px] font-semibold leading-[1.05] tracking-tighter mb-10 text-white"
            >
              Built for the <br />new era of <br /><span className="text-brand-accent">Attention.</span>
            </motion.h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-8">
                Klyvora isn't just an agency. It's a high-performance growth lab. 
                We started with a simple observation: Most agencies serve aesthetics, while the winning ones serve results.
              </p>
            </div>
            <div className="relative">
              <div className="bg-brand-border/10 rounded-[3rem] border border-brand-border p-8 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co.com/gMcj9MCz/logo.png" 
                  alt="Klyvora Media Logo" 
                  className="max-h-[400px] w-auto h-auto rounded-[2rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-accent p-10 rounded-[2.5rem] text-brand-surface max-w-xs hidden md:block border-8 border-brand-surface">
                <p className="text-lg font-black leading-tight italic">
                  "In the modern world, attention is more valuable than gold. We help you mine it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Target className="w-10 h-10 mb-6 text-brand-accent" />, title: "Precision", desc: "No guesswork. Every scroll, every click, and every conversion is tracked and optimized." },
              { icon: <Zap className="w-10 h-10 mb-6 text-brand-accent" />, title: "Velocity", desc: "We move at the speed of culture. Our content cycles keep you ahead of every trend." },
              { icon: <Eye className="w-10 h-10 mb-6 text-brand-accent" />, title: "Retention", desc: "Getting a view is easy. Keeping an audience engaged is what builds a brand." },
              { icon: <Award className="w-10 h-10 mb-6 text-brand-accent" />, title: "Excellence", desc: "We don't settle for 'good enough'. If it doesn't move the needle, we don't do it." },
            ].map((stat, idx) => (
              <motion.div 
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {stat.icon}
                <h3 className="text-2xl font-bold mb-4 text-white">{stat.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold mb-8 text-white">Our Vision</h2>
            <p className="text-2xl text-gray-400 leading-relaxed font-medium">
              Our mission is to bridge the gap between world-class creativity and data-driven performance. 
              We help founders and brands reclaim their time by building self-sustaining ecosystems of growth.
            </p>
        </div>
      </section>
    </main>
  );
}
