const container = document.getElementById('container')
const colors = ['#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8',
                '#3A0CA3', '#3F37C9', '#4361EE','#4895EF','#4CC9F0' ]
const SQUARES = 500

console.log(container)

for(let i = 0; i < SQUARES; i++) {
   console.log(i)
    const square = document.createElement("div")
    square.classList.add('square')

    square.addEventListener('mouseenter', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color;
   element.style.boxShadow = `0px 0px 25px ${color}`
}

function removeColor(element) {
   element.style.background = '#1a1a1a'
   element.style.boxShadow = 'none'
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*10)]
}