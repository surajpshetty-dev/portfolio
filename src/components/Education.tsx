'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education } from '@/data/content';

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32" style={{ background: 'var(--tint)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation."
        />

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-6 glow-card"
              style={{ border: '1px solid var(--glass-border)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(124,107,176,0.12)' }}
              >
                <GraduationCap size={20} style={{ color: 'var(--violet)' }} />
              </div>

              <h3 className="font-display font-semibold text-sm leading-snug mb-3" style={{ color: 'var(--text-dark)' }}>
                {edu.degree}
              </h3>

              <p className="font-medium text-sm mb-3" style={{ color: 'var(--plum)' }}>
                {edu.institution}
              </p>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <MapPin size={11} />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <Calendar size={11} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--violet)' }}>
                  <Award size={11} />
                  {edu.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
