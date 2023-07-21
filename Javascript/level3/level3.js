/* 

레시피 재료 추가하기

1. 레시피는 각각 재료와 무게를 입력하면 아래 테이블에 데이터가 추가됩니다.
2. 같은 이름의 재료는 추가할 수 없습니다.
3. 각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
4. 제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로 재료:무게로 나타납니다.

*/

const $ingredient = document.querySelector('#ingredient');
const $weight = document.querySelector('#weight');
const $list = document.querySelector('#list');
const $table = document.getElementsByTagName("table")[0];
const $tbody = document.querySelector('.tbody');

const ingredientArr = [];
let countId = ingredientArr.length;

// function addList
function addList(){
    const deleteBtn = document.querySelectorAll('.delete-button');
    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${$ingredient.value}</td>
        <td>${$weight.value}</td>
        <td><button class="delete-button">삭제</button></td>
    `;

    // delete btn
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', deleteList);
    })

    $table.appendChild(tr);
}


// add list
const $addListBtn = document.querySelector('#add-list');

$addListBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // same ingredient X
    const checkExist = ingredientArr.find((name) => name.ingredient === $ingredient.value);
    
    if(checkExist !== undefined){
        $ingredient.value = '';
        $weight.value = '';
        alert('이미 존재하는 재료입니다.');
        return
    }

    // add ListMock
    const shortId = ++countId;

    addList({
        id: shortId,
        ingredient: $ingredient.value,
        weight: $weight.value
    })

    ingredientArr.push({
        id: shortId,
        ingredient: $ingredient.value,
        weight: $weight.value
    });

    // value reset
    $ingredient.value = '';
    $weight.value = '';

    console.log(ingredientArr);
});


// delete 
function deleteList(e){
    //노드 삭제하기
  const deleteNode = e.currentTarget.parentNode.parentNode;
  $table.removeChild(deleteNode);

  // 삭제된 노드와 같은 값의 객체 orderdata에서 지우기
  const deleteId = deleteNode.getAttribute("shortId");
  const deleteData = ingredientArr.findIndex((e) => {
    return e.id == deleteId;
  });
  ingredientArr.splice(deleteData, 1);

  console.log(ingredientArr);
}


// submit
const $submitBtn = document.querySelector('#submit-button');

$submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const $ingredientList = document.querySelector('#ingredient-list');

    $ingredientList.innerHTML = '';

    ingredientArr.forEach((list) => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <li> ${list.ingredient} : ${list.weight} </li>
        `;
        
        $ingredientList.appendChild(li);
    })
})