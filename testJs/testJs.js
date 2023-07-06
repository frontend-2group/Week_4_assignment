// 4번
const inputString = document.querySelector('#te_input')

inputString.addEventListener('input', function (e) {
    const inputValue = e.currentTarget.value;

    //숫자가 포함되어 있는지 확인
    if (/\d/.test(inputValue)) {
        alert('숫자는 안돼!');
        inputString.value = '';
    }
});

// 5번

//기존에 있던 게시물
let postMock = [
    {
        "id" : 1,
        "content" : "list1"
    },
    {
        "id" : 2,
        "content" : "list2"
    },
]

function rednerPost(post){
    const li = document.createElement('li')
    li.className = 'liclass'
    li.setAttribute('data-role', post.id)
    li.addEventListener('click', getPostDetail)
    li.innerHTML = `${post.content}`
    $postList.appendChild(li)
    //deletePostEvent()
}

const $postList = document.querySelector('#list')
let countId = postMock.length;

postMock.forEach((post) => {
    rednerPost({
        id: post.id,
        content: post.content
    })
})

const $form = document.querySelector('#form')
const $content = document.querySelector('#list_data')
const $postDetail = document.querySelector('.post-detail')


//작성
$form.addEventListener('submit', (e)=>{
    //페이지로드 막기
    e.preventDefault()

    if(!$content.value.trim()){
        return alert('내용을 입력해주세요')
    }

    const shortId = ++countId;
    rednerPost({
        id: shortId,
        content: $content.value
    })

    postMock.push({
        id: shortId,
        content: $content.value
    })
    $content.value = ``
})

//초기화
$form.addEventListener('reset', () => {
    countId = 0
    $postList.innerHTML = ``
    postMock = [];
    $postDetail.innerHTML = ``
})

//상세
function getPostDetail (e) {
    const postId = e.currentTarget.getAttribute('data-role') // string
    const post = postMock.find((post) => post.id === parseInt(postId)); // 형변환
    $postDetail.innerHTML = `
        <li class="lidetail" data-role="${post.id}">${post.content}</li>
        <input type="text" value="" width="600" name="content" class="updateInput"/>
    `

    //수정버튼이벤트
    const updateButton = document.createElement('button')
    updateButton.className = 'updatePost'
    updateButton.addEventListener('click', () => updatePost(post.id));
    updateButton.innerText = '수정';
    $postDetail.appendChild(updateButton)

    //삭제버튼이벤트
    const deleteButton = document.createElement('button')
    deleteButton.className = 'deletePost'
    deleteButton.addEventListener('click', () => deletePost(post.id));
    deleteButton.innerText = '삭제';
    $postDetail.appendChild(deleteButton)
}

//수정
function updatePost(postId){
    const $postItems = document.querySelectorAll(`li[data-role="${postId}"]`);
    const findPost = postMock.find((post) => post.id === parseInt(postId));
    const $input = document.querySelector('.updateInput');
    const updateContent = $input.value.trim();

    if(!updateContent){
        return alert('내용을 입력해주세요')
    }

    $postItems.forEach(($postItem) => {
        $postItem.innerText = updateContent;
    });
    findPost.content = updateContent;

    console.log(postMock)
}

//삭제
function deletePost(postId) {
    const $postItem = document.querySelector(`li[data-role="${postId}"]`);
    const findIndex = postMock.findIndex((post) => post.id === parseInt(postId));

    $postItem.remove();
    postMock.splice(findIndex, 1);

    $postDetail.innerHTML = ``
}