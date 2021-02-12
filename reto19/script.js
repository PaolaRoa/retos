const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {

    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
	
}

const createPokemonCard = (pokemon) => {

	let color = colors[pokemon.types[0].type.name]
	let newCard = document.createElement('div');
	let imgUrl = pokemon.sprites.front_default;
	let name = pokemon.forms[0].name;
	let number = pokemon.id;
	let newImgCont = document.createElement('div');
	let newImg = document.createElement('img');
	let newInfo = document.createElement('div');
	let newSpan = document.createElement('span');
	let newName = document.createElement('h3');
	let newClass = document.createElement('small');
	let newClassSpan = document.createElement('span')

	

	newCard.classList.add('pokemon');
	newCard.style.backgroundColor = color;
		
	newImgCont.classList.add('img-container')

	newImg.setAttribute('src',imgUrl );
	newImg.setAttribute('alt',name  )

	newImgCont.appendChild(newImg);
	newCard.appendChild(newImgCont);

	newInfo.classList.add('info');
	newSpan.classList.add('number')
	newSpan.innerHTML = number;
	newName.classList.add('name');
	newName.innerHTML = name;
	newClass.classList.add('type');
	newClass.innerHTML = 'Type: '
	newClassSpan.innerHTML = color;

	newClass.appendChild(newClassSpan);

	newInfo.appendChild(newSpan);
	newInfo.appendChild(newName);
	newInfo.appendChild(newClass);

	newCard.appendChild(newInfo);

	poke_container.appendChild(newCard);


	console.log(newCard)


	
    
}


fetchPokemons()