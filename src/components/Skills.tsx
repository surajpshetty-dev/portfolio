'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { skills } from '@/data/content';

const categoryColors: Record<string, string> = {
  Languages: 'rgba(91,75,138,0.12)',
  'AWS Cloud': 'rgba(124,107,176,0.10)',
  'Lakehouse & ETL': 'rgba(155,139,196,0.10)',
  Databases: 'rgba(91,75,138,0.08)',
  'AI / LLM': 'rgba(124,107,176,0.14)',
  'BI & Visualisation': 'rgba(155,139,196,0.08)',
  'Auth & Identity': 'rgba(91,75,138,0.07)',
  Tools: 'rgba(124,107,176,0.07)',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32" style={{ background: 'var(--white)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="The technical toolkit."
          subtitle="The full stack of a modern data platform."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-5 glow-card"
              style={{ border: '1px solid var(--glass-border)' }}
            >
              <p
                className="text-xs font-mono-accent font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--violet)' }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{
                      background: categoryColors[group.category] ?? 'rgba(124,107,176,0.08)',
                      color: 'var(--plum)',
                      border: '1px solid rgba(91,75,138,0.15)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
