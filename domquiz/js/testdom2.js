function checkNumber(event) {
  if (event.key >= 0 || event.key <= 9) {
    return alert("숫자가 입력되었습니다");
  }
}

let mocktest = [
  {
    id: 1,
    content: "list1",
  },
  {
    id: 2,
    content: "list2",
  },
];

const $list = document.querySelector("#list");

function renderboard(post) {
  const $li = document.createElement("li");
  $li.className = "liclass";
  $li.setAttribute("data-role", post.id);
  $li.innerHTML = `${post.content}`;
  $list.appendChild($li);
}

mocktest.forEach((post) => {
  renderboard({
    id: post.id,
    content: post.content,
  });
});

const $sendbtn = document.querySelector("#send");
const $listdata = document.querySelector("#list_data");
const $resetbtn = document.querySelector(".reset-btn");
const form = document.querySelector("#form");

//저장
let shordId = mocktest.length;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!$listdata.value.trim()) {
    return alert("내용을 입력해주세요");
  }
  const idNumber = ++shordId;
  renderboard({
    id: idNumber,
    content: $listdata.value,
  });
  mocktest.push({
    id: idNumber,
    content: $listdata.value,
  });
  $listdata.value = "";
});

//초기화

form.addEventListener("reset", () => {
  $list.innerHTML = "";
  mocktest = [];
});

//수정 할 내용 불러오기

const $listdetail = document.querySelector("#list-detail");
const $fixlist = document.querySelector("#fix-list");

function getboardDetail(e) {
  const postid = e.target.getAttribute("data-role");
  // console.log(postid);

  const post = mocktest.find((post) => post.id == postid);
  // console.log(post);
  $fixlist.value = `${post.content}`;

  //
  $fixlist.className = postid;
}
$list.addEventListener("click", getboardDetail);

// 수정
// 새로 수정된 데이터를 다시 list에서 전에 꺼를 지우고 새거를 넣어야하눈디...
const $change = document.querySelector("#change");
const $delete = document.querySelector("#delete");

function changeclick(e) {
  const input = e.target.previousSibling.previousSibling;
  console.log(input);

  // const delId = mocktest.findIndex((e) => {
  //   return e.id == input.className;
  // });

  // console.log(delId);
  // mocktest.splice(delId, 1);

  //mock 데이터 삭제말고 데이터를 찾아서 content값만 바꿔주기.!
  const updateId = mocktest.find((e) => {
    return e.id == input.className;
  });
  updateId.content = `${input.value}`;

  const arr = Object.values($list.childNodes);

  const result = arr.filter((e) => {
    return e.getAttribute("data-role") == input.className;
  });

  const fixresult = result[0];
  console.log(fixresult); // 기존 노드 가져오기

  const newli = document.createElement("li");
  newli.innerHTML = `${input.value}`;
  newli.className = "liclass"; //클레스네임 주기

  //맨 처음에 data-role값으로 썼던 e.id값은 undefined
  //e.target.previousSibling.previousSibling.className 또는 input.className값이 data-role값임
  newli.setAttribute("data-role", input.className);

  $list.replaceChild(newli, fixresult);
}

$change.addEventListener("click", changeclick);

// 삭제

function delPost(post) {
  const input =
    post.target.previousSibling.previousSibling.previousSibling.previousSibling;
  console.log(input);

  const delId = mocktest.findIndex((e) => {
    return e.id == input.className;
  });
  mocktest.splice(delId, 1);

  const arr = Object.values($list.childNodes);
  console.log(arr);
  const result = arr.filter((e) => {
    return e.getAttribute("data-role") == input.className;
  });

  const f = result[0];
  $list.removeChild(f);

  $fixlist.value = "";
}

$delete.addEventListener("click", delPost);
