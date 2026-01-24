import React from 'react';

export const Privacy = () => {
  return (
    <div className="py-24 bg-black text-gray-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Effective Date: January 1, 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <p className="leading-relaxed">
              TapTrust is designed with privacy first. Our app supports staff visual confirmation of age eligibility using Apple’s Display Only technology and optional barcode scanning. We do not collect, store, or share personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information We Do Not Collect</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>We do not collect names, addresses, dates of birth, or ID numbers.</li>
              <li>We do not store images or scans of IDs.</li>
              <li>We do not collect location data or device identifiers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">How the ID check works</h2>
            <p className="leading-relaxed">
              When a customer presents a mobile ID in Apple Wallet, the ID is displayed only on their own device. The operator visually confirms age eligibility (21+) without any data being transferred. When scanning a physical driver’s license, only the barcode is read locally and no data leaves the device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
            <p className="leading-relaxed">
              TapTrust relies on Apple’s iOS APIs, including Wallet and Display Only. Apple may collect limited diagnostic data per their own policies. Please review Apple’s privacy policy for more details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <a href="mailto:help@taptrust.app" className="text-blue-500 hover:text-blue-400">help@taptrust.app</a>
          </section>

          <section className="pt-8 border-t border-white/10 text-sm text-gray-600">
            <p>© 2025 Cognos Solution LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
