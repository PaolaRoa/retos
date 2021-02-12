const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {


    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx){
        cup.classList.add('full')}
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    

    const per = (fullCups *100) /totalCups;
    if (per > 0){
        percentage.innerText= per +"%"
    }
    
    percentage.style.height = per + '%';
    if (per == 100){
        remained.style.height = 0;
    }

    const remain = 2 - (fullCups*0.25)
    
    if (remain > 0){
        liters.innerText = remain +'L'
    }



}