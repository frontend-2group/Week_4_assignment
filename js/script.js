// 4. 아래의 입력창에 숫자가 입력되지 않도록 하고 길이 제한은 10자로 하시오.
//  숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오

function checkNumber(event) {
  if (event.key >= 0 || event.key <= 9) {
    return alert("숫자가 입력되었습니다");
  }
}

// 5.

let postMock = [
  {
    id: 1,
    content: "list1",
  },
  {
    id: 2,
    content: "list2",
  },
];

const $send = document.querySelector("#send");
const $listdata = document.querySelector("#list_data");
const $list = document.querySelector("#list");
const $reset = document.querySelector(".reset");

function renderPost(post) {
  const li = document.createElement("li");
  li.className = "liclass";
  li.setAttribute("data-role", post.id);
  li.addEventListener("click", getDetail);
  li.innerHTML = `${post.content}`;
  $list.appendChild(li);
}
// console.log($list);
let shortName = postMock.length;
//이거 에러있어
const $form = document.querySelector("#form");
//

postMock.forEach((post) => {
  renderPost({
    id: post.id,
    content: post.content,
  });
});

//어디에 추가할지?

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  //로드되는걸 막는다
  if (!$listdata.value.trim()) {
    return alert("내용을 입력해주세요");
    //return을 넣어야 리스트 안생김~
  }

  const shortId = ++shortName;

  renderPost({
    id: shortId,
    content: $listdata.value,
  });
  postMock.push({
    id: shortId,
    content: $listdata.value,
  });
  document.querySelector("#list_data").value = "";
});

//초기화
$form.addEventListener("reset", (e) => {
  $list.innerHTML = "";
  // shortName = [];
  postMock = [];
  //빈배열을 넣어야 데이터롤이 초기화가 같이 됨
});

//6번

const $detail = document.querySelector("#detail");
const $text_data = document.querySelector("#text_data");

function getDetail(e) {
  // console.log(e.currentTarget);
  const postId = e.target.getAttribute("data-role");
  //target 을 써야 li만 가지고 옴
  console.log(postId);

  const post = postMock.find((post) => post.id == postId);
  $text_data.value = `${post.content}`;
  $text_data.className = postId;
} // 여기까지 인풋태그로 끌고 오기

// $change.addEventListener("click");
$list.addEventListener("click", getDetail);

const $change = document.querySelector("#change");
const $delete = document.querySelector("#delete");

//수정 splice

//1. 접근
//2. 수정버튼을 누르면 데이터 변경
function changebtn(e) {
  const input = e.target.previousSibling.previousSibling;

  // 여기 꼭 있어야하나..?
  // const delid = postMock.findIndex((e) => {
  //   return e.id == input.className;
  // });
  // postMock.splice(delid, 1);

  const arr = Object.values($list.childNodes);
  arr.splice(0, 3);
  console.log(arr);

  const result = arr.filter((e) => {
    return e.getAttribute("data-role") == input.className;
    //형변환 때문에 === 는 안된다!
  });
  // console.log(result);
  // const newIdnum = ++shortName;
  const oldList = result[0];

  const newList = document.createElement("li");
  // newList.setAttribute("data-role", e.id);
  newList.innerHTML = `${input.value}`;
  newList.className = "liclass";
  newList.setAttribute("data-role", input.className);
  $list.replaceChild(newList, oldList);
  $text_data.value = "";

  // postMock 수정
  const updateId = postMock.find((e) => {
    return e.id == input.className;
  });
  updateId.content = `${input.value}`;
}

//재수정과 삭제가 안된다.

$change.addEventListener("click", changebtn);

// 삭제

function deletebtn(post) {
  //

  const input =
    post.target.previousSibling.previousSibling.previousSibling.previousSibling;

  const delid = postMock.findIndex((e) => {
    return e.id == input.className;
  });
  postMock.splice(delid, 1);

  const arr = Object.values($list.childNodes);
  arr.splice(0, 3);
  console.log(arr);

  const result = arr.filter((e) => {
    return e.getAttribute("data-role") == input.className;
    //형변환 때문에 === 는 안된다!
  });
  const f = result[0];
  console.log(f);
  $list.removeChild(f);
  $text_data.value = "";
}
$delete.addEventListener("click", deletebtn);
