const frameCont = document.getElementById("prevRetos");
const atras = document.querySelector("#atras");
const adelante = document.querySelector("#adelante");
const list = document.querySelector(".lista")
const showList = document.querySelector(".listShow");
const search = document.getElementById('search');
const searchList = document.querySelector('.searchList');
const sIcon = document.querySelector('.fas');
const sBar = document.querySelector('#searchBar')

console.log(sIcon, sBar)


const nombres=[
    {
      "num": 1,
      "nombre": "Expanding Cards"
    },
    {
      "num": 2,
      "nombre": "Progress Steps"
    },
    {
      "num": 3,
      "nombre": "Rotating Navigation"
    },
    {
      "num": 4,
      "nombre": "Hidden Search"
    },
    {
      "num": 5,
      "nombre": "Blurry Loading"
    },
    {
      "num": 6,
      "nombre": "Drag N Drop"
    },
    {
      "num": 7,
      "nombre": "Auto Text Effect"
    },
    {
      "num": 8,
      "nombre": "Hoverboard"
    },
    {
      "num": 9,
      "nombre": "Scroll Animation"
    },
    {
      "num": 10,
      "nombre": "Form Wave Animation"
    },
    {
      "num": 11,
      "nombre": "Dad Jokes"
    },
    {
      "num": 12,
      "nombre": "Sound Board"
    },
    {
      "num": 13,
      "nombre": "Live User Filter"
    },
    {
      "num": 14,
      "nombre": "Button Ripple Effect"
    },
    {
      "num": 15,
      "nombre": "background Slider"
    },
    {
      "num": 16,
      "nombre": "Kinetic CSS Loader"
    },
    {
      "num": 17,
      "nombre": "Netflix Navigation"
    },
    {
      "num": 18,
      "nombre": "testimonial Box Switcher"
    },
    {
      "num": 19,
      "nombre": "Pokedex"
    },
    {
      "num": 20,
      "nombre": "Doble click heart"
    },
    {
      "num": 21,
      "nombre": "Event KeyCodes"
    },
    {
      "num": 22,
      "nombre": "mobile Nav Navigation"
    },
    {
      "num": 23,
      "nombre": "Drink Water"
    },
    {
        "num": 24,
        "nombre": "Feedback UI design"
      },
    {
      "num": 25,
      "nombre": "Sticky Navigation"
    }
  ]
// console.log(nombres[1].nombre)

let url = ``
let retosurl = []
let position = 0;


// console.log(list)

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
        let num = retosurl.indexOf(url);
        item = document.createElement("li");
        item.classList.add('liReto')
        item.id = num;
        item.innerHTML = `<a href="${url}" target="blank">Reto # ${num+1} / ${nombres[num].nombre} </a>`;
        // console.log(num)
        // console.log(nombres.length, retosurl.length)
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
// console.log(retosurl[position])

// console.log(retosurl)
const items = document.querySelectorAll('.liReto');
    
items.forEach(item => {
        // console.log(item.innerText);
        let newItem = item.cloneNode(true);
        newItem.removeAttribute("id");
        newItem.className = "liSearch hide"
        searchList.appendChild(newItem);
    })


showList.addEventListener('click', ()=> list.classList.toggle('active'))

const liSearch = document.querySelectorAll('.liSearch');
function filterData(searchTerm) {


    
    liSearch.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide');
            
        }
    })
    
}

search.addEventListener('input', (e)=>filterData(e.target.value)) ;
search.addEventListener('focusout', cleanList)

function cleanList(){

  liSearch.forEach(item => item.classList.add('hide')

  )
  
  // let listtoClean = searchList.childNodes;
  // console.log(listtoClean)
  // listtoClean.forEach(item=> listtoclean.)
}

sIcon.addEventListener('click', ()=> sBar.classList.toggle('hide'));
                  