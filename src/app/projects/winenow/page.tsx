import Link from 'next/link';

export default function WineNowProject() {
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
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">WineNow 2.0</h1>
        <p className="text-xl text-gray-600">
          AI MBTI · Tasting Note · Canvas Export · Social Sharing
        </p>
      </div>
      
      {/* Project Image */}
      <div className="w-full h-64 bg-gradient-to-r from-red-100 to-purple-100 rounded-2xl mb-8 flex items-center justify-center">
        <span className="text-gray-500 text-lg">프로젝트 이미지</span>
      </div>
      
      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {['Next.js', 'Django/FastAPI', 'PostgreSQL', 'S3', 'AI', 'Redis', 'Docker'].map((tech, index) => (
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
            기존 시음노트는 텍스트 중심이라 기록이 단조롭고 시각적인 개성 표현이 어려움.
            또한 모바일에서 이미지를 캐쳐할 때 일부 영역이 잘려 저장되는 문제가 존재.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ 솔루션</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              html2canvas 기반 커스텀 캐쳐 기능 개발
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              와인 색감/향미/바디 감성 UI 제공
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              AI 와인 MBTI 추천
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              시음 이미지 자동 공유 템플릿 제공
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              모바일 다운로드 최적화 구조 구현
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 기술적 난관 해결</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">문제</h3>
              <p className="text-yellow-700 mb-3">
                html2canvas가 lab() 색상을 파싱 못해 오류 발생
              </p>
              <h3 className="font-semibold text-yellow-800 mb-2">해결</h3>
              <p className="text-yellow-700">
                RGB 변환 필터 작성으로 색상 호환성 확보
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">문제</h3>
              <p className="text-blue-700 mb-3">
                모바일 Safari 캐쳐 시 세로 영역 잘림
              </p>
              <h3 className="font-semibold text-blue-800 mb-2">해결</h3>
              <p className="text-blue-700">
                ref 기반 높이 강제 계산 및 await waitForImages() 적용
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 성과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-green-800">이미지 캐쳐 성공률</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-blue-800">시음노트 생성 시간 단축</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-purple-800">사용자 만족도</div>
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
            Live Demo
          </a>
        </div>
      </div>
      
    </div>
  );
}