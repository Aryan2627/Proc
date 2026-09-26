const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// The block to replace
const oldHeadingRegex = /<div className="text-center max-w-3xl mx-auto mb-16">[\s\S]*?<\/div>/;

const advancedHeading = `<div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-bold text-sm tracking-wider uppercase mb-8 shadow-sm backdrop-blur-sm">
                 <Sparkles size={16} className="text-blue-600" /> The Core Platform
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-4xl md:text-[56px] font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                Features built for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  autonomous procurement.
                </span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                Dorc AI isn't just a chatbot wrapper. It reads your ERP, analyzes live vendor matrices, and orchestrates negotiations end-to-end without human intervention.
              </p>
            </motion.div>
          </div>`;

page = page.replace(oldHeadingRegex, advancedHeading);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Upgraded features heading to advanced UI.');
