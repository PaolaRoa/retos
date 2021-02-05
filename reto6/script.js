const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
const meow = document.querySelector('.meow')

console.log(fill);
console.log(empties);
console.log(meow);


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('drop', dragDrop);

}

function dragStart(e) {
    console.log("empecé")
    e.dataTransfer.effectAllowed = "move";
    fill.classList.add("hold");

    // setTimeout(1000, dragLeave);
}

function dragEnd() {
    console.log("terminé")
    fill.classList.remove("hold");
    fill.style.display = "block";

}

function dragOver(e) {
    e.target.classList.add("hovered")
    e.preventDefault();
}

function dragEnter(e) {

    console.log("entrando");
    e.preventDefault();
}

function dragLeave(e) {
    console.log("sali", e.target);
    e.target.classList.remove("hovered");
    fill.style.display = "none";

    
    
}

function dragDrop(e) {
    console.log("dropped");
    e.target.appendChild(fill);
    e.preventDefault();
    e.target.classList.remove("hovered");
    fill.style.display = "block";
    meow.play();
}