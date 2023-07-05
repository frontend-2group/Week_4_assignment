// 4번 문제
const $te_input = document.querySelector("#te_input");

$te_input.addEventListener("focus", () => {
    if ($te_input.value || isNaN) {
        return alert("숫자가 입력되었습니다 안돼요");
    }
    console.log($te_input.value);
});

// function NotNum() {
//     const regex = `/^[0-9]+$/`;
//     if ($te_input.value.trim() === regex) {
//         return alert("숫자가 입력되었습니다 안돼요");
//     }
// }

//악ㄲㄲㄲㄲㄲㄲㄱ  인풋 타입 바꾸는 방법을 모르겠네..
// 알람창 왜 계속 뜨는건데!!

//5번문제

const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log($form.content.value);

    const $newContent = document.createElement("li");
    $newContent.innerHTML = `<li>${$form.content.value}</li>`;

    $form.appendChild($newContent);
});

//아.. 문제 1 - 빈칸도 만들어짐..
// 문제 2 - 글이 계속 쌓임...
