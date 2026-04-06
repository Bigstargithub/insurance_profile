'use client';

// HeroSection.tsx
import Image from 'next/image';
// 첫 화면에서 신뢰감과 핵심 메시지를 동시에 전달하는 Hero 섹션
// 프로필 이미지와 핵심 카피를 함께 배치해 방문자가 즉시 "이 사람에게 문의하면 되겠다"는 확신을 갖도록 설계

export default function HeroSection() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-navy-900 to-blue-900 flex items-center" style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* 텍스트 영역 */}
          <div className="flex-1 text-center md:text-left">
            {/* 신뢰 배지 */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-200 text-sm font-medium">개인 보험 전문 상담</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              보험, 이제<br />
              <span className="text-blue-300">혼자 고민하지</span><br />
              않아도 됩니다
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              실비부터 종신까지, 내 상황에 맞는 보험을<br className="hidden md:block" />
              한 번에 편하게 정리해드립니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToCTA}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                지금 무료 상담 신청하기
              </button>
              <button
                onClick={() => document.getElementById('insurance-range')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-lg rounded-xl transition-all duration-200 border border-white/20"
              >
                상담 범위 확인하기
              </button>
            </div>

            {/* 간단 통계 */}
            <div className="mt-10 flex gap-8 justify-center md:justify-start text-center">
              <div>
                <div className="text-2xl font-bold text-white">14+</div>
                <div className="text-blue-300 text-sm">보험 종류</div>
              </div>
              <div className="w-px bg-blue-700"></div>
              <div>
                <div className="text-2xl font-bold text-white">원스톱</div>
                <div className="text-blue-300 text-sm">상담 가능</div>
              </div>
              <div className="w-px bg-blue-700"></div>
              <div>
                <div className="text-2xl font-bold text-white">빠른</div>
                <div className="text-blue-300 text-sm">확인 연락</div>
              </div>
            </div>
          </div>

          {/* 프로필 이미지 영역 */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* 배경 장식 */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full"></div>
              {/* 프로필 이미지 */}
              <Image
                src="/profile_image.jpeg"
                alt="보험 전문 상담사 프로필 사진 - 실비, 암, 종신 등 개인 보험 상담"
                fill
                className="object-cover object-top rounded-full border-4 border-blue-400/50 shadow-2xl"
                priority
              />
              {/* 온라인 배지 */}
              <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                상담 가능
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
