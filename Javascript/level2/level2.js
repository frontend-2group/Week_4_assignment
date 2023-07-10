import { RESERVATION_LIST } from './reservation .js';
// console.log(RESERVATION_LIST);

/* 

예약 고객확인하기

1. 예약 고객 리스트는 js로 이미 import 되어 console.log에 찍어두었습니다.
2. 고객 리스트에 없는 고객정보의 경우 일치하는 항목이 없습니다라는 console.log와 함께 텍스트가 나타납니다.
3. 이름과 핸드폰 번호 모두 일치하지 않으면 고객은 검색할 수 없습니다.
4. 고객데이터가 있으면 고객번호가 텍스트로 나타납니다.

*/

const reservationList = Object.values(RESERVATION_LIST);

const $userName = document.querySelector('#user-name');
const $userPhone = document.querySelector('#user-phone');
const $reservationNumber = document.querySelector('#reservation-number');
const $confirmBtn = document.querySelector('#confirm-button');

// 고객 리스트에 없는 고객정보의 경우:  "일치하는 항목이 없습니다" -> console.log & alert
$confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let findName = reservationList.filter((person) => person.name === $userName.value );
    let findPhone = findName.find((person) => person.phone === $userPhone.value);
    let reservationNumber = reservationList.find((person) => person.name === $userName.value && person.phone === $userPhone.value);
    

    if(findName = ''){
        alert(`${$userName.value}로 예약된 내역이 없습니다. 다시 한 번 확인해주세요.`);
        $userName.value = '';
    } else if(findName && findPhone == undefined){
        alert(`입력하신 번호로 예약된 내역이 없습니다. 다시 한 번 확인해주세요.`);
        $userPhone.value = '';
    } else {
        $reservationNumber.innerText = `${reservationNumber.number}`
    }
})