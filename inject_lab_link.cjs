const fs = require('fs');

function injectLink(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if we already have the link to avoid duplicates
  if (content.includes('/ai-lab')) {
    console.log(`AI Lab link already exists in ${filePath}`);
    return;
  }

  // We find the Pricing link and inject the AI Lab link right after it in the desktop nav
  const searchStr = `<a href="#pricing" className="hover:text-blue-600 transition-colors py-5">Pricing</a>`;
  const nextJsSearchStr = `<Link href="/#pricing" className="hover:text-blue-600 transition-colors py-5">Pricing</Link>`;
  
  const injectHtml = `
              <Link href="/ai-lab" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-500 font-bold transition-colors py-5 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
                AI Lab
              </Link>`;

  if (content.includes(searchStr)) {
    content = content.replace(searchStr, searchStr + injectHtml);
    fs.writeFileSync(filePath, content);
    console.log(`Injected in ${filePath}`);
  } else if (content.includes(nextJsSearchStr)) {
    content = content.replace(nextJsSearchStr, nextJsSearchStr + injectHtml);
    fs.writeFileSync(filePath, content);
    console.log(`Injected in ${filePath}`);
  } else {
    console.log(`Could not find anchor in ${filePath}`);
  }
}

injectLink('src/app/page.tsx');
injectLink('src/app/know/enterprise-context-layer/page.tsx');
