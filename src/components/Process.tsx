import {
  MessageSquare,
  Palette,
  Code2,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { processSteps } from '../data/siteData';
import AnimateOnScroll from './AnimateOnScroll';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Palette,
  Code2,
  Globe,
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-mono text-accent-400 uppercase tracking-widest mb-3">
              Как я работаю
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Мой{' '}
              <span className="gradient-text">процесс</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.iconName] || MessageSquare;

            return (
              <AnimateOnScroll key={step.step} delay={index * 120}>
                <div className="relative group">
                  {/* Connector line (hidden on mobile and last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-graphite-600 to-transparent z-0" />
                  )}

                  <div className="glass-card p-6 hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-1 relative z-10 h-full">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/30 transition-all">
                        <Icon
                          size={18}
                          className="text-accent-400 group-hover:text-accent-300 transition-colors"
                        />
                      </div>
                      <span className="text-xs font-mono text-graphite-400 uppercase tracking-wider">
                        Шаг {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-graphite-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
