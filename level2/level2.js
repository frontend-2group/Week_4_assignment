import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

// document변수--------------------------------------------------------------------------------
const $userName = document.getElementById('user-name');
const $userPhone = document.getElementById('user-phone');
const $checkNumPrint = document.getElementById('reservation-number');
const $submitBtn = document.getElementById('button')

$submitBtn.addEventListener('click', checkNumBtn);

// 고객 정보 확인-----------------------------------------------------------------------
function checkNumBtn(e){
    e.preventDefault();
    let result = 0;
    let checkNumParameter = '';

    const checkUserArr = RESERVATION_LIST.filter((el) => {return el.name === $userName.value})
    checkUserArr.forEach((el) => {if (el.phone  == $userPhone.value) {result++; checkNumParameter = el.number}})
    
    switch (result){
        case 1 :
            appendCheckNum(checkNumParameter)
        break;

        default: 
        alert('정보가 맞지 않습니다.');
        document.getElementById('user-name').value = '';
        document.getElementById('user-phone').value = '';
        break;
    }
}

// 정보가 일치하는 고객의 예약번호 추가------------------------------------------------------------------
function appendCheckNum(passValue){
    const p = document.createElement('p');
    p.innerHTML = `<p>${passValue}</p>`
    $checkNumPrint.appendChild(p)
}
