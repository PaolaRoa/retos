const frameCont = document.getElementById("prevRetos");
const atras = document.querySelector("#atras");
const adelante = document.querySelector("#adelante");
const list = document.querySelector(".lista")
const showList = document.querySelector(".listShow");


let url = ``
let retosurl = []
let position = 0;


console.log(list)

adelante.addEventListener('click', ()=>{
    console.log("clic adelante")
    position++;
    
    if (position > 24){
        position = 0
    };
    console.log(position)
    activeFrame();
    
}
)

atras.addEventListener('click', ()=>{
    console.log("clic adelante")
    position--;
    
    if (position < 0){
        position = 24
    };
    activeFrame();
    console.log(position)
    
}
)

for(i=1; i<26; i++){
    url = `/reto${i}/index.html`;
    retosurl.push(url);  
    // console.log(url)
}

const createList = () =>{
    retosurl.map(url => {
        item = document.createElement("li");
        item.innerHTML = `<a href="${url}" target="blank">Reto # ${retosurl.indexOf(url)+1}</a>`;
        list.appendChild(item)
        // console.log(item)
    })
} 



const activeFrame = ()=>{
    let src = retosurl[position];
    const newFrame= frameCont.childNodes[3].cloneNode()
    newFrame.setAttribute('src', src);
    // newFrame.setAttribute('name', 'frame');
    // newFrame.classList.add('frame');
    let oldFrame = frameCont.childNodes[3]
    frameCont.replaceChild(newFrame, oldFrame);
   
    console.log(newFrame)
}

createList()
console.log(retosurl[position])

// console.log(retosurl)

showList.addEventListener('click', ()=> list.classList.toggle('active'))