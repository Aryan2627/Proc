const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix 1: Scorecard grid on mobile (change to grid-cols-1 for very small screens, or gap-1)
c = c.replace(
  `                          <div className="flex-1 grid grid-cols-2 gap-2">`,
  `                          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">`
);

// Fix 2: User commands font size and wrapping
c = c.replace(
  `<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-zinc-200 max-w-[85%] font-mono">/vendor-scorecard Tata Steel</div>`,
  `<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2 sm:py-3 text-[11px] sm:text-sm text-zinc-200 max-w-[90%] sm:max-w-[85%] font-mono break-all sm:break-normal">/vendor-scorecard Tata Steel</div>`
);
c = c.replace(
  `<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-zinc-200 max-w-[85%] font-mono">/draft-contract Tata Steel</div>`,
  `<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2 sm:py-3 text-[11px] sm:text-sm text-zinc-200 max-w-[90%] sm:max-w-[85%] font-mono break-all sm:break-normal">/draft-contract Tata Steel</div>`
);

// Fix 3: AI thinking text
c = c.replace(
  `<div className="bg-violet-900/20 border border-violet-500/20 rounded-xl px-4 py-2.5 text-[11px] font-mono text-violet-300 flex items-center gap-2">`,
  `<div className="bg-violet-900/20 border border-violet-500/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-[9px] sm:text-[11px] font-mono text-violet-300 flex items-start sm:items-center gap-2">`
);

// Fix 4: AI MSA text size and wrapping
c = c.replace(
  `<div className="bg-[#0a0d18] border border-emerald-500/20 rounded-2xl rounded-tl-sm px-4 py-3 text-xs text-zinc-300 max-w-[90%]">`,
  `<div className="bg-[#0a0d18] border border-emerald-500/20 rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs text-zinc-300 max-w-[95%] sm:max-w-[90%]">`
);

// Fix 5: Scorecard outer padding on mobile
c = c.replace(
  `<div className="flex-1 bg-[#0a0d18] border border-violet-500/20 rounded-2xl rounded-tl-sm p-4 shadow-xl">`,
  `<div className="flex-1 bg-[#0a0d18] border border-violet-500/20 rounded-2xl rounded-tl-sm p-3 sm:p-4 shadow-xl">`
);

// Fix 6: Input bar placeholder text size
c = c.replace(
  `                        Waiting for next command...`,
  `                        <span className="hidden sm:inline">Waiting for next command...</span><span className="sm:hidden">Ready...</span>`
);
c = c.replace(
  `className="ml-2 text-zinc-500"`,
  `className="ml-2 text-zinc-500 text-[10px] sm:text-xs"`
);
c = c.replace(
  `className="inline-block w-1.5 h-3 bg-violet-400 ml-0.5 absolute left-[22px]"`,
  `className="inline-block w-1.5 h-3 bg-violet-400 ml-0.5 absolute left-[18px] sm:left-[22px]"`
);

// Fix 7: "Intelligence Active" text which might wrap weirdly
c = c.replace(
  `<p className="text-violet-400 text-[9px] font-mono tracking-widest uppercase">Intelligence Active</p>`,
  `<p className="text-violet-400 text-[8px] sm:text-[9px] font-mono tracking-wider sm:tracking-widest uppercase hidden sm:block">Intelligence Active</p><p className="text-violet-400 text-[8px] font-mono uppercase sm:hidden">Active</p>`
);

// Fix 8: Chat bubbles container padding
c = c.replace(
  `<div className="p-5 space-y-4 min-h-[340px]">`,
  `<div className="p-3 sm:p-5 space-y-4 min-h-[300px] sm:min-h-[340px]">`
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Mobile fixes applied.');
