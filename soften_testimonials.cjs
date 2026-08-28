const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Update the Header Title
code = code.replace(
  '<h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">\n            Don\'t just take our word for it.\n          </h2>',
  '<h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">\n            Early Adopter Feedback.\n          </h2>'
);

// 2. Update the Subtitle
code = code.replace(
  'See why enterprise procurement teams are abandoning legacy tools for the speed, power, and massive ROI of ProcGen.',
  'See what supply chain leaders are saying as they test-drive the next generation of procurement in our exclusive Beta program.'
);

// 3. Update the Array of Testimonials
const oldArrayStr = `{[
              { quote: "We used to negotiate for weeks via email. ProcGen's reverse auctions forced our suppliers to compete live. We saved $2.1M on our first raw material bid.", role: "VP of Direct Procurement", company: "Global Manufacturing", avatar: "M" },
              { quote: "The vendor portal is flawless. Our suppliers actually enjoy using it, which means zero onboarding friction for our team.", role: "Head of Supply Chain", company: "Retail Enterprise", avatar: "R" },
              { quote: "Finally, a procurement tool that doesn't feel like it was built in 1998. The UI is lightning fast and the ERP sync is absolutely perfect.", role: "Chief Financial Officer", company: "Logistics Corp", avatar: "L" },
              { quote: "Intake requests used to get lost in Slack. Now, everything is routed, approved, and tracked in one place. It's a total game changer for our operations.", role: "Operations Director", company: "Tech Infrastructure", avatar: "T" },
              { quote: "We used to negotiate for weeks via email. ProcGen's reverse auctions forced our suppliers to compete live. We saved $2.1M on our first raw material bid.", role: "VP of Direct Procurement", company: "Global Manufacturing", avatar: "M" },
              { quote: "The vendor portal is flawless. Our suppliers actually enjoy using it, which means zero onboarding friction for our team.", role: "Head of Supply Chain", company: "Retail Enterprise", avatar: "R" },
              { quote: "Finally, a procurement tool that doesn't feel like it was built in 1998. The UI is lightning fast and the ERP sync is absolutely perfect.", role: "Chief Financial Officer", company: "Logistics Corp", avatar: "L" },
              { quote: "Intake requests used to get lost in Slack. Now, everything is routed, approved, and tracked in one place. It's a total game changer for our operations.", role: "Operations Director", company: "Tech Infrastructure", avatar: "T" }
            ]`;

const newArrayStr = `{[
              { quote: "We've been testing the ProcGen beta for a few weeks. It is hands-down the fastest procurement interface our team has ever touched.", role: "Director of Sourcing", company: "Beta Participant", avatar: "D" },
              { quote: "The live auction architecture is exactly what the industry needs. Being able to watch supplier bids drop in real-time changes the entire negotiation dynamic.", role: "Supply Chain Consultant", company: "Industry Analyst", avatar: "S" },
              { quote: "Our vendors actually prefer this over our legacy ERP portal. The onboarding is completely frictionless and the chat is instant.", role: "Procurement Ops", company: "Early Adopter", avatar: "P" },
              { quote: "Moving our intake requests out of messy email threads and into a centralized dashboard has immediately cleared up our workflow.", role: "VP of Operations", company: "Beta Participant", avatar: "V" },
              { quote: "We've been testing the ProcGen beta for a few weeks. It is hands-down the fastest procurement interface our team has ever touched.", role: "Director of Sourcing", company: "Beta Participant", avatar: "D" },
              { quote: "The live auction architecture is exactly what the industry needs. Being able to watch supplier bids drop in real-time changes the entire negotiation dynamic.", role: "Supply Chain Consultant", company: "Industry Analyst", avatar: "S" },
              { quote: "Our vendors actually prefer this over our legacy ERP portal. The onboarding is completely frictionless and the chat is instant.", role: "Procurement Ops", company: "Early Adopter", avatar: "P" },
              { quote: "Moving our intake requests out of messy email threads and into a centralized dashboard has immediately cleared up our workflow.", role: "VP of Operations", company: "Beta Participant", avatar: "V" }
            ]`;

code = code.replace(oldArrayStr, newArrayStr);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Testimonials softened to beta feedback");
