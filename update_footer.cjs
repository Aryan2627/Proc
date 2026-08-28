const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure new icons are imported
if (!code.includes('Linkedin')) {
  code = code.replace(
    /import {([^}]+)} from 'lucide-react';/,
    "import {$1, Linkedin, Mail} from 'lucide-react';"
  );
}

const oldFooterStart = code.indexOf('<footer className="bg-[#050505] py-12 text-center text-zinc-600 text-sm border-t border-white/5 mt-12 relative z-10">');
const oldFooterEnd = code.indexOf('</footer>', oldFooterStart) + 9;

if (oldFooterStart !== -1) {
  const newFooter = `
      <footer className="relative z-10 bg-[#020202] pt-24 pb-12 border-t border-white/10 overflow-hidden mt-20">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <span className="text-white font-bold text-xl tracking-tighter">P</span>
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">ProcGen</span>
              </div>
              <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
                The AI-powered procurement engine built for hyperscale. Automate workflows, run reverse auctions, and slash costs effortlessly.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/procgen/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all shadow-lg hover:scale-110">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:connect.procgen@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-fuchsia-400 hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30 transition-all shadow-lg hover:scale-110">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Links Col 1 */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Platform</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                <li><a href="/vip" className="hover:text-violet-400 transition-colors flex items-center gap-2">Global Summit <span className="bg-fuchsia-500/20 text-fuchsia-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Live</span></a></li>
                <li><a href="https://app.procgen.in/login" className="hover:text-violet-400 transition-colors">Client Login</a></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="mailto:connect.procgen@gmail.com" className="hover:text-violet-400 transition-colors">Contact Sales</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future.
            </p>
            <div className="flex items-center gap-2 text-zinc-600 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Mail size={14} className="text-zinc-400" /> connect.procgen@gmail.com
            </div>
          </div>
        </div>
      </footer>`;

  code = code.substring(0, oldFooterStart) + newFooter + code.substring(oldFooterEnd);
  fs.writeFileSync('src/app/page.tsx', code, 'utf8');
  console.log("Updated footer");
} else {
  console.log("Could not find old footer");
}
