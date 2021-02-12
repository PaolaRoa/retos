const nav = document.querySelector('.navbar');
const list = document.querySelectorAll('li');
const log = document.querySelector('.logo')

console.log(log)
window.addEventListener('scroll', fixNav);


function fixNav() {
    console.log(window.scrollY)
    if(window.scrollY > nav.offsetHeight+ 150) {
        nav.classList.add('onscroll');
        list.forEach(item=> item.classList.add('act'))
        log.classList.add('act')
      }

    else {
      nav.classList.remove('onscroll');
      list.forEach(item=> item.classList.remove('act'))
      log.classList.remove('act')

      
    }
}