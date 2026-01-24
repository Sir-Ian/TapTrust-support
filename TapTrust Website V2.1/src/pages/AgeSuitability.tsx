import React from 'react';

export const AgeSuitability = () => {
  return (
    <div className="py-24 bg-black text-gray-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Age Suitability</h1>

        <div className="space-y-8">
          <section>
             <div className="bg-[#111] p-6 rounded-2xl border border-white/5 inline-block mb-8">
                <span className="text-3xl font-bold text-white">18+</span>
             </div>
            <p className="leading-relaxed text-lg text-gray-400">
              TapTrust does not contain explicit content, imagery, or language. However, because the app’s purpose is to check IDs in contexts that include age-restricted services such as alcohol sales, we have set the suitability rating to 18+.
            </p>
          </section>

          <section>
            <p className="leading-relaxed text-lg text-gray-400">
              We chose the higher threshold to reflect the nature of ID checks and to align with best practices for apps connected to regulated activities. This ensures clear expectations for both businesses and users.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 text-sm text-gray-600">
            <p>© 2025 Cognos Solution LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
