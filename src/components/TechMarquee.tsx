'use client';

interface Tech {
  name: string;
  icon: string;  // filename in /public/icons/
  bg: string;    // brand-tinted background
}

const TECHS: Tech[] = [
  { name: 'AWS',        icon: 'aws.svg',        bg: 'rgba(255,153,0,0.12)' },
  { name: 'S3',         icon: 's3.svg',          bg: 'rgba(255,153,0,0.12)' },
  { name: 'EC2',        icon: 'ec2.svg',         bg: 'rgba(255,153,0,0.12)' },
  { name: 'Lambda',     icon: 'lambda.svg',      bg: 'rgba(255,255,255,0.0)' },
  { name: 'Bedrock',    icon: 'bedrock.svg',     bg: 'rgba(255,153,0,0.12)' },
  { name: 'Databricks', icon: 'databricks.svg',  bg: 'rgba(255,54,33,0.10)' },
  { name: 'Snowflake',  icon: 'snowflake.svg',   bg: 'rgba(41,181,232,0.12)' },
  { name: 'dbt',        icon: 'dbt.png',         bg: 'rgba(255,105,75,0.10)' },
  { name: 'Fivetran',   icon: 'fivetran.png',    bg: 'rgba(0,115,230,0.08)' },
  { name: 'CData',      icon: 'cdata.jpg',       bg: 'rgba(255,255,255,0.0)' },
  { name: 'SSIS',       icon: 'ssis.jpg',        bg: 'rgba(255,255,255,0.0)' },
  { name: 'SQL Server', icon: 'sqlserver.svg',   bg: 'rgba(204,41,39,0.10)' },
  { name: 'MySQL',      icon: 'mysql.svg',       bg: 'rgba(68,121,161,0.12)' },
  { name: 'MongoDB',    icon: 'mongodb.svg',     bg: 'rgba(71,162,72,0.10)' },
  { name: 'Python',     icon: 'python.svg',      bg: 'rgba(55,118,171,0.12)' },
  { name: 'Claude',     icon: 'claude.svg',      bg: 'rgba(217,119,87,0.10)' },
  { name: 'OpenAI',     icon: 'openai.svg',      bg: 'rgba(65,41,145,0.10)' },
  { name: 'Tableau',    icon: 'tableau.svg',     bg: 'rgba(233,118,39,0.10)' },
  { name: 'GitHub',     icon: 'github.svg',      bg: 'rgba(24,23,23,0.08)' },
  { name: 'Xero',       icon: 'xero.svg',        bg: 'rgba(19,181,234,0.12)' },
  { name: 'Power BI',   icon: 'powerbi.svg',     bg: 'rgba(242,200,17,0.14)' },
];

const ROW1 = TECHS.slice(0, 11);
const ROW2 = TECHS.slice(11);

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 select-none"
      style={{
        width: 88,
        padding: '14px 8px',
        background: 'rgba(255,255,255,0.92)',
        border: '1px solid rgba(91,75,138,0.10)',
        borderRadius: 16,
        boxShadow: '0 2px 10px rgba(91,75,138,0.06)',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: tech.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/icons/${tech.icon}`}
          alt={tech.name}
          width={28}
          height={28}
          style={{ display: 'block', objectFit: 'contain' }}
          loading="lazy"
        />
      </div>
      <span
        className="font-display font-medium text-center leading-tight"
        style={{
          fontSize: 11,
          color: 'var(--text-dark)',
          maxWidth: 72,
          wordBreak: 'break-word',
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-16 lg:py-20 overflow-hidden" style={{ background: 'var(--tint)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-10">
        <p
          className="font-mono-accent text-xs font-medium uppercase tracking-widest mb-2"
          style={{ color: 'var(--violet)' }}
        >
          Tech stack
        </p>
        <h2
          className="text-2xl sm:text-3xl font-display font-bold"
          style={{ color: 'var(--text-dark)' }}
        >
          Tools I build with.
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="marquee-fade-mask">
          <div className="marquee-track marquee-left flex gap-4 w-max">
            {[...ROW1, ...ROW1].map((tech, i) => (
              <TechCard key={`r1-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="marquee-fade-mask">
          <div className="marquee-track marquee-right flex gap-4 w-max">
            {[...ROW2, ...ROW2].map((tech, i) => (
              <TechCard key={`r2-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
