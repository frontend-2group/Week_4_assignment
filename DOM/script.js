// DOM

// 04. 
// 10자 이내의 글자만 입력
// 숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오

const $inputBtn = document.querySelector('.input-btn');
const $textInput = document.querySelector('#te_input');
const inputValue = $textInput.value;


$inputBtn.addEventListener('click', checkInnerText);

function checkInnerText(inputValue){
    
    const regExp = /[0-9]+/g.test(inputValue);
    const checkIsNaN = isNaN(inputValue); 
    // console.log(regExp);

    if( !checkIsNaN ){
        alert('숫자가 입력되었습니다.');
        $textInput.value = '';
    } else {
        console.log($textInput.value);
        $textInput.value = '';
        // alert('작성하신 내용이 콘솔에 등록되었습니다.');
    }

}


// 05.
// 아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록 하시오.
// 초기화 버튼을 누르면 list안의 모든 내용이 지워져야 함





// 06. 
// 추가된 내용을 "각 각" 수정 및 삭제 수 있게 변경하시오.