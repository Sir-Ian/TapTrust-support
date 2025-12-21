import React from 'react';
import { Check } from 'lucide-react';

export const SayYesMoment = () => {
  return (
    <section className="bg-black pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <figure className="mx-auto max-w-5xl">
          <figcaption className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
              “People expect them to work.”
            </p>
          </figcaption>

          <div
            className="relative mt-10 sm:mt-12 rounded-3xl border border-white/10 bg-white/[0.03] px-4 sm:px-8 py-10 sm:py-14 overflow-hidden"
            role="img"
            aria-label="A guest presents a Mobile ID on a personal device while a venue device confirms acceptance."
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[120px]" />
              <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-[80px]" />
            </div>

            <div className="relative mx-auto max-w-4xl min-h-[320px] sm:min-h-[380px]">
              {/* Guest device (foreground, left) */}
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[120%] sm:-translate-x-[140%] z-10">
                <div className="relative w-[210px] sm:w-[250px] aspect-[9/19.5] rounded-[2.75rem] border-[8px] border-[#141414] bg-black shadow-2xl overflow-hidden">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-[#0f0f0f] border border-white/5" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.06] to-transparent pointer-events-none" />

                  <div className="h-full w-full px-6 pt-14 pb-8 flex flex-col">
                    <div className="h-3 w-28 rounded-full bg-white/10" />
                    <div className="mt-3 h-2 w-40 rounded-full bg-white/5" />
                    <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="h-2 w-24 rounded-full bg-white/10" />
                      <div className="mt-4 h-10 rounded-xl border border-white/10 bg-black/50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Venue device (background, right) */}
              <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[120%] sm:translate-x-[140%] z-0 opacity-90">
                <div className="relative w-[190px] sm:w-[220px] aspect-[10/15] rounded-[2.25rem] border border-white/10 bg-[#0b0b0b] shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                  <div className="h-full w-full p-5 flex flex-col">
                    <div className="h-2 w-24 rounded-full bg-white/10" />
                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-4 flex-1">
                      <div className="h-2 w-20 rounded-full bg-white/10" />
                      <div className="mt-4 h-9 rounded-xl border border-white/10 bg-white/[0.04]" />
                    </div>
                    <div className="mt-5 h-10 rounded-2xl border border-white/10 bg-white/[0.03]" />
                  </div>
                </div>
              </div>

              {/* Confirmation state (center, primary focus) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative rounded-3xl border border-green-500/40 bg-black/50 backdrop-blur-md px-10 py-9 shadow-[0_0_70px_rgba(34,197,94,0.18)]">
                  <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-green-500/40 bg-green-500/15">
                    <Check className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center">
                    Yes.
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

