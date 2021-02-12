const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.panel-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = '';
ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fa fa-heart"></i>
    <h3>Thank you</h3>
    <h4>Feedback: ${selectedRating}</h4>
    <p>We'll use your feedback to improve aour customer support</p>
`
console.log(panel)
    let toRemove = e.target.parentNode.children;
    for(i=0; i<toRemove.length; i++){
        toRemove[i].parentNode.remove(toRemove[i])
    }
    console.log(panel)
})

function removeActive() {
    for(i=0; i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}


// ratingsContainer.addEventListener('click', (e) => {
//     console.log(e.target.parentNode);
//     removeActive()
//     e.target.parentNode.classList.add('active')
// })

// sendBtn.addEventListener('click', (e) => {
  
//     let toRemove = e.target.parentNode.children;
//     for(i=0; i<toRemove.length; i++){
//         toRemove[i].parentNode.remove(toRemove[i])
//     }

//     panel.innerHTML = `
//         <i class="fa-heart"></i>
//         <h3>Thank you</h3>


//     `
//     console.log("clic en el boton", e.target.parentNode);
// })

