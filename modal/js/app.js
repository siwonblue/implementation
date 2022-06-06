const toggleButton = document.querySelector('.button')
const main = document.querySelector('.main')
const closeButton = document.querySelector('.closeButton')
const stopPropagationDiv = document.querySelector('.stopPropagationDiv')

let status = false

const toggleStatus = ()=>{
  if(status === false){
    main.classList.remove('hide')
    status = true
  }else{
    main.classList.add('hide')
    status = false
  }
}

//토글
toggleButton.addEventListener('click',()=>{
  toggleStatus()
  console.log(status)
})
//토글
closeButton.addEventListener('click',()=>{
  toggleStatus()
  console.log(status)
})

// 모달 바깥을 눌렀을 때 꺼지게 만들어 줌.
// 이때 main 은 fixed 로 화면 전체를 의미하게 만들어 두어야 함
main.addEventListener('click',()=>{
  toggleStatus()
  console.log(status)
})

// 버튼을 눌렀을 때 전파되는 것을 막기 위해 중간에 설정
stopPropagationDiv.addEventListener('click',(e)=>{
  e.stopPropagation()
})