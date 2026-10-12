import {
  Building2,
  Rocket,
  ShoppingBag,
  LayoutDashboard,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../data/siteData';
import AnimateOnScroll from './AnimateOnScroll';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Rocket,
  ShoppingBag,
  LayoutDashboard,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-mono text-accent-400 uppercase tracking-widest mb-3">
              Услуги
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Что я{' '}
              <span className="gradient-text">разрабатываю</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Building2;

            return (
              <AnimateOnScroll key={service.title} delay={index * 100}>
                <div className="group glass-card p-6 hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-1 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 group-hover:bg-accent-500/20 group-hover:border-accent-500/30 transition-all">
                    <Icon
                      size={22}
                      className="text-accent-400 group-hover:text-accent-300 transition-colors"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-graphite-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
