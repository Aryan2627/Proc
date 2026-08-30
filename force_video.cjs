const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="relative aspect-video rounded-3xl overflow-hidden border border-white\/10 shadow-\[0_0_100px_rgba\(37,99,235,0\.2\)\] bg-\[#050505\] group">[\s\S]*?<\/div>\s*<\/motion\.div>/;

const replacement = `<div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.2)] bg-[#050505] group">
            
            {/* Clickable YouTube Video Player */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/zM7I7-y0qZc?controls=1&rel=0" 
              title="ProcGen AI Video Player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            
            {/* Note for the User */}
            <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg pointer-events-none">
              <p className="text-xs text-zinc-300 font-mono"><span className="text-emerald-400">► Note:</span> Click the Play Button! Swap this YouTube link with your own later.</p>
            </div>
          </div>
        </motion.div>`;

if (code.match(regex)) {
    code = code.replace(regex, replacement);
    fs.writeFileSync('src/app/page.tsx', code, 'utf8');
    console.log("Successfully replaced image slider with clickable YouTube video.");
} else {
    console.log("Regex didn't match.");
}
