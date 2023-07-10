/* 
레시피 재료 추가하기
*/

const $form = document.querySelector('form')
const $ingredient = document.getElementsByName('ingredient')[0]
const $weight = document.getElementsByName('weight')[0]
const $table = document.querySelector('table')
const $submitButton = document.querySelector('#submit_button')
const $ingredientList = document.querySelector('#ingredient-list')


$form.addEventListener('submit', addition)


// 추가함수
const ingList = [];
const weightList =[];

function addition(e){

    e.preventDefault()

    // 이미 있는 재료일 때 
    ingList.push($ingredient.value)
    weightList.push($weight.value)
    const set = new Set(ingList)
    console.log(ingList)
    console.log(set)
    
    

    const tr = document.createElement('tr')

    tr.innerHTML = `<th>${$ingredient.value}</th>
    <th>${$weight.value}</th>
    `
    const th = document.createElement('th')
    const button = document.createElement('button')
    button.innerHTML = `삭제`
    button.addEventListener('click', deleteTr)

    th.appendChild(button)

    tr.appendChild(th)

    if(ingList.length!==set.size){
        alert("이미 있는 재료입니다")
        ingList.pop()
        weightList.pop()
    }else{
        $table.appendChild(tr)
    }
    
}

function deleteTr(e) {
    const loc = e.currentTarget.parentNode.parentNode
    $table.removeChild(loc)


    // ingList에서 지워진 재료명의 값을 지워준다
    const target = e.currentTarget.parentNode.parentNode.firstChild.textContent
    //console.log(target)
    for(let i=0; i<ingList.length; i++){
        if(ingList[i]===target){
            ingList.splice(i, 1)
            weightList.splice(i, 1)
        }
    }
}

// 제출 버튼
$submitButton.addEventListener('click', submitButton)


function submitButton(){
    console.log("앜")
    $ingredientList.replaceChildren()

    for(let i=0; i < ingList.length; i++){
        const li = document.createElement('li')
        li.innerHTML = `${ingList[i]} : ${weightList[i]}`
        $ingredientList.appendChild(li)
    }

}