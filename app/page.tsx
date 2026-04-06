// app/page.tsx
// 랜딩페이지 메인 - 6개 섹션을 순서대로 조합
// 방문자가 "이 사람에게 문의하면 되겠다"는 확신을 빠르게 얻고 상담 신청으로 이어지도록 설계

import HeroSection from '@/components/sections/HeroSection';
import InsuranceRangeSection from '@/components/sections/InsuranceRangeSection';
import WhyConsultSection from '@/components/sections/WhyConsultSection';
import ConsultantTrustSection from '@/components/sections/ConsultantTrustSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      {/* 1. Hero: 첫인상 + 신뢰 형성 */}
      <HeroSection />

      {/* 2. 보험 상담 범위: 14종 카테고리화 */}
      <InsuranceRangeSection />

      {/* 3. 상담이 필요한 이유: 고객 공감 */}
      <WhyConsultSection />

      {/* 4. 상담사 신뢰: 프로필 + 강점 */}
      <ConsultantTrustSection />

      {/* 5. 문의 절차: 3단계 안심 */}
      <ProcessSection />

      {/* 6. CTA: 상담 신청 폼 */}
      <CTASection />
    </main>
  );
}
