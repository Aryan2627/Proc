const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// The issue was:
// <section id="features" className="py-24 bg-[#F9F9FC]">
//   <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
// ...
//   </section>
// </motion.div>
// 
// I need to swap `</section>` and `</motion.div>`.

page = page.replace(
  /<\/section>\s*<\/motion.div>\s*\{\/\* --- PLATFORM INTEGRATIONS/g,
  '</motion.div>\n      </section>\n      {/* --- PLATFORM INTEGRATIONS'
);

page = page.replace(
  /<\/section>\s*<\/motion.div>\s*\{\/\* --- SECURITY & CERTIFICATION SECTION/g,
  '</motion.div>\n      </section>\n      {/* --- SECURITY & CERTIFICATION SECTION'
);

page = page.replace(
  /<\/section>\s*<\/motion.div>\s*\{\/\* --- MEGA FOOTER/g,
  '</motion.div>\n      </section>\n      {/* --- MEGA FOOTER'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed JSX nesting.');
