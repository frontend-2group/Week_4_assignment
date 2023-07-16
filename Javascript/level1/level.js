import { BANK_LIST, ACCOUNT_FORM } from './account.js';

// console.log(BANK_LIST);
// console.log(ACCOUNT_FORM);


// variable collection
const bankList = Object.values(BANK_LIST);
const accountForm = Object.values(ACCOUNT_FORM);

const $bankSelector = document.querySelector('#bank-selector');
const $accountInput = document.querySelector('#account-input');
const $submitBtn = document.querySelector('.submit-button');
const $accountList = document.querySelector('#account-list');


// 01. 은행선택(bank-selector) -> BANK_LIST
for(let [bankIdx, bankName] of Object.entries(BANK_LIST)){
    const option = document.createElement('option'); 
    option.value = bankIdx;
    option.innerText = bankName;
    $bankSelector.appendChild(option);

    // 은행 미선택 시 alert
}


// 02-1. $accountInput에 숫자만 입력되도록 제한
$accountInput.addEventListener('input', (e) => {
    let inputValue = e.currentTarget.value;
    const regExp = /\d+$/g.test(inputValue);

    if(!regExp){
        inputValue.replace(/\D/gi, '');
        inputValue.replace(/^A-Za-z0-9/gi, '');
        alert('숫자만 입력해주세요.');
        inputValue = '';
        // 문자나 특수문자 입력 시 삭제되지 않음, replace가 제대로 동작하지 않는 건가?
    }
});


// 02-2. 선택된 은행에 맞는 형식(ACCOUNT_FORM)으로 계좌번호 출력
$submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let bankId = $bankSelector.value;
    let accountFormat = ACCOUNT_FORM[bankId];
    let accountNumber = $accountInput.value;
    
    // 입력 받은 숫자가 12자리인지 확인
    if (accountNumber.length < 12){
        alert('계좌번호는 모두 12자리 입니다.');
        // accountNumber = '';
        return
    }
    
    for(let [bankId, secureFormat] of Object.entries(ACCOUNT_FORM)){        
        // 가운데 번호 *로 변경하기
        function replaceToAsterisk() {
            let parts = secureFormat.split("-");

            if (parts.length > 2) {
              for (let i = 1; i < parts.length - 1; i++) {
                parts[i] = "*".repeat(parts[i].length);
              }
            }
            return parts.join("-");
        }
        let securedNum =  replaceToAsterisk(accountNumber);  
        
        // 0으로 되어 있는 숫자 > 입력받은 값으로 대체
        for(let i = 0; i < accountNumber.length; i++){
            securedNum = securedNum.replace('0', accountNumber[i])
        }
        
        // 03. 제출 버튼 클릭 -> $accountList에 계좌 정보 등록
        const bankName = BANK_LIST[bankId];
        const li = document.createElement('li');
        
        li.innerHTML = ` <li> ${bankName}: ${securedNum} </li> `;
        $accountList.appendChild(li);
        $accountInput.value = '';
    }
});