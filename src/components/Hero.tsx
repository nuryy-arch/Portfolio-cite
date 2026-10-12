import { ArrowDown, ArrowRight } from 'lucide-react';
import { SITE_AUTHOR, HERO_TITLE, HERO_SUBTITLE } from '../data/contacts';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite-800/60 border border-graphite-700/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-graphite-300 font-medium">
              Доступен для проектов
            </span>
          </div>

          {/* Author name */}
          <h2
            className="animate-fade-in-up text-lg sm:text-xl font-mono text-accent-400 tracking-wider uppercase mb-4"
            style={{ animationDelay: '100ms' }}
          >
            {SITE_AUTHOR}
          </h2>

          {/* Main heading */}
          <h1
            className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl"
            style={{ animationDelay: '200ms' }}
          >
            <span className="text-white">{HERO_TITLE.split(' ').slice(0, 1).join(' ')}</span>{' '}
            <span className="gradient-text">{HERO_TITLE.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up text-lg sm:text-xl text-graphite-300 max-w-2xl leading-relaxed mb-10"
            style={{ animationDelay: '300ms' }}
          >
            {HERO_SUBTITLE}
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-4"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-xl transition-all hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Посмотреть проекты
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-3.5 bg-graphite-800/60 hover:bg-graphite-700/60 border border-graphite-700/50 text-white font-medium rounded-xl transition-all backdrop-blur-sm hover:-translate-y-0.5"
            >
              Обсудить проект
            </a>
          </div>

          {/* Decorative composition */}
          <div
            className="animate-fade-in-up mt-16 relative"
            style={{ animationDelay: '600ms' }}
          >
            {/* Floating code-like elements */}
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="animate-float glass-card px-4 py-3 text-sm font-mono text-accent-400" style={{ animationDelay: '0s' }}>
                &lt;Nuryy /&gt;
              </div>
              <div className="animate-float glass-card px-4 py-3 text-sm font-mono text-purple-400" style={{ animationDelay: '1s' }}>
                React + TS
              </div>
              <div className="animate-float hidden sm:block glass-card px-4 py-3 text-sm font-mono text-green-400" style={{ animationDelay: '2s' }}>
                Tailwind CSS
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#projects"
            className="animate-fade-in mt-12 flex flex-col items-center gap-2 text-graphite-400 hover:text-graphite-200 transition-colors"
            style={{ animationDelay: '800ms' }}
          >
            <span className="text-xs uppercase tracking-widest">Проекты</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
