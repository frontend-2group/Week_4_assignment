/* 
레시피 재료 추가하기
1. 레시피는 각각 재료와 무게를 입력하면 아래 테이블에 데이터가 추가됩니다.
2. 같은 이름의 재료는 추가할 수 없습니다.
3. 각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
4. 제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로 재료:무게로 나타납니다.
*/

const $from = document.querySelector("#ingredient-form");
const $ingredient = document.querySelector("#ingredient");
const $weight = document.querySelector("#weight");
const $btn = document.querySelector("#btn");
const $table = document.querySelector("#table");

//이벤트 선언 -> 추가 버튼을 클릭 했을 때
$btn.addEventListener("click", addbtnclick);

// 추가하기 -> tr 만들고 tr 안에 td로 innnerHTML 만들기
function addbtnclick(e) {
  e.preventDefault();
  //로드되는걸 막는다
  if (!$ingredient.value.trim() || !$weight.value.trim()) {
    return alert("내용을 입력해주세요");
    //return을 넣어야 리스트 안생김~
  }
  const tr = document.createElement("tr");
  tr.className = "thead";
  tr.setAttribute("data-role", $ingredient.value);
  // tr.addEventListener("click",)
  tr.innerHTML = ` 
    <tr>
        <td>${$ingredient.value}</td>
        <td>${$weight.value}</td>
        <td><button id="delete">삭제</button></td>
      </tr>
    `;
  $table.appendChild(tr);
  //데이터 전송 후 리셋
  document.querySelector("#ingredient").value = "";
  document.querySelector("#weight").value = "";
}

// 삭제
// const $delete = e.currentTarget.childNodes.parentElement;
// const $delete = document.querySelector("#delete");
// const $delete = document.getElementById("#delete");

// $delete.addEventListener("click", delbtnclick);
