/* 
LV3. 레시피 추가 및 삭제 하기

레시피는 각각 재료와 무게를 입력하면 아래 테이블에 데이터가 추가됩니다.
같은 이름의 재료는 추가할 수 없습니다.
각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로 재료:무게로 나타납니다.
*/

const $ingredientForm = document.querySelector("#ingredient-form");
const $ingredient = document.getElementsByName("ingredient")[0];
const $weight = document.getElementsByName("weight")[0];
const $btn = document.getElementsByTagName("button")[0];

const $table = document.getElementsByTagName("table")[0];
const $thead = document.querySelector(".thead");

const $submit_button = document.querySelector("#submit_button");
const $ingredientList = document.querySelector("#ingredient-list");
// mock 생성

let mock = [];

function newPost(post) {
    const newIng = document.createElement("tr");
    newIng.setAttribute("data-role", post.id);
    newIng.className = "newPost";
    newIng.innerHTML = `
    <td>${post.ingredient}</td>
    <td>${post.weight}</td>`;

    $table.appendChild(newIng);

    //삭제버튼

    const del = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "삭제";
    newIng.appendChild(del);
    del.appendChild(button);

    del.addEventListener("click", delPost);
    //처음 찍었을때 벨류가 안나옴(동영상참고) + 이 상태로 이벤트 적용불가(함수사용불가뜸)
    // <td><button class=del id = ${post.id}>삭제</button></td>;
    // const delBtn = document.getElementsByClassName("del");
    // console.log(delBtn);
    // const delBtnList = [...delBtn];
    // console.log(delBtnList);

    //forEach 쿼리셀렉일때사용가능
    // delBtn.forEach((del) => {
    //     del.addEventListener("click", delPost);
    // });

    //질문거리 한가득.. 왜 처음 클릭하면 벨류가 안나오나..?
    //왜 퀴리셀렉으로 forEach 돌려서 이벤트 사용해야하나..?
}

let idList = mock.length;

mock.forEach((x) => {
    newPost({
        id: x.id,
        ingredient: x.ingredient,
        weight: x.weight,
    });
});

// table > form 안에 추가

function PostPush(e) {
    e.preventDefault();

    if (!$ingredient.value.trim() || !$weight.value.trim()) {
        return alert("빈칸을 입력하세요");
    }

    const findIng = mock.filter((post) => {
        return post.ingredient == $ingredient.value;
    });

    console.log(findIng);

    if (findIng.length > 0) {
        return alert("이미 추가된 재료입니다");
    }

    // if (/\D/.test($weight.value)) {
    //     $weight.value = "";
    //     return alert("용량에 숫자,g,ea로 입력하세요");
    // }

    let idNum = ++idList;

    newPost({
        id: idNum,
        ingredient: $ingredient.value,
        weight: $weight.value,
    });

    mock.push({
        id: idNum,
        ingredient: $ingredient.value,
        weight: $weight.value,
    });

    // console.log(mock);

    $ingredient.value = "";
    $weight.value = "";
}

$btn.addEventListener("click", PostPush);

//form 안에 삭제 버튼

function delPost(e) {
    const delList = e.currentTarget.parentNode;
    const delData = delList.getAttribute("data-role");

    const delMock = mock.findIndex((e) => {
        return e.id == delData;
    });

    mock.splice(delMock, 1);
    $table.removeChild(delList);
}

//제출버튼으로 list추가

$submit_button.addEventListener("click", () => {
    // const mockValue = Object.assign({}, mock);
    // console.log(mockValue.["ingredient"]);
    // const value = Object.values(mockValue);
    // console.log(value);

    $ingredientList.innerHTML = "";

    mock.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `
    <li>${post.ingredient} : ${post.weight}</li>`;

        $ingredientList.appendChild(li);
    });
});
