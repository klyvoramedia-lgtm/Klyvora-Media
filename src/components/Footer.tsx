import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://i.ibb.co.com/gMcj9MCz/logo.png" 
                alt="Klyvora Media Logo" 
                className="h-12 w-12 rounded-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </Link>
            <p className="text-[13px] text-gray-500 font-medium uppercase tracking-widest leading-relaxed">
              Engineered for the full stack of digital growth.
            </p>
          </div>
          
          <div className="flex gap-20">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-600 mb-6">Explore</h4>
              <ul className="space-y-4 text-[13px] font-medium uppercase tracking-widest text-gray-400">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Solutions</Link></li>
                <li><Link to="/work" className="hover:text-brand-accent transition-colors">Work</Link></li>
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">Story</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-600 mb-6">Social</h4>
              <ul className="space-y-4 text-[13px] font-medium uppercase tracking-widest text-gray-400">
                <li><a href="https://www.instagram.com/klyvoramedia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Instagram</a></li>
                <li><a href="https://x.com/klyvora_media" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">X</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-border text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <p>© {currentYear} Klyvora Media Group.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
