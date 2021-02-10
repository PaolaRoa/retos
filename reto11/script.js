const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
console.log(jokeEl, jokeBtn)

jokeBtn.addEventListener('click', generateJoke)
window.onload = generateJoke;


const rechazo = (element)=> element.innerHTML = "More jokes in a moment son"
// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers:{
      Accept: 'application/json',
    },
  }

  await fetch('https://icanhazdadjoke.com', config)

  .then((res) => res.json(), rechazo(jokeEl))
  .then((data)=>{
    jokeEl.innerHTML = data.joke;
    console.log(data)
  })
  
  
}





//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }


