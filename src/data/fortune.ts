// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: Daily Style Fortune System
// ═══════════════════════════════════════════════════════════════════════════

export interface DailyFortune {
  overall: number; // 1-100
  luck: string;
  luckKo: string;
  color: string;
  colorKo: string;
  item: string;
  itemKo: string;
  avoid: string;
  avoidKo: string;
  tip: string;
  emoji: string;
}

// Fortune templates by archetype
const FORTUNE_TEMPLATES: Record<number, { items: string[]; colors: string[]; tips: string[]; avoids: string[] }> = {
  1: { // Silent Luxury
    items: ["캐시미어 니트", "가죽 토트백", "실크 스카프", "골드 주얼리", "카멜 코트"],
    colors: ["아이보리", "베이지", "캐멀", "네이비", "버건디"],
    tips: ["오늘은 과한 로고보다 소재로 승부하세요", "절제된 악세서리가 품격을 높여요", "베이직 아이템의 힘을 믿으세요"],
    avoids: ["과한 프린트", "네온 컬러", "로고 플레이"],
  },
  2: { // Tech-Noir
    items: ["블랙 레더 재킷", "테크웨어 조거", "미러 선글라스", "체인 악세서리", "오버사이즈 후디"],
    colors: ["블랙", "실버", "네온 그린", "일렉트릭 블루", "퍼플"],
    tips: ["미래에서 온 듯한 룩을 시도해보세요", "레이어링으로 입체감을 더하세요", "메탈릭 악세서리가 포인트!"],
    avoids: ["파스텔 톤", "플로럴 패턴", "클래식 정장"],
  },
  3: { // Neo-Vintage
    items: ["빈티지 블라우스", "하이웨스트 팬츠", "레트로 선글라스", "빈티지 시계", "트위드 재킷"],
    colors: ["머스타드", "올리브", "버건디", "크림", "테라코타"],
    tips: ["오래된 것에서 새로움을 찾으세요", "할머니 옷장에서 보물을 찾아보세요", "믹스매치가 빈티지의 핵심!"],
    avoids: ["너무 새 보이는 옷", "플라스틱 소재", "트렌디한 로고"],
  },
  4: { // Pure Minimal
    items: ["화이트 티셔츠", "블랙 슬랙스", "미니멀 워치", "화이트 스니커즈", "캔버스 토트"],
    colors: ["화이트", "블랙", "그레이", "네이비", "베이지"],
    tips: ["하나를 빼세요. 그게 정답입니다", "품질 좋은 베이직에 투자하세요", "실루엣에 집중하세요"],
    avoids: ["과한 패턴", "화려한 컬러", "장식이 많은 아이템"],
  },
  5: { // Urban Utility
    items: ["카고 팬츠", "윈드브레이커", "크로스백", "하이탑 스니커즈", "버킷햇"],
    colors: ["카키", "올리브", "블랙", "오렌지", "베이지"],
    tips: ["기능성과 스타일 둘 다 잡으세요", "포켓이 많을수록 좋아요", "편한 게 최고의 패션!"],
    avoids: ["불편한 하이힐", "드라이클리닝 전용", "관리 어려운 소재"],
  },
  6: { // Royal Heritage
    items: ["벨벳 블레이저", "진주 이어링", "실크 블라우스", "클래식 펌프스", "구조적인 핸드백"],
    colors: ["로열 블루", "버건디", "에메랄드", "골드", "아이보리"],
    tips: ["격식을 갖추되 자연스럽게", "전통적인 아이템에 현대적 감각을", "품위는 자세에서 나와요"],
    avoids: ["캐주얼 스니커즈", "그래픽 티", "찢어진 청바지"],
  },
  7: { // Academic Chic
    items: ["옥스포드 셔츠", "울 스웨터", "로퍼", "토트백", "뿔테 안경"],
    colors: ["네이비", "버건디", "포레스트 그린", "크림", "브라운"],
    tips: ["지성미가 오늘의 무기예요", "레이어링으로 깊이감을 더하세요", "책 한 권이 최고의 악세서리!"],
    avoids: ["과한 노출", "화려한 글리터", "스포티 웨어"],
  },
  8: { // Cyber-Glitch
    items: ["홀로그램 재킷", "플랫폼 부츠", "LED 악세서리", "PVC 백", "크롭 탑"],
    colors: ["홀로그램", "네온 핑크", "일렉트릭 블루", "실버", "블랙"],
    tips: ["오늘은 시선을 사로잡으세요", "규칙을 깨는 게 규칙!", "미래를 입고 다니세요"],
    avoids: ["베이직 아이템", "뉴트럴 톤", "전통적인 실루엣"],
  },
  9: { // Solar Punk
    items: ["린넨 셔츠", "에코백", "대나무 선글라스", "식물성 가죽 샌들", "오가닉 코튼 티"],
    colors: ["올리브", "테라코타", "스카이 블루", "선셋 오렌지", "내추럴 베이지"],
    tips: ["지구를 생각하는 선택을 하세요", "중고 옷에서 보물을 찾아보세요", "자연 소재가 최고!"],
    avoids: ["패스트패션", "합성 소재", "과한 패키징 제품"],
  },
};

// Generate today's fortune based on archetype and date
export const getDailyFortune = (archetypeId: number): DailyFortune => {
  const template = FORTUNE_TEMPLATES[archetypeId] || FORTUNE_TEMPLATES[4];
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  // Deterministic random based on date
  const seededRandom = (max: number) => {
    const x = Math.sin(seed) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  };

  const overall = 60 + seededRandom(40); // 60-99

  const luckLevels = [
    { min: 90, luck: "AMAZING", luckKo: "대박", emoji: "🌟" },
    { min: 80, luck: "GREAT", luckKo: "좋음", emoji: "✨" },
    { min: 70, luck: "GOOD", luckKo: "양호", emoji: "😊" },
    { min: 60, luck: "OKAY", luckKo: "보통", emoji: "👍" },
  ];

  const luckInfo = luckLevels.find((l) => overall >= l.min) || luckLevels[luckLevels.length - 1];

  return {
    overall,
    luck: luckInfo.luck,
    luckKo: luckInfo.luckKo,
    emoji: luckInfo.emoji,
    color: template.colors[seededRandom(template.colors.length)],
    colorKo: template.colors[seededRandom(template.colors.length)],
    item: template.items[seededRandom(template.items.length)],
    itemKo: template.items[seededRandom(template.items.length)],
    avoid: template.avoids[seededRandom(template.avoids.length)],
    avoidKo: template.avoids[seededRandom(template.avoids.length)],
    tip: template.tips[seededRandom(template.tips.length)],
  };
};

// Get fortune description
export const getFortuneMessage = (fortune: DailyFortune): string => {
  if (fortune.overall >= 90) {
    return "오늘은 당신의 스타일이 빛나는 날! 과감하게 도전하세요.";
  } else if (fortune.overall >= 80) {
    return "좋은 기운이 함께해요. 평소 입고 싶던 옷을 꺼내보세요.";
  } else if (fortune.overall >= 70) {
    return "무난하지만 좋은 날. 작은 포인트로 변화를 줘보세요.";
  } else {
    return "오늘은 편안한 스타일로! 내일을 위해 에너지를 아끼세요.";
  }
};
