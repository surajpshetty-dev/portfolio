'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE_EMAIL } from '@/data/constants';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'What I Do' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting entry (smallest y) to avoid last-write-wins race
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        const topmost = intersecting.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive('#' + topmost.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-purple-100/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <a
            href="#"
            className="font-display font-bold text-lg tracking-tight"
            style={{ color: 'var(--plum)' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SS
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    active === href
                      ? 'text-white'
                      : 'hover:text-[var(--plum)]'
                  }`}
                  style={active === href ? { background: 'var(--plum)', color: '#fff' } : { color: 'var(--text-dark)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${SITE_EMAIL}`}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-200/50 hover:-translate-y-0.5"
            style={{ background: 'var(--plum)' }}
          >
            Get in touch
          </a>

          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--plum)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b"
            style={{ borderColor: 'var(--glass-border)' }}
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-purple-50 transition-colors"
                    style={{ color: 'var(--text-dark)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="block mt-2 px-4 py-3 rounded-xl text-sm font-medium text-white text-center"
                  style={{ background: 'var(--plum)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
