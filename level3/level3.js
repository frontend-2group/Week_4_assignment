/* 
레시피 재료 추가하기
*/

//LV3. 레시피 추가 및 삭제 하기

// 1. 레시피는 각각 재료와 무게를 입력하면 아래 테이블에
//    데이터가 추가됩니다.
// 2. 같은 이름의 재료는 추가할 수 없습니다.
// 3. 각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
// 4. 제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로
//    재료:무게로 나타납니다.

//해야할거
//1. 레시피 넣을 mock데이터 만들기
//2. 데이터 추가하면 맞는 항목 밑에 쭉 나열되게하기
//(table 안에 새로운 tr,th 만들기 관리 부분을 삭제 버튼으로 바꿔서 만들기)
// 2-1. 재료명, 용량 누르면 tr 밑으로 데이터 들어가게 하기

//-- 일단 여기까지 ㄱㄱ

const $addBtn = document.getElementsByTagName("button")[0];
const $ingredient = document.getElementsByTagName("input")[0];
const $weight = document.getElementsByTagName("input")[1];
const $thead = document.querySelector(".thead");
const $table = document.getElementsByTagName("table")[0];
const $deleteBtn = document.querySelector(".deleteBtn");
const $submitbutton = document.querySelector("#submit_button");
const $ingredientList = document.querySelector("#ingredient-list");
let orderdata = [
  // {
  // id: "",
  // ingredient: "재료명",
  // weight: "",
  // },
];

function renderboard(e) {
  const tr = document.createElement("tr");
  tr.className = "thead";
  tr.setAttribute("data-role", e.id);
  tr.innerHTML = `
    <td>${e.ingredient}</td>
    <td>${e.weight}G</td>
    `;
  $table.appendChild(tr);

  const td = document.createElement("td");
  const button = document.createElement("button");
  button.className = "deleteBtn";
  button.innerText = "삭제";
  td.append(button);
  tr.append(td);

  button.addEventListener("click", deleteClick);

  // $deleteBtn.addEventListener("click", deleteclick);
}

orderdata.forEach((data) => {
  renderboard({
    id: data.id,
    ingredient: data.ingredient,
    weight: data.weight,
  });
});

// 추가

let shordId = orderdata.length;

$addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //중복 품목 제거
  const result = orderdata.filter((i) => {
    return i.ingredient == $ingredient.value;
  });
  if (!$ingredient.value.trim() && !$weight.value.trim()) {
    return alert("빈 칸을 채워주세요");
  }

  //--------------
  else if (!$ingredient.value.trim()) {
    return alert("재료를 입력해주세요요");
    // 재료의 빈칸의 공백을 제거했을 때 값이 있는게 = true
    // 재료의 빈칸의 공백을 제거했을 때 값이 없는게 = false 그래서 앞에 !를 붙임
  } else if (!$weight.value.trim()) {
    return alert("용량을 입력해주세요");
  }
  if (result.length > 0) {
    return alert("이미있어");
  }
  const idNumber = ++shordId;
  renderboard({
    id: idNumber,
    ingredient: $ingredient.value,
    weight: $weight.value,
  });
  orderdata.push({
    id: idNumber,
    ingredient: $ingredient.value,
    weight: $weight.value,
  });

  $ingredient.value = "";
  $weight.value = "";
});

// 삭제함수

function deleteClick(e) {
  //노드 삭제하기
  const deleteNode = e.currentTarget.parentNode.parentNode;
  $table.removeChild(deleteNode);

  // 삭제된 노드와 같은 값의 객체 orderdata에서 지우기
  const deleteId = deleteNode.getAttribute("data-role");
  const deleteOrderData = orderdata.findIndex((e) => {
    return e.id == deleteId;
  });
  orderdata.splice(deleteOrderData, 1);

  console.log(orderdata);
}

//제출
function submitButtonClick(e) {
  $ingredientList.innerHTML = "";
  orderdata.forEach((post) => {
    const $li = document.createElement("li");
    $li.innerText = `${post.ingredient} : ${post.weight}`;
    $ingredientList.append($li);
    // $ingredientList.removeChild($li);
  });
}

$submitbutton.addEventListener("click", submitButtonClick);

// console.log(orderdata);
