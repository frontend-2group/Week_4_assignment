import { BANK_LIST, ACCOUNT_FORM } from './account.js';

//console.log(BANK_LIST);
//console.log(ACCOUNT_FORM);


const $bankselec = document.querySelector('#bank-selector')
const $form = document.querySelector('form')
const $accountInput = document.querySelector('#account-input')
const $accountList = document.querySelector('#account-list')

$bankselec.innerHTML = `<option>${BANK_LIST[1]}</option>
<option>${BANK_LIST[2]}</option>
<option>${BANK_LIST[3]}</option>
<option>${BANK_LIST[4]}</option>
<option>${BANK_LIST[5]}</option>
<option>${BANK_LIST[6]}</option>
<option>${BANK_LIST[7]}</option>
<option>${BANK_LIST[8]}</option>`

$form.addEventListener('submit', accountPush)

function accountPush(e){
    e.preventDefault()
    if($accountInput.value.length!==12){
        alert('계좌번호를 정확히 입력해주세요')
    }else{
    
    const nodeList = document.createElement('li')
    nodeList.innerHTML = `${$bankselec.value} : ${hyphen()}`
    console.log($bankselec.value)

    $accountList.appendChild(nodeList)
    }
}

function hyphen(){
    const number = $accountInput.value
    let hpnum = ""

    hpnum += number.substr(0, 2)
    hpnum += "-"
    hpnum += number.substr(2, 8)
    hpnum += "-"
    hpnum += number.substr(10, 2)

    // **변경

    const starNum = hpnum.split("-")
    starNum[1]="*".repeat(starNum[1].length);
    const finalNum = starNum.join('-');

    
    return finalNum
}

