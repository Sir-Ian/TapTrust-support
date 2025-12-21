import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Smartphone, Check, UserCheck, Menu, X, ArrowRight } from 'lucide-react';
import logoImage from 'figma:asset/7b231eacdf04e2d5bed4780cf5ceeaa7fb44ca7f.png';
import appScreenshot from 'figma:asset/2c800d57d25cd7ad57c6c559e0e4041b79aa5be1.png';

// --- Navigation ---
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Venues', href: '#venues' },
    { name: 'Security', href: '#security' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
             <img src={logoImage} alt="TapTrust Logo" className="h-8 w-8 object-contain brightness-0 invert" />
            <span className="text-xl font-semibold tracking-tight text-white">TapTrust</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-400 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-blue-400 hover:bg-blue-500/10"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 lg:pt-48 flex items-center overflow-hidden bg-black">
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

// --- Psychological Security / How It Works ---
const PsychologicalSecurity = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-white mb-4">
            Psychological <span className="text-blue-500">Security</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A deliberate checkpoint that shifts responsibility to the verifier and reduces passive mistakes.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
           {/* Connecting Line */}
           <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-gray-800 z-0" />

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                 <div className="w-14 h-14 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-black/50">
                    1
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Tap</h3>
                 <p className="text-gray-400 leading-relaxed max-w-xs">
                    Customer presents Apple Wallet ID to your device.
                 </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                 <div className="w-14 h-14 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-black/50">
                    2
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Review</h3>
                 <p className="text-gray-400 leading-relaxed max-w-xs">
                    Verifier sees clear, minimal data needed for verification.
                 </p>
              </div>

              {/* Step 3 - Highlighted */}
              <div className="flex flex-col items-center text-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 rounded-full" />
                    <div className="relative w-14 h-14 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-xl">
                       3
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Confirm</h3>
                 <p className="text-gray-400 leading-relaxed max-w-xs">
                    Forces an explicit "Match" or "No Match" selection.
                 </p>
              </div>

           </div>
        </div>

        {/* Visual Preview of "Confirm" step */}
        <div className="mt-24 max-w-4xl mx-auto">
           <div className="bg-[#111] rounded-3xl border border-gray-800 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Intentional Verification</h3>
                    <p className="text-gray-400 mb-6">
                       Unlike passive scanning, TapTrust requires a human decision. This creates a moment of focus and accountability for every single ID check.
                    </p>
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Reduces autopilot mistakes</span>
                       </li>
                       <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Creates an audit trail of decisions</span>
                       </li>
                       <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Clearer than squinting at holograms</span>
                       </li>
                    </ul>
                 </div>

                 {/* Simulated Interface Card */}
                 <div className="bg-black rounded-2xl border border-gray-800 p-6 flex flex-col items-center text-center shadow-2xl">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">Confirm Identity</p>
                    
                    <div className="w-24 h-32 bg-gray-800 rounded-lg mb-4 animate-pulse" />
                    <div className="h-4 w-32 bg-gray-800 rounded-full mb-8" />
                    
                    <div className="grid grid-cols-2 gap-3 w-full">
                       <div className="py-3 rounded-lg border border-red-900/50 bg-red-900/10 text-red-500 text-sm font-medium cursor-not-allowed">
                          Doesn't Match
                       </div>
                       <div className="py-3 rounded-lg border border-green-900/50 bg-green-900/10 text-green-500 text-sm font-medium cursor-not-allowed">
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

// --- Features Grid ---
const Features = () => {
   return (
      <section className="py-32 bg-black border-t border-white/5">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                     <UserCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Privacy First</h3>
                  <p className="text-gray-400">
                     No personal data is stored on the device. Verification happens locally and securely using Apple's Mobile ID standards.
                  </p>
               </div>

               <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                     <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Venue Analytics</h3>
                  <p className="text-gray-400">
                     Track capacity and demographics anonymously. Know your crowd without invading their privacy.
                  </p>
               </div>

               <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                     <Smartphone className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Native Feel</h3>
                  <p className="text-gray-400">
                     Designed to feel like a part of the OS. Smooth animations, haptic feedback, and instant loading.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};


// --- Footer ---
const Footer = () => {
   return (
      <footer className="bg-black border-t border-white/10 py-12 lg:py-16">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
                <img src={logoImage} alt="TapTrust Logo" className="h-6 w-6 object-contain brightness-0 invert opacity-80" />
               <span className="text-lg font-semibold text-white">TapTrust</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
               <a href="#" className="hover:text-white transition-colors">Home</a>
               <a href="#venues" className="hover:text-white transition-colors">For Venues</a>
               <a href="#security" className="hover:text-white transition-colors">Security</a>
               <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-sm text-gray-600">
               © {new Date().getFullYear()} TapTrust. All rights reserved.
            </div>
         </div>
      </footer>
   );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <PsychologicalSecurity />
      <Features />
      <div id="contact" className="py-32 bg-[#050505] border-t border-white/5 text-center relative overflow-hidden">
         {/* Background glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="mx-auto max-w-2xl px-4 relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Ready to upgrade your door?</h2>
            <p className="text-gray-400 mb-10 text-lg">Join the venues trusting TapTrust for secure, fast verification.</p>
            <button className="h-14 px-10 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
               Get Started
            </button>
         </div>
      </div>
      <Footer />
    </div>
  );
}
