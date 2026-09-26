const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix bottom footer links
page = page.replace(
  /<a href="#" className="hover:text-white transition-colors">Privacy Policy<\/a>/,
  '<a href="/p/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>'
);
page = page.replace(
  /<a href="#" className="hover:text-white transition-colors">Terms of Service<\/a>/,
  '<a href="/p/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>'
);
page = page.replace(
  /<a href="#" className="hover:text-white transition-colors">Cookie Policy<\/a>/,
  '<a href="/p/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a>'
);

// Fix copyright text
page = page.replace(
  /<p>&copy; 2026 ProcGen Technologies\. Built for the future of procurement\.<\/p>/,
  '<p>&copy; 2026 Dorc AI Inc. Built for the future of procurement.</p>'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed bottom footer links and copyright');
