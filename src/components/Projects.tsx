import { ExternalLink, Clock } from 'lucide-react';
import { projects } from '../data/siteData';
import AnimateOnScroll from './AnimateOnScroll';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-mono text-accent-400 uppercase tracking-widest mb-3">
              Портфолио
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Мои{' '}
              <span className="gradient-text">проекты</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 150}>
              <div className="group glass-card overflow-hidden hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/5 h-full flex flex-col">
                {/* Project image / placeholder */}
                <div className="relative h-48 bg-graphite-800 overflow-hidden">
                  {project.inDevelopment ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-graphite-800/90">
                      <Clock size={32} className="text-graphite-400 mb-2" />
                      <span className="text-sm text-graphite-400 font-medium">
                        В разработке
                      </span>
                    </div>
                  ) : project.imageUrl ? (
                    <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent opacity-60" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite-800 to-graphite-900">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {project.title}
                        </div>
                        <div className="text-xs text-graphite-400 font-mono">
                          {project.url?.replace('https://', '').split('/')[0]}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  {project.url && (
                    <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  {/* Status badge */}
                  {project.inDevelopment && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-graphite-700/80 backdrop-blur-sm rounded-full text-xs font-medium text-graphite-300 border border-graphite-600/50">
                      Скоро
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-graphite-300 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-graphite-700/50 text-graphite-300 rounded-lg border border-graphite-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors group/link"
                    >
                      Открыть сайт
                      <ExternalLink
                        size={14}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-graphite-400">
                      <Clock size={14} />
                      Будет доступен скоро
                    </span>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
