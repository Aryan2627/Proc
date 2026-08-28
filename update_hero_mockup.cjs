const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const mockupStartStr = '{/* DYNAMIC DASHBOARD MOCKUP */}';
const mockupEndStr = '        </div>\n      </header>';

const mockupStartIndex = code.indexOf(mockupStartStr);
const mockupEndIndex = code.indexOf(mockupEndStr);

if (mockupStartIndex === -1 || mockupEndIndex === -1) {
  console.error("Could not find boundaries for the mockup section.");
  process.exit(1);
}

const newMockup = `{/* DYNAMIC DASHBOARD MOCKUP - LIVE REVERSE AUCTION SIMULATION */}
          <motion.div 
            initial={{ opacity: 0, y: 150, rotateX: 20 }} 
            animate={{ opacity: 1, y: 0, rotateX: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
            style={{ perspective: "1200px" }} 
            className="mt-20 relative max-w-[1000px] mx-auto z-20 w-full"
          >
            {/* Massive Ambient Glow Behind Mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 rounded-3xl blur-[80px] opacity-20 animate-pulse"></div>
            
            <div className="relative rounded-2xl border border-white/10 bg-[#050505]/95 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
              
              {/* macOS Window Controls */}
              <div className="w-full h-12 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2 relative">
                <div className="flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-[#111] rounded-lg border border-white/5">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <span className="text-[10px] text-zinc-400 font-mono tracking-widest">app.procgen.in/auctions/live</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full aspect-[16/10] sm:aspect-[21/9]">
                
                {/* Sidebar Navigation */}
                <div className="w-16 sm:w-48 bg-[#0a0a0a] border-r border-white/5 p-4 flex flex-col gap-3 z-10 shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
                   <div className="h-9 w-full bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg flex items-center justify-center sm:justify-start sm:px-3 gap-3 text-fuchsia-400 shadow-[inset_0_0_10px_rgba(217,70,239,0.1)]">
                     <Swords size={16} /><span className="hidden sm:block text-xs font-bold tracking-wide">Auctions</span>
                   </div>
                   {[
                     { icon: Activity, label: "Analytics" },
                     { icon: Users, label: "Suppliers" },
                     { icon: FileText, label: "Contracts" }
                   ].map((item, i) => (
                     <div key={i} className="h-9 w-full rounded-lg flex items-center justify-center sm:justify-start sm:px-3 gap-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors cursor-pointer">
                       <item.icon size={16} /><span className="hidden sm:block text-xs">{item.label}</span>
                     </div>
                   ))}
                   
                   <div className="mt-auto hidden sm:block bg-white/5 border border-white/5 rounded-xl p-3">
                     <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Total Savings</p>
                     <p className="text-emerald-400 font-mono font-bold text-lg">$1.4M</p>
                   </div>
                </div>

                {/* Main Content Area: Live Auction */}
                <div className="flex-1 p-4 sm:p-8 flex flex-col gap-6 relative overflow-hidden bg-gradient-to-br from-[#050505] to-[#0a0a0a]">
                  
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

                  {/* Header */}
                  <div className="flex justify-between items-end relative z-10 border-b border-white/5 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span className="text-red-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Live Sourcing Event</span>
                      </div>
                      <h3 className="text-lg sm:text-3xl font-black text-white">Q4 Raw Steel Procurement</h3>
                    </div>
                    <div className="text-right bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase mb-1">Time Remaining</p>
                      <p className="text-white font-mono text-xl sm:text-2xl font-bold animate-pulse">04:12</p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    
                    {/* Left: Interactive Price Drop Chart */}
                    <div className="md:col-span-2 bg-[#020202]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col relative shadow-2xl">
                      <div className="flex justify-between items-center mb-6">
                        <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider">Lowest Bid Trend (USD)</p>
                        <div className="text-emerald-400 text-sm font-mono font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          -32.4% vs Target
                        </div>
                      </div>
                      
                      <div className="flex-1 relative w-full mt-2">
                        {/* Horizontal Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none z-0">
                          <div className="w-full h-px bg-zinc-600"></div>
                          <div className="w-full h-px bg-zinc-600"></div>
                          <div className="w-full h-px bg-zinc-600"></div>
                          <div className="w-full h-px bg-zinc-600"></div>
                        </div>
                        
                        {/* Animated Line showing price crashing down */}
                        <svg className="w-full h-full overflow-visible relative z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                          {/* Target Price Line */}
                          <line x1="0" y1="20" x2="100" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                          <text x="0" y="15" fill="#ef4444" fontSize="4" opacity="0.8" fontWeight="bold">Target Price: $650k</text>

                          {/* Bid Trajectory */}
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                            d="M0,25 L15,25 L25,40 L45,45 L55,60 L75,65 L85,85 L100,85" 
                            fill="none" stroke="#d946ef" strokeWidth="4" 
                            strokeLinecap="round" strokeLinejoin="round"
                            className="drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]"
                          />
                          {/* Gradient fill below line */}
                          <motion.path 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                            d="M0,25 L15,25 L25,40 L45,45 L55,60 L75,65 L85,85 L100,85 L100,100 L0,100 Z"
                            fill="url(#auctionGradient)" opacity="0.15"
                          />
                          <defs>
                            <linearGradient id="auctionGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#d946ef" stopOpacity="1"/>
                              <stop offset="100%" stopColor="#d946ef" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Right: Real-time Bid Feed */}
                    <div className="hidden md:flex bg-[#020202]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex-col relative overflow-hidden shadow-2xl">
                      {/* Top Fade */}
                      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#020202] to-transparent z-20 pointer-events-none"></div>
                      {/* Bottom Fade */}
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#020202] to-transparent z-20 pointer-events-none"></div>
                      
                      <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4 z-30">Real-Time Bids</h4>
                      
                      <div className="flex-1 flex flex-col justify-end gap-3 relative z-10 pb-4">
                        {[
                          { vendor: 'Acme Steel Co.', bid: '$580,000', time: '12m ago', color: 'bg-zinc-600' },
                          { vendor: 'Global Ind.', bid: '$525,000', time: '4m ago', color: 'bg-zinc-600' },
                          { vendor: 'Stellar Metal', bid: '$490,000', time: '30s ago', color: 'bg-blue-500' },
                          { vendor: 'Acme Steel Co.', bid: '$438,500', time: 'Just now', color: 'bg-emerald-500', isNew: true },
                        ].map((bid, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: i * 1.5, type: "spring", bounce: 0.5 }}
                            className={\`p-3.5 rounded-xl flex items-center justify-between shadow-lg \${bid.isNew ? 'bg-emerald-500/10 border border-emerald-500/40 relative overflow-hidden' : 'bg-white/5 border border-white/5'}\`}
                          >
                            {bid.isNew && <div className="absolute inset-0 bg-emerald-500/20 animate-pulse"></div>}
                            <div className="flex items-center gap-3 relative z-10">
                              <div className={\`w-2.5 h-2.5 rounded-full \${bid.color} shadow-[0_0_10px_currentColor]\`}></div>
                              <div>
                                <p className={\`text-xs font-bold \${bid.isNew ? 'text-emerald-400' : 'text-zinc-200'}\`}>{bid.vendor}</p>
                                <p className="text-[9px] text-zinc-500 font-medium uppercase tracking-wider mt-0.5">{bid.time}</p>
                              </div>
                            </div>
                            <span className={\`font-mono text-sm font-bold relative z-10 \${bid.isNew ? 'text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]' : 'text-white'}\`}>{bid.bid}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
`;

code = code.substring(0, mockupStartIndex) + newMockup + '\n' + code.substring(mockupEndIndex);
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Mockup animation upgraded heavily.");
