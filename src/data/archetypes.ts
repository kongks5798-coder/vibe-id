// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: The 9 Aesthetic Archetypes
// Axes: Time (Classic ↔ Future), Density (Minimal ↔ Expressive), Temperature (Cool ↔ Warm)
// ═══════════════════════════════════════════════════════════════════════════

export interface Celebrity {
  name: string;
  nameKo: string;
  image?: string;
}

export interface StyleGuide {
  outfits: string[];
  colors: string[];
  accessories: string[];
  avoidItems: string[];
}

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
    time: number;
    density: number;
    temperature: number;
  };
  metrics: {
    modernityIndex: number;
    sharpness: number;
    harmony: number;
    uniqueness: number;
  };
  keywords: string[];
  celebrities: Celebrity[];
  fashionBrands: string[];
  styleGuide: StyleGuide;
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
    keywords: ["refined", "understated", "timeless", "elegant"],
    celebrities: [
      { name: "Son Ye-jin", nameKo: "손예진" },
      { name: "Gong Yoo", nameKo: "공유" },
      { name: "Song Hye-kyo", nameKo: "송혜교" },
      { name: "Gwyneth Paltrow", nameKo: "기네스 팰트로" },
      { name: "Sofia Coppola", nameKo: "소피아 코폴라" }
    ],
    fashionBrands: ["The Row", "Loro Piana", "Brunello Cucinelli", "Jil Sander", "LEMAIRE", "AURALEE"],
    styleGuide: {
      outfits: ["캐시미어 니트 + 와이드 슬랙스", "실크 셔츠 + 테일러드 팬츠", "캐멀 코트 + 크림 터틀넥"],
      colors: ["Cream", "Camel", "Soft Gray", "Ivory", "Taupe"],
      accessories: ["미니멀 골드 주얼리", "가죽 토트백", "캐시미어 머플러"],
      avoidItems: ["과한 로고", "네온 컬러", "화려한 프린트"]
    }
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
    keywords: ["futuristic", "sharp", "technological", "mysterious"],
    celebrities: [
      { name: "Lee Dong-wook", nameKo: "이동욱" },
      { name: "Jeon Ji-hyun", nameKo: "전지현" },
      { name: "G-Dragon", nameKo: "지드래곤" },
      { name: "Keanu Reeves", nameKo: "키아누 리브스" },
      { name: "Tilda Swinton", nameKo: "틸다 스윈튼" }
    ],
    fashionBrands: ["Rick Owens", "Balenciaga", "Acronym", "Y-3", "1017 ALYX 9SM", "HELIOT EMIL"],
    styleGuide: {
      outfits: ["올블랙 레이어링", "테크웨어 재킷 + 카고팬츠", "구조적인 코트 + 슬림 팬츠"],
      colors: ["Black", "Charcoal", "Gunmetal", "Dark Navy", "Silver"],
      accessories: ["매트 블랙 시계", "테크니컬 백팩", "실버 링"],
      avoidItems: ["파스텔 톤", "플로럴 패턴", "빈티지 아이템"]
    }
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
    keywords: ["nostalgic", "warm", "authentic", "textured"],
    celebrities: [
      { name: "IU", nameKo: "아이유" },
      { name: "Park Bo-gum", nameKo: "박보검" },
      { name: "Kim Go-eun", nameKo: "김고은" },
      { name: "Harry Styles", nameKo: "해리 스타일스" },
      { name: "Alexa Chung", nameKo: "알렉사 청" }
    ],
    fashionBrands: ["BODE", "Story mfg.", "Margaret Howell", "Toast", "45R", "BEAMS+"],
    styleGuide: {
      outfits: ["빈티지 데님 재킷 + 화이트 티", "코듀로이 팬츠 + 니트 베스트", "A라인 스커트 + 카디건"],
      colors: ["Mustard", "Rust", "Olive", "Cream", "Brown"],
      accessories: ["빈티지 스카프", "가죽 새들백", "골드 빈티지 주얼리"],
      avoidItems: ["하이테크 소재", "네온 컬러", "과한 로고"]
    }
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
    keywords: ["clean", "essential", "geometric", "pure"],
    celebrities: [
      { name: "Bae Suzy", nameKo: "배수지" },
      { name: "Nam Joo-hyuk", nameKo: "남주혁" },
      { name: "Jung Ho-yeon", nameKo: "정호연" },
      { name: "Zendaya", nameKo: "젠데이아" },
      { name: "Phoebe Philo", nameKo: "피비 파일로" }
    ],
    fashionBrands: ["COS", "Jil Sander", "Acne Studios", "Totême", "Low Classic", "ARKET"],
    styleGuide: {
      outfits: ["화이트 셔츠 + 블랙 팬츠", "오버사이즈 코트 + 슬림 진", "미니멀 원피스"],
      colors: ["White", "Black", "Gray", "Navy", "Off-white"],
      accessories: ["심플한 가죽 벨트", "미니멀 토트백", "얇은 실버 주얼리"],
      avoidItems: ["화려한 패턴", "프릴/러플", "과한 액세서리"]
    }
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
    keywords: ["functional", "dynamic", "practical", "urban"],
    celebrities: [
      { name: "Son Heung-min", nameKo: "손흥민" },
      { name: "Kang Dong-won", nameKo: "강동원" },
      { name: "BLACKPINK Lisa", nameKo: "리사" },
      { name: "A$AP Rocky", nameKo: "에이셉 라키" },
      { name: "Bella Hadid", nameKo: "벨라 하디드" }
    ],
    fashionBrands: ["Stone Island", "Arc'teryx Veilance", "Nike ACG", "Carhartt WIP", "WTAPS", "Gorpcore"],
    styleGuide: {
      outfits: ["테크 재킷 + 카고 조거", "후디 + 워커", "유틸리티 베스트 + 와이드 팬츠"],
      colors: ["Olive", "Black", "Khaki", "Gray", "Orange (accent)"],
      accessories: ["크로스백", "스포츠 시계", "캡/비니"],
      avoidItems: ["포멀 수트", "하이힐", "섬세한 주얼리"]
    }
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
    keywords: ["regal", "opulent", "commanding", "traditional"],
    celebrities: [
      { name: "Lee Young-ae", nameKo: "이영애" },
      { name: "Lee Byung-hun", nameKo: "이병헌" },
      { name: "Kim Hee-ae", nameKo: "김희애" },
      { name: "Cate Blanchett", nameKo: "케이트 블란쳇" },
      { name: "Ralph Fiennes", nameKo: "레이프 파인스" }
    ],
    fashionBrands: ["Gucci", "Dolce & Gabbana", "Balmain", "Alexander McQueen", "Versace", "Valentino"],
    styleGuide: {
      outfits: ["벨벳 블레이저 + 실크 블라우스", "브로케이드 재킷 + 테일러드 팬츠", "롱 드레스 + 케이프"],
      colors: ["Burgundy", "Gold", "Emerald", "Navy", "Royal Purple"],
      accessories: ["스테이트먼트 주얼리", "구조적인 클러치", "실크 스카프"],
      avoidItems: ["캐주얼 스니커즈", "데님", "스포츠웨어"]
    }
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
    keywords: ["scholarly", "refined", "thoughtful", "classic"],
    celebrities: [
      { name: "Yoo Yeon-seok", nameKo: "유연석" },
      { name: "Han Hyo-joo", nameKo: "한효주" },
      { name: "Cho Seung-woo", nameKo: "조승우" },
      { name: "Timothée Chalamet", nameKo: "티모시 샬라메" },
      { name: "Emma Watson", nameKo: "엠마 왓슨" }
    ],
    fashionBrands: ["Ralph Lauren", "Brooks Brothers", "J.Press", "Drake's", "Massimo Dutti", "Polo"],
    styleGuide: {
      outfits: ["트위드 블레이저 + 옥스포드 셔츠", "니트 베스트 + 치노 팬츠", "더플 코트 + 로퍼"],
      colors: ["Brown", "Forest Green", "Navy", "Cream", "Burgundy"],
      accessories: ["가죽 사첼백", "금테 안경", "실크 타이"],
      avoidItems: ["트렌디한 스트릿웨어", "네온 컬러", "과한 로고"]
    }
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
    keywords: ["rebellious", "digital", "chaotic", "bold"],
    celebrities: [
      { name: "BTS RM", nameKo: "RM" },
      { name: "CL", nameKo: "씨엘" },
      { name: "NewJeans Hyein", nameKo: "뉴진스 혜인" },
      { name: "Billie Eilish", nameKo: "빌리 아일리시" },
      { name: "Grimes", nameKo: "그라임스" }
    ],
    fashionBrands: ["Marine Serre", "Diesel", "MISBHV", "Namacheko", "Ottolinger", "ADER ERROR"],
    styleGuide: {
      outfits: ["홀로그램 재킷 + 와이드 팬츠", "메시 레이어링 + 플랫폼 부츠", "그래픽 후디 + 테크 팬츠"],
      colors: ["Neon Pink", "Electric Blue", "Acid Green", "Black", "Chrome"],
      accessories: ["체인 주얼리", "LED 액세서리", "퓨처리스틱 선글라스"],
      avoidItems: ["클래식 정장", "베이지 톤", "미니멀 주얼리"]
    }
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
    keywords: ["organic", "hopeful", "sustainable", "vibrant"],
    celebrities: [
      { name: "Park Seo-jun", nameKo: "박서준" },
      { name: "Han So-hee", nameKo: "한소희" },
      { name: "NewJeans Minji", nameKo: "뉴진스 민지" },
      { name: "Florence Pugh", nameKo: "플로렌스 퓨" },
      { name: "Dev Hynes", nameKo: "데브 하인즈" }
    ],
    fashionBrands: ["Stella McCartney", "Patagonia", "Reformation", "Pangaia", "Veja", "Nanushka"],
    styleGuide: {
      outfits: ["리넨 셋업 + 에스파드리유", "오가닉 코튼 드레스 + 라탄백", "니트 카디건 + 와이드 팬츠"],
      colors: ["Sage Green", "Terracotta", "Sun Yellow", "Natural White", "Earth Brown"],
      accessories: ["친환경 소재 백", "자연석 주얼리", "우드 프레임 선글라스"],
      avoidItems: ["합성 가죽", "패스트패션", "과한 플라스틱 소재"]
    }
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
