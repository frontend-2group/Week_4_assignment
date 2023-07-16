// DOM

// 04. 
// 10자 이내의 글자만 입력
// 숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오

const $textInput = document.querySelector('#te_input');

$textInput.addEventListener('input', function(e){
    const inputValue = e.currentTarget.value;
    const regExp = /\d+/g.test(inputValue);
    //console.log(regExp);

    if(regExp){
        alert('숫자가 입력되었습니다.');
        $textInput.value = '';
    }

});




// 05.
// 아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록 하시오.
// 초기화 버튼을 누르면 list안의 모든 내용이 지워져야 함
// 06. 
// 추가된 내용을 "각 각" 수정 및 삭제 수 있게 변경하시오.


const $form = document.querySelector('#form');
const $listData = document.querySelector('#list_data');
const $list = document.querySelector('#list');



// reset
$form.addEventListener('reset', resetList);

function resetList(){
    $list.innerHTML = ``;
}


// submit
$form.addEventListener('submit', addList);

function addList(e){
    e.preventDefault();

    const li = document.createElement('li');
    
    li.innerHTML = `
    <li class="li-class">
        ${$listData.value}
        <input type="button" class="edit-btn" value="수정"></input>
        <input type="button" class="delete-btn" value="삭제"></input>
    </li>
    `;

    $list.appendChild(li);
    $listData.value = '';

    // edit innerText
    const $editBtn = document.querySelectorAll('.edit-btn');

    $editBtn.forEach((event) => {
        event.addEventListener('click', editList);
    })

    // delete list
    const $deleteBtn = document.querySelectorAll('.delete-btn');
    
    $deleteBtn.forEach((evt) => {
        evt.addEventListener('click', deleteList);
    })
}



// editing >> modify + delete

function editList(e){
    
    const established = e.currentTarget.parentNode.parentNode;   // 현재 작성된 리스트
    const modified = prompt('수정하실 내용을 입력해주세요.');  // 수정할 내용
    
    const edited = document.createElement('li');   // 변경된 리스트

    edited.innerHTML = `
    <li class="li-class">
    ${modified}
    <input type="button" class="edit-btn" value="수정"></input>
    <input type="button" class="delete-btn" value="삭제"></input>
    </li>
    `;
    
    $list.replaceChild(edited, established);
    
    // delete list
    const $deleteBtn = document.querySelectorAll('.delete-btn');
    
    $deleteBtn.forEach((evt) => {
        evt.addEventListener('click', deleteList);
    })
}

function deleteList(e){
    const deleteThis = e.currentTarget.parentNode.parentNode;
    $list.removeChild(deleteThis);
}



