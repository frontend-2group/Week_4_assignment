import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/

const $button = document.querySelector('button')
const $userName = document.querySelectorAll('.userName')[0]
const $userPhone = document.querySelectorAll('.userPhone')[0]
const $reservationNumber = document.querySelector('#reservation-number')

$button.addEventListener('click', (e) => {
    e.preventDefault()

    const userName = $userName.value
    const userPhone = $userPhone.value

    // 예약 고객 찾기
    const reservation = RESERVATION_LIST.find(
        (customer) => customer.name === userName && customer.phone === userPhone
    )
    //console.log(reservation)
    if (!reservation) {
        alert('일치하는 내역이 없습니다')
        $reservationNumber.innerText = '일치하는 내역이 없습니다'
    } else {
        $reservationNumber.innerText = `${reservation.number}`
    }
});