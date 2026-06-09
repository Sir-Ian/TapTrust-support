import React from 'react';
import { motion } from 'motion/react';
import {
  BadgeCheck,
  Check,
  Gauge,
  Repeat,
  Smartphone,
} from 'lucide-react';
import {
  FREE_CHECK_COUNT,
  HOW_IT_WORKS_URL,
  analyticsEvents,
  downloadLinks,
} from '../lib/marketing';

const appScreenshot = '/taptrust-home-screen-iphone-17-pro.png';

const PrimaryCta = ({ children, href, eventName }: {
  children: React.ReactNode;
  href: string;
  eventName: string;
}) => (
  <a
    href={href}
    data-analytics-event={eventName}
    className="premium-cta inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition hover:bg-blue-400 active:scale-95"
  >
    {children}
  </a>
);

const SecondaryCta = ({ children, href, eventName }: {
  children: React.ReactNode;
  href: string;
  eventName: string;
}) => (
  <a
    href={href}
    data-analytics-event={eventName}
    className="premium-secondary-cta inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-blue-300/70 hover:bg-white/5"
  >
    {children}
  </a>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
    {children}
  </p>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:min-h-[86vh] lg:py-28">
    <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />

    <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-200"
        >
          <Smartphone className="h-4 w-4 text-blue-300" />
          Built for bars, venues, events, and door staff
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Accept mobile IDs with the{' '}
          <span className="text-blue-400">iPhone you already have.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mb-4 max-w-2xl text-xl leading-relaxed text-gray-300"
        >
          TapTrust helps bars, venues, and door staff verify age using supported
          state-issued mobile IDs and Apple Passport Verified IDs. No scanner required.
        </motion.p>

        <p className="mb-8 text-lg font-semibold text-blue-200">
          Start with {FREE_CHECK_COUNT} free checks.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <PrimaryCta href={downloadLinks.website_hero} eventName={analyticsEvents.appStoreCta}>
            Download TapTrust
          </PrimaryCta>
          <SecondaryCta href={HOW_IT_WORKS_URL} eventName={analyticsEvents.howItWorks}>
            See how it works
          </SecondaryCta>
        </motion.div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[9/19.5] w-[280px] overflow-hidden rounded-[2.8rem] border-[8px] border-[#1a1a1a] bg-black shadow-2xl sm:w-[330px]">
            <img
              src={appScreenshot}
              alt="TapTrust app ready for mobile ID age verification"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
          </div>
          <div className="absolute inset-8 -z-10 rounded-full bg-blue-500/25 blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

const ValueStrip = () => {
  const points = [
    { icon: Smartphone, text: 'No new hardware' },
    { icon: BadgeCheck, text: 'Passport Verified + supported mobile IDs' },
    { icon: Gauge, text: 'Fast Mode for busy lines' },
    { icon: Check, text: `${FREE_CHECK_COUNT} free checks` },
  ];

  return (
    <section className="border-y border-white/10 bg-[#050505]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {points.map(({ icon: Icon, text }) => (
          <div key={text} className="value-strip-item flex min-h-28 items-center gap-4 py-6 md:px-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium leading-relaxed text-gray-200">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FreeTrial = () => (
  <section
    id="download-taptrust"
    data-analytics-event={analyticsEvents.pricingTrialView}
    className="bg-[#050505] py-24"
  >
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
      <div>
        <SectionLabel>Free Trial</SectionLabel>
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Try TapTrust before changing your workflow.
        </h2>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          Download TapTrust and start with {FREE_CHECK_COUNT} free checks. Use it when a
          guest presents a supported mobile ID or Passport Verified ID, then decide if it
          belongs in your door workflow.
        </p>
        <PrimaryCta href={downloadLinks.website_pricing} eventName={analyticsEvents.freeTrialCta}>
          Start Free
        </PrimaryCta>
      </div>

      <div className="rounded-lg border border-white/10 bg-black p-6">
        <div className="flex items-center gap-4">
          <Repeat className="h-8 w-8 text-blue-300" />
          <div>
            <h3 className="text-xl font-semibold text-white">{FREE_CHECK_COUNT} free checks</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Paid pricing is not shown here until the exact App Store pricing is confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="relative overflow-hidden border-t border-white/10 bg-black py-24 text-center">
    <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[110px]" />
    <div className="relative mx-auto max-w-3xl px-4">
      <h2 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Ready for mobile IDs at the door?
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
        Give staff a clear way to handle supported digital IDs without buying another scanner.
      </p>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <PrimaryCta href={downloadLinks.website_footer} eventName={analyticsEvents.appStoreCta}>
          Download TapTrust
        </PrimaryCta>
      </div>
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <ValueStrip />
    <FreeTrial />
    <FinalCta />
  </>
);
