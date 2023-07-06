// 4번 문제
const $te_input = document.querySelector("#te_input");

$te_input.addEventListener("change", () => {
    if (!isNaN($te_input.value)) {
        return alert("숫자가 입력되었습니다 안돼요");
    }
    console.log($te_input.value);
    $te_input.value = "";
});

//문제점1
//아 이러면 숫자만 입력하면 알람이 뜨는데..섞어서 쓰면 정상출렫됨....아왜에에에에에에

//5번문제

const $form = document.querySelector("#form");
const $list = document.querySelector("#list");
const $text = document.querySelector("#list_data");
const $reset = document.querySelector("#reset");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log($form.content.value);

    if (!$text.value.trim()) {
        return alert("내용을 입력하세요");
    }

    const $newContent = document.createElement("li");
    $newContent.innerText = `${$form.content.value}`;

    $list.appendChild($newContent);

    $text.value = "";
});

// 문제  - 글이 계속 쌓임...
// -> $text.value = "";로 해결

//문제 3 - 빈칸도 입력이 가능함...알림은 뜨는데 출력도 동시에 됨
//-> 위치를 맨앞으로 옮겨서 해결..근데 왜...?ㅋㅋㅋㅋㅋㅋㅋㅋㅋ

$reset.addEventListener("click", () => {
    console.log($reset);
    $list.innerHTML = `<li></li>`;
});

//초기화라....ㅠㅠ
