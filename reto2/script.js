const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    console.log(circles.length);
    if(currentActive > circles.length-1) {
        next.setAttribute("disabled", "");
    }
    if(currentActive > 1 ) {

        prev.removeAttribute("disabled")
    }
    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if(currentActive > 1) {

        prev.removeAttribute("disabled")
    }
    if(currentActive < circles.length) {
        next.removeAttribute("disabled");
    }

    update()
})

function update() {
    circles.forEach((circle, cosa) => {
        console.log(circle , cosa, currentActive)
        if(cosa < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.setAttribute("disabled", "");
        next.removeAttribute("disabled");

    } 
}