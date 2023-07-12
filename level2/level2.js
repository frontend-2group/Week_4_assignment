import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 예약 고객 리스트는 js로 이미 import 되어 console.log에 찍어두었습니다.
2. 고객 리스트에 없는 고객정보의 경우 일치하는 항목이 없습니다라는 console.log와 함께 텍스트가 나타납니다.
3. 이름과 핸드폰 번호 모두 일치하지 않으면 고객은 검색할 수 없습니다.
4. 고객데이터가 있으면 고객번호가 텍스트로 나타납니다
*/

//예외처리
//1. 이름, 연락처 기입 안됐으면 입력해달라고 알람
const $form = document.getElementsByTagName("form")[0];
const $name = document.querySelectorAll(".username")[0];
const $phone = document.querySelectorAll(".userphone")[0];
const $btn = document.getElementById("#btn");
const $p = document.querySelector("#reservation-number");

console.log($form);
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  let name = e.target.elements.username.value;
  let phone = e.target.elements.userphone.value;
  //   console.log(name);
  //   console.log(phon);

  if (!name.trim() || !phone.trim()) {
    return alert("이름과 연락처를 확인해주세요");
  }

  // });
  const listfilter = RESERVATION_LIST.find(
    (user) => user.name === $name.value && user.phone === $phone.value
  );
  console.log(listfilter);

  if (!listfilter) {
    alert("없다");
    $p.innerHTML = `없는번호`;
  } else {
    $p.innerHTML = `${listfilter.number}`;
  }
});

//2. 이름, 연락처 서로 다르면 알람

// 이름, 연락처 일치 시 예약번호 보여주기
//1. html - 예약 js 이름, 연락처 연동
//2. 이름 연락처 같은지 확인
//3. 예약번호확인누르면  reservation-number 출력
