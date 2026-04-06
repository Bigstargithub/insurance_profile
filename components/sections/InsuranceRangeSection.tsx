// InsuranceRangeSection.tsx
// 상담 가능한 보험 14종을 4개 카테고리 배지/카드로 정리해 "이 사람에게 다 물어볼 수 있다"는 안심 전달
// 복잡해 보이지 않도록 카테고리화하고 아이콘으로 시각화

interface InsuranceCategory {
  icon: string;
  title: string;
  description: string;
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

const categories: InsuranceCategory[] = [
  {
    icon: '🏥',
    title: '건강·보장',
    description: '내 몸을 지키는 핵심 보장',
    items: ['실비보험', '암보험', '뇌심장보험', '수술비보험'],
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: '🏠',
    title: '생활·재산',
    description: '일상의 위험에 대비하는 보장',
    items: ['화재보험', '배상책임보험', '운전자보험'],
    color: 'text-orange-700',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: '👨‍👩‍👧',
    title: '가족·미래',
    description: '가족을 위한 든든한 보장',
    items: ['어린이보험', '치아보험', '간병인보험'],
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: '🌿',
    title: '노후·사망',
    description: '미래를 미리 준비하는 보장',
    items: ['장기요양보험', '치매보험', '종신보험', '사망보험'],
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
];

export default function InsuranceRangeSection() {
  return (
    <section id="insurance-range" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            어떤 보험이든 한 번에 상담받으세요
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            아래 항목 중 하나라도 해당된다면, 지금이 점검할 때입니다
          </p>
        </div>

        {/* 카테고리 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl border-2 ${cat.bgColor} ${cat.borderColor} p-6 transition-transform hover:-translate-y-1 hover:shadow-md`}
            >
              {/* 아이콘과 제목 */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className={`text-lg font-bold ${cat.color}`}>{cat.title}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">{cat.description}</p>

              {/* 보험 종류 배지 */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${cat.color} bg-white border ${cat.borderColor}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 강조 문구 */}
        <div className="mt-12 text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-blue-800 font-medium text-lg">
            한 사람에게 문의해도 여러 보험 니즈를 함께 정리받을 수 있는 <span className="font-bold">원스톱 상담</span>
          </p>
        </div>
      </div>
    </section>
  );
}
