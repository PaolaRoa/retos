const frame = document.getElementById("prevRetos");
const list = document.getElementById("lista")
let url = ``
let retosurl = []



for(i=1; i<26; i++){
    url = `../../reto${i}/index.html`;
    retosurl.push(url);  
}

const createList = () =>{
    retosurl.map(url => {
        item = document.createElement("li");
        item.innerHTML = `<a href="${url}" target="blank">Reto # ${retosurl.indexOf(url)+1}</a>`;
        list.appendChild(item)
        // console.log(item)
    })
} 

createList()

