const audios = document.querySelectorAll('audio');
const buttons = document.querySelectorAll('.btn')
console.log(audios)
console.log(buttons)

buttons.forEach(button =>{ 
    let audio = document.getElementById(button.innerHTML);
    button.addEventListener('click', ()=>playAudio(audio))
    
}
)

function playAudio (audio){
    audios.forEach(audio => audio.pause());
    audio.play()
}