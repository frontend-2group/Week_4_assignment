// 4번

const $text = document.querySelector('#te_input')


$text.addEventListener('keydown', (event)=>{
    let key = event.keyCode;
    if(key>=48 && key < 58){
    alert('숫자가 입력되었습니다')
    $text.value=''
    }
})

// 5번 

const $listdata = document.querySelector('#list_data')
const $sendbtn = document.querySelector('#send')
const $form = document.querySelector('#form')
const $list = document.querySelector('#list')

$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const node = document.createElement('li')
    node.setAttribute('class', 'liclass')
    node.innerHTML = `<li class="liClass">
    ${$listdata.value}
    <input type = 'button' class = 'change' value = '수정'></input>
    <input type = 'button' class = 'delete' value = '삭제'></input>
    </li>` // 자식 노드를 모두 제거한 뒤 전해준 값을 표시 기존 자식 유지 안됌
    $listdata.value= ''

    $list.appendChild(node) // 자식 추가 

    const $change = document.querySelectorAll('.change')
    const $delete = document.querySelectorAll('.delete')
    $change.forEach((e)=>{
        e.addEventListener('click', change)
    })

    $delete.forEach((d) =>{
        d.addEventListener('click', deleteBtn)
    })


    }
)

$form.addEventListener('reset' , ()=>{
    
    $list.replaceChildren()
})

// 6번 기능

// 수정
function change(e){
    const oldList = e.currentTarget.parentNode.parentNode
    const newlist = prompt('새로운 내용을 입력해주세요')
    console.log(oldList)
    const newnode = document.createElement('li')
    newnode.setAttribute('class', 'liclass')
    newnode.innerHTML = `<li class = 'liclass'>
    ${newlist}
    <input type = 'button' class = 'change' value = '수정'></input>
    <input type = 'button' class = 'delete' value = '삭제'></input>
    </li>`

    $list.replaceChild(newnode, oldList)

    const $change = document.querySelectorAll('.change')
    $change.forEach((e)=>{
        e.addEventListener('click', change)
    })

    const $delete = document.querySelectorAll('.delete')
    $delete.forEach((d) =>{
        d.addEventListener('click', deleteBtn)
    })
}


//삭제
function deleteBtn (e){
    const oldList = e.currentTarget.parentNode.parentNode
    $list.removeChild(oldList)
}

