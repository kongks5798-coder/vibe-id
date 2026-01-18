// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: The 9 Aesthetic Archetypes
// Axes: Time (Classic ↔ Future), Density (Minimal ↔ Expressive), Temperature (Cool ↔ Warm)
// ═══════════════════════════════════════════════════════════════════════════

export interface ArchetypeData {
  id: number;
  name: string;
  nameKo: string;
  narrative: string;
  narrativeKo: string;
  visualDNA: string;
  bgPrompt: string;
  cssClass: string;
  textColor: 'light' | 'dark';
  axes: {
    time: number;      // -1 (Classic) to 1 (Future)
    density: number;   // -1 (Minimal) to 1 (Expressive)
    temperature: number; // -1 (Cool) to 1 (Warm)
  };
  metrics: {
    modernityIndex: number;
    sharpness: number;
    harmony: number;
    uniqueness: number;
  };
  keywords: string[];
}

export const ARCHETYPES: ArchetypeData[] = [
  {
    id: 1,
    name: "Silent Luxury",
    nameKo: "사일런트 럭셔리",
    narrative: "The understated elegance. Value that doesn't need to announce itself.",
    narrativeKo: "절제된 우아함, 드러내지 않는 가치",
    visualDNA: "Abstract minimalist beige silk texture, soft diffused light",
    bgPrompt: "Abstract minimalist beige silk texture, soft light, muted warm tones, elegant simplicity",
    cssClass: "archetype-silent-luxury",
    textColor: "dark",
    axes: { time: 0.2, density: -0.8, temperature: 0.4 },
    metrics: { modernityIndex: 72, sharpness: 45, harmony: 95, uniqueness: 68 },
    keywords: ["refined", "understated", "timeless", "elegant"]
  },
  {
    id: 2,
    name: "Tech-Noir",
    nameKo: "테크 누아르",
    narrative: "Sharp intellect. Future-forward coldness. The blade that cuts through time.",
    narrativeKo: "날카로운 지성, 미래지향적 차가움",
    visualDNA: "Dark metallic surfaces with glowing neon circuit lines",
    bgPrompt: "Dark metallic with glowing cyan neon circuit lines, futuristic, cyberpunk aesthetic",
    cssClass: "archetype-tech-noir",
    textColor: "light",
    axes: { time: 0.9, density: 0.3, temperature: -0.9 },
    metrics: { modernityIndex: 98, sharpness: 92, harmony: 61, uniqueness: 85 },
    keywords: ["futuristic", "sharp", "technological", "mysterious"]
  },
  {
    id: 3,
    name: "Neo-Vintage",
    nameKo: "네오 빈티지",
    narrative: "Nostalgia reimagined. Where past meets present in perfect tension.",
    narrativeKo: "과거의 향수와 현대적 감각의 결합",
    visualDNA: "Vintage film grain, sepia tones, subtle light leaks",
    bgPrompt: "Vintage film grain texture, sepia tones, light leaks, nostalgic warmth, analog aesthetic",
    cssClass: "archetype-neo-vintage",
    textColor: "dark",
    axes: { time: -0.6, density: 0.2, temperature: 0.6 },
    metrics: { modernityIndex: 45, sharpness: 55, harmony: 88, uniqueness: 72 },
    keywords: ["nostalgic", "warm", "authentic", "textured"]
  },
  {
    id: 4,
    name: "Pure Minimal",
    nameKo: "퓨어 미니멀",
    narrative: "Perfection through subtraction. The essence without the excess.",
    narrativeKo: "불필요함이 제거된 무결점의 본질",
    visualDNA: "Smooth white geometric shapes, clean architectural lines",
    bgPrompt: "Smooth white geometric shapes, clean lines, pure minimalism, soft shadows, architectural",
    cssClass: "archetype-pure-minimal",
    textColor: "dark",
    axes: { time: 0.4, density: -1, temperature: -0.2 },
    metrics: { modernityIndex: 85, sharpness: 78, harmony: 99, uniqueness: 55 },
    keywords: ["clean", "essential", "geometric", "pure"]
  },
  {
    id: 5,
    name: "Urban Utility",
    nameKo: "어반 유틸리티",
    narrative: "Functional beauty in motion. Dynamic energy that serves a purpose.",
    narrativeKo: "기능적 아름다움과 역동적 에너지",
    visualDNA: "Techwear fabric texture, slate gray and utility green accents",
    bgPrompt: "Techwear fabric texture, slate gray, utility green, tactical, urban functional aesthetic",
    cssClass: "archetype-urban-utility",
    textColor: "light",
    axes: { time: 0.5, density: 0.4, temperature: -0.3 },
    metrics: { modernityIndex: 78, sharpness: 82, harmony: 70, uniqueness: 75 },
    keywords: ["functional", "dynamic", "practical", "urban"]
  },
  {
    id: 6,
    name: "Royal Heritage",
    nameKo: "로열 헤리티지",
    narrative: "The weight of tradition. Commanding presence that demands attention.",
    narrativeKo: "전통의 권위와 압도적인 화려함",
    visualDNA: "Rich velvet texture, deep burgundy with gold ornamental patterns",
    bgPrompt: "Rich velvet texture, deep burgundy, gold patterns, royal, luxurious, ornate details",
    cssClass: "archetype-royal-heritage",
    textColor: "light",
    axes: { time: -0.8, density: 0.9, temperature: 0.5 },
    metrics: { modernityIndex: 32, sharpness: 65, harmony: 75, uniqueness: 82 },
    keywords: ["regal", "opulent", "commanding", "traditional"]
  },
  {
    id: 7,
    name: "Academic Chic",
    nameKo: "아카데믹 시크",
    narrative: "Intellectual immersion. The leisurely pursuit of classical refinement.",
    narrativeKo: "지적 몰입과 여유로운 클래식",
    visualDNA: "Aged paper texture with architectural sketches and serif typography",
    bgPrompt: "Aged paper texture, architectural sketches, scholarly, warm cream tones, intellectual aesthetic",
    cssClass: "archetype-academic-chic",
    textColor: "dark",
    axes: { time: -0.4, density: 0.1, temperature: 0.3 },
    metrics: { modernityIndex: 48, sharpness: 60, harmony: 92, uniqueness: 65 },
    keywords: ["scholarly", "refined", "thoughtful", "classic"]
  },
  {
    id: 8,
    name: "Cyber-Glitch",
    nameKo: "사이버 글리치",
    narrative: "Digital distortion. Rebellious energy that breaks the matrix.",
    narrativeKo: "디지털 왜곡과 강렬한 반항적 에너지",
    visualDNA: "Neon glitch art, distorted digital noise, magenta and cyan clash",
    bgPrompt: "Neon glitch art, digital noise, magenta cyan distortion, cyberpunk rebellious, VHS aesthetic",
    cssClass: "archetype-cyber-glitch",
    textColor: "light",
    axes: { time: 0.8, density: 1, temperature: -0.5 },
    metrics: { modernityIndex: 95, sharpness: 88, harmony: 35, uniqueness: 98 },
    keywords: ["rebellious", "digital", "chaotic", "bold"]
  },
  {
    id: 9,
    name: "Solar Punk",
    nameKo: "솔라 펑크",
    narrative: "Nature and technology in warm symbiosis. The optimistic future.",
    narrativeKo: "자연과 기술의 따뜻한 공생",
    visualDNA: "Organic green plant forms intertwined with golden tech elements",
    bgPrompt: "Organic green plants, golden tech elements, sustainable future, warm optimistic, nature technology fusion",
    cssClass: "archetype-solar-punk",
    textColor: "light",
    axes: { time: 0.6, density: 0.5, temperature: 0.8 },
    metrics: { modernityIndex: 82, sharpness: 58, harmony: 85, uniqueness: 88 },
    keywords: ["organic", "hopeful", "sustainable", "vibrant"]
  }
];

export function getArchetypeById(id: number): ArchetypeData | undefined {
  return ARCHETYPES.find(a => a.id === id);
}

export function getArchetypeByName(name: string): ArchetypeData | undefined {
  return ARCHETYPES.find(a =>
    a.name.toLowerCase() === name.toLowerCase() ||
    a.nameKo === name
  );
}
