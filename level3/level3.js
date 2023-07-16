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

  // tr.className = "data-role";
  // <td><button class="deleteBtn">삭제</button></td>

  const td = document.createElement("td");
  const button = document.createElement("button");
  button.className = "deleteBtn";
  button.innerText = "삭제";
  td.appendChild(button);
  tr.appendChild(td);

  button.addEventListener("click", deleteclick);

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
  if (!$ingredient.value.trim() && !$weight.value.trim()) {
    return alert("빈 칸을 채워주세요");
  }
  if (!$ingredient.value.trim()) {
    return alert("재료를 입력해주세요요");
    // 재료의 빈칸의 공백을 제거했을 때 값이 있는게 = true
    // 재료의 빈칸의 공백을 제거했을 때 값이 없는게 = false 그래서 앞에 !를 붙임
  } else if (!$weight.value.trim()) {
    return alert("용량을 입력해주세요");
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
  //   const sameingredient = orderdata.find((e)=>e.ingredient ==)
  //   if ($ingredient.value == orderdata.ingredient) {
  //     return "동일 상품이 이미 추가되어있습니다";
  //   }

  //   console.log(orderdata.ingredient);
  $ingredient.value = "";
  $weight.value = "";
});

// 구분할 수 있는 값, 랜덤 아이디
// id로 filter -> 제거된 배열
// 제거된 배열을 다시 화면에 그려줌
// rowRender 함수화

function deleteclick(e) {
  console.log("삭제");
  // $td.className = e.id;
  // e.preventDefault();
  // const $td = e.currentTarget.parentNode.parentNode;
  // // console.log($td);
  // console.log($td.className);

  // const delId = orderdata.filter((e) => {
  //   return e.id == $td.className;
  // });
  // orderdata.splice(delId);

  // const arr = Object.values($table.childNodes);
  // console.log(arr);
  // arr.splice(0, 2);

  // const result = arr.filter((e) => {
  //   return e.getAttribute("data-role") == $td.className;
  // });

  // const f = result[0];
  // $table.removeChild(f);
}
