let body = document.querySelector('body')

let checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('input', () => {
    body.classList.toggle('night')
})



let police = document.querySelector('#police');
police.addEventListener('input', () => {
    body.classList.toggle('police')
})



let frontFara = document.querySelector('#frontFara');
frontFara.addEventListener('input', () => {
    body.classList.toggle('frontFara')
})



let backFara = document.querySelector('#backFara');
backFara.addEventListener('input', () => {
    body.classList.toggle('backFara')
})



let gunning = document.querySelector('#gunning');
gunning.addEventListener('input', () => {
    body.classList.toggle('gunning-body')
})