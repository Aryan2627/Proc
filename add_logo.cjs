const fs = require('fs');
let code = fs.readFileSync('src/app/ai-lab/war-room/page.tsx', 'utf8');

const regex = /<header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0 relative z-20">[\s\S]*?<\/header>/;

const replacement = `<header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0 relative z-20">
        <div className="flex items-center gap-4">
          <Link href="/ai-lab" className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
            <img src="/logo_transparent.png" alt="ProcGen" className="w-7 h-7 object-contain" />
            <span className="font-bold text-lg text-slate-900 tracking-tight">ProcGen</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-medium text-sm ml-2 border-l border-slate-200 pl-4">
            Negotiation Training Simulator
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-xs font-semibold text-slate-500 px-3 py-1 bg-slate-100 rounded-full">Module 1: Industrial Steel</div>
        </div>
      </header>`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/app/ai-lab/war-room/page.tsx', code);
console.log('Header updated with ProcGen logo');
