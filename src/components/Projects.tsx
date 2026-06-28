'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, ArrowUpRight, Wrench, Zap, AlertCircle } from 'lucide-react';
import { track } from '@vercel/analytics';
import SectionHeader from './SectionHeader';
import { projects, type Project, type Tag as TagType } from '@/data/projects';

const ALL = 'All';
const filterTags: string[] = [ALL, 'Platform', 'AI/LLM', 'Data Engineering', 'Cloud Architecture', 'Automation'];

const tagColors: Record<string, string> = {
  'AI/LLM': 'bg-purple-100 text-purple-700',
  'Data Engineering': 'bg-blue-100 text-blue-700',
  'ETL': 'bg-indigo-100 text-indigo-700',
  'Automation': 'bg-emerald-100 text-emerald-700',
  'Cloud Architecture': 'bg-sky-100 text-sky-700',
  'AWS': 'bg-orange-100 text-orange-700',
  'Cost Optimisation': 'bg-green-100 text-green-700',
  'Migration': 'bg-rose-100 text-rose-700',
  'Databricks': 'bg-red-100 text-red-700',
  'dbt': 'bg-amber-100 text-amber-700',
  'Lakehouse': 'bg-teal-100 text-teal-700',
  'Fintech': 'bg-lime-100 text-lime-700',
  'API': 'bg-cyan-100 text-cyan-700',
  'Product': 'bg-fuchsia-100 text-fuchsia-700',
  'SaaS': 'bg-violet-100 text-violet-700',
  'Full-Stack': 'bg-pink-100 text-pink-700',
  'Platform': 'bg-purple-100 text-purple-700',
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(42,42,51,0.55)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-5 sm:p-8"
        style={{
          background: 'var(--white)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 24px 80px rgba(91,75,138,0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((t) => (
              <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[t] ?? 'bg-gray-100 text-gray-600'}`}>
                {t}
              </span>
            ))}
            {project.isInProgress && (
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-100 text-amber-700 flex items-center gap-1">
                <AlertCircle size={11} />
                In progress
              </span>
            )}
            {project.isSideProject && (
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-yellow-100 text-yellow-700">
                Side project
              </span>
            )}
          </div>
          <h3 className="text-2xl font-display font-bold" style={{ color: 'var(--text-dark)' }}>
            {project.title}
          </h3>
        </div>

        <div className="space-y-6">
          <Section icon={<AlertCircle size={16} />} label="The problem" text={project.problem} />
          <Section icon={<Wrench size={16} />} label="What I did" text={project.whatIDid} />
          <Section icon={<Zap size={16} />} label="Impact" text={project.impact} accent />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag size={16} style={{ color: 'var(--violet)' }} />
              <p className="text-xs font-mono-accent font-medium uppercase tracking-widest" style={{ color: 'var(--violet)' }}>
                Tech
              </p>
            </div>
            <p className="text-sm leading-relaxed font-mono-accent" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              {project.tech}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ icon, label, text, accent }: { icon: React.ReactNode; label: string; text: string; accent?: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: 'var(--violet)' }}>{icon}</span>
        <p className="text-xs font-mono-accent font-medium uppercase tracking-widest" style={{ color: 'var(--violet)' }}>
          {label}
        </p>
      </div>
      <p
        className={`text-sm leading-relaxed ${accent ? 'font-medium' : ''}`}
        style={{ color: accent ? 'var(--plum)' : 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 cursor-pointer glow-card flex flex-col"
      style={{ border: '1px solid var(--glass-border)' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((t: TagType) => (
          <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[t] ?? 'bg-gray-100 text-gray-600'}`}>
            {t}
          </span>
        ))}
        {project.isInProgress && (
          <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-100 text-amber-700">
            In progress
          </span>
        )}
      </div>

      <h3
        className="font-display font-semibold text-base mb-3 leading-snug"
        style={{ color: 'var(--text-dark)' }}
      >
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.shortDesc}
      </p>

      <div
        className="flex items-center gap-1.5 text-xs font-semibold mt-auto"
        style={{ color: 'var(--violet)' }}
      >
        View details
        <ArrowUpRight size={14} />
      </div>
    </motion.div>
  );
}

const PAGE_SIZE = 6;

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = active === ALL
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === active));

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE && !showAll;

  return (
    <section id="projects" className="py-24 lg:py-32" style={{ background: 'var(--white)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected projects"
          title="Things I've built and shipped."
          subtitle="Each project here is something I designed, built, and own. Click any card for the full story."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterTags.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setShowAll(false); }}
              className="px-4 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-all duration-200"
              style={
                active === f
                  ? { background: 'var(--plum)', color: '#fff', boxShadow: '0 4px 16px rgba(91,75,138,0.25)' }
                  : { background: 'rgba(124,107,176,0.08)', color: 'var(--plum)', border: '1px solid rgba(91,75,138,0.15)' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onClick={() => { setSelected(p); track('project_expand', { project: p.title }); }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                color: 'var(--plum)',
                borderColor: 'rgba(91,75,138,0.3)',
                background: 'rgba(243,240,250,0.6)',
              }}
            >
              Show more
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
