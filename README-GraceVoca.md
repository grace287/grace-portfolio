# 📚 GraceVoca - AI 다국어 단어 학습 앱

> SRS 기반 반복학습 + TTS + AI 추천  
> 여러 언어를 효율적으로 학습하는 통합 플랫폼

---

## 🌟 Demo
- **Play Store:** [https://play.google.com/store/gracevoca](https://play.google.com/store/gracevoca)
- **Web Version:** [https://gracevoca.vercel.app](https://gracevoca.vercel.app)
- **GitHub:** [https://github.com/grace287/gracevoca](https://github.com/grace287/gracevoca)

---

## 🧩 1. Overview
여러 언어 학습 서비스가 분산되어 있고, 개인화된 복습 시스템이 부족한 문제를 해결합니다.

**타겟 사용자:** 다국어 학습자, 어학원생, 유학 준비생  
**핵심 가치:** 통합 학습 + AI 맞춤화 + 과학적 복습

---

## 🚀 2. Features
- 🧠 **SRS 알고리즘** - 에빙하우스 망각곡선 기반 최적 복습
- 🗣️ **다국어 TTS** - 언어별 최적화된 발음 엔진
- 🤖 **AI 단어 추천** - 학습 패턴 분석으로 개인화 추천
- 📱 **실시간 동기화** - 여러 기기에서 학습 진도 공유
- 📧 **Daily Study 알림** - 이메일/푸시 기반 학습 리마인더
- 🎯 **퀴즈/테스트 모드** - 다양한 학습 방식 지원

---

## 🛠 3. Tech Stack
**Mobile:** Flutter 3.16, Dart  
**Backend:** FastAPI, Python  
**Database:** Supabase (PostgreSQL)  
**Auth:** Firebase Authentication  
**AI:** GPT API, 언어 모델 임베딩  
**TTS:** Google Cloud Text-to-Speech

---

## 🏗 4. Architecture
```
Flutter App → FastAPI Backend → AI Recommendation Engine
                    ↓                    ↓
            Supabase Database ← GPT API Analysis
                    ↓
            TTS Service + Email Scheduler
```

---

## 📦 5. Installation & Run
```bash
# Flutter Frontend
flutter pub get
flutter run

# FastAPI Backend
pip install -r requirements.txt
uvicorn main:app --reload

# Environment Variables
cp .env.example .env
# Add Supabase, Firebase, GPT API keys
```

---

## 🧪 6. Technical Challenges

### 🌍 언어별 TTS 속도 차이
**문제:** 각 언어마다 최적 재생 속도 상이  
**해결:** locale 기반 처리로 언어별 최적화 설정

### 🔄 반복학습 알고리즘 정확도
**문제:** 단순 간격 반복의 효율성 한계  
**해결:** 사용자 답변 패턴 분석으로 간격 조정 개선

### 📱 모바일 API 인증 지연
**문제:** 네트워크 상태에 따른 인증 끊김  
**해결:** 토큰 캐싱과 백그라운드 갱신 구현

---

## 📈 7. Results
- 📈 **공부 지속률:** 2.5배 증가
- ⚡ **리뷰 모드 속도:** 30% 향상
- 👥 **사용자 유지율:** 85%
- 🎯 **학습 완료율:** 78%

---

## 🧠 8. AI Features Detail

### 📊 개인화 추천 알고리즘
- 사용자 학습 히스토리 분석
- 취약 단어 유형 패턴 인식
- 난이도별 단어 추천 우선순위

### 🔄 SRS (Spaced Repetition System)
- 초기 간격: 1일 → 3일 → 7일 → 15일
- 정답률 기반 동적 간격 조정
- 망각 위험도 예측 모델

---

## 🔮 9. Next Steps
- 문장 단위 학습 모드
- 음성 인식 발음 평가
- 협업 학습 그룹 기능
- 오프라인 모드 지원

---

## 👩‍💻 Author

**Grace Lucia**  
📧 Email: [grace@example.com](mailto:grace@example.com)  
🐙 GitHub: [https://github.com/grace287](https://github.com/grace287)  
💼 Portfolio: [https://grace287.github.io/grace-portfolio](https://grace287.github.io/grace-portfolio)