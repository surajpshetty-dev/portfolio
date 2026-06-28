'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { strengths } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: 'var(--tint)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Top row: photo + bio side by side */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start mb-14">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto lg:mx-0 flex-shrink-0"
          >
            <div
              className="relative"
              style={{ width: 220, height: 220 }}
            >
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, var(--plum), var(--lilac))',
                  transform: 'rotate(3deg)',
                  opacity: 0.25,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.webp"
                alt="Suraj Shetty"
                width={220}
                height={220}
                loading="eager"
                fetchPriority="high"
                className="relative rounded-3xl object-cover"
                style={{
                  border: '3px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 16px 48px rgba(91,75,138,0.18)',
                }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <div>
            <SectionHeader
              eyebrow="About me"
              title="Built from the ground up."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <p>
                I&apos;m a data engineering lead and platform owner with over seven years of experience, and I built and run the entire backend of a multi-tenant analytics data platform end to end.
              </p>
              <p>
                At Firehawk Analytics, I took the platform from the ground up: I architected the AWS infrastructure, designed the data lakehouse, built the pipelines and reporting layer, and have owned every technology, licensing and budget decision since.
              </p>
              <p>
                Along the way I&apos;ve led a major AWS modernisation that halved our infrastructure costs, built a metadata-driven ETL engine that cut client onboarding time by 85%, and integrated AI deeply into both the product and how my team works.
              </p>
              <p>
                My core strengths are SQL, data engineering and cloud architecture, paired with a commercial instinct for balancing what&apos;s technically right with what creates real value.
              </p>
            </motion.div>

            {/* Experience at */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 mb-6"
            >
              <p className="font-mono-accent text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--lilac)' }}>
                Experience at
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <a href="#experience" className="transition-opacity hover:opacity-70">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/firehawk-full.webp"
                    alt="Firehawk Analytics"
                    width={123}
                    height={48}
                    style={{ height: 48, width: 'auto', display: 'block' }}
                  />
                </a>
                <a href="#experience" className="transition-opacity hover:opacity-70">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/accenture-full.webp"
                    alt="Accenture"
                    width={68}
                    height={38}
                    style={{ height: 38, width: 'auto', display: 'block', opacity: 0.85 }}
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {['Allied Health', 'Healthcare', 'HR', 'Fintech', 'Media', 'Consumer', 'Food Manufacturing', 'Tech SaaS'].map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(124,107,176,0.1)',
                    color: 'var(--plum)',
                    border: '1px solid rgba(91,75,138,0.18)',
                  }}
                >
                  {industry}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Strengths row below */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-accent text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: 'var(--violet)' }}
          >
            Defining strengths
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass rounded-2xl p-5 glow-card"
                style={{ border: '1px solid var(--glass-border)' }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center mb-3"
                  style={{ background: 'rgba(124,107,176,0.12)' }}
                >
                  <CheckCircle2 size={15} style={{ color: 'var(--violet)' }} />
                </div>
                <p className="font-display font-semibold text-sm mb-1.5" style={{ color: 'var(--text-dark)' }}>
                  {s.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
