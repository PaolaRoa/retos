const textEl = document.getElementById('text');
const speedEl = document.getElementById('speedEl')
let idx = 0;
let text = "I\u00a0 love\u00a0 programming"
let speed =  300
console.log(textEl)
console.log(speedEl)
writeText()

function writeText(){
    
    if(idx >= text.length) {
        idx = 0;
        textEl.innerText = ''
    }
    textEl.innerText += text[idx];

    idx++

    

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e)=> {
    speed = 300/(e.target.value);
    console.log (speed)}) ;

