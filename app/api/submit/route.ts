// app/api/submit/route.ts
// 서버 사이드 프록시: 클라이언트 → 이 API → Google Apps Script
// no-cors 대신 서버에서 직접 호출해 성공/실패 여부를 정확히 감지

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // 서버 전용 환경변수 (브라우저에 노출되지 않음)
    const url = process.env.GOOGLE_SHEETS_URL;

    if (!url) {
      // 개발 환경: URL 미설정 시 데이터만 로깅 후 성공 처리
      console.log('[개발] 상담 신청 데이터:', data);
      return NextResponse.json({ ok: true });
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets 응답 오류: ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[오류] 상담 신청 저장 실패:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
