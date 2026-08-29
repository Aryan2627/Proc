const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add Vendor link to Navbar
code = code.replace(
  `              {['Features', 'Pricing'].map((item) => (`,
  `              {['Features', 'Pricing'].map((item) => (
                <a key={item} href={'#' + item.toLowerCase()} className="relative group text-zinc-400 hover:text-white transition-colors py-2">
                  {item}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full group-hover:left-0 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                </a>
              ))}
              <Link href="/vendor-register" className="relative group text-zinc-400 hover:text-white transition-colors py-2">
                  Vendors
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full group-hover:left-0 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
              </Link>
              {/*`
);

// Close comment
code = code.replace(
  `                </a>
              ))}
            </div>`,
  `                </a>
              ))} */}
            </div>`
);

// Add to Footer
code = code.replace(
  `<li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>`,
  `<li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>\n                <li><Link href="/vendor-register" className="hover:text-violet-400 transition-colors">Vendor Registration</Link></li>`
);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
