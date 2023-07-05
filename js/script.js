// 4. 아래의 입력창에 숫자가 입력되지 않도록 하고 길이 제한은 10자로 하시오.
//  숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오
/*
const $inputList = document.querySelector("#te_input");

$inputList.addEventListener("click", () => {
  if (!$inputList.value.Sting()) {
    return alert("숫자가 입력되었습니다");
  }
});
*/

//5.아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록 하시오.
// 초기화 버튼을 누르면 list안의 모든 내용이 지워져야 함
//어디에 추가하고싶은지 -> list
const $List = document.querySelector("#list");
$List.forEach((list) => {
  renderList({
    content: list.content,
  });
});

function renderList(list) {
  const ul = document.createElement("#list");
  ul.className = "ul-class";
  ul.setAttribute("data-rolr", list.content);
  //   li.addEventListener("click",)
  li.innerText = `
<li class="liclass">${list.content}</li>
<li class="liclass">${list.content}</li>
`;
  $List.appendChild(ul);
}
// 아씨 하나도 안되자나...
//모르것넹 ..
//6.추가된 내용을 "각 각" 수정 및 삭제 수 있게 변경하시오.
