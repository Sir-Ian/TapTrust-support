import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FREE_CHECK_COUNT, analyticsEvents } from '../lib/marketing';

const faqGroups = [
  {
    label: 'Getting started',
    description: 'The basics for bars, venues, events, and door staff.',
    items: [
      {
        q: 'Do I need a scanner?',
        a: 'No proprietary scanner is required. TapTrust is designed for supported mobile ID checks on an iPhone.',
      },
      {
        q: `How do the ${FREE_CHECK_COUNT} free checks work?`,
        a: `Download TapTrust and start with ${FREE_CHECK_COUNT} live checks before deciding whether the paid path fits your venue workflow.`,
      },
      {
        q: 'What if nobody has a mobile ID yet?',
        a: 'TapTrust is useful when supported credentials appear, without forcing you to change the rest of your ID policy before adoption grows.',
      },
    ],
  },
  {
    label: 'Supported credentials',
    description: 'What TapTrust can check, and where availability can vary.',
    items: [
      {
        q: 'What IDs can TapTrust check?',
        a: 'TapTrust supports Apple Passport Verified IDs, supported state-issued mobile IDs, and Apple Wallet Mobile IDs where supported by the device, issuer, and Apple verification flow.',
      },
      {
        q: 'What are Passport Verified IDs?',
        a: 'Passport Verified IDs are Apple-supported identity credentials based on passport verification. TapTrust treats them as part of the supported age-check workflow where available.',
      },
      {
        q: 'What happens if a credential is not supported?',
        a: 'Staff should follow your venue policy for other forms of ID. TapTrust does not promise that every digital ID, state, issuer, device, or jurisdiction is available.',
      },
    ],
  },
  {
    label: 'Door workflow',
    description: 'How staff use TapTrust during real checks.',
    items: [
      {
        q: 'What if my staff has never seen a mobile ID?',
        a: 'TapTrust uses clear result screens and a Match / Doesn\'t Match confirmation so staff can follow a consistent workflow.',
      },
      {
        q: 'What is Fast Mode?',
        a: 'Fast Mode helps staff keep checks moving during busy periods by streamlining the reset for the next guest.',
      },
      {
        q: 'What does Match / Doesn\'t Match mean?',
        a: 'Staff compare the credential photo with the guest and mark whether the person matches before completing the check.',
      },
      {
        q: 'Can I switch age thresholds?',
        a: 'Yes. TapTrust supports switching age thresholds for workflows such as 18+, 21+, or 65+ when supported by the app.',
      },
    ],
  },
  {
    label: 'Trust and compliance',
    description: 'Privacy and legal-positioning questions.',
    items: [
      {
        q: 'Does TapTrust replace legal judgment?',
        a: 'No. TapTrust helps staff evaluate supported credentials, but it does not replace venue policy, staff judgment, or legal compliance obligations.',
      },
      {
        q: 'Does TapTrust store personal data?',
        a: 'TapTrust is designed for privacy-first checks and avoids storing personal ID data. Review the privacy policy for the current data-handling contract.',
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <div className="bg-black">
      <section className="border-b border-white/10 bg-black px-4 pb-10 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="faq-page-title mb-4 font-bold tracking-tight text-blue-300">
            FAQ
          </h1>
          <p className="text-2xl font-semibold leading-tight text-white">
            Straight answers before your staff uses TapTrust.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-400">
            Setup, supported credentials, door workflow, privacy, and legal
            positioning in plain English.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {faqGroups.map(({ label, description, items }) => (
            <section
              key={label}
              id={label.toLowerCase().replaceAll(' ', '-')}
              className="scroll-mt-28"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">{label}</h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
              <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-[#0b0b0b]">
                {items.map(({ q, a }) => (
                  <details
                    key={q}
                    data-analytics-event={analyticsEvents.faqInteraction}
                    className="group p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                      <span>{q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400">{a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};
