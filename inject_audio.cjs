const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const audioLogic = `
  // Synthesized notification bell using Web Audio API
  const playNotificationBell = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      
      const playTone = (freq: number, vol: number, dur: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + dur);
      };
      
      // Play a beautiful, professional two-tone chime (A5 and A6)
      playTone(880, 0.4, 1.2); 
      playTone(1760, 0.15, 0.8);
    } catch (e) {
      console.error("Audio playback failed:", e);
    }
  };

  // Auto-open chat logic: Trigger 3s after first scroll
  const hasAutoOpened = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!hasAutoOpened.current && window.scrollY > 100) {
        hasAutoOpened.current = true;
        setTimeout(() => {
          playNotificationBell();
          setIsChatOpen(true);
        }, 3000);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
`;

// Replace the old scroll logic with the new one including audio
page = page.replace(
  /\/\/ Auto-open chat logic[\s\S]*?\}, \[\]\);/,
  audioLogic.trim()
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected notification bell logic.');
