import React from 'react';

export const Terms = () => {
  return (
    <div className="py-24 bg-black text-gray-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Effective Date: January 1, 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Agreement</h2>
            <p className="leading-relaxed">
              By downloading or using TapTrust, you agree to these Terms of Service. If you do not agree, please do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Purpose</h2>
            <p className="leading-relaxed">
              TapTrust provides age verification tools using Apple Wallet mobile IDs and physical ID barcode scanning. TapTrust does not guarantee legal compliance in all jurisdictions. It is your responsibility to ensure the app is used in accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. No Data Storage</h2>
            <p className="leading-relaxed">
              TapTrust does not collect or store personal data from IDs. Operators using the app may manually record verification outcomes, but no personal data is saved by TapTrust itself.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Disclaimer</h2>
            <p className="leading-relaxed">
              TapTrust is provided “as is” without warranties of any kind. We are not responsible for misuse of the app, failure to verify IDs, or compliance failures by third-party businesses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, TapTrust and its developers are not liable for damages resulting from the use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Changes</h2>
            <p className="leading-relaxed">
              We may update these Terms from time to time. Continued use of TapTrust after updates constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Contact</h2>
            <p className="leading-relaxed">
              For questions, email us at <a href="mailto:help@taptrust.app" className="text-blue-500 hover:text-blue-400">help@taptrust.app</a>.
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
