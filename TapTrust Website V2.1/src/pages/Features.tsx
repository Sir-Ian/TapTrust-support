import React from 'react';
import {
  BadgeCheck,
  Check,
  Gauge,
  Lock,
  Repeat,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  UserCheck,
} from 'lucide-react';
import { FREE_CHECK_COUNT, analyticsEvents, downloadLinks } from '../lib/marketing';

const features = [
  {
    icon: Gauge,
    title: 'Fast Mode',
    body: 'A busy-door workflow that helps staff reset quickly for the next supported credential check.',
  },
  {
    icon: UserCheck,
    title: 'Match / Doesn\'t Match',
    body: 'Staff compare the credential photo with the guest and mark whether the person matches before completing the check.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Age threshold switching',
    body: 'Switch thresholds for different workflows, such as 18+ or 21+, when supported by the app.',
  },
  {
    icon: BadgeCheck,
    title: 'Apple Passport Verified IDs',
    body: 'Accept Apple Passport Verified IDs through supported Apple verification flows.',
  },
  {
    icon: ShieldCheck,
    title: 'Supported mobile IDs',
    body: 'Handle supported state-issued mobile IDs, digital IDs, and Apple Wallet Mobile IDs where available.',
  },
  {
    icon: Smartphone,
    title: 'No proprietary scanner',
    body: 'Use an iPhone you already have instead of buying and managing dedicated scanner hardware.',
  },
  {
    icon: Lock,
    title: 'Privacy-first checks',
    body: 'TapTrust focuses on the age-check result and presented credential instead of storing unnecessary personal data.',
  },
  {
    icon: Repeat,
    title: `${FREE_CHECK_COUNT} free checks`,
    body: 'Start with a free trial before deciding whether TapTrust belongs in your door workflow.',
  },
];

export const Features = () => {
  return (
    <div className="bg-black">
      <section className="border-b border-white/10 bg-[#050505] px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Features
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Age checks built for real door workflows.
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
            TapTrust helps bars, venues, events, bartenders, bouncers, and security
            teams handle supported mobile IDs with an iPhone workflow and no new hardware.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-lg border border-white/10 bg-[#0b0b0b] p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            'Credential availability varies by state, issuer, device, and supported Apple verification flows.',
            'TapTrust helps staff evaluate supported credentials. It does not replace venue policy or legal compliance obligations.',
            `The ${FREE_CHECK_COUNT} free checks let venues try the workflow before committing to a paid path.`,
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-black p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
              <p className="text-sm leading-relaxed text-gray-400">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
            Try TapTrust before changing your workflow.
          </h2>
          <p className="mb-10 text-lg text-gray-400">
            Download TapTrust and start with {FREE_CHECK_COUNT} free checks. Use it
            when a guest presents a supported mobile ID or Passport Verified ID, then
            decide if it belongs at your door.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={downloadLinks.website_pricing}
              data-analytics-event={analyticsEvents.freeTrialCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
            >
              Start Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
