import React from 'react';
import { APP_STORE_URL } from '../lib/marketing';

export const DownloadRedirect = () => {
  React.useEffect(() => {
    window.location.replace(APP_STORE_URL);
  }, []);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-black px-4 text-center">
      <div className="max-w-md">
        <h1 className="mb-4 text-3xl font-bold text-white">Opening TapTrust in the App Store</h1>
        <p className="mb-6 text-gray-400">
          If the App Store does not open automatically, use the link below.
        </p>
        <a
          href={APP_STORE_URL}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          Download TapTrust
        </a>
      </div>
    </section>
  );
};
