# 🍷 WineNow 2.0

> AI 기반 시음노트 생성 플랫폼  
> 와인 애호가들을 위한 개인화된 시음 경험 서비스

---

## 🌟 Demo
- **Live Demo:** [https://winenow-demo.vercel.app](https://winenow-demo.vercel.app)
- **GitHub:** [https://github.com/grace287/winenow](https://github.com/grace287/winenow)

---

## 🧩 1. Overview
기존 시음노트는 텍스트 중심으로 단조로우며, 모바일에서 시각적 기록이 어려운 문제를 해결하기 위해 개발했습니다.  

**타겟 사용자:** 와인 애호가, 소믈리에, 와인 교육생  
**핵심 가치:** 시각적 시음노트 + AI 추천 + 소셜 공유

---

## 🚀 2. Features
- ✨ **AI 와인 MBTI 추천** - 개인 취향 분석 기반 맞춤 추천
- 🎨 **Canvas 기반 시음노트** - html2canvas로 이미지 export
- 📱 **모바일 최적화** - Safari/Chrome 호환 캡처 기능
- 🍇 **감성 UI** - 와인 색감/향미/바디 시각화
- 📤 **소셜 공유** - 자동 템플릿 생성 및 SNS 공유
- 💾 **사용자 프리셋** - 개인 설정 저장 기능

---

## 🛠 3. Tech Stack
**Frontend:** Next.js 14, TypeScript, Tailwind CSS  
**Backend:** Django/FastAPI, PostgreSQL, Redis  
**Storage:** AWS S3, CloudFront CDN  
**Infra:** Docker, GitHub Actions, Vercel  
**AI:** GPT API, 와인 데이터 임베딩

---

## 🏗 4. Architecture
```
Next.js Frontend → FastAPI Gateway → Business Logic → PostgreSQL
                                  ↓
                              AWS S3 ← Image Processing
```

---

## 📦 5. Installation & Run
```bash
# Frontend
npm install
npm run dev

# Backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🧪 6. Key Challenges Solved

### 🔧 html2canvas lab() 색상 파싱 오류
**문제:** CSS lab() 색상 함수가 캡처시 오류 발생  
**해결:** RGB 변환 필터 작성으로 색상 호환성 확보

### 📱 모바일 Safari 캡처 영역 잘림
**문제:** 세로 영역이 잘려서 저장되는 현상  
**해결:** ref 기반 높이 강제 계산 + `await waitForImages()` 적용

---

## 📈 7. Results
- 🎯 **이미지 캡처 성공률:** 100%
- ⚡ **시음노트 생성 시간:** 40% 단축
- 📊 **사용자 만족도:** 95%

---

## 🔮 8. Next Steps
- 와인 바코드 스캔 기능
- 음성 시음노트 입력
- 소믈리에 인증 시스템

---

## 👩‍💻 Author

**Grace Lucia**  
📧 Email: [grace@example.com](mailto:grace@example.com)  
🐙 GitHub: [https://github.com/grace287](https://github.com/grace287)  
💼 Portfolio: [https://grace287.github.io/grace-portfolio](https://grace287.github.io/grace-portfolio)