import React from 'react';
import { Check, Mail, ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  CONTACT_EMAIL,
  CONTACT_URL,
  FREE_CHECK_COUNT,
  analyticsEvents,
  downloadLinks,
} from '../lib/marketing';

const setupChecklist = [
  'Download TapTrust on the iPhone your staff will use.',
  `Start with the ${FREE_CHECK_COUNT} free checks when supported credentials appear.`,
  'Choose the age threshold your workflow needs, such as 18+ or 21+.',
  'Have staff compare the credential photo with the guest and select Match / Doesn\'t Match.',
  'Use Fast Mode during busy periods to reset for the next check.',
];

export const Support = () => {
  return (
    <div className="bg-black py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Support
          </p>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Get TapTrust into your door workflow.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
            Download the app, start with {FREE_CHECK_COUNT} free checks, or review
            common questions before your staff uses TapTrust.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={downloadLinks.website_contact}
              data-analytics-event={analyticsEvents.freeTrialCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
            >
              Start Free
            </a>
            <a
              href={CONTACT_URL}
              data-analytics-event={analyticsEvents.contactSupport}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-blue-300/70 hover:bg-white/5"
            >
              Email support
            </a>
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <a
            href={downloadLinks.website_contact}
            data-analytics-event={analyticsEvents.appStoreCta}
            className="rounded-lg border border-white/10 bg-[#111] p-7 text-left transition hover:border-blue-300/50 hover:bg-[#151515]"
          >
            <Smartphone className="mb-6 h-8 w-8 text-blue-300" />
            <h2 className="mb-3 text-xl font-semibold text-white">Download / free trial</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Install TapTrust and use the first {FREE_CHECK_COUNT} checks before changing
              your nightly workflow.
            </p>
          </a>

          <div className="rounded-lg border border-white/10 bg-[#111] p-7 text-left">
            <ShieldCheck className="mb-6 h-8 w-8 text-blue-300" />
            <h2 className="mb-3 text-xl font-semibold text-white">Legal and privacy</h2>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              Review the privacy policy, terms, and age suitability pages before rollout.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-blue-300">
              <Link to="/privacy" className="hover:text-blue-200">Privacy</Link>
              <Link to="/terms" className="hover:text-blue-200">Terms</Link>
              <Link to="/age-suitability" className="hover:text-blue-200">Age suitability</Link>
              <Link to="/faq" className="hover:text-blue-200">FAQ</Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-[#0b0b0b] p-7">
            <h2 className="mb-6 text-2xl font-bold text-white">Setup checklist</h2>
            <div className="space-y-4">
              {setupChecklist.map((item) => (
                <div key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-sm leading-relaxed text-gray-400">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#0b0b0b] p-7">
            <Mail className="mb-5 h-8 w-8 text-blue-300" />
            <h2 className="mb-3 text-2xl font-bold text-white">Email support</h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              For support, technical issues, and feedback.
            </p>
            <a
              href={CONTACT_URL}
              data-analytics-event={analyticsEvents.contactSupport}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-gray-100"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
