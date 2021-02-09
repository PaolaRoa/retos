const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)


function blurring() {
    if(load < 100){
            load++;
        //     loadText.innerText = load + '%';
        // loadText.style.opacity = 100-load + '%';
        // bg.style.filter = "blur(" + (100-load)/10 + "px)";
        // console.log(load);
        }
    else{
        clearInterval(int);
    }
    

    loadText.innerText = load + '%';
    loadText.style.opacity = 100-load + '%';
    bg.style.filter = "blur(" + (100-load)/10 + "px)";
    console.log(load);
}

   
 