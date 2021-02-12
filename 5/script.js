const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY)
    if(window.scrollY > nav.offsetHeight+ 150) {
        nav.classList.add('onscroll')}

    else {
      nav.classList.remove('onscroll')
    }
}