'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, FileText, Copy, Check, X } from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import { SITE_EMAIL, LINKEDIN_URL } from '@/data/constants';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SITE_EMAIL);
      } else {
        // Fallback for non-HTTPS or older browsers
        const el = document.createElement('textarea');
        el.value = SITE_EMAIL;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        const ok = document.execCommand('copy'); // eslint-disable-line @typescript-eslint/no-deprecated
        document.body.removeChild(el);
        if (!ok) throw new Error('execCommand failed');
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setFailed(true);
      setTimeout(() => setFailed(false), 2000);
    }
  };

  return (
    <div className="inline-flex items-center rounded-full overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
      <a
        href={`mailto:${SITE_EMAIL}`}
        className="inline-flex items-center gap-2 pl-4 pr-3 py-2.5 text-xs font-medium text-white transition-all hover:-translate-y-0.5"
        style={{ background: 'rgba(255,255,255,0.15)' }}
      >
        <Mail size={13} />
        {SITE_EMAIL}
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center px-3 py-2.5 text-white transition-all hover:bg-white/20"
        style={{ background: failed ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.10)', borderLeft: '1px solid rgba(255,255,255,0.2)' }}
        aria-label="Copy email"
        title={copied ? 'Copied!' : failed ? 'Copy failed' : 'Copy email'}
      >
        {copied ? <Check size={13} /> : failed ? <X size={13} /> : <Copy size={13} />}
      </button>
    </div>
  );
}

export default function Contact({ showCv = false }: { showCv?: boolean }) {
  return (
    <section id="contact" className="py-16 lg:py-20" style={{ background: 'var(--white)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--plum) 0%, var(--violet) 100%)' }}
        >
          {/* decorative light orb */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(ellipse 60% 70% at 90% 10%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left: heading + tagline */}
            <div className="flex-1">
              <p className="font-mono-accent text-xs font-medium uppercase tracking-widest mb-2 opacity-70 text-white">
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Let&apos;s talk.
              </h2>
              <p className="text-sm leading-relaxed text-white opacity-80 max-w-sm">
                Open to Senior/Lead Data Engineer, Data Architect, and Lead Analytics Engineer roles in Melbourne and remotely.
              </p>
            </div>

            {/* Right: contact chips + CTAs */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              {/* Contact info chips */}
              <div className="flex flex-wrap gap-2">
                <CopyEmailButton />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <LinkedInIcon size={13} />
                  /in/surajpshetty
                </a>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-white opacity-70"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <MapPin size={13} />
                  Melbourne, Australia
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                {showCv && (
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}
                  >
                    <FileText size={15} />
                    Download CV
                  </a>
                )}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.95)', color: 'var(--plum)' }}
                >
                  Get in touch
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
