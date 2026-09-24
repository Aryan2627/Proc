const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// ── 1. Imports ──────────────────────────────────────────────────────────────
c = c.replace(
  "import { useState, useEffect } from 'react';",
  "import { useState, useEffect, useRef } from 'react';"
);
c = c.replace(
  "import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';",
  "import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, useInView } from 'framer-motion';"
);

// ── 2. Insert useCountUp helper just before export default ──────────────────
const COUNTUP = `function useCountUp(target, duration = 2000, inView = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
}

`;
c = c.replace('export default function LandingPage() {', COUNTUP + 'export default function LandingPage() {');

// ── 3. Add new state/hooks right after formData state ───────────────────────
const NEW_STATE = `

  // ── Typewriter ──
  const words = ['Supercharged.', 'Automated.', 'Transformed.', 'Dominated.'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex];
    let t;
    if (!isDeleting && displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    else if (!isDeleting && displayed.length === current.length) t = setTimeout(() => setIsDeleting(true), 1800);
    else if (isDeleting && displayed.length > 0) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    else { setIsDeleting(false); setWordIndex(i => (i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, wordIndex]);

  // ── Live bid ──
  const [topBid, setTopBid] = useState(438500);
  useEffect(() => {
    const t = setInterval(() => setTopBid(p => Math.max(390000, p - Math.floor(Math.random() * 3000 + 500))), 3500);
    return () => clearInterval(t);
  }, []);

  // ── Animated counters ──
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const vendorCount = useCountUp(12400, 2200, statsInView);
  const savingsCount = useCountUp(340, 2000, statsInView);
  const eventsCount = useCountUp(89000, 2500, statsInView);`;

c = c.replace(
  "  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });",
  "  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });" + NEW_STATE
);

// ── 4. Scroll progress bar ───────────────────────────────────────────────────
c = c.replace(
  "      {/* --- SUBTLE BACKGROUND SCROLL THREAD --- */}",
  `      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 origin-left z-[200] shadow-[0_0_10px_rgba(139,92,246,0.8)]" style={{ scaleX: scrollYProgress }} />

      {/* --- SUBTLE BACKGROUND SCROLL THREAD --- */}`
);

// ── 5. Typewriter hero headline ──────────────────────────────────────────────
c = c.replace(
  `Supercharged.
              </span>`,
  `{displayed}<span className="animate-pulse text-violet-400">|</span>
              </span>`
);

// ── 6. Stats bar before features section ────────────────────────────────────
const STATS = `
      {/* --- ANIMATED STATS BAR --- */}
      <section className="relative z-10 py-12 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-transparent to-fuchsia-900/10 pointer-events-none" />
        <div ref={statsRef} className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="text-4xl md:text-5xl font-black text-white font-mono">{vendorCount.toLocaleString()}+</div>
            <div className="text-zinc-500 text-sm font-medium mt-2 uppercase tracking-widest">Verified Vendors</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">{savingsCount}%</div>
            <div className="text-zinc-500 text-sm font-medium mt-2 uppercase tracking-widest">Avg Cost Reduction</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-mono">{eventsCount.toLocaleString()}+</div>
            <div className="text-zinc-500 text-sm font-medium mt-2 uppercase tracking-widest">Auctions Completed</div>
          </motion.div>
        </div>
      </section>
`;
c = c.replace("      {/* --- MEGA FEATURES GRID --- */}", STATS + "      {/* --- MEGA FEATURES GRID --- */}");

// ── 7. Live bid (use function replacer to avoid $ special pattern) ──────────
c = c.replace(
  "{ vendor: 'Acme Steel Co.', bid: '$438,500', time: 'Just now', color: 'bg-emerald-500', isNew: true }",
  () => "{ vendor: 'Acme Steel Co.', bid: ('$' + topBid.toLocaleString()), time: 'Just now', color: 'bg-emerald-500', isNew: true }"
);

// ── 8. 3D tilt hover on feature cards ───────────────────────────────────────
// replace className= pattern carefully - add whileHover and style before className
[
  ["hover:border-fuchsia-500/50", "{ scale: 1.015, rotateX: -1, rotateY: 1 }"],
  ["hover:border-red-500/50", "{ scale: 1.02, rotateX: 1.5, rotateY: -1.5 }"],
  ["hover:border-blue-500/50", "{ scale: 1.02, rotateX: -1.5, rotateY: 1 }"],
  ["hover:border-violet-500/50", "{ scale: 1.015, rotateX: 1, rotateY: -1 }"],
  ["hover:border-emerald-500/50", "{ scale: 1.02, rotateX: 1.5, rotateY: 1 }"],
  ["hover:border-amber-500/50", "{ scale: 1.015, rotateX: -1, rotateY: 1.5 }"],
].forEach(([border, hover]) => {
  const regex = new RegExp(`(<motion\\.div variants=\\{fadeIn\\}) (className="[^"]*${border.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"]*")`, 'g');
  c = c.replace(regex, `$1 whileHover={${hover}} style={{ transformPerspective: 1000 }} $2`);
});

fs.writeFileSync('src/app/page.tsx', c);
console.log('✅ Done!');
