import { ClockSettings, PomodoroSettings, ThemePreset, ClockFontFamily, SoundAlertChoice } from '../types';

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'warm-minimal',
    name: 'Warm Paper (Light)',
    bgClass: 'bg-[#f7f5f0]',
    textColor: '#1c1917', // stone-900
    accentColor: '#d97706', // amber-600
    secondaryColor: '#78716c',
    cardBg: 'rgba(255, 255, 255, 0.85)',
    isDark: false,
  },
  {
    id: 'crisp-white',
    name: 'Clean Studio (Light)',
    bgClass: 'bg-[#f8fafc]',
    textColor: '#0f172a', // slate-900
    accentColor: '#2563eb', // blue-600
    secondaryColor: '#64748b',
    cardBg: 'rgba(255, 255, 255, 0.95)',
    isDark: false,
  },
  {
    id: 'nordic-frost',
    name: 'Nordic Frost (Light)',
    bgClass: 'bg-[#eef2f6]',
    textColor: '#1e293b',
    accentColor: '#0284c7',
    secondaryColor: '#64748b',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    isDark: false,
  },
  {
    id: 'oled-black',
    name: 'OLED Midnight (Dark)',
    bgClass: 'bg-black',
    textColor: '#ffffff',
    accentColor: '#38bdf8', // sky-400
    secondaryColor: '#71717a', // zinc-500
    cardBg: 'rgba(24, 24, 27, 0.8)',
    isDark: true,
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Violet (Dark)',
    bgClass: 'bg-[#0f111a]',
    textColor: '#e2e8f0',
    accentColor: '#a78bfa', // violet-400
    secondaryColor: '#64748b',
    cardBg: 'rgba(23, 25, 40, 0.8)',
    isDark: true,
  },
  {
    id: 'amber-vintage',
    name: 'Amber Vintage CRT (Dark)',
    bgClass: 'bg-[#120e06]',
    textColor: '#fbbf24', // amber-400
    accentColor: '#f59e0b', // amber-500
    secondaryColor: '#92400e',
    cardBg: 'rgba(36, 26, 10, 0.8)',
    isDark: true,
  },
  {
    id: 'cyber-neon',
    name: 'Emerald Matrix (Dark)',
    bgClass: 'bg-[#04130c]',
    textColor: '#34d399', // emerald-400
    accentColor: '#10b981',
    secondaryColor: '#065f46',
    cardBg: 'rgba(6, 30, 20, 0.8)',
    isDark: true,
  },
  {
    id: 'sunset-dusk',
    name: 'Sunset Dusk (Dark)',
    bgClass: 'bg-[#181124]',
    textColor: '#fda4af', // rose-300
    accentColor: '#f43f5e',
    secondaryColor: '#881337',
    cardBg: 'rgba(38, 22, 54, 0.8)',
    isDark: true,
  },
  {
    id: 'deep-ocean',
    name: 'Deep Blue (Dark)',
    bgClass: 'bg-[#071324]',
    textColor: '#7dd3fc', // sky-300
    accentColor: '#0284c7',
    secondaryColor: '#075985',
    cardBg: 'rgba(12, 33, 60, 0.8)',
    isDark: true,
  },
  {
    id: 'custom',
    name: 'Custom Theme',
    bgClass: 'bg-[#f7f5f0]',
    textColor: '#1c1917',
    accentColor: '#d97706',
    secondaryColor: '#78716c',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    isDark: false,
  },
];

export const FONT_OPTIONS: { id: ClockFontFamily; name: string; sample: string; cssFamily: string }[] = [
  { id: 'outfit', name: 'Modern Sans', sample: '10:45:22', cssFamily: "'Outfit', sans-serif" },
  { id: 'jetbrains', name: 'JetBrains Terminal', sample: '10:45:22', cssFamily: "'JetBrains Mono', monospace" },
  { id: 'orbitron', name: 'Digital Sci-Fi', sample: '10:45:22', cssFamily: "'Orbitron', sans-serif" },
  { id: 'space-grotesk', name: 'Space Grotesk', sample: '10:45:22', cssFamily: "'Space Grotesk', sans-serif" },
  { id: 'audiowide', name: 'Audiowide Synth', sample: '10:45:22', cssFamily: "'Audiowide', cursive" },
  { id: 'vt323', name: 'Arcade Pixel (VT323)', sample: '10:45:22', cssFamily: "'VT323', monospace" },
  { id: 'cinzel', name: 'Cinzel Classic Luxury', sample: '10:45:22', cssFamily: "'Cinzel', serif" },
  { id: 'playfair', name: 'Playfair Editorial', sample: '10:45:22', cssFamily: "'Playfair Display', serif" },
  { id: 'montserrat', name: 'Montserrat Geometric', sample: '10:45:22', cssFamily: "'Montserrat', sans-serif" },
  { id: 'poppins', name: 'Poppins Soft', sample: '10:45:22', cssFamily: "'Poppins', sans-serif" },
  { id: 'courier', name: 'Courier Prime Serif Type', sample: '10:45:22', cssFamily: "'Courier Prime', monospace" },
  { id: 'share-tech', name: 'Share Tech Mono', sample: '10:45:22', cssFamily: "'Share Tech Mono', monospace" },
  { id: 'bebas', name: 'Bebas Bold Flip', sample: '10:45:22', cssFamily: "'Bebas Neue', sans-serif" },
];

export const SOUND_ALERT_OPTIONS: { id: SoundAlertChoice; name: string; desc: string }[] = [
  { id: 'zen-bell', name: 'Zen Meditation Bell', desc: 'Soothing Tibetan singing bowl resonance' },
  { id: 'gentle-marimba', name: 'Gentle Marimba', desc: 'Warm wooden acoustic chime sequence' },
  { id: 'digital-beep', name: 'Digital Cyber Beep', desc: 'Futuristic crisp three-pulse chime' },
  { id: 'crystal-harp', name: 'Crystal Harp', desc: 'Celestial ascending harp arpeggio' },
  { id: 'classic-alarm', name: 'Gentle Vintage Alarm', desc: 'Soft classic mechanical two-tone chime' },
  { id: 'custom', name: 'Custom Uploaded Sound', desc: 'Your own uploaded MP3/WAV/OGG sound file' },
];

// Default to Light theme as requested!
export const DEFAULT_CLOCK_SETTINGS: ClockSettings = {
  themeId: 'warm-minimal',
  customBg: '',
  customTextColor: '',
  customAccentColor: '',
  fontFamily: 'outfit',
  digitSize: 'large',
  timeFormat: '12h',
  showSeconds: true,
  showAmPm: true,
  showDate: true,
  showDayOfWeek: true,
  showQuote: true,
  quoteText: 'Focus on being productive instead of busy.',
  tickSound: false,
  hourlyChime: true,
  brightness: 100,
  antiBurnIn: true,
};

export const DEFAULT_POMODORO_SETTINGS: PomodoroSettings = {
  workMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  longBreakInterval: 4,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  soundAlerts: true,
  tickSound: false,
  workSound: 'zen-bell',
  shortBreakSound: 'gentle-marimba',
  longBreakSound: 'crystal-harp',
  fontFamily: 'outfit',
  circleSize: 300,
};

export const SAMPLE_QUOTES = [
  'Focus on being productive instead of busy.',
  'One thing at a time, done with excellence.',
  'The secret of getting ahead is getting started.',
  'Deep work produces rare and valuable results.',
  'Small daily efforts compound into extraordinary skills.',
  'Your future is created by what you do today.',
  'Stay calm, breathe, and conquer this session.',
];
