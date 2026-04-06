/**
 * Google Apps Script - 보험 상담 신청 데이터를 Google Sheets에 저장
 *
 * 설정 방법:
 * 1. Google Sheets를 새로 만들기
 * 2. 상단 메뉴 > 확장 프로그램 > Apps Script 열기
 * 3. 이 코드를 붙여넣기
 * 4. 상단 메뉴 > 배포 > 새 배포 > 유형: 웹앱
 *    - 실행 계정: 나
 *    - 액세스 권한: 모든 사용자 (Google 계정 없이도 접근 가능해야 함)
 * 5. 배포 후 받은 URL을 환경변수 GOOGLE_SHEETS_URL에 입력
 *
 * ⚠️ 코드 수정 시 반드시 "새 배포"를 생성해야 변경사항이 반영됩니다
 *    (기존 배포 편집 X → 새 배포 생성 O)
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1civLZD7DjW_ziKd7cPk1Su7VoeTNTdk4KAyDR1_xM5g').getActiveSheet();

    // 헤더가 없으면 첫 행에 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['접수 시간', '성함', '주민번호 앞 6자리', '전화번호', '지역']);
    }

    let name, birthdate, phone, region;

    // JSON 방식과 form-urlencoded 방식 모두 처리
    if (e.postData && e.postData.type === 'application/json') {
      const data = JSON.parse(e.postData.contents);
      name = data.name;
      birthdate = data.birthdate;
      phone = data.phone;
      region = data.region;
    } else {
      // application/x-www-form-urlencoded
      name = e.parameter.name;
      birthdate = e.parameter.birthdate;
      phone = e.parameter.phone;
      region = e.parameter.region;
    }

    sheet.appendRow([
      new Date(),
      name || '',
      birthdate || '',
      phone || '',
      region || '',
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

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
