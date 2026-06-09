import React from 'react';
import {
  BadgeCheck,
  Check,
  Gauge,
  Repeat,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  UserCheck,
} from 'lucide-react';
import { FREE_CHECK_COUNT, analyticsEvents, downloadLinks } from '../lib/marketing';

const flow = [
  {
    icon: Smartphone,
    title: 'Open TapTrust',
    body: 'Door staff open the age-check flow on an iPhone already in the venue workflow.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Choose a threshold',
    body: 'Switch to the right age threshold when needed, such as 18+ or 21+.',
  },
  {
    icon: BadgeCheck,
    title: 'Guest presents supported ID',
    body: 'The guest presents a supported state mobile ID, Apple Wallet Mobile ID, or Apple Passport Verified ID.',
  },
  {
    icon: ShieldCheck,
    title: 'Review the result',
    body: 'TapTrust shows the age result and credential photo or info supported by the verification flow.',
  },
  {
    icon: UserCheck,
    title: 'Confirm Match / Doesn\'t Match',
    body: 'Staff compare the credential photo with the guest before completing the check.',
  },
  {
    icon: Gauge,
    title: 'Use Fast Mode',
    body: 'During busy periods, Fast Mode helps reset the flow for the next guest.',
  },
];

const notes = [
  {
    title: 'Built for clear staff decisions',
    body: 'The workflow translates a newer credential type into the familiar door question: is this guest eligible, and does the person match?',
  },
  {
    title: 'Useful while adoption grows',
    body: 'Most guests may still carry physical IDs, but TapTrust gives staff a practical path when mobile IDs or Passport Verified IDs appear.',
  },
  {
    title: 'Careful by design',
    body: 'Credential availability varies by state, issuer, device, and supported Apple verification flows.',
  },
];

export const HowItWorks = () => {
  return (
    <div className="bg-black text-white">
      <section className="border-b border-white/10 bg-[#050505] px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            How It Works
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            A simple age-check flow for busy doors.
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
            TapTrust helps bars, venues, and event staff handle supported digital
            credentials using a direct iPhone workflow.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {flow.map(({ icon: Icon, title, body }, index) => (
            <div key={title} className="rounded-lg border border-white/10 bg-[#0b0b0b] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-gray-500">0{index + 1}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Staff Workflow
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              The screen should answer the door question quickly.
            </h2>
            <div className="space-y-5">
              {notes.map((note) => (
                <div key={note.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{note.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-black p-6">
            <div className="space-y-4">
              <div className="rounded-lg bg-[#111] px-5 py-4 text-sm text-gray-300">
                Guest presents supported mobile ID or Passport Verified ID
              </div>
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-5 py-4 text-sm text-blue-100">
                <span className="mb-1 block font-bold text-white">Age result ready</span>
                Review the status and supported credential details.
              </div>
              <div className="rounded-lg bg-[#111] px-5 py-4 text-sm text-gray-300">
                Staff selects Match or Doesn&apos;t Match
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-5 py-4 text-sm font-bold text-green-300">
                <Repeat className="h-4 w-4" />
                Fast Mode resets for the next guest
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
            <Repeat className="h-6 w-6" />
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Start with {FREE_CHECK_COUNT} free checks.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-400">
            Try TapTrust when a guest presents a supported mobile ID or Passport
            Verified ID, then decide whether it fits your venue workflow.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={downloadLinks.website_pricing}
              data-analytics-event={analyticsEvents.freeTrialCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-100"
            >
              Start Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
