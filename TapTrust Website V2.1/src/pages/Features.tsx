import React from 'react';
import { ShieldCheck, Smartphone, Check, Zap, Lock, BarChart3, RefreshCcw, ToggleLeft } from 'lucide-react';

export const Features = () => {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/5 bg-[#050505]">
         <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
               Modern IDs in, <br/>
               <span className="text-blue-500">legacy excuses out.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
               TapTrust bridges the gap between the new wave of digital IDs and the physical security needs of your venue—and it accepts Mobile IDs and traditional barcodes in the same flow.
            </p>
         </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
         <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* Card 1 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">One Device. One Tap.</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Consolidate your verification tools. No expensive proprietary scanners needed—just an iPhone.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Zero Training Required</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Say "yes" to Mobile IDs without a staff meeting. The interface is self-explanatory and guide-rails the process.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <RefreshCcw className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Queue Mode</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Keeps the reader live for nonstop, back-to-back verifications during rushes.
                  </p>
               </div>

               {/* Card 4 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Privacy by Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                     We never store personal data. Images and names stay on the customer's device or disappear after the check.
                  </p>
               </div>

               {/* Card 5 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <ToggleLeft className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Optional Confirmation</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Venues can enable or disable the Match/No Match button to suit their workflow.
                  </p>
               </div>

               {/* Card 6 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Native Performance</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Built with native iOS technologies for instant loading, smooth 120Hz animations, and haptic feedback.
                  </p>
               </div>

               {/* Card 7 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Anonymous Analytics</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Track throughput, age demographics, and peak times without ever compromising guest privacy.
                  </p>
               </div>

               {/* Card 8 */}
               <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Apple Standard</h3>
                  <p className="text-gray-400 leading-relaxed">
                     If Apple supports it, TapTrust does too. We follow the strictest guidelines for Mobile ID implementation.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] border-t border-white/5 text-center">
         <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Stop saying "We don't do that."</h2>
            <p className="text-gray-400 mb-10 text-lg">Start accepting the future of identification today.</p>
            <button className="h-14 px-10 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(37,99,235,0.3)]">
               Get TapTrust
            </button>
         </div>
      </section>
    </div>
  );
};
