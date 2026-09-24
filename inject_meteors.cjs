const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Inject State
const meteorState = `
  const [meteors, setMeteors] = useState<{x: number, y: number, delay: number, duration: number}[]>([]);
  useEffect(() => {
    setMeteors([...Array(15)].map(() => ({
      x: Math.random() * 2000, // Spanning wider
      y: Math.random() * -300 - 100, // Starting above
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2
    })));
  }, []);
`;

page = page.replace(
  /const \[formData, setFormData\] = useState\(\{ name: '', email: '', company: '' \}\);/,
  `const [formData, setFormData] = useState({ name: '', email: '', company: '' });\n${meteorState}`
);

// 2. Inject UI in Hero
const meteorShower = `
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Meteor Shower */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {meteors.map((m, i) => (
            <motion.div
              key={i}
              className="absolute h-[1.5px] w-[100px] bg-gradient-to-r from-blue-300 via-cyan-300 to-transparent rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              initial={{ opacity: 0, x: m.x, y: m.y, rotate: 215 }}
              animate={{
                opacity: [0, 1, 0],
                x: m.x - 1000,
                y: m.y + 1000
              }}
              transition={{
                duration: m.duration,
                repeat: Infinity,
                delay: m.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>
`;

page = page.replace(
  /\{\/\* Radial glow \*\/\}[\s\S]*?<\/div>/,
  meteorShower.trim()
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected meteor shower into Hero.');
