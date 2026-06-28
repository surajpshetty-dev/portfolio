'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { metrics } from '@/data/content';

function useCountUp(end: string, duration = 1800, triggered = false) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!triggered) return;
    const num = parseFloat(end.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) { setDisplay(end); return; }

    const prefix = end.match(/^[^0-9]*/)?.[0] ?? '';
    const suffix = end.match(/[^0-9.]+$/)?.[0] ?? '';
    const hasDecimal = end.includes('.');
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = num * ease;
      const formatted = hasDecimal ? current.toFixed(1) : Math.floor(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [triggered, end, duration]);

  return display;
}

function MetricCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(value, 1600, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 text-center glow-card"
      style={{ border: '1px solid var(--glass-border)' }}
    >
      <p
        className="text-3xl sm:text-4xl font-display font-bold leading-none mb-2 gradient-text"
        aria-label={value}
      >
        {count}
      </p>
      <p className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>{label}</p>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--white)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="font-mono-accent text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--violet)' }}
          >
            By the numbers
          </p>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold"
            style={{ color: 'var(--text-dark)' }}
          >
            Real work, real impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} value={m.value} label={m.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
