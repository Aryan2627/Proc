const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const newNav = `
      {/* --- ATLAN-STYLE ENTERPRISE NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Platform <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Solutions <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <a href="#" className="hover:text-blue-600 transition-colors py-5">Customers</a>
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Resources <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <a href="#pricing" className="hover:text-blue-600 transition-colors py-5">Pricing</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setIsModalOpen(true)} className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">Log In</button>
            <button onClick={() => setIsModalOpen(true)} className="text-[15px] font-bold bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all flex items-center gap-2">
              Request Demo
            </button>
          </div>
          <button className="lg:hidden text-slate-600"><Menu size={24} /></button>
        </div>
      </nav>
`;

page = page.replace(
  /\{\/\* --- ATLAN-STYLE MINIMALIST NAV ---\*\/\}[\s\S]*?<\/nav>/,
  newNav.trim()
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Updated Nav to Atlan style.');
