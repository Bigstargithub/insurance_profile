// ConsultantTrustSection.tsx
import Image from 'next/image';
// 프로필 이미지와 상담 스타일 소개로 "이 사람에게 맡겨도 되겠다"는 확신 형성
// 정장 프로필 사진과 신뢰 포인트 3가지를 좌우 레이아웃으로 배치

const trustPoints = [
  {
    icon: '📋',
    title: '폭넓은 상담 범위',
    description: '실비, 암, 뇌심장부터 치매, 종신, 어린이보험까지 14가지 보험을 한 곳에서 상담받을 수 있습니다',
  },
  {
    icon: '💬',
    title: '쉬운 설명 방식',
    description: '어렵고 딱딱한 보험 용어 대신, 고객 입장에서 알아듣기 쉬운 말로 차근차근 설명해드립니다',
  },
  {
    icon: '⚡',
    title: '빠른 확인 연락',
    description: '상담 신청 후 빠르게 확인 연락을 드립니다. 기다리지 않아도 됩니다',
  },
];

export default function ConsultantTrustSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* 프로필 이미지 */}
          <div className="flex-shrink-0 text-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
              <Image
                src="/profile_image.jpeg"
                alt="개인 보험 상담사 프로필 - 실비, 암, 종신보험 등 맞춤 상담 제공"
                fill
                className="object-cover object-top rounded-2xl shadow-xl border-4 border-blue-100"
              />
            </div>
          </div>

          {/* 소개 텍스트 */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              고객 입장에서 먼저 생각하는<br />
              <span className="text-blue-600">보험 상담사입니다</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              보험은 어렵고 복잡하게 느껴질 수 있습니다.<br />
              저는 상품을 권유하기보다, 지금 고객님께 <strong>진짜 필요한 것이 무엇인지</strong> 함께 살펴봅니다.<br />
              어떤 질문도 편하게 하셔도 됩니다.
            </p>

            {/* 신뢰 포인트 */}
            <div className="space-y-4">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100"
                >
                  <span className="text-2xl flex-shrink-0">{point.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
