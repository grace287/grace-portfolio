# 🌟 Grace Lucia — Full-stack Portfolio  
**Web · Mobile · AI · Design-driven Engineering**

안녕하세요!  
저는 **Web / Mobile / AI 기반 제품을 기획–개발–디자인까지 직접 만드는 풀스택 개발자 Grace Lucia**입니다.  
Next.js · Flutter · FastAPI · Django 등을 기반으로 **기획 중심–UX 중심의 제품 개발**을 지향합니다.

본 포트폴리오는 GitHub Pages + Next.js 기반으로 제작되었으며,  
제가 만든 대표 프로젝트 및 문서화 역량을 확인하실 수 있습니다.

👉 **Live Portfolio:**  
https://grace287.github.io/grace-portfolio/

---

# 🚀 Featured Projects

## 1) 🍷 WineNow 2.0 — AI 기반 와인 시음노트 플랫폼  
**Next.js · FastAPI · PostgreSQL · S3 · Docker · AI**

> 와인 시음노트를 더 감성적·시각적으로 기록하기 위해 만든 플랫폼  
> AI 기반 와인 MBTI 추천 + 캔버스 이미지 자동 저장 기능 제공

🔗 **Project Page:**  
https://grace287.github.io/grace-portfolio/projects/winenow

📌 **주요 기능**  
- 🤖 AI 기반 와인 MBTI 추천  
- 🎨 시음노트 이미지 캡처(html2canvas)  
- 📱 모바일 최적화 이미지 Export  
- 🔗 소셜 공유 템플릿 생성  
- 🎨 컬러·향미·바디 UI 커스텀

---

## 2) 📅 Maple — 아이돌 스케줄 캘린더 앱 (Flutter)  
**Flutter · Supabase · Firebase FCM · Riverpod · Clean Architecture**

> 아이돌 스케줄을 한 곳에 모아 개인화된 캘린더로 보여주는 모바일 앱

🔗 **Project Page:**  
https://grace287.github.io/grace-portfolio/projects/maple

📌 **주요 기능**  
- 📅 그룹/멤버별 스케줄 자동 구성  
- 🔐 Supabase 인증/DB  
- 🔔 Firebase 푸시 알림  
- 💾 로컬 저장  
- 🌙 다크모드 UI 지원

---

## 3) 📝 GraceVoca — 다국어 AI 단어학습 앱  
**Flutter · FastAPI · Supabase · GPT API · TTS · SRS 알고리즘**

> 반복학습(SRS), AI 추천, 다국어 단어장 기능을 결합한 개인용 학습 앱

🔗 **Project Page:**  
https://grace287.github.io/grace-portfolio/projects/gracevoca

📌 **주요 기능**  
- 📚 단어장 생성/관리  
- 🗣️ 다국어 TTS  
- 🤖 GPT 기반 단어 추천  
- ⏰ 자동 복습 스케줄링  
- 🔔 Daily Study 알림 기능

---

# 🔥 Side Projects  
작지만 컨셉과 기능이 뚜렷한 사이드 프로젝트들입니다.

- 🎨 **Grace Design System** — 개인 브랜드 디자인 시스템 및 컴포넌트 라이브러리
- 📝 **Dev Blog Engine** — 마크다운 기반 개발 블로그 시스템  
- 🤖 **AI Chat Assistant** — 개인 업무 효율성을 위한 맞춤형 AI 채팅 도구
- 📱 **Widget Collection** — iOS/Android 위젯 모음집 및 개발 도구

---

# 🛠 Tech Stack

### **Frontend**  
- ⚛️ React, ⚡ Next.js, 🏷️ TypeScript  
- 🎨 Tailwind CSS, Framer Motion  

### **Backend**  
- 🚀 FastAPI, 🐍 Django REST Framework  
- 💻 Node.js (Express)

### **Mobile**  
- 🦋 Flutter (Clean Architecture, Riverpod)  
- 🎯 Dart

### **Database**  
- 🐘 PostgreSQL, ⚡ Supabase, 🔥 Firebase  
- 🗄️ Prisma ORM

### **DevOps & Cloud**  
- 🐳 Docker, GitHub Actions, GitHub Pages, ▲ Vercel  
- ☁️ AWS S3 / EC2

### **AI & ML**  
- 🧠 GPT API, 🤖 OpenAI  
- 🎨 이미지/텍스트 자동 생성  
- 🔬 텍스트 분석 및 추천 로직 설계

---

# 🏗 Portfolio Architecture

포트폴리오는 **Next.js (Static Export) + GitHub Pages + GitHub Actions** 구조로 배포됩니다.

```bash
# 개발 서버 실행
npm run dev          # http://localhost:3000

# 빌드 및 배포
npm run build        # 프로덕션 빌드
npm run export       # 정적 파일 생성 (out/ 폴더)
npm run preview      # 빌드된 사이트 로컬 미리보기

# Git 배포
git add .
git commit -m "✨ feat: 새로운 기능 추가"
git push origin main # GitHub Actions 자동 배포
```

### **Grace 브랜딩 시스템**
- 🎨 **Grace Wine** (#7C3A53) — 메인 브랜드 컬러
- 🌸 **Grace Rose** (#F7D7E0) — 소프트 포인트 컬러  
- 💜 **Grace Lavender** (#D8C8FF) — 서브 액센트
- ✨ **Grace Champagne** (#F7F4DD) — 배경 하이라이트
- 🖋️ **Pretendard** (한글) + **Inter** (영문) 폰트

---

## 🔧 Git Commit Convention

```bash
# 기능 추가
git commit -m "✨ feat: 새로운 기능명"

# 버그 수정  
git commit -m "🐛 fix: 버그 설명"

# UI/UX 개선
git commit -m "🎨 style: UI 컴포넌트 개선"

# 성능 최적화
git commit -m "⚡ perf: 성능 향상"

# 문서 업데이트
git commit -m "📝 docs: README 업데이트"

# 리팩터링
git commit -m "♻️ refactor: 코드 구조 개선"

# 배포 관련
git commit -m "🚀 deploy: GitHub Pages 배포"

# 테스트 추가
git commit -m "🧪 test: 테스트 케이스 추가"
```

**Made with ❤️ by Grace Lucia**
