'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import { SITE_EMAIL, LINKEDIN_URL } from '@/data/constants';

const ROLES = ['Data Engineering Lead', 'Platform Architect', 'AI/LLM Builder', 'Data Engineering & AI Lead'];

function RoleCycler() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => {
      const next = index + 1;
      if (next >= ROLES.length) setDone(true);
      else setIndex(next);
    }, 2000);
    return () => clearTimeout(t);
  }, [index, done]);

  return (
    <div className="overflow-hidden h-8 sm:h-9">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-8 sm:h-9 flex items-center text-lg sm:text-xl font-display font-medium"
          style={{ color: 'var(--violet)' }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const enter = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function Hero({ showCv = false }: { showCv?: boolean }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* CSS-only animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-blob hero-blob-4" />
      </div>


      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(91,75,138,0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-24 w-full">
        <motion.div variants={enter(0.1)} initial="hidden" animate="visible" className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono-accent font-medium"
            style={{ color: 'var(--violet)', border: '1px solid rgba(124,107,176,0.3)', background: 'rgba(124,107,176,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--violet)', boxShadow: '0 0 6px var(--violet)', animation: 'pulse 2s infinite' }} />
            Melbourne · Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={enter(0.2)} initial="hidden" animate="visible"
          className="text-[clamp(2.8rem,8vw,6rem)] font-display font-bold leading-[1.02] tracking-tight mb-4"
          style={{ color: 'var(--text-dark)' }}
        >
          Suraj{' '}
          <span style={{ background: 'linear-gradient(135deg, #5B4B8A 0%, #7C6BB0 40%, #9B8BC4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Shetty
          </span>
        </motion.h1>

        <motion.div variants={enter(0.35)} initial="hidden" animate="visible" className="mb-8">
          <RoleCycler />
        </motion.div>

        <motion.p
          variants={enter(0.45)} initial="hidden" animate="visible"
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          7.5+ years building data platforms end to end, from AWS architecture to AI integration. I own every layer because I built every layer.
        </motion.p>

        <motion.div
          variants={enter(0.55)} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-16"
        >
          <a href={`mailto:${SITE_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-xl hover:shadow-purple-200/50 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, var(--plum) 0%, var(--violet) 100%)' }}>
            <Mail size={15} /> Get in touch
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: 'var(--plum)', borderColor: 'rgba(91,75,138,0.3)', background: 'rgba(243,240,250,0.6)' }}>
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          {showCv && (
            <a href="/cv.pdf" download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: 'var(--text-secondary)', borderColor: 'rgba(107,107,118,0.22)', background: 'rgba(243,240,250,0.4)' }}>
              <FileText size={15} /> Download CV
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-wrap gap-x-8 gap-y-4"
        >
          {[
            { n: '7.5+', l: 'years' },
            { n: '20+', l: 'clients' },
            { n: '60M+', l: 'rows / day' },
            { n: '100+', l: 'integrations' },
            { n: '50%', l: 'infra cost cut' },
            { n: '85%', l: 'faster onboarding' },
          ].map(({ n, l }) => (
            <div key={l} className="flex items-baseline gap-2">
              <span className="text-2xl font-display font-bold" style={{ background: 'linear-gradient(135deg, var(--plum), var(--violet))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {n}
              </span>
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={16} style={{ color: 'var(--lilac)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
