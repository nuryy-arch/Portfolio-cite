import { Send, MessageCircle, ArrowRight } from 'lucide-react';
import { contacts } from '../data/contacts';
import AnimateOnScroll from './AnimateOnScroll';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="inline-block text-sm font-mono text-accent-400 uppercase tracking-widest mb-3">
              Контакты
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Давайте{' '}
              <span className="gradient-text">работать вместе</span>
            </h2>
            <p className="text-graphite-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Есть идея для сайта или нужна помощь с веб-разработкой? 
              Напишите мне, и мы обсудим ваш проект.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="glass-card p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6">
              {/* Telegram button */}
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#2AABEE] hover:bg-[#229ED9] text-white font-medium rounded-xl transition-all hover:shadow-xl hover:shadow-[#2AABEE]/20 hover:-translate-y-0.5"
              >
                <Send size={20} />
                Написать в Telegram
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-graphite-700/50" />
                <span className="text-xs text-graphite-400 font-mono uppercase">или</span>
                <div className="flex-1 h-px bg-graphite-700/50" />
              </div>

              {/* Discuss project button */}
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-graphite-700/50 hover:bg-graphite-700/80 border border-graphite-600/50 text-white font-medium rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Обсудить проект
              </a>

              {/* Note about additional contacts */}
              <p className="text-xs text-graphite-400 text-center leading-relaxed mt-2">
                Предпочитаете другой способ связи? Напишите в Telegram, 
                и мы найдём удобный вариант.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
