# VIBE-ID 🎭

> **AI Aesthetic Persona Analysis** - Discover Your Visual DNA

셀카 한 장으로 9가지 미학적 아키타입 중 당신의 Vibe를 찾아드립니다.

## ✨ Features

- **Tesla-Style Minimalism**: 극도로 절제된 여백과 날카로운 타이포그래피
- **GPT-4o Vision Analysis**: AI가 당신의 미학적 DNA를 분석
- **FSD-Style Scanning**: 테슬라 FSD 인터페이스 스타일의 스캔 애니메이션
- **9:16 Result Card**: 인스타그램 스토리 최적화 결과 카드
- **Share & Download**: html-to-image로 결과 이미지 저장/공유

## 🎨 The 9 Aesthetic Archetypes

| # | Name | Korean | Description |
|---|------|--------|-------------|
| 1 | Silent Luxury | 사일런트 럭셔리 | 절제된 우아함, 드러내지 않는 가치 |
| 2 | Tech-Noir | 테크 누아르 | 날카로운 지성, 미래지향적 차가움 |
| 3 | Neo-Vintage | 네오 빈티지 | 과거의 향수와 현대적 감각의 결합 |
| 4 | Pure Minimal | 퓨어 미니멀 | 불필요함이 제거된 무결점의 본질 |
| 5 | Urban Utility | 어반 유틸리티 | 기능적 아름다움과 역동적 에너지 |
| 6 | Royal Heritage | 로열 헤리티지 | 전통의 권위와 압도적인 화려함 |
| 7 | Academic Chic | 아카데믹 시크 | 지적 몰입과 여유로운 클래식 |
| 8 | Cyber-Glitch | 사이버 글리치 | 디지털 왜곡과 강렬한 반항적 에너지 |
| 9 | Solar Punk | 솔라 펑크 | 자연과 기술의 따뜻한 공생 |

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS v4, Framer Motion
- **Icons**: Lucide React
- **AI**: OpenAI GPT-4o Vision API
- **Export**: html-to-image
- **Storage**: Supabase (optional)
- **Deployment**: Vercel

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd C:\Users\polor\vibe-id
npm install
```

### 2. Environment Setup

```bash
# Edit .env.local and add your OpenAI API key
OPENAI_API_KEY=sk-your-key-here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vibe-id/
├── src/
│   ├── app/
│   │   ├── api/analyze/route.ts  # GPT-4o Vision API
│   │   ├── globals.css           # Tesla-style design
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page
│   ├── components/
│   │   ├── Scanner.tsx           # FSD-style animation
│   │   ├── ResultCard.tsx        # 9:16 result card
│   │   └── UploadZone.tsx        # Image upload
│   └── data/
│       └── archetypes.ts         # 9 archetypes
└── .env.local                    # API keys
```

## 🎯 Design Philosophy

```
Background: #F9F9F7 (Warm Ivory)
Text: #171717 (Deep Black)
Scan Line: #00D4FF (Cyan Glow)
```

## 🌐 Deploy to Vercel

```bash
vercel
```

Environment Variables:
```
OPENAI_API_KEY=sk-your-key
```

---

**Field Nine Solutions** | MIT License
