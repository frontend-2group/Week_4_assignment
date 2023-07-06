import { BANK_LIST, ACCOUNT_FORM } from './account.js';

// console.log(BANK_LIST);
// console.log(ACCOUNT_FORM);



// 01. 은행선택(bank-selector) -> BANK_LIST

const $bankSelector = document.querySelector('#bank-selector');

$bankSelector.innerHTML = `
<option value="0" class='bankName'> -- 은행을 선택해주세요 -- </option>
<option value="1" class='bankName'> 성용은행 </option>
<option value="2" class='bankName'> 사과은행 </option>
<option value="3" class='bankName'> 코딩은행 </option>
<option value="4" class='bankName'> 자바은행 </option>
<option value="5" class='bankName'> 파이은행 </option>
<option value="6" class='bankName'> 리엑은행 </option>
<option value="7" class='bankName'> 자스은행 </option>
<option value="8" class='bankName'> 모두은행 </option>
`;



// 02. 선택된 은행에 맞는 형식(ACCOUNT_FORM)으로 계좌번호 출력

function secureAccount($accountNum) {
    const $accountInput = document.querySelector('#account-input');
    const $accountList = document.querySelector('#account-list');

    // 입력 받은 숫자가 12자리인지 확인
    if ($accountInput.value.length !== 12){
        $accountInput.value = '';
        return alert('계좌 번호는 모두 12자리 입니다.');
    }

    // 12자리가 맞다면 account-list에 등록
    const currentList = addAccount();
    const li = document.createElement('li');

    li.innerHTML = `
        <li> ${$bankSelector.value}:  </li>
    `

    $accountList.appendChild(li);
    $accountList.value = '';

}



// 03. 제출 버튼 클릭 -> #account-list에 계좌 정보 등록
function addAccount(){
    const bankList = Object.values(BANK_LIST);
    const accountForm = Object.values(ACCOUNT_FORM);
    
    // switch? 
    
}
