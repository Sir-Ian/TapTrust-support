import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Smartphone, Check, UserCheck, X } from 'lucide-react';
import appScreenshot from 'figma:asset/2c800d57d25cd7ad57c6c559e0e4041b79aa5be1.png';
import { SayYesMoment } from '../components/SayYesMoment';

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-12 pb-20 lg:pt-32 flex items-center overflow-hidden bg-black">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-40 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-[1.1]"
            >
              Verify Apple Wallet Mobile IDs with <span className="text-blue-500">one tap</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl leading-relaxed text-gray-400 mb-8 max-w-lg"
            >
              TapTrust makes ID verification faster, clearer, and more confident than scanning physical licenses.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <button className="h-14 px-8 rounded-lg bg-blue-500 text-white font-semibold text-lg transition-transform hover:bg-blue-400 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-10"
             >
                {/* Phone Frame */}
                <div className="relative w-[320px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden aspect-[9/19.5]">
                   {/* Screenshot Image */}
                   <img 
                      src={appScreenshot} 
                      alt="TapTrust App Interface" 
                      className="w-full h-full object-cover"
                   />
                   
                   {/* Screen Glare/Reflection */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Ambient Glow behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-3xl -z-10 rounded-full" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Market Reality Section (Replaces Psychological Security) ---
const MarketReality = () => {
   return (
      <section id="how-it-works" className="py-32 bg-[#050505] relative overflow-hidden">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Mobile IDs are <span className="text-blue-500">here</span>.
               </h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  People expect them to work. TapTrust lets you say "yes" instead of "we don't do that."
               </p>
            </div>
            
            {/* Visuals illustrating "Old Way" vs "TapTrust Way" */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <div className="bg-[#0f0f0f] p-8 rounded-3xl border border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="text-2xl font-bold text-white mb-4">The Old Way</div>
                  <p className="text-gray-400 mb-8 h-12">"Sorry, I need to see the physical card."</p>
                  <div className="flex items-center gap-4 text-gray-500 bg-black/50 p-4 rounded-xl">
                     <X className="w-6 h-6" />
                     <span>Customer disappointment</span>
                  </div>
               </div>

               <div className="bg-[#111] p-8 rounded-3xl border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.1)] relative">
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                     NEW STANDARD
                  </div>
                  <div className="text-2xl font-bold text-white mb-4">TapTrust</div>
                  <p className="text-gray-400 mb-8 h-12">"Sure, just tap right here."</p>
                  <div className="flex items-center gap-4 text-white bg-blue-900/20 p-4 rounded-xl border border-blue-500/20">
                     <Check className="w-6 h-6 text-blue-500" />
                     <span>Seamless experience</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

// --- One Clear Answer (Replaces Intentional Verification) ---
const OneClearAnswer = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left: The Content */}
           <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                 One device. One tap.<br/>
                 <span className="text-blue-500">One clear answer.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                 TapTrust removes the guesswork. There's no math to do, no holograms to hunt for, and no tiny text to read in a dark club.
              </p>
              
              <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 shrink-0">
                       <Check className="w-4 h-4" />
                    </div>
                    <div>
                       <h3 className="text-white font-semibold">Immediate Result</h3>
                       <p className="text-gray-500 text-sm mt-1">Status is shown instantly with clear color coding.</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 shrink-0">
                       <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                       <h3 className="text-white font-semibold">Privacy Preserved</h3>
                       <p className="text-gray-500 text-sm mt-1">You verify the age, not the address. Less liability for you.</p>
                    </div>
                 </li>
              </ul>
           </div>

           {/* Right: The Visual (Preserved but updated text) */}
           <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-[#111] rounded-3xl border border-gray-800 p-8 md:p-10 relative shadow-2xl max-w-md w-full">
                  {/* Simulated Interface Card */}
                  <div className="flex flex-col items-center text-center">
                     <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Verification Result</p>
                     
                     {/* The "Choice" UI */}
                     <div className="w-full aspect-square bg-black rounded-2xl border border-gray-800 mb-8 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                        <div className="w-32 h-32 bg-gray-800/50 rounded-full mb-6 animate-pulse" />
                        <div className="h-4 w-40 bg-gray-800/50 rounded-full" />
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="py-4 rounded-xl border border-red-900/30 bg-red-900/5 text-red-500/50 text-sm font-bold flex flex-col items-center gap-2">
                           <X className="w-5 h-5" />
                           No Match
                        </div>
                        <div className="py-4 rounded-xl border-2 border-green-500 bg-green-900/20 text-green-400 text-sm font-bold shadow-[0_0_20px_rgba(34,197,94,0.2)] flex flex-col items-center gap-2">
                           <Check className="w-5 h-5" />
                           Match
                        </div>
                     </div>
                  </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// --- Features Grid (Replaces old grid) ---
const KeyFeatures = () => {
   return (
      <section className="py-32 bg-[#050505] border-t border-white/5">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                     <UserCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">No Retraining Needed</h3>
                  <p className="text-gray-400">
                     "Say yes to Mobile IDs without retraining your staff." The app is intuitive enough that anyone can use it instantly.
                  </p>
               </div>

               <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                     <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Apple Supported</h3>
                  <p className="text-gray-400">
                     "If Apple supports it, TapTrust does too." We support every state and jurisdiction currently in Apple Wallet.
                  </p>
               </div>

               <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                     <Smartphone className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Modern IDs In</h3>
                  <p className="text-gray-400">
                     Legacy excuses out. Don't be the venue that turns away valid, government-issued digital IDs.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <SayYesMoment />
      <MarketReality />
      <OneClearAnswer />
      <KeyFeatures />
      
      {/* Final CTA */}
      <div id="contact" className="py-32 bg-black border-t border-white/5 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="mx-auto max-w-2xl px-4 relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Ready to upgrade your door?</h2>
            <p className="text-gray-400 mb-10 text-lg">Join the venues trusting TapTrust.</p>
            <button className="h-14 px-10 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
               Get Started
            </button>
         </div>
      </div>
    </>
  );
};
