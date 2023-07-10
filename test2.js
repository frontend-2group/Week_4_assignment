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
}

$list.addEventListener("click", fixInput);
$fix.addEventListener("click", () => {});

$del.addEventListener("click", delPost);
//삭제
function delPost(postId) {
    const $postItem = document.querySelector(`li[data-role="${postId}"]`);
    const findIndex = postMock.findIndex(
        (post) => post.id === parseInt(postId)
    );
    $postItem.remove();
    postMock.splice(findIndex, 1);
}

//수정인풋부분까지만 값이 입력되고
// 수정버튼 클릭시 작동안함....휴휴
