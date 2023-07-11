//4번문제

const $te_input = document.querySelector("#te_input");

$te_input.addEventListener("change", () => {
    if (/\d/.test($te_input.value)) {
        $te_input.value = "";
        return alert("숫자가 입력되었습니다 안돼요");
    }
    console.log($te_input.value);
    $te_input.value = "";
});

//5번문제

let postMock = [
    { id: 1, content: "list1" },
    {
        id: 2,
        content: "list2",
    },
];

const $form = document.querySelector("#form");
const $list_data = document.querySelector("#list_data");
const $send = document.querySelector("#send");
const $reset = document.querySelector("#reset");

const $list = document.querySelector("#list");

function renderPost(post) {
    const li = document.createElement("li");
    li.className = "listLi";
    li.setAttribute("data-role", post.id);
    li.innerHTML = `${post.content}`;
    $list.appendChild(li);
}

postMock.forEach((post) => {
    renderPost({
        id: post.id,
        content: post.content,
    });
});

let idNum = postMock.length;

//저장

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!$list_data.value.trim()) {
        return alert("내용을 입력해주세요");
    }

    const shotId = ++idNum;

    renderPost({
        id: shotId,
        content: $list_data.value,
    });

    postMock.push({
        id: shotId,
        content: $list_data.value,
    });

    // console.log(postMock);
    $list_data.value = "";
});

//초기화

$reset.addEventListener("click", () => {
    $list.innerHTML = "";
    postMock = [];
    idNum = [];
});

//수정

const $fixContent = document.querySelector("#fixContent");
const $fix = document.querySelector("#fix");
const $del = document.querySelector("#del");

function fixInput(post) {
    const dataRole = post.target.getAttribute("data-role");
    const findPost = postMock.find((post) => post.id == dataRole);
    $fixContent.value = `${findPost.content}`;

    // $fixContent.className = "newPost";
    // $fixContent.setAttribute("data-role", dataRole);
    $fixContent.className = dataRole;
}

//input에 불러옴

$list.addEventListener("click", fixInput);
$fix.addEventListener("click", () => {});

// let listShow = $list.childNodes;
// console.log(listShow);

//삭제
// function delPost() {

//     const $postItem = document.querySelector(".newPost");
//     const newPost = $postItem.getAttribute("data-role");
//     console.log(newPost);
//     const find = postMock.find((post) => post.id == newPost);

//     postMock.splice(find, 1);
//     console.log(postMock);

//     $list.removechild(find);
// }

// 삭제 버튼을 클릭하면 인풋안에 데이터롤로 불러온 데이터가 사라짐

//-----대경님 코드--------

function delPost(post) {
    const input =
        post.target.previousSibling.previousSibling.previousSibling
            .previousSibling;

    const delId = postMock.findIndex((e) => {
        return e.id == input.className;
    });
    postMock.splice(delId, 1);

    const arr = Object.values($list.childNodes);
    //()객체내 values들을 배열로 변환
    arr.splice(0, 3);
    console.log(arr);

    const result = arr.filter((e) => {
        return e.getAttribute("data-role") == input.className;
    });
    const f = result[0];
    $list.removeChild(f);
}

$del.addEventListener("click", delPost);
