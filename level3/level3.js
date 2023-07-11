/* 
레시피 재료 추가하기
*/

const ingredientObj = []
const $ingredient = document.querySelectorAll('.ingredient')[0]
const $weight = document.querySelectorAll('.weight')[0]
const $tbody = document.querySelector('.tbody')
let countId = ingredientObj.length

function rednerTable(tbody){
    const tr = document.createElement('tr')
    tr.className = `tbody${tbody.id}`
    tr.innerHTML = `
        <td>${tbody.ingredient}</td>
        <td>${tbody.weight}</td>
    `

    const deleteButton = document.createElement('button')
    deleteButton.className = 'deleteTbody'
    deleteButton.addEventListener('click', () => deleteTbody(tbody.id))
    deleteButton.innerText = '삭제'
    tr.appendChild(deleteButton)

    $tbody.appendChild(tr)
}

//추가
const $addButton = document.querySelector('.addButton')

$addButton.addEventListener('click', (e) => {
    e.preventDefault()

    const filterIngredient = ingredientObj.filter(item => item.ingredient === $ingredient.value)

    if (filterIngredient.length > 0) {
        alert("이미 존재하는 재료입니다")
        $ingredient.value = ``
        $weight.value = ``
        return
    }

    const shortId = ++countId
    rednerTable({
        id: shortId,
        ingredient: $ingredient.value,
        weight : $weight.value
    })

    ingredientObj.push({
        id: shortId,
        ingredient: $ingredient.value,
        weight : $weight.value
    })
    $ingredient.value = ``
    $weight.value = ``

    console.log(ingredientObj)
})

//삭제
function deleteTbody(tbodyId){
    const $tbodyItem = document.querySelector(`.tbody${tbodyId}`)
    const findIndex = ingredientObj.findIndex((tbody) => tbody.id === parseInt(tbodyId));

    $tbodyItem.remove()
    ingredientObj.splice(findIndex, 1);
}

//제출
const $submitButton = document.querySelector('#submit_button')
const $ingredientList = document.querySelector('#ingredient-list')

$submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    $ingredientList.innerHTML = "";
    ingredientObj.forEach(item => {
        const list = document.createElement('li')
        list.innerText = `${item.ingredient} : ${item.weight}`
        $ingredientList.appendChild(list)
    })
})