const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace standard # links in the footer with dynamic paths.

// Platform
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Dorc AI Agents<\/a><\/li>/, '<li><a href="/p/dorc-ai-agents" className="hover:text-blue-400 transition-colors">Dorc AI Agents</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Enterprise Data Graph<\/a><\/li>/, '<li><a href="/p/enterprise-data-graph" className="hover:text-blue-400 transition-colors">Enterprise Data Graph</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Live Vision OCR<\/a><\/li>/, '<li><a href="/p/live-vision-ocr" className="hover:text-blue-400 transition-colors">Live Vision OCR</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Security & Trust<\/a><\/li>/, '<li><a href="/p/security" className="hover:text-blue-400 transition-colors">Security & Trust</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Pricing<\/a><\/li>/, '<li><a href="/#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>');

// Solutions
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">For Direct Spend<\/a><\/li>/, '<li><a href="/p/direct-spend" className="hover:text-blue-400 transition-colors">For Direct Spend</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">For Indirect Spend<\/a><\/li>/, '<li><a href="/p/indirect-spend" className="hover:text-blue-400 transition-colors">For Indirect Spend</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">For SAP Ariba Users<\/a><\/li>/, '<li><a href="/p/sap-ariba" className="hover:text-blue-400 transition-colors">For SAP Ariba Users</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">For Finance Teams<\/a><\/li>/, '<li><a href="/p/finance-teams" className="hover:text-blue-400 transition-colors">For Finance Teams</a></li>');

// Company
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">About Us<\/a><\/li>/, '<li><a href="/p/about-us" className="hover:text-blue-400 transition-colors">About Us</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Blog & News<\/a><\/li>/, '<li><a href="/p/blog-news" className="hover:text-blue-400 transition-colors">Blog & News</a></li>');
page = page.replace(/<li><a href="#" className="hover:text-blue-400 transition-colors">Contact Sales<\/a><\/li>/, '<li><a href="/p/contact-sales" className="hover:text-blue-400 transition-colors">Contact Sales</a></li>');

// Replace footer logo alt/src just in case it still says ProcGen
page = page.replace(/alt="ProcGen"/g, 'alt="Dorc AI"');
page = page.replace(/src="\/logo_transparent\.png"/g, 'src="/dorc-logo.png"');
page = page.replace(/text-white">ProcGen<\/span>/g, 'text-white">Dorc AI</span>');
page = page.replace(/ProcGen is the enterprise AI agent/g, 'Dorc AI is the enterprise AI agent');

fs.writeFileSync('src/app/page.tsx', page);
console.log('Wired footer links');
