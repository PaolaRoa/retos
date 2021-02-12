const contents = document.querySelectorAll('img')
const listItems = document.querySelectorAll('li')
console.log(contents)

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        item.classList.add('active');
        contents[idx].classList.add('show')

        
    })
})

function hideAllContents() {
    contents.forEach(content =>
        content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach((item)=>{
        item.classList.remove('active')
    })
}
