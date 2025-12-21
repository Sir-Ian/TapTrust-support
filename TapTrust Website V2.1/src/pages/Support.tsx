import React from 'react';
import { Mail } from 'lucide-react';

export const Support = () => {
  return (
    <div className="py-24 bg-black text-gray-300 min-h-[80vh]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Support</h1>
        <p className="text-lg text-gray-400 mb-12">
          Have questions or need help setting up TapTrust? We're here to help.
        </p>

        <div className="bg-[#111] border border-white/5 rounded-3xl p-10 max-w-md mx-auto">
           <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-500" />
           </div>
           <h2 className="text-xl font-semibold text-white mb-2">Email Us</h2>
           <p className="text-gray-500 mb-6">For general inquiries, technical support, and feedback.</p>
           
           <a 
            href="mailto:help@taptrust.app" 
            className="block w-full py-3 px-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
           >
              help@taptrust.app
           </a>
        </div>
      </div>
    </div>
  );
};
