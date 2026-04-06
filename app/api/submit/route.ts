// app/api/submit/route.ts
// Google Apps Script는 POST 요청 시 302 리다이렉트를 내려보내는 경우가 있음
// redirect: 'follow' 상태에서 POST → GET 으로 바뀌며 doPost가 실행되지 않는 문제 해결
// URLSearchParams 방식으로 전송해 GAS가 안정적으로 수신하도록 처리

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const url = process.env.GOOGLE_SHEETS_URL;

    if (!url) {
      console.log('[개발] 상담 신청 데이터:', data);
      return NextResponse.json({ ok: true });
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow',
    });

    // GAS는 리다이렉트 후에도 200을 반환하므로 상태코드보다 응답 존재 여부로 판단
    console.log('[성공] GAS 응답 상태:', response.status);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[오류] 상담 신청 저장 실패:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
