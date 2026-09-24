const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const dashboardMockup = `
          {/* --- FLOATING APP PREVIEW --- */}
          <motion.div
            initial={{ opacity: 0, y: 150, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            style={{ perspective: 1200 }}
            className="mt-20 relative w-full max-w-5xl mx-auto z-20"
          >
            {/* Glow behind the dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col text-left transform-gpu">
               {/* Fake Mac Header */}
               <div className="h-10 bg-black/40 flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-rose-500 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-amber-500 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-emerald-500 transition-colors cursor-pointer"></div>
                  <div className="mx-auto text-xs font-medium text-slate-500 flex items-center gap-2"><Globe size={12}/> app.procgen.ai</div>
               </div>
               
               {/* Fake Content Area */}
               <div className="h-[400px] md:h-[500px] p-4 flex gap-4">
                  {/* Sidebar */}
                  <div className="hidden md:flex w-48 flex-col gap-6 border-r border-white/5 pr-4 pt-4">
                     <div className="space-y-3">
                       <div className="h-3 w-16 bg-white/20 rounded"></div>
                       <div className="h-8 w-full bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center px-3 gap-2">
                         <div className="w-4 h-4 rounded bg-blue-400"></div>
                         <div className="h-2 w-16 bg-blue-300/50 rounded"></div>
                       </div>
                       <div className="h-8 w-full bg-white/5 hover:bg-white/10 rounded-lg flex items-center px-3 gap-2">
                         <div className="w-4 h-4 rounded bg-slate-600"></div>
                         <div className="h-2 w-20 bg-slate-500 rounded"></div>
                       </div>
                     </div>
                     <div className="mt-auto h-24 w-full bg-white/5 rounded-xl border border-white/10 p-3">
                       <div className="h-2 w-16 bg-slate-400 rounded mb-2"></div>
                       <div className="h-2 w-full bg-slate-600 rounded mb-1"></div>
                       <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
                     </div>
                  </div>
                  
                  {/* Main Interface */}
                  <div className="flex-1 flex flex-col gap-4 pt-4">
                     <div className="flex justify-between items-center">
                       <div>
                         <div className="h-5 w-48 bg-white/20 rounded mb-2"></div>
                         <div className="h-3 w-64 bg-white/10 rounded"></div>
                       </div>
                       <div className="h-10 w-32 bg-blue-600 rounded-lg border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                         <div className="h-3 w-16 bg-white/80 rounded"></div>
                       </div>
                     </div>
                     
                     {/* Chat / Data visualization area */}
                     <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-6 flex flex-col justify-end gap-6 overflow-hidden relative">
                       {/* AI analyzing effect */}
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                       
                       <motion.div initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:0}} transition={{delay: 1.5}} className="self-start bg-slate-800 border border-slate-700 p-4 rounded-2xl rounded-tl-sm max-w-[80%]">
                         <div className="h-3 w-48 bg-slate-400 rounded mb-3"></div>
                         <div className="h-3 w-64 bg-slate-500 rounded"></div>
                       </motion.div>
                       
                       <motion.div initial={{opacity: 0, x:20}} animate={{opacity: 1, x:0}} transition={{delay: 2.2}} className="self-end bg-blue-600 border border-blue-500 p-4 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
                         <div className="h-3 w-56 bg-white/80 rounded mb-3"></div>
                         <div className="h-3 w-40 bg-blue-200 rounded"></div>
                       </motion.div>
                       
                       <motion.div initial={{opacity: 0, y:20}} animate={{opacity: 1, y:0}} transition={{delay: 3}} className="self-start bg-slate-800 border border-slate-700 p-4 rounded-2xl rounded-tl-sm w-full">
                         <div className="flex gap-4 mb-4">
                           <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center"><Activity className="text-indigo-400" size={20}/></div>
                           <div>
                             <div className="h-3 w-32 bg-slate-300 rounded mb-2 mt-1"></div>
                             <div className="h-2 w-24 bg-slate-500 rounded"></div>
                           </div>
                         </div>
                         <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                           <motion.div initial={{width: "0%"}} animate={{width: "75%"}} transition={{delay: 3.5, duration: 1.5}} className="h-full bg-blue-500"></motion.div>
                         </div>
                       </motion.div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
`;

page = page.replace(/<\/header>/, `  ${dashboardMockup}\n      </header>`);

// Add 'whileInView' wrapper around the sections we want to animate on scroll
// Features Section
page = page.replace(
  /<section id="features" className="py-24 bg-\[\#F9F9FC\]">/,
  '<section id="features" className="py-24 bg-[#F9F9FC]"><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>'
);
page = page.replace(
  /\{\/\* --- PLATFORM INTEGRATIONS/,
  '</motion.div>\n      {/* --- PLATFORM INTEGRATIONS'
);

// G2 Awards Section
page = page.replace(
  /<section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">/,
  '<section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800"><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>'
);
page = page.replace(
  /\{\/\* --- SECURITY & CERTIFICATION SECTION/,
  '</motion.div>\n      {/* --- SECURITY & CERTIFICATION SECTION'
);

// Pricing Section
page = page.replace(
  /<section id="pricing" className="py-24 bg-white border-t border-slate-200">/,
  '<section id="pricing" className="py-24 bg-white border-t border-slate-200"><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>'
);
page = page.replace(
  /\{\/\* --- MEGA FOOTER/,
  '</motion.div>\n      {/* --- MEGA FOOTER'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Successfully made the site extremely advanced and dynamic!');
