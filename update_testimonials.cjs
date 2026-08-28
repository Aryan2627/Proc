const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure Star is imported
if (!code.includes('Star')) {
  code = code.replace(
    /import {([^}]+)} from 'lucide-react';/,
    "import {$1, Star} from 'lucide-react';"
  );
}

const testimonialsCode = `
      {/* --- IMPACT & TESTIMONIALS --- */}
      <section id="impact" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={14} className="text-amber-400" fill="currentColor" />
            The New Standard
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Don't just take our word for it.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            See why enterprise procurement teams are abandoning legacy tools for the speed, power, and massive ROI of ProcGen.
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Left/Right Edge Fade Gradients */}
          <div className="absolute top-0 left-0 w-12 md:w-48 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-48 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-6 whitespace-nowrap px-6"
            style={{ width: "max-content" }}
          >
            {/* Duplicate array twice for seamless infinite loop */}
            {[
              { quote: "We used to negotiate for weeks via email. ProcGen's reverse auctions forced our suppliers to compete live. We saved $2.1M on our first raw material bid.", role: "VP of Direct Procurement", company: "Global Manufacturing", avatar: "M" },
              { quote: "The vendor portal is flawless. Our suppliers actually enjoy using it, which means zero onboarding friction for our team.", role: "Head of Supply Chain", company: "Retail Enterprise", avatar: "R" },
              { quote: "Finally, a procurement tool that doesn't feel like it was built in 1998. The UI is lightning fast and the ERP sync is absolutely perfect.", role: "Chief Financial Officer", company: "Logistics Corp", avatar: "L" },
              { quote: "Intake requests used to get lost in Slack. Now, everything is routed, approved, and tracked in one place. It's a total game changer for our operations.", role: "Operations Director", company: "Tech Infrastructure", avatar: "T" },
              { quote: "We used to negotiate for weeks via email. ProcGen's reverse auctions forced our suppliers to compete live. We saved $2.1M on our first raw material bid.", role: "VP of Direct Procurement", company: "Global Manufacturing", avatar: "M" },
              { quote: "The vendor portal is flawless. Our suppliers actually enjoy using it, which means zero onboarding friction for our team.", role: "Head of Supply Chain", company: "Retail Enterprise", avatar: "R" },
              { quote: "Finally, a procurement tool that doesn't feel like it was built in 1998. The UI is lightning fast and the ERP sync is absolutely perfect.", role: "Chief Financial Officer", company: "Logistics Corp", avatar: "L" },
              { quote: "Intake requests used to get lost in Slack. Now, everything is routed, approved, and tracked in one place. It's a total game changer for our operations.", role: "Operations Director", company: "Tech Infrastructure", avatar: "T" }
            ].map((t, i) => (
               <div key={i} className="w-[350px] md:w-[450px] bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 whitespace-normal flex flex-col hover:border-violet-500/30 hover:bg-[#111] transition-all duration-300 shadow-xl cursor-grab active:cursor-grabbing">
                 <div className="flex gap-1 mb-6 text-fuchsia-400">
                   {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-zinc-300 text-base md:text-lg leading-relaxed flex-1 mb-8 font-light">"{t.quote}"</p>
                 <div className="flex items-center gap-4 mt-auto">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/50 to-fuchsia-600/50 border border-white/10 flex items-center justify-center font-black text-white shadow-inner">
                     {t.avatar}
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">{t.role}</p>
                     <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{t.company}</p>
                   </div>
                 </div>
               </div>
            ))}
          </motion.div>
        </div>
      </section>
`;

// Insert right before the Event section
if (!code.includes('id="impact"')) {
  code = code.replace('{/* --- EXCLUSIVE EVENT SECTION --- */}', testimonialsCode + '\n      {/* --- EXCLUSIVE EVENT SECTION --- */}');
  fs.writeFileSync('src/app/page.tsx', code, 'utf8');
  console.log("Added Testimonial Marquee");
} else {
  console.log("Testimonials already exist");
}
