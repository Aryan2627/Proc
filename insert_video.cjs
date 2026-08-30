const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const videoComponent = `
          {/* --- CINEMATIC AI VIDEO SECTION --- */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-40 relative max-w-[1200px] mx-auto z-20 w-full px-6"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">See <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">ProcGen AI</span> in Action.</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">Watch how our autonomous agents negotiate contracts, analyze macroeconomic trends, and onboard global vendors instantly.</p>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.2)] bg-[#050505] group">
              
              {/* Play Button Overlay (Visible before play) */}
              <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center opacity-100 transition-opacity duration-500 group-hover:bg-black/20 pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </div>

              {/* The Video Player */}
              <video 
                className="w-full h-full object-cover opacity-80"
                controls
                poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                preload="none"
              >
                {/* Free placeholder video for Supply Chain / Data from Pixabay/Pexels */}
                <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Note for the User */}
              <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
                <p className="text-xs text-zinc-300 font-mono"><span className="text-emerald-400">► Note:</span> Upload your RunwayML .mp4 video to swap this placeholder!</p>
              </div>
            </div>
          </motion.div>
`;

const insertMarker = `            </motion.div>
          </div>
        </header>`;

if (code.includes(insertMarker)) {
    code = code.replace(insertMarker, `            </motion.div>\n          </div>\n        </header>\n\n${videoComponent}`);
    fs.writeFileSync('src/app/page.tsx', code, 'utf8');
    console.log("Injected video section.");
} else {
    console.log("Could not find insert marker.");
}
