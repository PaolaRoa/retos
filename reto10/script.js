const labels = document.querySelectorAll('.form-control label');
let transition = 0;

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter) => `<span>${letter}</span>`)
        .join('')
        console.log(label)
})





labels.forEach( label =>{
    transition = 100;
    label.childNodes.forEach(sp =>{
        transition += 100;
        sp.style.transitionDuration = `${transition}ms`
    }

    )
}

    )
    
