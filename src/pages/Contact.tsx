import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c8ff00', '#ffffff', '#1a1a1a']
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-10 text-white"
            >
              Let's build <br />something <span className="text-brand-accent">legendary.</span>
            </motion.h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              We only take on 2 new partners per quarter to ensure absolute focus and result delivery. 
              Fill out the form to see if we're the right match.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-border/20 rounded-2xl flex items-center justify-center border border-brand-border">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-gray-500 tracking-widest">Email Us</h4>
                  <p className="text-lg font-bold text-white">klyvoramedia@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-surface p-8 lg:p-12 rounded-[2.5rem] border border-brand-border shadow-2xl shadow-brand-accent/5 overflow-hidden relative"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="access_key" value="d41ee0bc-55ee-4551-b5dd-b243e254c99e" />
                  <input type="hidden" name="from_name" value="Klyvora Media Inquiry" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-5 py-4 bg-brand-border/20 border border-brand-border rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-white outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Gmail Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-5 py-4 bg-brand-border/20 border border-brand-border rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-white outline-none"
                        placeholder="yourname@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full px-5 py-4 bg-brand-border/20 border border-brand-border rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-white outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Country of Residence</label>
                      <input 
                        type="text" 
                        name="country"
                        className="w-full px-5 py-4 bg-brand-border/20 border border-brand-border rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-white outline-none"
                        placeholder="e.g. United States"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Service Interested In</label>
                    <select name="service" className="w-full px-5 py-4 bg-brand-border/20 border border-brand-border rounded-2xl focus:ring-2 focus:ring-brand-accent appearance-none transition-all text-white outline-none">
                      <option className="bg-brand-surface">Select a service</option>
                      <option className="bg-brand-surface">Social Media Management</option>
                      <option className="bg-brand-surface">Content & Video</option>
                      <option className="bg-brand-surface">Paid Ads (Performance)</option>
                      <option className="bg-brand-surface">Web/App Development</option>
                      <option className="bg-brand-surface">Full Branding Strategy</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Your Growth Goals</label>
                    <textarea 
                      name="message"
                      required
                      rows={4} 
                      className="w-full px-5 py-4 bg-brand-border/20 border border-brand-border rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-white outline-none"
                      placeholder="Tell us where you are and where you want to be..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-5 bg-brand-accent text-brand-surface rounded-2xl font-black text-lg hover:brightness-110 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-brand-accent/20">
                    <CheckCircle2 className="w-12 h-12 text-brand-surface" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Inquiry Received!</h2>
                  <p className="text-xl text-gray-400 max-w-sm">
                    We've received your request. Our team will review it and get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-12 text-brand-accent font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
