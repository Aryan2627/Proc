const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  `              ))}
              <Link href="/careers" className="relative group text-zinc-400 hover:text-white transition-colors py-2">`,
  `              ))}
              <a href="#cortex" className="relative group text-zinc-400 hover:text-white transition-colors py-2">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"/></span>
                  Cortex AI
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full group-hover:left-0 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
              </a>
              <Link href="/careers" className="relative group text-zinc-400 hover:text-white transition-colors py-2">`
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Navbar updated');
