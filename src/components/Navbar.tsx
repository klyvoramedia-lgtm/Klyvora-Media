import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-surface/80 backdrop-blur-xl border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-12 text-brand-primary">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co.com/gMcj9MCz/logo.png" 
              alt="Klyvora Media Logo" 
              className="h-10 w-10 rounded-full object-cover" 
              referrerPolicy="no-referrer" 
            />
            <span className="text-lg font-display font-black tracking-tighter uppercase text-white">
              Klyvora <span className="text-brand-accent">Media</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[13px] font-medium uppercase tracking-widest transition-opacity hover:opacity-100",
                  location.pathname === link.path ? "text-brand-accent" : "text-gray-400 opacity-80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-accent text-brand-surface px-6 py-2 rounded-full text-[13px] font-bold hover:brightness-110 transition-all transition-colors"
            >
              FREE AUDIT
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-surface border-b border-brand-border px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium py-2 text-brand-primary border-b border-brand-border/50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 bg-brand-accent text-brand-surface text-center rounded-xl font-bold"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
