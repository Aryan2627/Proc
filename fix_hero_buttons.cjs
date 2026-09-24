const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const heroButtonGroup = `              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <button onClick={() => setIsModalOpen(true)} className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all text-lg shadow-md">
                  Connect with Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#features" className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-all text-lg shadow-sm">
                  Explore Platform
                </a>
              </motion.div>`;

page = page.replace(/<motion\.div variants=\{fadeIn\} className="flex flex-col sm:flex-row items-center justify-center gap-6\s*w-full">[\s\S]*?<\/motion\.div>/, heroButtonGroup);

// Also remove the weird duplicate `shadow-md shadow-md`
page = page.replace(/shadow-md shadow-md/g, 'shadow-md');

fs.writeFileSync('src/app/page.tsx', page);
console.log('Added secondary button to hero.');
