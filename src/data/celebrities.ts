// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: Celebrity Database for Lookalike Matching
// ═══════════════════════════════════════════════════════════════════════════

export interface CelebrityProfile {
  id: string;
  name: string;
  nameKo: string;
  archetypeId: number;
  gender: "male" | "female";
  traits: string[];
  vibeScore: number; // How strongly they represent this archetype (1-100)
  funFact: string;
}

export const CELEBRITY_DATABASE: CelebrityProfile[] = [
  // Silent Luxury (1)
  { id: "sl-1", name: "Son Ye-jin", nameKo: "손예진", archetypeId: 1, gender: "female", traits: ["우아함", "클래식", "세련됨"], vibeScore: 95, funFact: "조용한 럭셔리의 정석" },
  { id: "sl-2", name: "Gong Yoo", nameKo: "공유", archetypeId: 1, gender: "male", traits: ["절제된 멋", "품격", "미니멀"], vibeScore: 92, funFact: "말없이 빛나는 존재감" },
  { id: "sl-3", name: "Jun Ji-hyun", nameKo: "전지현", archetypeId: 1, gender: "female", traits: ["고급스러움", "카리스마", "시크"], vibeScore: 94, funFact: "걸어다니는 하이엔드" },
  { id: "sl-4", name: "Lee Jung-jae", nameKo: "이정재", archetypeId: 1, gender: "male", traits: ["품위", "절제", "클래식"], vibeScore: 93, funFact: "오래될수록 멋있어지는 타입" },

  // Tech-Noir (2)
  { id: "tn-1", name: "G-Dragon", nameKo: "지드래곤", archetypeId: 2, gender: "male", traits: ["미래적", "실험적", "아방가르드"], vibeScore: 98, funFact: "트렌드를 만드는 존재" },
  { id: "tn-2", name: "CL", nameKo: "씨엘", archetypeId: 2, gender: "female", traits: ["엣지", "볼드", "하이테크"], vibeScore: 95, funFact: "경계를 무너뜨리는 스타일" },
  { id: "tn-3", name: "Taeyang", nameKo: "태양", archetypeId: 2, gender: "male", traits: ["스트릿", "하이패션", "퓨처리스틱"], vibeScore: 90, funFact: "흑백이 가장 잘 어울리는 남자" },
  { id: "tn-4", name: "Jennie", nameKo: "제니", archetypeId: 2, gender: "female", traits: ["모던", "시크", "럭셔리스트릿"], vibeScore: 88, funFact: "인간 샤넬" },

  // Neo-Vintage (3)
  { id: "nv-1", name: "IU", nameKo: "아이유", archetypeId: 3, gender: "female", traits: ["레트로", "로맨틱", "클래식모던"], vibeScore: 96, funFact: "과거와 현재의 완벽한 조화" },
  { id: "nv-2", name: "V (BTS)", nameKo: "뷔", archetypeId: 3, gender: "male", traits: ["빈티지", "아티스틱", "유니크"], vibeScore: 94, funFact: "걸어다니는 미술관" },
  { id: "nv-3", name: "Suzy", nameKo: "수지", archetypeId: 3, gender: "female", traits: ["청순", "클래식", "타임리스"], vibeScore: 91, funFact: "시대를 초월한 아름다움" },
  { id: "nv-4", name: "Park Bo-gum", nameKo: "박보검", archetypeId: 3, gender: "male", traits: ["클린", "클래식", "소프트"], vibeScore: 90, funFact: "따뜻한 빈티지 감성" },

  // Pure Minimal (4)
  { id: "pm-1", name: "Bae Doona", nameKo: "배두나", archetypeId: 4, gender: "female", traits: ["미니멀", "모던", "쿨"], vibeScore: 95, funFact: "심플함의 극치" },
  { id: "pm-2", name: "Yoo Ah-in", nameKo: "유아인", archetypeId: 4, gender: "male", traits: ["미니멀", "아트", "철학적"], vibeScore: 93, funFact: "비움의 미학" },
  { id: "pm-3", name: "Kim Go-eun", nameKo: "김고은", archetypeId: 4, gender: "female", traits: ["내추럴", "클린", "퓨어"], vibeScore: 90, funFact: "있는 그대로가 아름다운" },
  { id: "pm-4", name: "Lee Dong-wook", nameKo: "이동욱", archetypeId: 4, gender: "male", traits: ["심플", "세련", "모던"], vibeScore: 89, funFact: "절제된 우아함" },

  // Urban Utility (5)
  { id: "uu-1", name: "Zico", nameKo: "지코", archetypeId: 5, gender: "male", traits: ["스트릿", "힙합", "실용적"], vibeScore: 94, funFact: "거리의 패션 아이콘" },
  { id: "uu-2", name: "Hwasa", nameKo: "화사", archetypeId: 5, gender: "female", traits: ["볼드", "자유로움", "파워풀"], vibeScore: 93, funFact: "룰을 깨는 스타일" },
  { id: "uu-3", name: "Jay Park", nameKo: "박재범", archetypeId: 5, gender: "male", traits: ["스트릿웨어", "애슬레저", "캐주얼럭스"], vibeScore: 92, funFact: "움직임이 스타일인 남자" },
  { id: "uu-4", name: "Jessi", nameKo: "제시", archetypeId: 5, gender: "female", traits: ["스포티", "섹시", "실용적"], vibeScore: 91, funFact: "기능과 패션의 만남" },

  // Royal Heritage (6)
  { id: "rh-1", name: "Lee Young-ae", nameKo: "이영애", archetypeId: 6, gender: "female", traits: ["고귀함", "전통미", "우아함"], vibeScore: 97, funFact: "현대판 궁중 스타일" },
  { id: "rh-2", name: "Lee Byung-hun", nameKo: "이병헌", archetypeId: 6, gender: "male", traits: ["클래식", "포멀", "권위"], vibeScore: 94, funFact: "정장이 가장 잘 어울리는 남자" },
  { id: "rh-3", name: "Song Hye-kyo", nameKo: "송혜교", archetypeId: 6, gender: "female", traits: ["기품", "클래식", "럭셔리"], vibeScore: 95, funFact: "변하지 않는 아름다움" },
  { id: "rh-4", name: "Hyun Bin", nameKo: "현빈", archetypeId: 6, gender: "male", traits: ["귀족적", "포멀", "클래식"], vibeScore: 93, funFact: "타고난 귀공자 바이브" },

  // Academic Chic (7)
  { id: "ac-1", name: "Han Hyo-joo", nameKo: "한효주", archetypeId: 7, gender: "female", traits: ["지적", "클린", "프레피"], vibeScore: 92, funFact: "도서관에서 빛나는 타입" },
  { id: "ac-2", name: "Lee Je-hoon", nameKo: "이제훈", archetypeId: 7, gender: "male", traits: ["지성미", "댄디", "클래식"], vibeScore: 91, funFact: "안경이 어울리는 남자 1위" },
  { id: "ac-3", name: "Shin Min-a", nameKo: "신민아", archetypeId: 7, gender: "female", traits: ["클린", "지적", "우아"], vibeScore: 90, funFact: "똑똑해 보이는 패션 고수" },
  { id: "ac-4", name: "Ryu Jun-yeol", nameKo: "류준열", archetypeId: 7, gender: "male", traits: ["빈티지", "지성", "레이어드"], vibeScore: 89, funFact: "에코백이 잘 어울리는 남자" },

  // Cyber-Glitch (8)
  { id: "cg-1", name: "Kai (EXO)", nameKo: "카이", archetypeId: 8, gender: "male", traits: ["아방가르드", "퍼포먼스", "퓨처리스틱"], vibeScore: 96, funFact: "움직이는 예술작품" },
  { id: "cg-2", name: "Lisa (BLACKPINK)", nameKo: "리사", archetypeId: 8, gender: "female", traits: ["볼드", "글리터", "하이패션"], vibeScore: 95, funFact: "런웨이를 걷는 아이돌" },
  { id: "cg-3", name: "Key (SHINee)", nameKo: "키", archetypeId: 8, gender: "male", traits: ["실험적", "유니크", "트렌디"], vibeScore: 94, funFact: "패션계가 주목하는 아이돌" },
  { id: "cg-4", name: "Sunmi", nameKo: "선미", archetypeId: 8, gender: "female", traits: ["글리치", "아트팝", "실험적"], vibeScore: 92, funFact: "컨셉 장인" },

  // Solar Punk (9)
  { id: "sp-1", name: "Gong Hyo-jin", nameKo: "공효진", archetypeId: 9, gender: "female", traits: ["에코", "자연스러움", "편안함"], vibeScore: 94, funFact: "친환경 라이프스타일 아이콘" },
  { id: "sp-2", name: "So Ji-sub", nameKo: "소지섭", archetypeId: 9, gender: "male", traits: ["내추럴", "헬시", "캐주얼"], vibeScore: 90, funFact: "자연인 바이브" },
  { id: "sp-3", name: "Han Ji-min", nameKo: "한지민", archetypeId: 9, gender: "female", traits: ["오가닉", "소프트", "힐링"], vibeScore: 91, funFact: "숲이 어울리는 배우" },
  { id: "sp-4", name: "Park Seo-jun", nameKo: "박서준", archetypeId: 9, gender: "male", traits: ["헬시", "스포티", "프레시"], vibeScore: 88, funFact: "건강미의 대명사" },
];

// Get celebrities by archetype
export const getCelebritiesByArchetype = (archetypeId: number): CelebrityProfile[] => {
  return CELEBRITY_DATABASE.filter((c) => c.archetypeId === archetypeId);
};

// Get random celebrity match based on archetype and optional gender preference
export const getRandomCelebrityMatch = (archetypeId: number, gender?: "male" | "female"): CelebrityProfile => {
  let candidates = getCelebritiesByArchetype(archetypeId);
  if (gender) {
    candidates = candidates.filter((c) => c.gender === gender);
  }
  if (candidates.length === 0) {
    candidates = getCelebritiesByArchetype(archetypeId);
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
};

// Calculate "lookalike score" (simulated based on archetype match)
export const calculateLookalikeScore = (archetypeId: number, celebrity: CelebrityProfile): number => {
  if (celebrity.archetypeId === archetypeId) {
    // Same archetype: 75-95%
    return 75 + Math.floor(Math.random() * 20);
  } else {
    // Different archetype: 40-70%
    return 40 + Math.floor(Math.random() * 30);
  }
};
