let burger = document.querySelector('.burger__size')
let closeicon = document.querySelector('.burger__shutdown')
let openclose = document.querySelector('.burger')

burger.addEventListener('click', () => {
    if(openclose.classList.contains('burger__closed')){
        openclose.classList.replace('burger__closed', 'burger__open')
    }else if(openclose.classList.contains('header__open')){
        openclose.classList.replace('burger__open', 'burger__closed')
    }
})

closeicon.addEventListener('click', () => {
    if(openclose.classList.contains('burger__open')){
    openclose.classList.replace('burger__open', 'burger__closed')
    }
})