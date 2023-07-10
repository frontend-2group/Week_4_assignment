// 4번 문제
const $te_input = document.querySelector("#te_input");

$te_input.addEventListener("change", () => {
    if (/\d/.test($te_input.value)) {
        $te_input.value = "";
        return alert("숫자가 입력되었습니다 안돼요");
    }
    console.log($te_input.value);
    $te_input.value = "제대로";
});

// $te_input.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/[0-9]/g, "");
// });

//5번문제

// const $form = document.querySelector("#form");
// const $list = document.querySelector("#list");
// const $text = document.querySelector("#list_data");
// const $reset = document.querySelector("#reset");

// $form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // console.log($form.content.value);

//     if (!$text.value.trim()) {
//         return alert("내용을 입력하세요");
//     }

//     const $newContent = document.createElement("li");
//     $newContent.innerHTML = `${$form.content.value}`;
//     $list.appendChild($newContent);

//     $text.value = "";

//     $newContent.className = "liclass";
//     const shortID = Math.floor(Math.random() * 10000000);
//     $newContent.setAttribute("dateId", shortID);
// });

//-----------위에 구현완료------------
// 문제  - 글이 계속 쌓임...
// -> $text.value = "";로 해결

//문제 3 - 빈칸도 입력이 가능함...알림은 뜨는데 출력도 동시에 됨
//-> 위치를 맨앞으로 옮겨서 해결..근데 왜...?ㅋㅋㅋㅋㅋㅋㅋㅋㅋ

//문제 -  6번문제에 수정버튼으로 넘어가기 위해서 선택버튼을 내용 옆에 추가해서 만들었는데
// 그 선택 버튼을 클릭해도 추가가됨..?오잉또잉...저장버튼과 선택버튼의 역할이같아....짐????

// $reset.addEventListener("click", () => {
//     $list.innerHTML = ``;
// });

//6번문제
//각각 수정과 삭제를 하려면 고유 id가 필요0
//-> 리스트에 입력할때 id도 숨겨서 같이 저장0
//-> 고유 id에 따라 수정, 삭제 버튼필요

// const $fixContent = document.querySelector("#fixContent");
// const $fix = document.querySelector("#fix");

// const $dateId = document.getElementsByTagName("li");
// // console.log($dateId);
// $dateId.addEventListener("click", () => {
//     $dateId.value = "하나둘";
// });

// dateId 값을 불러와서 $fixContent에 value값으로 넣고싶은데
// dateId 값을 불러오는 방법을 모르겠음

//-----------5번 다시------------

let postMock = [
    {
        id: 1,
        content: "list",
    },
    { id: 2, content: "list" },
];

const $form = document.querySelector("#form");
const $list_data = document.querySelector("#list_data");
const $list = document.querySelector("#list");

function rendPost(post) {
    const classLi = document.createElement("li");
    classLi.className = "classLi";
    classLi.setAttribute("data-role", post.id);
    classLi.innerHTML = `${post.content}`;
    $list.appendChild(classLi);
}

postMock.forEach((post) => {
    rendPost({
        id: post.id,
        content: post.content,
    });
});
//postMock이 배열형태이므로 배열형태로 만듬

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!$list_data.value.trim()) {
        return alert("내용을 입력하세요");
    }

    let num = postMock.length;
    let shortID = ++num;

    rendPost({
        id: shortID,
        content: $list_data.value,
    });

    postMock.push({
        id: shortID,
        content: $list_data.value,
    });

    $list_data.value = "";
});
