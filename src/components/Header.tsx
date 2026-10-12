import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_AUTHOR } from '../data/contacts';

const navLinks = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-graphite-950/80 backdrop-blur-xl border-b border-graphite-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity"
          onClick={handleNavClick}
        >
          {SITE_AUTHOR}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-graphite-300 hover:text-white transition-colors rounded-lg hover:bg-graphite-800/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2.5 text-sm font-medium bg-accent-500 hover:bg-accent-600 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
          >
            Связаться
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-graphite-300 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-graphite-950/98 backdrop-blur-2xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`text-2xl font-semibold text-graphite-200 hover:text-white hover:gradient-text transition-all py-3 px-6 rounded-xl hover:bg-graphite-800/50 ${
                isMobileMenuOpen ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className={`mt-4 px-8 py-3.5 text-lg font-medium bg-accent-500 hover:bg-accent-600 text-white rounded-xl transition-all ${
              isMobileMenuOpen ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: `${navLinks.length * 80}ms` }}
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
}
