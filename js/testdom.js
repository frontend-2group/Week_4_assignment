//4번

// function enter(e) {
//   if (e.keyCode == 13) {
//     const $teinput = document.getElementById("te_input").value;
//     $teinput == Number;
//     return alert("숫자가 입력되었습니다");
//   }
// }
// 실패..

//html에 onkeydown 이용하기 !
function checkNumber(event) {
  if (event.key >= 0 || event.key <= 9) {
    return alert("숫자가 입력되었습니다");
  }
}

// 숫자를 치면 alert값이 나오긴하는데 숫자가 input 안에 들어가지긴해서 나중에 다시 도전..

//5번

// console.log($listdata);
const $savebtn = document.getElementById("send");
const $resetbtn = document.querySelector(".reset-btn");
const list = document.getElementById("list");

function addtext(data) {
  const $listdata = document.getElementById("list_data").value;
  list.innerHTML = `
  <li>${$listdata.value}</li>`;
}

$savebtn.addEventListener("click", addtext);

// 왱.. 내가 뭘 잘못했을까..
// 버튼 클릭했을 때 innerHTML 하면 값이라도 잘 넣어지던가.. 왜 안넣어질까요..
// 어차피 내가 잘못했겠지만 뭘 잘못했을까요...
