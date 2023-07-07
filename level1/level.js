import { BANK_LIST, ACCOUNT_FORM } from './account.js'

const $bankSelector = document.querySelector('#bank-selector')
const $accountInput = document.querySelector('#account-input')
const $submitButton = document.querySelector('button')
const $accountList = document.querySelector('#account-list')

// 문자열에서 문자제거
$accountInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
})

// 셀렉트박스에 은행 옵션 채우기
for (let [bankId, bankName] of Object.entries(BANK_LIST)) {
    const option = document.createElement('option')
    option.value = bankId
    option.innerText = bankName
    $bankSelector.appendChild(option)
}

// 제출 버튼 클릭 시 계좌 정보 추가
$submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const bankId = $bankSelector.value
    let account = $accountInput.value
    let accountFormat = ACCOUNT_FORM[bankId]

    if (account.length !== 12) {
        alert('12자리를 입력해주세요')
        return
    }

    const prefix = account.substring(0,2)
    const suffix = account.substring(account.length - 2)
    const maskMid = '*'.repeat(account.length - 4)
    account = prefix + maskMid + suffix
    for(let i = 0; i < account.length; i++){
        accountFormat = accountFormat.replace('0', account[i])
    }

    const bankName = BANK_LIST[bankId]
    const list = document.createElement('li')
    list.innerText = `${bankName} : ${accountFormat}`
    $accountList.appendChild(list)
    $accountInput.value = ''
})