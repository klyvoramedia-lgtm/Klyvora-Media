import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Globe from '../components/Globe';

const services = [
  {
    title: "Social Media Management",
    desc: "End-to-end growth and community building.",
    icon: "📱"
  },
  {
    title: "Video & Design",
    desc: "High-retention editing and visual identity.",
    icon: "🎞️"
  },
  {
    title: "Paid Acquisition",
    desc: "Scaled results through performance ads.",
    icon: "📈"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-4xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-start mb-8"
              >
                <img 
                  src="https://i.ibb.co.com/gMcj9MCz/logo.png" 
                  alt="Klyvora Media Logo" 
                  className="h-20 w-20 rounded-full object-cover border-2 border-brand-accent shadow-lg shadow-brand-accent/20" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block px-3 py-1 border border-brand-accent/30 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8 text-brand-accent"
              >
                Engineered for Conversion
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[56px] md:text-[84px] font-semibold leading-[1.05] tracking-tighter mb-8"
              >
                Your Brand.<br />
                <span className="text-gray-400">Our Obsession.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl leading-relaxed"
              >
                We build high-velocity social systems for brands that demand revenue, not just reach.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-start"
              >
                <Link
                  to="/contact"
                  className="bg-brand-accent text-brand-surface px-10 py-4 rounded-full text-sm font-bold shadow-xl shadow-brand-accent/20 transition-transform active:scale-95"
                >
                  Grow Your Brand
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-square lg:aspect-auto h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full" />
              <div className="relative h-full w-full">
                <Globe />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-brand-border bg-brand-surface">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 text-center md:text-left">
            Trusted by the innovators at:
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-700">
            {['VELOCITY', 'APERTURE', 'LUMINA', 'FORGE', 'ZEPHYR'].map((l) => (
              <span key={l} className="text-xl font-display font-black tracking-tighter text-white">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Driven */}
      <section className="py-24 lg:py-32 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-white">Stop Posting. <br /><span className="text-brand-accent">Start Dominating.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Attention is Currency</h4>
                    <p className="text-gray-400 leading-relaxed">If people aren't watching, they aren't buying. We build high-retention content environments that force attention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Systems Over Luck</h4>
                    <p className="text-gray-400 leading-relaxed">We use data-backed script writing and psychological styling to ensure your content hits the right desks every time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "10m+", label: "Views Generated" },
                { val: "4.2X", label: "Avg. ROAS Increase" },
                { val: "24k+", label: "Leads Captured" },
                { val: "05", label: "Partners Scaled" },
              ].map((stat) => (
                <div key={stat.label} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                  <div className="text-4xl font-display font-black mb-2 text-brand-accent">{stat.val}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Modern Solutions. <br />Impact Driven.</h2>
              <p className="text-lg text-gray-500">We offer everything a brand needs to survive and thrive in the modern attention economy.</p>
            </div>
            <Link to="/services" className="text-lg font-bold flex items-center group">
              Full Services Breakdown
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-brand-surface border border-brand-border rounded-3xl premium-shadow group hover:border-brand-accent/50 transition-all"
              >
                <div className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-tighter">0{idx + 1}. {s.title.split(' ')[0]}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-border/30 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center border border-brand-border">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full -mr-20 -mt-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl text-white font-display font-bold mb-8">Ready to scale beyond limits?</h2>
              <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto">Book a strategy audit with our lead founders and discover the gaps in your growth engine.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-brand-accent text-brand-surface rounded-full font-black text-xl hover:scale-105 transition-transform"
              >
                Book Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
