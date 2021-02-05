const textEl = document.getElementById('text');
const speedEl = document.getElementById('speedEl')
let idx = 0;
let text = "Hola, \u00a0 me\u00a0 escribo\u00a0 solo"
// let speed =  speed/ speedEl.value
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

    

    setTimeout(writeText, 500)
}


speedEl.addEventListener('input', ()=> console.log("hola"))