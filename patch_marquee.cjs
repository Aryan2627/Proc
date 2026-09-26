const fs = require('fs');
const path = 'C:/Users/aryan/.gemini/antigravity/scratch/Proc/src/app/page.tsx';
let code = fs.readFileSync(path, 'utf8');

const oldBlock = `        {/* --- LOGO MARQUEE (ATLAN STYLE) --- */}
        <section className="py-12 bg-transparent border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-8">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted by AI-forward enterprise supply chains</p>
          </div>
          <div className="relative flex w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex items-center gap-16 md:gap-32 whitespace-nowrap opacity-60 grayscale px-8"
              animate={{ x: [0, -1500] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
               <div className="text-2xl font-black tracking-tighter">HAVELLS</div>
               <div className="text-2xl font-black tracking-tighter">SIGNATURE GLOBAL</div>
               <div className="text-2xl font-black tracking-tighter">ZUARI</div>
               <div className="text-2xl font-black tracking-tighter">VEDANTA</div>
               <div className="text-2xl font-black tracking-tighter">TATA STEEL</div>
               <div className="text-2xl font-black tracking-tighter">ADANI</div>
               {/* Duplicates for infinite scroll effect */}
               <div className="text-2xl font-black tracking-tighter">HAVELLS</div>
               <div className="text-2xl font-black tracking-tighter">SIGNATURE GLOBAL</div>
               <div className="text-2xl font-black tracking-tighter">ZUARI</div>
               <div className="text-2xl font-black tracking-tighter">VEDANTA</div>
               <div className="text-2xl font-black tracking-tighter">TATA STEEL</div>
               <div className="text-2xl font-black tracking-tighter">ADANI</div>
            </motion.div>
          </div>
        </section>`;

const newBlock = `        {/* --- IMPACT METRICS (DARK THEME BRIDGE) --- */}
        <section className="py-16 bg-gradient-to-b from-[#0B101E] to-[#02040A] border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/5 text-center">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">$12B+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Spend Managed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">3.2M</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Contracts Analyzed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">99.9%</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Data Accuracy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-tight mb-2">Zero</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">AI Hallucinations</span>
              </div>
            </div>
          </div>
        </section>`;

if (code.includes('Trusted by AI-forward enterprise supply chains')) {
  // Rather than exact string replace which can fail on line endings, use a targeted regex
  const regex = /\{\/\* --- LOGO MARQUEE \(ATLAN STYLE\) --- \*\/\}[\s\S]*?<\/section>/;
  code = code.replace(regex, newBlock);
  fs.writeFileSync(path, code, 'utf8');
  console.log("Successfully replaced logo marquee with dark metrics banner");
} else {
  console.log("Marquee not found");
}
