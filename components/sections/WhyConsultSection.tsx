// WhyConsultSection.tsx
// 고객이 겪는 혼란과 불안에 공감하는 카드형 섹션
// "나 얘기구나"를 느끼게 해 상담 신청 동기를 자연스럽게 높이도록 설계

interface PainCard {
  icon: string;
  problem: string;
  solution: string;
}

const painCards: PainCard[] = [
  {
    icon: '🤔',
    problem: '"어떤 보험에 들어야 하는지 모르겠어요"',
    solution: '내 상황에 맞는 보험을 먼저 찾아드립니다',
  },
  {
    icon: '😰',
    problem: '"지금 가입한 보험이 충분한지 모르겠어요"',
    solution: '기존 보장을 같이 꼼꼼히 점검해드립니다',
  },
  {
    icon: '📚',
    problem: '"보험 용어가 너무 어렵고 복잡해요"',
    solution: '어려운 말 없이 쉽게 풀어서 설명해드립니다',
  },
  {
    icon: '💭',
    problem: '"어디에 문의해야 할지 망설여져요"',
    solution: '여기서 편하게 시작하면 됩니다',
  },
];

export default function WhyConsultSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            이런 고민을 하고 계신가요?
          </h2>
          <p className="text-lg text-gray-500">
            보험이 어렵게 느껴지는 건 당연합니다. 함께 해결해드립니다.
          </p>
        </div>

        {/* 공감 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painCards.map((card) => (
            <div
              key={card.problem}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 mt-1">{card.icon}</span>
                <div>
                  {/* 고객 고민 */}
                  <p className="text-gray-700 font-medium mb-3 leading-relaxed">
                    {card.problem}
                  </p>
                  {/* 구분선 + 해결책 */}
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-0.5 bg-blue-400 flex-shrink-0"></div>
                    <p className="text-blue-700 font-semibold text-sm">
                      {card.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 공감 문구 */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            어떤 질문도 괜찮습니다. <span className="font-semibold text-gray-900">처음 문의하는 분도 편하게 연락주세요.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
