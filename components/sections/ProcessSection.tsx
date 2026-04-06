// ProcessSection.tsx
// 상담 신청 3단계 흐름을 시각화해 "이거 복잡하지 않겠다"는 안심을 먼저 만드는 섹션
// 행동 장벽을 낮추고 CTA 섹션으로 자연스럽게 이어지도록 설계

const steps = [
  {
    number: '01',
    icon: '✏️',
    title: '정보 입력',
    description: '성함, 연락처, 지역, 생년월일만 입력하세요. 1분도 걸리지 않습니다',
  },
  {
    number: '02',
    icon: '📞',
    title: '확인 연락',
    description: '입력하신 정보를 확인한 후 빠르게 연락드립니다',
  },
  {
    number: '03',
    icon: '🎯',
    title: '맞춤 상담',
    description: '내 상황에 맞는 보험을 편하게 함께 정리해드립니다',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            상담 신청, 3단계면 충분합니다
          </h2>
          <p className="text-lg text-gray-500">
            복잡한 절차 없이 간단하게 시작할 수 있습니다
          </p>
        </div>

        {/* 스텝 카드 */}
        <div className="relative">
          {/* 연결선 (데스크톱) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-blue-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                {/* 단계 번호 원형 */}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                  {step.icon}
                </div>
                {/* 단계 라벨 */}
                <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">
                  STEP {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
