const fs = require('fs');

function removeLogin(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<button[^>]*>Log In<\/button>/g, '');
  content = content.replace(/<button className="text-\[15px\] font-semibold text-slate-300 hover:text-white transition-colors">Log In<\/button>/g, '');
  // specific targeted removal for specific pages if the generic one missed
  content = content.replace(/<button onClick=\{\(\) => setIsModalOpen\(true\)\} className="text-\[15px\] font-semibold text-slate-700 hover:text-blue-600 transition-colors">Log In<\/button>/g, '');
  fs.writeFileSync(filePath, content);
}

removeLogin('src/app/page.tsx');
removeLogin('src/app/ai-lab/page.tsx');
removeLogin('src/app/know/enterprise-context-layer/page.tsx');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!page.includes('openFaq')) {
  page = page.replace(
    /const \[isModalOpen, setIsModalOpen\] = useState\(false\);/,
    'const [isModalOpen, setIsModalOpen] = useState(false);\n  const [openFaq, setOpenFaq] = useState<number | null>(0);'
  );
}

const faqSection = `
      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 bg-[#F9F9FC] border-t border-slate-200">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-500">Everything you need to know about ProcGen and our autonomous agents.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How long does it take to deploy ProcGen?", a: "Unlike legacy ERPs that take years, our Context Layer hooks into your existing systems via API in weeks. Most design partners see autonomous PO generation within 45 days." },
              { q: "Is the AI allowed to make purchases without human approval?", a: "No. ProcGen is built on a strict Human-in-the-Loop (HITL) architecture. The AI negotiates and drafts the PO, but a human manager must click 'Certify & Execute' for any spend above your custom risk threshold." },
              { q: "What systems do you integrate with?", a: "We natively integrate with SAP Ariba, Oracle NetSuite, Coupa, Microsoft Active Directory, and standard communication tools like Slack and Microsoft Teams." },
              { q: "How do the Multi-Agent Swarms actually negotiate?", a: "Our agents use Game Theory models to analyze historical supplier data. They send structured emails to suppliers, compare bids in real-time, and automatically counter-offer to drive down 'tail spend' costs without human intervention." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={\`text-blue-500 transition-transform duration-300 \${openFaq === i ? 'rotate-180' : ''}\`} size={20} />
                </button>
                <div className={\`px-6 overflow-hidden transition-all duration-300 ease-in-out \${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}\`}>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
`;

page = page.replace(
  /\{\/\* --- MEGA FOOTER ---\*\/\}/,
  faqSection + '\n      {/* --- MEGA FOOTER --- */}'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Removed Log In buttons and injected FAQ section.');
