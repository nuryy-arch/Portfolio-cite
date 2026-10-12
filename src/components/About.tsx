import { Code2, Sparkles, Target } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const highlights = [
  {
    icon: Code2,
    title: 'Современные технологии',
    text: 'React, TypeScript, Tailwind CSS, Next.js — использую актуальный стек для создания быстрых и надёжных сайтов.',
  },
  {
    icon: Sparkles,
    title: 'Внимание к деталям',
    text: 'Продумываю каждый элемент интерфейса: от анимаций и hover-эффектов до адаптивной вёрстки на всех устройствах.',
  },
  {
    icon: Target,
    title: 'Фокус на результат',
    text: 'Создаю сайты, которые не просто красиво выглядят, а помогают бизнесу привлекать клиентов и расти.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-mono text-accent-400 uppercase tracking-widest mb-3">
              Обо мне
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Немного{' '}
              <span className="gradient-text">о себе</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Text content */}
          <AnimateOnScroll className="lg:col-span-3">
            <div className="glass-card p-8 sm:p-10">
              <p className="text-graphite-200 leading-relaxed text-base sm:text-lg mb-4">
                Привет! Меня зовут <span className="text-white font-semibold">Nuryy</span>, я — начинающий веб-разработчик.
              </p>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Я увлечён созданием современных веб-сайтов и активно развиваюсь в этом направлении. 
                Работаю с React, TypeScript и Tailwind CSS — инструментами, которые позволяют 
                создавать быстрые, красивые и удобные сайты.
              </p>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Мой подход — делать каждый проект максимально качественно, уделяя внимание деталям: 
                адаптивная вёрстка, плавные анимации, продуманная навигация и чистый код. 
                Каждый новый проект — это возможность научиться чему-то новому и создать 
                что-то полезное для реальных клиентов.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                Я открыт для сотрудничества и готов помочь вашему бизнесу обрести современное 
                присутствие в интернете.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Highlights */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 100}>
                <div className="group glass-card p-5 hover:border-accent-500/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 group-hover:bg-accent-500/20 transition-all">
                      <item.icon
                        size={18}
                        className="text-accent-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-graphite-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
