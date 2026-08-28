const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Insert the State and UseEffect Hooks
const hooksCode = `
  const [mockTimer, setMockTimer] = useState(252);
  const [savings, setSavings] = useState(1400000);

  useEffect(() => {
    const timerInterval = setInterval(() => setMockTimer(p => (p > 0 ? p - 1 : 252)), 1000);
    const savingsInterval = setInterval(() => setSavings(p => p + Math.floor(Math.random() * 2500) + 100), 2000);
    return () => { clearInterval(timerInterval); clearInterval(savingsInterval); };
  }, []);

  const formatTime = (s: number) => \`\${Math.floor(s / 60).toString().padStart(2, '0')}:\${(s % 60).toString().padStart(2, '0')}\`;
  const formatSavings = (val: number) => \`$\${(val / 1000000).toFixed(3)}M\`;
`;

// Find where to insert (after formData state)
const stateInjectionPoint = "const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });";
if (code.includes(stateInjectionPoint) && !code.includes('const [mockTimer')) {
  code = code.replace(stateInjectionPoint, stateInjectionPoint + '\n' + hooksCode);
}

// 2. Remove the URL Bar
const urlBarCode = `                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-[#111] rounded-lg border border-white/5">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <span className="text-[10px] text-zinc-400 font-mono tracking-widest">app.procgen.in/auctions/live</span>
                  </div>
                </div>`;
code = code.replace(urlBarCode, '');

// 3. Replace Static Savings with dynamic
code = code.replace(
  '<p className="text-emerald-400 font-mono font-bold text-lg">$1.4M</p>',
  '<p className="text-emerald-400 font-mono font-bold text-lg">{formatSavings(savings)}</p>'
);

// 4. Replace Static Time with dynamic
code = code.replace(
  '<p className="text-white font-mono text-xl sm:text-2xl font-bold animate-pulse">04:12</p>',
  '<p className="text-white font-mono text-xl sm:text-2xl font-bold">{formatTime(mockTimer)}</p>'
);

// We need to import useEffect if it's not imported already, but { useState } is there.
if (!code.includes('useEffect')) {
  code = code.replace('import { useState }', 'import { useState, useEffect }');
} else {
  // If we just imported React, useState, we need to ensure useEffect is there
  if (code.includes("import { useState } from 'react';")) {
    code = code.replace("import { useState } from 'react';", "import { useState, useEffect } from 'react';");
  }
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Added realism hooks and removed URL bar");
