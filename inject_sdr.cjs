const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add MessageCircle and Send to imports
page = page.replace(
  /import \{ Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight, ChevronDown, Plus, Shield, Zap, Target \} from 'lucide-react';/,
  "import { Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight, ChevronDown, Plus, Shield, Zap, Target, MessageCircle, Send } from 'lucide-react';"
);

// 2. Add Chat State
const chatState = `
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', content: "Hi there! I'm the Dorc AI Sales Rep. How can I help you transform your procurement today?" }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
`;

page = page.replace(
  /const \[formData, setFormData\] = useState\(\{ name: '', email: '', company: '' \}\);/,
  `const [formData, setFormData] = useState({ name: '', email: '', company: '' });\n${chatState}`
);

// 3. Add Chat UI before closing main div
const chatUI = `
      {/* --- AI SDR CHAT WIDGET --- */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={\`fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-transform hover:scale-105 z-[90] \${isChatOpen ? 'hidden' : 'flex'}\`}
      >
        <MessageCircle size={32} />
      </button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Dorc AI SDR</h4>
                  <p className="text-[10px] text-blue-100 uppercase tracking-widest">Online</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-blue-100 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="h-[320px] p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={\`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm \${msg.role === 'ai' ? 'bg-white border border-slate-200 text-slate-800 self-start rounded-tl-sm' : 'bg-blue-600 text-white self-end rounded-tr-sm'}\`}>
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-slate-200 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if(!currentMessage.trim()) return;
                  const newMsgs = [...chatMessages, { role: 'user', content: currentMessage }];
                  setChatMessages(newMsgs);
                  setCurrentMessage('');
                  // Mock AI reply
                  setTimeout(() => {
                     setChatMessages([...newMsgs, { role: 'ai', content: "That sounds like a perfect use case for our autonomous agents. Would you like me to connect you with one of our human product specialists to discuss further?" }]);
                  }, 1200);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900"
                />
                <button type="submit" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 shrink-0 shadow-sm transition-transform hover:scale-105 disabled:opacity-50" disabled={!currentMessage.trim()}>
                  <Send size={16} className="-ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}`;

page = page.replace(
  /    <\/div>\n  \);\n\}/,
  chatUI
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected AI SDR Chat Widget.');
