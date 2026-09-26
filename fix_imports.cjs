const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /import \{[\s\S]*?\} from 'lucide-react';;?/;
const replacement = `import { Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight, ChevronDown, Plus, Shield, Zap, Target, MessageCircle, Send, Globe, Database, Lock, Trophy, Star, ArrowUpRight, PlayCircle, TerminalSquare, FileText, Search, Handshake, ShieldAlert } from 'lucide-react';`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/app/page.tsx', code);
