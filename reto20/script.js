const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
const heart = document.getElementsByClassName('fas fa-heart');


console.log(heart[0])
let clickTime = 0
let timesClicked = 0

//Probar 
loveMe.addEventListener('dblclick', (e) => {
    timesClicked++;
    times.innerHTML = timesClicked;
    console.log(timesClicked)
    createHeart(e);
} )


loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            //createHeart(e)
            console.log(1);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    const offx = e.target.offsetLeft;
    const offy = e.target.offsetTop;
    const x = e.clientX;
    const y = e.clientY;
    delChilds = loveMe.childNodes;
    delChilds.forEach(element => {
        loveMe.removeChild(element)
        
    });
    let newheart= heart[0].cloneNode(true);
    
    newheart.style.left = (x -offx) +'px'; 
    newheart.style.top = (y-offy)+'px';

    loveMe.appendChild(newheart);
    console.log(offy);

  
 }