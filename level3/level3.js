/* 
레시피 재료 추가하기
1. 레시피는 각각 재료와 무게를 입력하면 아래 테이블에 데이터가 추가됩니다.
2. 같은 이름의 재료는 추가할 수 없습니다.
3. 각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
4. 제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로 재료:무게로 나타납니다.
*/

let postMock = [];

const $from = document.querySelector("#ingredient-form");
const $ingredient = document.querySelector("#ingredient");
const $weight = document.querySelector("#weight");
const $btn = document.querySelector("#btn");
const $table = document.querySelector("#table");

function renderPost(e) {
  const tr = document.createElement("tr");
  tr.className = "thead";
  tr.setAttribute("data-role", e.id);
  // tr.addEventListener("click",)
  tr.innerHTML = ` 
    <td>${e.ingredient}</td>
    <td>${e.weight}</td>
  `;
  $table.appendChild(tr);

  //잠깐만
  const td = document.createElement("td");
  const button = document.createElement("button");
  button.innerText = "삭제";

  button.addEventListener("click", postdelete);

  // 구분할 수 있는 값, 랜덤 아이디
  // id로 filter -> 제거된 배열
  // 제거된 배열을 다시 화면에 그려줌
  // rowRender 함수화
  td.append(button);
  tr.appendChild(td);
}

//Foreach
// 배열에 { id, name, weight }
postMock.forEach((post) => {
  renderPost({
    id: post.id,
    ingredient: post.ingredient,
    weight: post.weight,
  });
});

let shortName = postMock.length;

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

  const shortId = ++shortName;
  renderPost({
    id: shortId,
    ingredient: $ingredient.value,
    weight: $weight.value,
  });
  // 새로운 게시글이 포함된 데이터 요청이 불가하니
  //직접 배열에 데이터 추가
  postMock.push({
    id: shortId,
    ingredient: $ingredient.value,
    weight: $weight.value,
  });

  //데이터 전송 후 리셋
  document.querySelector("#ingredient").value = "";
  document.querySelector("#weight").value = "";
}
//중복

// 삭제

function postdelete(e) {
  const delId = e.currentTarget.parentNode.parentNode;
  // console.log(postId);
  $table.removeChild(delId);
}

//제출 ul 푸시
const $submit = document.querySelector("#submit_button");

function detail(e) {}

$submit.addEventListener("click", detail);
