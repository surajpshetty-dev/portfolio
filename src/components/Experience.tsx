'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experience } from '@/data/content';

const LOGOS: Record<string, { src: string; type: 'img' | 'placeholder' }> = {
  'Firehawk Analytics': { src: '/firehawk-logo.png', type: 'img' },
  'Accenture': { src: '/accenture-logo.jpg', type: 'img' },
};

const URLS: Record<string, string> = {
  'Firehawk Analytics': 'https://firehawkanalytics.com.au/',
  'Accenture': 'https://www.accenture.com/',
};

function CompanyLogo({ company }: { company: string }) {
  const entry = LOGOS[company];

  if (!entry || entry.type === 'placeholder') {
    return (
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--plum), var(--violet))', border: '2px solid rgba(255,255,255,0.3)' }}
        title="Firehawk Analytics — logo placeholder"
      >
        FH
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={entry.src}
      alt={`${company} logo`}
      width={44}
      height={44}
      className="w-11 h-11 rounded-xl object-contain flex-shrink-0 bg-white"
      style={{ border: '1px solid rgba(91,75,138,0.12)', padding: 2 }}
    />
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32" style={{ background: 'var(--tint)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've built my craft."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, var(--violet) 0%, var(--lilac) 60%, transparent 100%)' }}
          />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="sm:pl-16 relative"
              >
                {/* Timeline dot — replaced with logo on sm+ */}
                <div className="hidden sm:block absolute left-0 top-1.5 z-10">
                  <CompanyLogo company={exp.company} />
                </div>

                <div
                  className="glass rounded-2xl p-6 lg:p-8 glow-card"
                  style={{ border: '1px solid var(--glass-border)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Logo visible on mobile only (sm hides the absolute one) */}
                      <div className="sm:hidden flex-shrink-0">
                        <CompanyLogo company={exp.company} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold mb-0.5" style={{ color: 'var(--plum)' }}>
                          {exp.company}
                        </h3>
                        <p className="text-base font-semibold" style={{ color: 'var(--text-dark)' }}>
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 sm:text-right flex-shrink-0">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 items-start">
                        <ChevronRight
                          size={14}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--violet)' }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {URLS[exp.company] && (
                    <a
                      href={URLS[exp.company]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        color: 'var(--plum)',
                        border: '1px solid rgba(91,75,138,0.25)',
                        background: 'rgba(124,107,176,0.06)',
                      }}
                    >
                      <ExternalLink size={12} />
                      About {exp.company}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
