const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find the features section and replace it
const featuresStart = code.indexOf('{/* --- FEATURES GRID --- */}');
const featuresEnd = code.indexOf('{/* --- PRICING SECTION --- */}');

const newFeatures = `
      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              A procurement engine <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">built for hyperscale.</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Feature 1: Intake (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-500">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Intake & Approvals</h3>
                  <p className="text-zinc-400 max-w-md leading-relaxed">Multi-level approvals handled instantly. Say goodbye to messy email threads and disorganized spreadsheets.</p>
                </div>
                
                {/* Abstract UI Component */}
                <div className="mt-8 flex gap-3 items-center p-4 bg-white/5 rounded-2xl border border-white/5 w-fit group-hover:border-violet-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest ml-2">Approved</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Reverse Auctions (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-500">
                  <Gavel size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Reverse Auctions</h3>
                <p className="text-zinc-400 leading-relaxed">Suppliers bid live. Watch your costs drop in real-time.</p>
                
                <div className="mt-auto flex items-end gap-2 h-24 pt-6">
                  {[80, 60, 40, 20].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group-hover:bg-fuchsia-500/30 transition-colors" style={{ height: h + '%' }}></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Vendor Portal (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Vendor Portal</h3>
                <p className="text-zinc-400 leading-relaxed">A sleek hub for suppliers to chat, bid, and deliver.</p>
                
                <div className="mt-auto flex items-center pt-8">
                  {[1,2,3].map((i) => (
                    <div key={i} className={\`w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-blue-400 to-violet-400 \${i !== 1 ? '-ml-3' : ''}\`}></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-white/10 backdrop-blur-md flex items-center justify-center text-xs font-bold -ml-3">+12</div>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: PO Automation (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                    <Receipt size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">PO Automation</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">Awards turn into purchase orders automatically. Everything is instantly integrated into your ledger.</p>
                </div>
                
                <div className="flex-1 w-full bg-white/5 border border-white/5 rounded-2xl p-5 group-hover:border-emerald-500/30 transition-colors shadow-2xl">
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                    <div className="w-16 h-4 bg-white/10 rounded"></div>
                    <div className="w-24 h-4 bg-emerald-500/20 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-3 bg-white/5 rounded"></div>
                    <div className="w-4/5 h-3 bg-white/5 rounded"></div>
                    <div className="w-full h-3 bg-white/5 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

`;

code = code.substring(0, featuresStart) + newFeatures + code.substring(featuresEnd);
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Updated features layout");
