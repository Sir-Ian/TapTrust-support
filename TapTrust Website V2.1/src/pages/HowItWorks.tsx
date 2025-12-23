import React from 'react';
import { Smartphone, ShieldCheck, Check, UserCheck, Lock } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-4xl">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Simple infrastructure for <br/>
              <span className="text-blue-500">complex environments.</span>
           </h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              TapTrust replaces guesswork with a structured, secure workflow that anyone on your staff can master in seconds.
           </p>
        </div>
      </section>

      {/* The Flow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
         {/* Background connecting line */}
         <div className="hidden lg:block absolute top-[280px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-900/20 via-blue-500/50 to-blue-900/20 z-0" />

         <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
               
               {/* Step 1 */}
               <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 relative">
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center text-sm font-bold">1</div>
                     <Smartphone className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Guest Taps</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                     The guest holds their iPhone or Apple Watch near your device. No unlocking required.
                  </p>
               </div>

               {/* Step 2 */}
               <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 relative">
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center text-sm font-bold">2</div>
                     <Lock className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Secure Handshake</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                     Devices establish a direct, encrypted connection. No internet needed for the check itself.
                  </p>
               </div>

               {/* Step 3 */}
               <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 relative">
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center text-sm font-bold">3</div>
                     <UserCheck className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Display Only</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                     TapTrust shows <strong>only</strong> the age status and photo. No address, no weight, no clutter.
                  </p>
               </div>

               {/* Step 4 */}
               <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 relative">
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center text-sm font-bold">4</div>
                     <Check className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">You Decide</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                     Verifier taps "Match" or "No Match". The decision is logged, and the queue keeps moving.
                  </p>
               </div>

            </div>
            <p className="mt-10 text-center text-gray-400 text-sm max-w-3xl mx-auto">
               As soon as a guest is cleared, the system resets instantly for the next tap—built for Queue Mode throughput.
            </p>
            <p className="mt-3 text-center text-gray-400 text-sm max-w-3xl mx-auto">
               The Match/No Match step is optional. Turn it on to log decisions, or off to move even faster.
            </p>
         </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why this flow works better.</h2>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                           <Check className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                           <h4 className="text-white font-semibold text-lg">Removes "Mental Math"</h4>
                           <p className="text-gray-400 text-sm mt-1">
                              Staff no longer need to calculate "2025 minus 1999". The app just says "21+".
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                           <Check className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                           <h4 className="text-white font-semibold text-lg">Forces Attention</h4>
                           <p className="text-gray-400 text-sm mt-1">
                              The "Match / No Match" button requirement prevents autopilot scanning.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                           <Check className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                           <h4 className="text-white font-semibold text-lg">Works Offline</h4>
                           <p className="text-gray-400 text-sm mt-1">
                              Uses NFC and local device decryption. No venue Wi-Fi required.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Visual: Abstract Interaction */}
               <div className="bg-[#111] rounded-3xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                  
                  <div className="w-full max-w-sm space-y-4">
                     {/* Fake Chat/Interaction Bubbles to show simplicity */}
                     <div className="flex justify-start">
                        <div className="bg-[#222] rounded-2xl rounded-tl-none py-3 px-5 text-sm text-gray-300">
                           Guest taps phone...
                        </div>
                     </div>
                     <div className="flex justify-end">
                        <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl rounded-tr-none py-3 px-5 text-sm text-blue-200">
                           <span className="font-bold text-white block mb-1">Status: OK</span>
                           Age Verified. Photo Ready.
                        </div>
                     </div>
                     <div className="flex justify-start">
                        <div className="bg-[#222] rounded-2xl rounded-tl-none py-3 px-5 text-sm text-gray-300">
                           Staff confirms photo match.
                        </div>
                     </div>
                     <div className="flex justify-center pt-4">
                        <div className="flex items-center gap-2 text-green-500 text-sm font-bold bg-green-900/10 px-4 py-2 rounded-full border border-green-900/30">
                           <Check className="w-4 h-4" />
                           Entry Allowed
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
         <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">See it in action.</h2>
            <p className="text-gray-400 mb-10 text-lg">Download TapTrust and try the demo mode today.</p>
            <button className="h-14 px-10 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
               Get Started
            </button>
            <p className="mt-4 text-gray-500 text-sm">Switch on demo mode to experience the full flow without onboarding.</p>
         </div>
      </section>
    </div>
  );
};
