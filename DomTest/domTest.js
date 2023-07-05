// 4번 JS--------------------------------------------------------------------------
/*
isNaN()메서드 : 인수로 전달된 값이 숫자라면 false, 숫자가 아니라면 true를 반환.
*/
const $onlyStr = document.querySelector('#te_input');
$onlyStr.addEventListener('input', ()=>{
    const inputValue = $onlyStr.value;
    if (!isNaN(inputValue)) {$onlyStr.value = ''; alert('숫자가 입력되었습니다.');}
});

// 5번 JS--------------------------------------------------------------------------
/*
e.preventDefault()메서드 : submit에 새로고침 기능을 제거함.
*/
const $listInput = document.querySelector("#list_data");
const $form = document.querySelector('#form');
const $list = document.querySelector('#list')

$form.addEventListener('submit', formInput);
$form.addEventListener('reset', formReset);

// 작성
function formInput(e){
    e.preventDefault();
    const newLi = document.createElement('li')
    newLi.innerHTML = `
    <li class="liClass">
        ${$listInput.value}
        <input type = 'button' class = 'change' value = '수정'></input>
        <input type = 'button' class = 'delete' value = '삭제'></input>
    </li>
    `
    $list.appendChild(newLi)
    document.querySelector('#list_data').value=''

    // 6번 코드
    const $changeBtn = document.querySelectorAll('.change')
    const $deleteBtn = document.querySelectorAll('.delete')
    $changeBtn.forEach((c) => {
        c.addEventListener('click', listChange)
    })
    const $delBtn = document.querySelectorAll('.del-btn')
    $deleteBtn.forEach((d) => {
        d.addEventListener('click', listDelete)
    })
}
// 초기화
function formReset(){
    $list.innerHTML = ''
}

// 6번 JS--------------------------------------------------------------------------

// 수정
function listChange(e){
    // 기존 리스트
    const oldList = e.currentTarget.parentNode.parentNode

    // 새로운 리스트
    const newList = document.createElement('li')
    const changeInput = prompt('수정 내용을 적어주세요.')
    newList.innerHTML = `
    <li class="liClass">
        ${changeInput}
        <input type = 'button' class = 'change' value = '수정'></input>
        <input type = 'button' class = 'delete' value = '삭제'></input>
    </li>
    `
    $list.replaceChild(newList, oldList)

    // 수정, 삭제
    const $changeBtn = document.querySelectorAll('.change')
    const $deleteBtn = document.querySelectorAll('.delete')
    $changeBtn.forEach((c) => {
        c.addEventListener('click', listChange)
    })
    const $delBtn = document.querySelectorAll('.del-btn')
    $deleteBtn.forEach((d) => {
        d.addEventListener('click', listDelete)
    })
}

// 삭제
function listDelete(e){
    const delBtnParent = e.currentTarget.parentNode.parentNode
    $list.removeChild(delBtnParent)
}
