'use client';

// CTASection.tsx
// 상담 신청 폼 - Google Sheets 연동으로 신청 정보 수집
// 개인정보 안내 문구를 폼 내에 포함해 신뢰와 전환율을 동시에 확보
// 주민번호 앞 6자리는 상담 설계 참고용 생년월일 정보로 안내

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  birthdate: string;
  phone: string;
  region: string;
  privacyConsent: boolean;
}

export default function CTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthdate: '',
    phone: '',
    region: '',
    privacyConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.privacyConsent) {
      setError('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // 전화번호 형식 검사 (010-xxxx-xxxx 또는 하이픈 없는 형식)
    const phoneDigits = formData.phone.replace(/-/g, '');
    if (!/^01[016789]\d{7,8}$/.test(phoneDigits)) {
      setError('올바른 전화번호를 입력해주세요. (예: 010-1234-5678)');
      return;
    }

    // 주민번호 앞 6자리 길이 검사
    if (formData.birthdate.length !== 6) {
      setError('주민번호 앞 6자리를 정확히 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 서버 API route를 통해 Google Sheets에 저장 (성공/실패 정확히 감지)
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          birthdate: formData.birthdate,
          phone: formData.phone,
          region: formData.region,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('서버 오류');

      setIsSubmitted(true);
    } catch {
      setError('제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 제출 완료 화면
  if (isSubmitted) {
    return (
      <section id="cta-section" className="py-20 px-6 bg-blue-900" style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)' }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-white mb-4">신청이 완료되었습니다</h2>
          <p className="text-xl text-blue-200 leading-relaxed">
            상담 신청이 접수되었습니다.<br />
            확인 후 빠르게 연락드리겠습니다.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-section" className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)' }}>
      <div className="max-w-xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 상담 신청하세요
          </h2>
          <p className="text-blue-200 text-base">
            간단한 정보만 입력하시면 빠르게 연락드립니다
          </p>
        </div>

        {/* 폼 카드 */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* 성함 */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                성함 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                placeholder="홍길동"
              />
            </div>

            {/* 주민번호 앞 6자리 */}
            <div>
              <label htmlFor="birthdate" className="block text-sm font-semibold text-gray-700 mb-1.5">
                주민번호 앞 6자리 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="birthdate"
                required
                maxLength={6}
                value={formData.birthdate}
                onChange={(e) => setFormData({ ...formData, birthdate: e.target.value.replace(/\D/g, '') })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                placeholder="YYMMDD (예: 900101)"
              />
              <p className="text-xs text-gray-400 mt-1.5">
                상담 설계 참고용 생년월일 정보입니다. 상담 목적 외에는 사용되지 않습니다.
              </p>
            </div>

            {/* 전화번호 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                전화번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                placeholder="010-1234-5678"
              />
            </div>

            {/* 지역 */}
            <div>
              <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-1.5">
                지역 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="region"
                required
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
                placeholder="예: 서울 강남구"
              />
            </div>

            {/* 개인정보 동의 */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <label htmlFor="privacy" className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer flex-shrink-0"
                />
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    [필수] 개인정보 수집 및 이용에 동의합니다
                  </span>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    입력해주신 정보는 보험 상담 진행과 맞춤 안내를 위해서만 사용되며, 상담 목적 외에는 사용되지 않습니다.
                  </p>
                </div>
              </label>
            </div>

            {/* 오류 메시지 */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg disabled:cursor-not-allowed"
            >
              {isSubmitting ? '신청 중...' : '상담 신청하기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
