/**
 * Google Apps Script - 보험 상담 신청 데이터를 Google Sheets에 저장
 *
 * 설정 방법:
 * 1. Google Sheets를 새로 만들기
 * 2. 상단 메뉴 > 확장 프로그램 > Apps Script 열기
 * 3. 이 코드를 붙여넣기
 * 4. 상단 메뉴 > 배포 > 새 배포 > 유형: 웹앱
 *    - 실행 계정: 나
 *    - 액세스 권한: 모든 사용자
 * 5. 배포 후 받은 URL을 .env.local의 NEXT_PUBLIC_GOOGLE_SHEETS_URL에 입력
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // 헤더가 없으면 첫 행에 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['접수 시간', '성함', '주민번호 앞 6자리', '전화번호', '지역']);
    }

    // 데이터 저장
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.birthdate || '',
      data.phone || '',
      data.region || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 연결 테스트용 GET 핸들러
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: '보험 상담 신청 수신 서버가 작동 중입니다' }))
    .setMimeType(ContentService.MimeType.JSON);
}
