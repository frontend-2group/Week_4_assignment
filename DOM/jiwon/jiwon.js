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
  
  
function renderboard(post) {
  const $li = document.createElement("li");
  $li.className = "liclass";
  $li.setAttribute("data-role", post.id);
  $li.addEventListener('click', getboardDetail);
  $li.innerHTML = `${post.content}`;
  $list.appendChild($li);
}

const $list = document.querySelector("#list");
let shordId = mocktest.length;

mocktest.forEach((post) => {
  renderboard({
    id: post.id,
    content: post.content,
  });
});



const form = document.querySelector("#form");
const $sendbtn = document.querySelector("#send");
const $listdata = document.querySelector("#list_data");
const $resetbtn = document.querySelector(".reset-btn");


//저장

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

// details

//수정 할 내용 불러오기
const $listdetail = document.querySelector("#list-detail");
const $fixlist = document.querySelector("#fix-list");

// 아래 코드 때문에 오류 발생. 17번 코드로 변경하니까 정상작동 합니다!
// $list.addEventListener("click", getboardDetail);

function getboardDetail(e) {
  const postid = e.currentTarget.getAttribute("data-role");  
  const post = mocktest.find((post) => post.id === parseInt(postid)); 
  // check
  console.log(postid);
  console.log(post);

  $fixlist.value = `${post.content}`;
  $fixlist.className = postid;
}


// 수정
// 새로 수정된 데이터를 다시 list에서 전에 꺼를 지우고 새거를 넣어야하눈디...
const $change = document.querySelector("#change");
const $delete = document.querySelector("#delete");

$change.addEventListener("click", changeclick);
$delete.addEventListener("click", delPost);

function changeclick(e) {
  const input = e.target.previousSibling.previousSibling;
  const delId = mocktest.findIndex((e) => { return e.id == input.className;});

  mocktest.splice(delId, 1);

  const arr = Object.values($list.childNodes);
  const result = arr.filter((e) => {
    return e.getAttribute("data-role") == input.className;
  });

  // 이건 선언을 하셨지만 사용하지 않은 코드라 주석처리했습니다.
  // const newidNum = ++shordId;
  const fixresult = result[0];

  const newli = document.createElement("li");
  newli.innerHTML = `${input.value}`;
  newli.setAttribute("data-role", e.id);

  $list.replaceChild(newli, fixresult);

}



// 삭제
function delPost(post) {
  const input = post.target.previousSibling.previousSibling.previousSibling.previousSibling;
  const delId = mocktest.findIndex((e) => { e.id == input.className;});

  console.log(input);
  console.log(delId);
  // console에 찍어보니 delId값이 제대로 가져와지지 않아서 위에 return 지웠습니다!

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