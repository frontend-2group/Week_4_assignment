import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1.예약 고객 리스트는 js로 이미 import 되어 console.log에 찍어두었습니다.
2.고객 리스트에 없는 고객정보의 경우 일치하는 항목이 없습니다라는 console.log와 함께 텍스트가 나타납니다.
3.이름과 핸드폰 번호 모두 일치하지 않으면 고객은 검색할 수 없습니다.
4.고객데이터가 있으면 고객번호가 텍스트로 나타납니다
*/

//1. HTML - 예약.js 이름, 연락처 연동

//------예외처리---------
//1. 이름, 연락처 입력 없으면 입력해달라고 알람
//2. 이름, 연락처 없으면 틀리고 알람
//--------------------
//2. 이름 연락처 같은지 확인
//3. 예약번호 누르면 reservation-number에 출력

const $form = document.getElementsByTagName("form")[0];
const $userName = document.getElementsByName("user-name")[0];
const $userPhone = document.getElementsByName("user-phone")[0];
const $Num = document.querySelector("#reservation-number");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!$userName.value.trim() || !$userPhone.value.trim()) {
        return alert("이름이나 번호를 입력하세요");
    }

    let name = $userName.value;
    let phone = $userPhone.value;

    const reservationTrue = RESERVATION_LIST.filter(
        (list) => list.name == name && list.phone == phone
    );

    const printNum = reservationTrue.map((list) => list.number);

    if (printNum == false) {
        return alert("예약 내역이 없습니다");
    }

    $Num.innerText = printNum;
});
