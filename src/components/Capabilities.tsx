'use client';

import { motion } from 'framer-motion';
import {
  Database, GitBranch, Cloud, Layers, Cpu, Server, Users, Lightbulb,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { capabilities } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Database, GitBranch, Cloud, Layers, Cpu, Server, Users, Lightbulb,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32" style={{ background: 'var(--tint)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I do"
          title="End to end, every layer."
          subtitle="From cloud infrastructure to AI integration, I own the full stack of a data platform."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Database;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-6 glow-card group"
                style={{ border: '1px solid var(--glass-border)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ background: 'rgba(124,107,176,0.1)' }}
                >
                  <Icon
                    size={20}
                    style={{ color: 'var(--violet)' }}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <h3
                  className="font-display font-semibold text-sm mb-2 leading-snug"
                  style={{ color: 'var(--text-dark)' }}
                >
                  {cap.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
