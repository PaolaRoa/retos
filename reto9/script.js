const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

let imgs = ["https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg",
            "https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/158327/butterfly-chess-board-women-s-board-edelfalter-158327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2447124/pexels-photo-2447124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/4878372/pexels-photo-4878372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2755571/pexels-photo-2755571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2143981/pexels-photo-2143981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/4068997/pexels-photo-4068997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/3805975/pexels-photo-3805975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1134982/pexels-photo-1134982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/531443/pexels-photo-531443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1257645/pexels-photo-1257645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/4394590/pexels-photo-4394590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]
let boxesSpace = Math.round(window.innerHeight / 220) ;

for (i= 0; i< boxesSpace;i++){
    boxes[i].classList.add("show")
}
//checkBoxes()
for (i=0; i<boxes.length;i++){
    boxes[i].style.backgroundImage = `url(${imgs[i]})`
}

function checkBoxes() {
    
    //console.log(window.innerHeight / 5 * 4)
    
    const triggerBottom = window.innerHeight / 6 * 5

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop)

        if(boxTop < triggerBottom){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
        
    })
    
}