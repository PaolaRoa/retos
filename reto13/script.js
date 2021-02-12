const result = document.getElementById('result')
const filter = document.getElementById('filter')
const search = document.getElementById('search')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    
    const res = await fetch("https://randomuser.me/api?results=50")

    const {results, info} = await res.json()
    // console.log(results)
    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        console.log(user)
        listItems.push(li)

        li.innerHTML = `<img class="photo" src= "${user.picture.thumbnail}"><img><div class= "user-info"><h4>${user.name.first} ${user.name.last}</h4><p>${user.location.city}, ${user.location.country}</p></div>`

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}