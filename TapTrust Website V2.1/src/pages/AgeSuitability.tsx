import React from 'react';

export const AgeSuitability = () => {
  return (
    <div className="py-24 bg-black text-gray-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Age Suitability</h1>

        <div className="space-y-8">
          <section>
             <div className="bg-[#111] p-6 rounded-2xl border border-white/5 inline-block mb-8">
                <span className="text-3xl font-bold text-white">3+</span>
             </div>
            <p className="leading-relaxed text-lg text-gray-400">
              TapTrust is set to 3+. The app does not contain explicit content,
              mature imagery, profanity, gambling, social features, or
              user-generated content.
            </p>
          </section>

          <section>
            <p className="leading-relaxed text-lg text-gray-400">
              TapTrust is a privacy-forward utility for supported credential
              checks. Businesses may use it in regulated settings, but the app
              itself is a simple tool and does not include mature content.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Cognos Solution LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
