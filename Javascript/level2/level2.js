import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

https://lyrical-brain-e0f.notion.site/javascript-test-fad728366afe4097b9e096a98c68246b
*/

const $userName = document.getElementsByName('user-name')[0]
const $userPh = document.getElementsByName('user-phone')[0]

const $form = document.querySelector('form')

$form.addEventListener('submit', listCheck)


function listCheck(e){

    e.preventDefault()


    const filterId = RESERVATION_LIST.filter((list)=>list.name === $userName.value)

    const filterNum = filterId.find(list => list.phone === $userPh.value)

    console.log($userName.value)
    console.log(filterId)
    console.log(filterNum)

    if(filterId.length===0){
        alert("존재하지않은 고객명입니다 다시 입력해주세요")

        $userName.value= ""
        $userPh.value = ""
    }else if(filterId.length >= 1 && filterNum===undefined){
        alert("존재하지않는 핸드폰번호입니다. 다시입력해주세요")
        $userPh.value =""
    }else{
        
        const userNumber = filterNum.number
        console.log(userNumber)
        CreateNumber(userNumber)
    }
    
}


function CreateNumber(Number){
    const $reNum = document.querySelector('#reservation-number') // p
    $reNum.removeChild($reNum.childNodes[0])
    const child = document.createElement('p')
    child.innerHTML = `${Number}`
    $reNum.appendChild(child)
}