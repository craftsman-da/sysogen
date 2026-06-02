'use client';

import { AnimateIn } from '@/components/AnimateIn';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id='top'
      className='relative  overflow-hidden py-40 flex flex-col justify-end'
    >
      {/* Aurora blobs */}
      <div aria-hidden='true' className='absolute  inset-0 pointer-events-none'>
        <div
          className='aurora'
          style={{
            width: 520,
            height: 520,
            background:
              'radial-gradient(circle, rgba(79,140,255,0.55), transparent 70%)',
            top: '-10%',
            right: '8%',
          }}
        />
        <div
          className='aurora'
          style={{
            width: 420,
            height: 420,
            background:
              'radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)',
            top: '30%',
            left: '-8%',
            animationDelay: '-4s',
          }}
        />
        <div
          className='aurora'
          style={{
            width: 360,
            height: 360,
            background:
              'radial-gradient(circle, rgba(232,177,74,0.18), transparent 70%)',
            bottom: '-10%',
            right: '30%',
            animationDelay: '-8s',
          }}
        />
      </div>

      {/* Grid texture */}
      <div className='grid-bg' />

      {/* Diagonal scan lines */}
      <svg
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay'
        width='100%'
        height='100%'
      >
        <defs>
          <pattern
            id='diag'
            width='6'
            height='6'
            patternUnits='userSpaceOnUse'
            patternTransform='rotate(45)'
          >
            <line
              x1='0'
              y1='0'
              x2='0'
              y2='6'
              stroke='rgba(255,255,255,0.04)'
              strokeWidth='1'
            />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#diag)' />
      </svg>

      {/* Content */}
      <div className='site-container relative w-full'>
        {/* Eyebrow */}
        <AnimateIn delay={0}>
          <div className='mb-7'>
            <span className='eyebrow'>
              <span
                className='w-1.5 h-1.5 rounded-full bg-[#4ade80] flex-shrink-0'
                style={{ boxShadow: '0 0 0 4px rgba(74,222,128,0.18)' }}
              />
              EU-Headquartered &nbsp;·&nbsp; Built for the EU AI Act
            </span>
          </div>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn delay={0.1}>
          <h1 className='font-bold tracking-tight leading-[1.05] text-(--foreground) text-[clamp(44px,6vw,96px)] max-w-300'>
            AI you can ship
            <br />
            <span className='gradient-text'>
              and prove you shipped responsibly.
            </span>
          </h1>
        </AnimateIn>

        {/* Subtext */}
        <AnimateIn delay={0.2}>
          <p className='mt-7 text-(--muted) leading-[1.55] max-w-160 text-[clamp(16px,1.6vw,19px)]'>
            Sysogen helps regulated enterprises adopt AI without the security
            and compliance debt. We embed with your team, ship production-grade
            systems, and leave a documented foundation when we walk out.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn delay={0.3}>
          <div className='mt-10 flex flex-wrap gap-3'>
            <a href='/contact' className='btn-primary'>
              Book a discovery call
              <ArrowRight className='w-3.5 h-3.5' />
            </a>
            <a href='/labs/provestack' className='btn-ghost'>
              See ProveStack
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden='true'
        className='absolute bottom-0 left-0 right-0 h-32 pointer-events-none'
        style={{
          background: 'linear-gradient(180deg, transparent, var(--background))',
        }}
      />
    </section>
  );
}
