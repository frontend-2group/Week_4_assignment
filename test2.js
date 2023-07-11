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
    li.setAttribute("date-role", post.id);
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

    console.log(postMock);
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
    const dateRole = post.target.getAttribute("date-role");
    const findPost = postMock.find((post) => post.id == dateRole);
    $fixContent.value = `${findPost.content}`;

    $fixContent.className = `data-role:${dateRole}`;
}
//input에 불러옴

$list.addEventListener("click", fixInput);
$fix.addEventListener("click", () => {});

console.log(postMock);
//삭제
function delPost(post) {
    const $postItem = post.target.getAttribute("data-role");

    console.log($postItem);
    // const findIndex = postMock.findIndex((post) => post.id == $postItem);

    // findIndex.remove();
    // postMock.splice(findIndex, 1);
}

$del.addEventListener("click", delPost);

// 삭제 버튼을 클릭하면 인풋안에 데이터롤로 불러온 데이터가 사라짐
