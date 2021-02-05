// ¿Cuál es la opción que sirve?

const panels = document.querySelectorAll('.panel')
var panelact = [];


panels.forEach(panel => {
    console.log(panel);
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');

       

    })
})




function removeActiveClasses(){
    panels.forEach(panel => panel.classList.remove('active'));
    
}

