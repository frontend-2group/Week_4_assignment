
const $ingredientForm = document.getElementById('ingredient-form');
const $ingredient = document.getElementsByName('ingredient');
const $weight = document.getElementsByName('weight');
const $tr = document.querySelector('.thead');
const $submitBtn = document.getElementById('submit_button');
const $ul = document.getElementById('ingredient-list');

$ingredientForm.addEventListener('submit', appendIngredient);
$submitBtn.addEventListener('click', submitList);

// 추가
function appendIngredient(e){
    e.preventDefault();

    // 추가 노드 생성
    const table = $tr.parentNode
    const appendTr = document.createElement('tr')
    appendTr.innerHTML = `
    <tr class="thead">
        <th class='ingredientValue'>${$ingredient[0].value}</th>
        <th class='weightValue'>${$weight[0].value}</th>
        <th><button class='delBtn'>삭제</button></th>
    </tr>
    `
    document.querySelector('input[name="ingredient"]').value = '';
    document.querySelector('input[name="weight"]').value = '';
    
    // 중복 제거
    let result = 0;
    const $ingredientValue = document.querySelectorAll('.ingredientValue')
    $ingredientValue.forEach(el => {
        if (el.textContent == $ingredient[0].value){
            result++
        }
    })
    switch (result){
        case 0: table.appendChild(appendTr)
        break;
        default : alert('이미 존재하는 재료입니다')
        break;
    }

    // 삭제
    const $delBtn = document.querySelectorAll('.delBtn')
    $delBtn.forEach(del => {
        del.addEventListener('click', deleteRecipe);
    })
}

// 삭제
function deleteRecipe(e){
    const $delRecipe = e.currentTarget.parentNode.parentNode
    const $delBtnParentNode = e.currentTarget.parentNode.parentNode.parentNode
    $delBtnParentNode.removeChild($delRecipe)
}

// 제출
function submitList(){
    const $ingredientValue = document.querySelectorAll('.ingredientValue')
    const $weightValue = document.querySelectorAll('.weightValue')

    for (let i=0; i<$ingredientValue.length; i++){
        const li = document.createElement('li');
        li.innerHTML = `${$ingredientValue[i].textContent}:${$weightValue[i].textContent}`
        $ul.appendChild(li)
    }
}