import { BANK_LIST, ACCOUNT_FORM } from './account.js';

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

// DOM 변수-------------------------------------------------------------------------
const $bankSelector = document.getElementById('bank-selector');
const $form = document.getElementById('account-send-form');
const $accountList = document.getElementById('account-list')
const $accountInput = document.getElementById('account-input')

$form.addEventListener('submit', submitAccount);

// 은행 선택-------------------------------------------------------------------------
$bankSelector.innerHTML = `
    <option class='bankName'>성용은행</option>
    <option class='bankName'>사과은행</option>
    <option class='bankName'>코딩은행</option>
    <option class='bankName'>자바은행</option>
    <option class='bankName'>파이은행</option>
    <option class='bankName'>리엑은행</option>
    <option class='bankName'>자스은행</option>
    <option class='bankName'>모두은행</option>
    `;

// 제출------------------------------------------------------------------------------
function submitAccount(e){
    e.preventDefault();
    // 12자리 제한
    if ($accountInput.value.length !== 12){
        document.getElementById('account-input').value=''
        return alert('계좌 번호는 12자리입니다.')
    }
    // 리스트 추가
    const plusList = newList()
    const li = document.createElement('li')
    li.innerHTML = `<li>${$bankSelector.value}: ${plusList}</li>`
    $accountList.appendChild(li)
    document.getElementById('account-input').value=''
}

// 제출 값----------------------------------------------------------------------------
function newList(){
    // 입력 값 형식에 맞추기 ex) 123412341234입력 -> 12-34123412-34로 변환
    const bankArray = Object.values(BANK_LIST);
    const accountArray = Object.values(ACCOUNT_FORM);
    const bankArrayIndex = bankArray.findIndex(el => el === $bankSelector.value);
    const accountArrayEl = accountArray[bankArrayIndex]
    let index = 0;
    const inputValue = accountArrayEl.split('').map((el) => {
        if (el == 0) {
            const replaceEl = $accountInput.value[index];
            index++;
            return replaceEl;
        } else {
            return el;
        }
    })

    // 앞 2자리 + 뒤 2자리 + '-' 제외 *로 변환하기
    const first =  inputValue.slice(0,2);
    const third =  inputValue.slice(inputValue.length-3,inputValue.length);
    const replaceSecond =  inputValue.slice(2, inputValue.length-3);
    const second = replaceSecond.map((el) => {
        if (!isNaN(el)){
            return el = '*';
        } else {
            return el;
        }
    });

    const result = first.concat(second).concat(third);

    if (!isNaN(result[result.length-3]) && !isNaN(result[result.length-2]) && !isNaN(result[result.length-1])){
        result[result.length-3] = '*'
    }

    return result.join('')
}
