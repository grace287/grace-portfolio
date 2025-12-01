# 🍁 Maple - 아이돌 스케줄 관리 앱

> Flutter 기반 K-POP 팬들을 위한 통합 스케줄 관리 플랫폼  
> 개인화된 아이돌 일정 + 위젯 + 푸시 알림

---

## 🌟 Demo
- **App Store:** [https://apps.apple.com/maple](https://apps.apple.com/maple)
- **Play Store:** [https://play.google.com/store/maple](https://play.google.com/store/maple)
- **GitHub:** [https://github.com/grace287/maple](https://github.com/grace287/maple)

---

## 🧩 1. Overview
아이돌 팬들이 여러 사이트에서 스케줄을 찾아야 하는 불편함을 해결하고,  
개인화된 일정 관리와 알림 서비스를 제공합니다.

**타겟 사용자:** K-POP 팬, 아이돌 덕후, 콘서트 참가자  
**핵심 가치:** 통합 스케줄 + 개인화 + 실시간 알림

---

## 🚀 2. Features
- 🎯 **그룹/멤버 선택** - 개인화된 일정 자동 생성
- 📅 **정제된 캘린더 UI** - 월/주/일 뷰 지원
- 📱 **앱 위젯** - 홈 화면에서 빠른 일정 확인
- 🔔 **FCM 푸시 알림** - 중요 일정 자동 알림
- 🌙 **다크모드** - 사용자 선호도 맞춤 테마
- 🔄 **실시간 동기화** - Supabase 기반 실시간 업데이트

---

## 🛠 3. Tech Stack
**Mobile:** Flutter 3.16, Dart  
**State Management:** Riverpod  
**Architecture:** Clean Architecture  
**Backend:** Supabase (Auth + Database)  
**Push:** Firebase FCM  
**Storage:** Supabase Storage

---

## 🏗 4. Architecture
```
Flutter App → Riverpod State → Repository Layer
                                    ↓
                            Supabase Backend
                                    ↓
                            FCM Push Service
```

---

## 📦 5. Installation & Run
```bash
# Flutter 개발환경 설정
flutter --version
flutter pub get

# iOS 실행
flutter run -d ios

# Android 실행
flutter run -d android
```

---

## 🧪 6. Technical Challenges

### 📊 불규칙한 스케줄 데이터 파싱
**문제:** 다양한 소스의 일정 포맷 차이  
**해결:** 파싱 자동화로 통일된 형식 변환

### ⚡ API 호출 최소화
**문제:** 네트워크 비용 및 응답 지연  
**해결:** 로컬 캐싱과 스마트 데이터 동기화

### 🔧 앱 위젯 렌더링 지연
**문제:** 위젯 업데이트 시 지연 발생  
**해결:** 백그라운드 데이터 프리로딩

---

## 📈 7. Results
- 📱 **플랫폼:** iOS & Android 동시 운영
- ⚡ **API 응답속도:** 40% 개선
- 👥 **월활성 사용자:** 15,000+
- ⭐ **앱스토어 평점:** 4.8/5.0

---

## 🔮 8. Next Steps
- 다국어 지원 (영어, 중국어)
- 콘서트 티켓팅 알림
- 팬 커뮤니티 기능
- Apple Watch 앱 확장

---

## 👩‍💻 Author

**Grace Lucia**  
📧 Email: [grace@example.com](mailto:grace@example.com)  
🐙 GitHub: [https://github.com/grace287](https://github.com/grace287)  
💼 Portfolio: [https://grace287.github.io/grace-portfolio](https://grace287.github.io/grace-portfolio)