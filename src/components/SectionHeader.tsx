'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <p
          className="font-mono-accent text-xs font-medium uppercase tracking-widest mb-3"
          style={{ color: 'var(--violet)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl font-display font-bold leading-tight"
        style={{ color: 'var(--text-dark)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--text-secondary)', marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
