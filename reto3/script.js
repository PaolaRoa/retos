const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const content = document.querySelector('.content')
const nav =document.querySelector('nav')


open.addEventListener('click', () => {
    container.classList.add('crotate');
    hide(open);
    show(close);
    show(nav);
 
    
})

close.addEventListener('click', () => {
    container.classList.remove('crotate');
    hide(close);
    show(open);
    hide(nav);

    
})
function hide(element){
    element.style.display= 'none';
}

function show(element){
    element.style.display= 'block';
}