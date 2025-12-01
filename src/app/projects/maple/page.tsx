import Link from 'next/link';

export default function MapleProject() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          뒤로 가기
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Maple</h1>
        <p className="text-xl text-gray-600">
          Flutter Mobile App · Schedule API · Widgets · Push Notifications
        </p>
      </div>
      
      {/* Project Image */}
      <div className="w-full h-64 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl mb-8 flex items-center justify-center">
        <span className="text-gray-500 text-lg">모바일 앱 스크린샷</span>
      </div>
      
      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {['Flutter 3', 'Supabase', 'Firebase FCM', 'Riverpod', 'Clean Architecture'].map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Problem & Solution */}
      <div className="space-y-8">
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 문제 정의</h2>
          <p className="text-gray-600 leading-relaxed">
            아이돌 팬들은 다양한 사이트에서 스케줄 정보를 찾아야 해서 불편함.
            개별 멤버의 일정을 한 곳에서 보기 어려우며, 중요한 일정을 놓칠 위험이 있음.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ 솔루션</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              그룹/멤버 선택 → 개인화된 일정 자동 생성
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              정제된 캐린더 UI
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              위젯 & 알림 기능 제공
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              iOS/Android 동시 지원
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              다크모드 UI
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🛠️ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">클린 아키텍처</h3>
              <p className="text-blue-700">
                비즈니스 로직과 UI 분리로 유지보수성 향상
              </p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">실시간 데이터베이스</h3>
              <p className="text-green-700">
                Supabase로 실시간 데이터 동기화
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">FCM 푸시</h3>
              <p className="text-purple-700">
                중요한 일정에 대한 알림 자동 발송
              </p>
            </div>
            
            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">위젯 지원</h3>
              <p className="text-orange-700">
                앱 실행 없이 빠른 일정 확인 가능
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 기술적 난관 해결</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">불규칙한 일정 포맷</h3>
              <p className="text-yellow-700">
                다양한 소스의 일정 데이터를 파싱 자동화로 통일된 형식으로 변환
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">API 호출 최소화</h3>
              <p className="text-blue-700">
                로칼 캐싱과 스마트 데이터 동기화로 네트워크 비용 절약
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 성과</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">iOS & Android</div>
              <div className="text-green-800">동시 운영 성공</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-blue-800">API 응답속도 개선</div>
            </div>
          </div>
        </section>
        
      </div>
      
      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
        <Link href="/" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          다른 프로젝트 보기
        </Link>
        <div className="space-x-4">
          <a href="#" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            GitHub
          </a>
          <a href="#" className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white">
            App Store
          </a>
        </div>
      </div>
      
    </div>
  );
}