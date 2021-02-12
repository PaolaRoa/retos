const insert = document.getElementById('insert')
const keys = insert.children

console.log(keys)

window.addEventListener('keydown', (e) => {
  let key = e.key;
  let code = e.keyCode;
  let eCode = e.code;

  for(i=0; i< keys.length; i++){

    if(keys[i].classList.contains('hide')){
      keys[i].classList.remove('hide')
    }
  }
  keys[3].classList.add('hide')
  if (code === 32){
    key = 'space';
  }

  keys[0].innerHTML = key;
  keys[1].innerHTML = code;
  keys[2].innerHTML = eCode;


  console.log(key);
})


