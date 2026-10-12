import { Heart } from 'lucide-react';
import { SITE_AUTHOR } from '../data/contacts';

const navLinks = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite-800/50 bg-graphite-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold gradient-text">{SITE_AUTHOR}</span>
            <span className="text-xs text-graphite-400">
              © {currentYear} {SITE_AUTHOR}. Все права защищены.
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-graphite-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-graphite-800/30 text-center">
          <p className="text-xs text-graphite-500 flex items-center justify-center gap-1">
            Сделано с <Heart size={12} className="text-red-400" /> используя React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
