import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 

LV2. 예약번호 확인 하기

예약 고객 리스트는 js로 이미 import 되어 console.log에 찍어두었습니다.
고객 리스트에 없는 고객정보의 경우 일치하는 항목이 없습니다라는 console.log와 함께 텍스트가 나타납니다.
이름과 핸드폰 번호 모두 일치하지 않으면 고객은 검색할 수 없습니다.
고객데이터가 있으면 고객번호가 텍스트로 나타납니다

*/

//예외처리
//1. 이름, 연락처 입력 없으면 입력해달라고 알람
//2. 이름, 연락처 없으면 틀리고 알람

// 이름 연락처 같으면 예약번호 뜨게하기
//1. HTML - 예약.js 이름, 연락처 연동
//2. 이름 연락처 같은지 확인
//3. 예약번호 누르면 reservation-number에 출력

//필요한 태그 불러오기

const $form = document.getElementsByTagName("form")[0];
const $reservationNumber = document.querySelector("#reservation-number");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  //input 값 불러오기
  let name = e.target.elements.username.value;
  let phone = e.target.elements.userphone.value;

  //빈칸 알림
  if (!name.trim() || !phone.trim()) {
    return alert("빈 칸을 채워주세요");
  }

  const findReservation = RESERVATION_LIST.filter(
    (list) => list.name == name && list.phone == phone
  );

  const result = findReservation.map((list) => list.number);

  if (findReservation == false) {
    return alert("예약없음");
  }

  $reservationNumber.innerHTML = `
    <p>${result}</p>`;
});
