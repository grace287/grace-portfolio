import Link from 'next/link';

export default function GraceVocaProject() {
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
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">GraceVoca</h1>
        <p className="text-xl text-gray-600">
          Multi-language Vocabulary · SRS · TTS · AI Recommendations
        </p>
      </div>
      
      {/* Project Image */}
      <div className="w-full h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl mb-8 flex items-center justify-center">
        <span className="text-gray-500 text-lg">다국어 학습 앱 UI</span>
      </div>
      
      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {['Flutter', 'FastAPI', 'Supabase', 'AI', 'Firebase Auth', 'GPT API'].map((tech, index) => (
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
            여러 언어 단어를 학습하려 해도 서비스가 분산되어 있음.
            또한 단어 추천이나 복습 계획이 자동화되지 않아 학습 효율이 떨어짐.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ 솔루션</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              SRS 기반 반복학습
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              발음 TTS 자동 생성
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              AI 단어 추천 엔진
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              이메일/푸시 기반 Daily Study 제공
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              다국어 단어장 통합 관리
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🛠️ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">SRS 알고리즘</h3>
              <p className="text-blue-700">
                에빙하우스 망각곡선 기반 최적 복습 주기 계산
              </p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">다국어 TTS</h3>
              <p className="text-green-700">
                언어별 최적화된 발음 엔진으로 정확한 발음 학습
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">AI 추천</h3>
              <p className="text-purple-700">
                학습 패턴 분석으로 개인화된 단어 추천
              </p>
            </div>
            
            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">실시간 동기화</h3>
              <p className="text-orange-700">
                여러 기기에서 학습 진도 실시간 동기화
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 기술적 난관 해결</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">언어별 TTS 속도 차이</h3>
              <p className="text-yellow-700">
                locale 기반 처리로 각 언어에 최적화된 재생 속도 설정
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">반복학습 알고리즘 정확도</h3>
              <p className="text-blue-700">
                사용자 답변 패턴 분석으로 간격 조정 알고리즘 개선
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">모바일 API 인증 지연</h3>
              <p className="text-green-700">
                토큰 캐싱과 백그라운드 갱신으로 끊어진 인증 문제 해결
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 성과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">2.5x</div>
              <div className="text-green-800">공부 지속률 증가</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-blue-800">리뷰 모드 속도 향상</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-purple-800">사용자 유지율</div>
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
            Play Store
          </a>
        </div>
      </div>
      
    </div>
  );
}