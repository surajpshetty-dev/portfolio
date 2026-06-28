'use client';

import { Mail } from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import { SITE_EMAIL, LINKEDIN_URL } from '@/data/constants';

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: 'var(--tint)',
        borderColor: 'rgba(91,75,138,0.12)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold font-display"
            style={{ background: 'var(--plum)' }}
          >
            SS
          </span>
          <div>
            <p className="font-display font-semibold text-sm" style={{ color: 'var(--text-dark)' }}>
              Suraj Shetty
            </p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Data Engineering &amp; Platform Lead
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#experience', label: 'Experience' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium hover:underline transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:-translate-y-0.5"
            style={{
              color: 'var(--violet)',
              borderColor: 'rgba(124,107,176,0.25)',
              background: 'rgba(124,107,176,0.06)',
            }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:-translate-y-0.5"
            style={{
              color: 'var(--violet)',
              borderColor: 'rgba(124,107,176,0.25)',
              background: 'rgba(124,107,176,0.06)',
            }}
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-8 pt-6 border-t" style={{ borderColor: 'rgba(91,75,138,0.08)' }}>
        <p className="text-center text-xs" style={{ color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Suraj Shetty.
        </p>
      </div>
    </footer>
  );
}
