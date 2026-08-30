const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace Navbar logo
const navRegex = /<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-\[0_0_20px_rgba\(139,92,246,0\.4\)\]">\s*<span className="text-white font-bold text-xl tracking-tighter">P<\/span>\s*<\/div>/g;

const navReplace = `<img src="/logo_cyan.png" alt="ProcGen Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]" style={{ mixBlendMode: 'screen', filter: 'contrast(1.2)' }} />`;

// Replace Footer logo
const footerRegex = /<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-\[0_0_20px_rgba\(139,92,246,0\.3\)\]">\s*<span className="text-white font-bold text-xl tracking-tighter">P<\/span>\s*<\/div>/g;

const footerReplace = `<img src="/logo_cyan.png" alt="ProcGen Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]" style={{ mixBlendMode: 'screen', filter: 'contrast(1.2)' }} />`;

if (code.match(navRegex)) {
    code = code.replace(navRegex, navReplace);
    console.log("Replaced navbar logo.");
} else {
    console.log("Navbar regex not matched.");
}

if (code.match(footerRegex)) {
    code = code.replace(footerRegex, footerReplace);
    console.log("Replaced footer logo.");
} else {
    console.log("Footer regex not matched.");
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
