// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: Style Balance Game
// ═══════════════════════════════════════════════════════════════════════════

export interface StyleChoice {
  id: string;
  description: string;
  descriptionKo: string;
  matchingArchetypes: number[]; // Which archetypes would choose this
  image?: string;
}

export interface StyleQuestion {
  id: number;
  question: string;
  questionKo: string;
  category: string;
  optionA: StyleChoice;
  optionB: StyleChoice;
}

export const STYLE_QUESTIONS: StyleQuestion[] = [
  {
    id: 1,
    question: "Your ideal weekend outfit?",
    questionKo: "이상적인 주말 코디는?",
    category: "일상",
    optionA: {
      id: "1a",
      description: "Crisp white shirt with tailored trousers",
      descriptionKo: "깔끔한 화이트 셔츠 + 테일러드 팬츠",
      matchingArchetypes: [1, 4, 6, 7], // Silent Luxury, Pure Minimal, Royal Heritage, Academic
    },
    optionB: {
      id: "1b",
      description: "Oversized hoodie with cargo pants",
      descriptionKo: "오버사이즈 후디 + 카고 팬츠",
      matchingArchetypes: [2, 5, 8, 9], // Tech-Noir, Urban Utility, Cyber-Glitch, Solar Punk
    },
  },
  {
    id: 2,
    question: "Pick your accessories",
    questionKo: "악세서리를 고른다면?",
    category: "악세서리",
    optionA: {
      id: "2a",
      description: "Minimalist gold jewelry",
      descriptionKo: "미니멀한 골드 주얼리",
      matchingArchetypes: [1, 3, 4, 6], // Silent Luxury, Neo-Vintage, Pure Minimal, Royal Heritage
    },
    optionB: {
      id: "2b",
      description: "Bold statement chains",
      descriptionKo: "볼드한 체인 악세서리",
      matchingArchetypes: [2, 5, 8], // Tech-Noir, Urban Utility, Cyber-Glitch
    },
  },
  {
    id: 3,
    question: "Preferred color palette?",
    questionKo: "선호하는 컬러 팔레트는?",
    category: "컬러",
    optionA: {
      id: "3a",
      description: "Neutral earth tones",
      descriptionKo: "뉴트럴 어스 톤",
      matchingArchetypes: [1, 3, 4, 7, 9], // Silent Luxury, Neo-Vintage, Pure Minimal, Academic, Solar Punk
    },
    optionB: {
      id: "3b",
      description: "High contrast black & bold colors",
      descriptionKo: "블랙 & 강렬한 컬러 대비",
      matchingArchetypes: [2, 5, 6, 8], // Tech-Noir, Urban Utility, Royal Heritage, Cyber-Glitch
    },
  },
  {
    id: 4,
    question: "Shopping preference?",
    questionKo: "쇼핑 스타일은?",
    category: "쇼핑",
    optionA: {
      id: "4a",
      description: "Quality over quantity, timeless pieces",
      descriptionKo: "수량보다 품질, 타임리스한 아이템",
      matchingArchetypes: [1, 3, 4, 6, 7], // Silent Luxury, Neo-Vintage, Pure Minimal, Royal Heritage, Academic
    },
    optionB: {
      id: "4b",
      description: "Trend-driven, experimental pieces",
      descriptionKo: "트렌드 위주, 실험적인 아이템",
      matchingArchetypes: [2, 5, 8, 9], // Tech-Noir, Urban Utility, Cyber-Glitch, Solar Punk
    },
  },
  {
    id: 5,
    question: "Party outfit vibe?",
    questionKo: "파티 룩 스타일은?",
    category: "파티",
    optionA: {
      id: "5a",
      description: "Elegant and sophisticated",
      descriptionKo: "우아하고 세련된 스타일",
      matchingArchetypes: [1, 3, 6, 7], // Silent Luxury, Neo-Vintage, Royal Heritage, Academic
    },
    optionB: {
      id: "5b",
      description: "Eye-catching and unique",
      descriptionKo: "눈에 띄는 유니크한 스타일",
      matchingArchetypes: [2, 5, 8, 9], // Tech-Noir, Urban Utility, Cyber-Glitch, Solar Punk
    },
  },
  {
    id: 6,
    question: "Favorite era of fashion?",
    questionKo: "좋아하는 패션 시대는?",
    category: "스타일",
    optionA: {
      id: "6a",
      description: "Classic 60s-70s vintage",
      descriptionKo: "클래식한 60-70년대 빈티지",
      matchingArchetypes: [1, 3, 6, 7], // Silent Luxury, Neo-Vintage, Royal Heritage, Academic
    },
    optionB: {
      id: "6b",
      description: "Futuristic cyberpunk",
      descriptionKo: "미래적인 사이버펑크",
      matchingArchetypes: [2, 4, 8, 9], // Tech-Noir, Pure Minimal, Cyber-Glitch, Solar Punk
    },
  },
  {
    id: 7,
    question: "Bag preference?",
    questionKo: "가방 스타일은?",
    category: "악세서리",
    optionA: {
      id: "7a",
      description: "Structured leather bag",
      descriptionKo: "구조적인 가죽 가방",
      matchingArchetypes: [1, 3, 6, 7], // Silent Luxury, Neo-Vintage, Royal Heritage, Academic
    },
    optionB: {
      id: "7b",
      description: "Functional crossbody/backpack",
      descriptionKo: "기능적인 크로스백/백팩",
      matchingArchetypes: [2, 4, 5, 8, 9], // Tech-Noir, Pure Minimal, Urban Utility, Cyber-Glitch, Solar Punk
    },
  },
  {
    id: 8,
    question: "Footwear of choice?",
    questionKo: "신발 스타일은?",
    category: "신발",
    optionA: {
      id: "8a",
      description: "Classic loafers or heels",
      descriptionKo: "클래식 로퍼 또는 힐",
      matchingArchetypes: [1, 3, 6, 7], // Silent Luxury, Neo-Vintage, Royal Heritage, Academic
    },
    optionB: {
      id: "8b",
      description: "Chunky sneakers or boots",
      descriptionKo: "청키 스니커즈 또는 부츠",
      matchingArchetypes: [2, 4, 5, 8, 9], // Tech-Noir, Pure Minimal, Urban Utility, Cyber-Glitch, Solar Punk
    },
  },
];

// Get random 5 questions for the game
export const getRandomQuestions = (): StyleQuestion[] => {
  const shuffled = [...STYLE_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};

// Calculate game result
export interface GameResult {
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  message: string;
  messageKo: string;
}

export const calculateGameResult = (
  userArchetypeId: number,
  answers: { questionId: number; choiceId: string }[]
): GameResult => {
  let correctCount = 0;

  answers.forEach((answer) => {
    const question = STYLE_QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) return;

    const selectedOption = answer.choiceId.endsWith("a") ? question.optionA : question.optionB;
    if (selectedOption.matchingArchetypes.includes(userArchetypeId)) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / answers.length) * 100);

  let message = "";
  let messageKo = "";

  if (percentage >= 80) {
    message = "You know your Vibe perfectly!";
    messageKo = "당신은 자신의 Vibe를 완벽하게 이해하고 있어요!";
  } else if (percentage >= 60) {
    message = "You have a good grasp of your style!";
    messageKo = "자신의 스타일을 꽤 잘 알고 있네요!";
  } else if (percentage >= 40) {
    message = "You're still exploring your Vibe";
    messageKo = "아직 자신의 Vibe를 탐색 중이에요";
  } else {
    message = "Time to discover your true Vibe!";
    messageKo = "진정한 Vibe를 발견할 시간이에요!";
  }

  return {
    correctCount,
    totalQuestions: answers.length,
    percentage,
    message,
    messageKo,
  };
};
