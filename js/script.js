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
/*
function enter(e) {
  if (e.keycode == 13) {
    const $teInput = document.getElementById("te_input").value;
    $teInput == Number;
    return alert("숫자가 입력되었습니다");
  }
}
function checkNumber(event) {
  if (event.key >= 0 && event.key <= 9) {
    return alert("숫자가 입력되었습니다");
  }
}*/
//https://hianna.tistory.com/413 참조..

function checkNumber(event) {
  if (event.key >= 0 || event.key <= 9) {
    return alert("숫자가 입력되었습니다");
  }
}

//5.아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록 하시오.
// 초기화 버튼을 누르면 list안의 모든 내용이 지워져야 함
//어디에 추가하고싶은지 -> list

// const $send = document.querySelector("#send");
// const $listData = document.querySelector("list_data");

// $send.addEventListener("click", () => {
//   if (!$listData.value.parseInt()) {
//     return alert("숫자가 입력되었습니다");
//   }
// });
/*
function renderList(list) {
  const ul = document.createElement("#list");
  ul.className = "ul-class";
  ul.setAttribute("data-role", list.content);
  //   li.addEventListener("click",)
  li.innerText = `
<li class="liclass">${list.content}</li>
<li class="liclass">${list.content}</li>
`;
  $List.appendChild(ul);
}*/
// const $List = document.querySelector("#list");
// forEach((list) => {
//   renderList({
//     content: list.content,
//   });
// });

// const li = document.createElement(".liclass");
// li.innerHTML = `
// <li class="liclass">${list.content}</li>
// `;
/* 7/6
function append() {
  const list = document.getElementById("#list");
  const form = document.getElementsByTagName("form");
  form.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.elements.content.value);
  });

  // list(<ul>)의 마지막 자식 노드 뒤에 <li> 노드 추가
  const append = document.createElement(".liclass");
  append.innerHTML = "append";
  list.append(append);
}*/

const $sendbtn = document.querySelector("#send");
const $listdata = document.querySelector("#list_data");
// const $reset = document.querySelectorAll(".reset");
const $list = document.querySelectorAll("#list");

/*
$send.addEventListener("click", () => {
  if (!$listData.value.trim()) {
    return alert("내용을 입력해주세요");
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!$listData.value.trim()) {
    return alert("내용을 입력해주세요");
  }
});

$(document).ready(function () {
  $("button[name='save']").click(function () {
    $("body").append("click!!!<br/>");
  });
});
*/

$sendbtn.addEventListener("click", () => {
  if (!$listdata.value.trim()) {
    alert("내용을 입력해주세요");
  }
  // const $list = document.getElementById("#list");

  // const append = document.createElement("li");
  // append.setAttribute("data-role", "liclass");
  // append.innerHTML = `
  // <li class="liclass">
  // ${$listdata.value}</li>
  // `;

  // $list.appendChild(append);
});

// list(<ul>)의 마지막 자식 노드 뒤에 <li> 노드 추가

//$("#list").append("<li>새로 추가된  아이템</li>");

//$("body").append("<button name='add'>+</button>");
//

const postMock = [
  {
    id: 1,
    content: "list1",
  },
  {
    id: 2,
    content: "list2",
  },
];
function renderPost(post) {
  const li = document.createElement("li");
  li.classList = "liclass";
  li.setAttribute("data-role", post.id);
  li.addEventListener("click", getPostDetail);
  li.innerHTML = `${post.content}`;
  $list.appendChild(li);
}
const $postDetail = document.querySelector(".");
//6.추가된 내용을 "각 각" 수정 및 삭제 수 있게 변경하시오.
//아우.. 더럽게 추가 안되네 증ㅇ맬루!!!!!!
