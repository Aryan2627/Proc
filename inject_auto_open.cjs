const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const scrollLogic = `
  // Auto-open chat logic: Trigger 3s after first scroll
  const hasAutoOpened = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!hasAutoOpened.current && window.scrollY > 100) {
        hasAutoOpened.current = true;
        setTimeout(() => {
          setIsChatOpen(true);
        }, 3000);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
`;

// Inject right before the first existing useEffect
page = page.replace(
  /  useEffect\(\(\) => \{/,
  scrollLogic + '\n  useEffect(() => {'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected auto-open chat logic.');
