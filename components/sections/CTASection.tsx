'use client';

export default function CTASection() {
  return (
    <section id="cta-section" className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)' }}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          지금 바로 상담 신청하세요
        </h2>
        <p className="text-blue-200 text-base mb-10">
          전화 한 통으로 편하게 상담받을 수 있습니다
        </p>

        <a
          href="/api/call"
          className="inline-flex items-center justify-center gap-3 w-full max-w-sm mx-auto px-8 py-5 bg-white text-blue-900 font-bold text-xl rounded-2xl shadow-2xl hover:bg-blue-50 active:scale-95 transition-all duration-200"
        >
          <span className="text-2xl">📞</span>
          지금 바로 전화하기
        </a>

        <p className="text-blue-300 text-sm mt-6">
          버튼을 누르면 바로 전화 연결됩니다
        </p>
      </div>
    </section>
  );
}
