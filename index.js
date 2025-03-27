
let titulo = document.querySelector('h1')
let ultimoparagrafo = document.querySelector('#p')
ultimoparagrafo.addEventListener('mouseover',()=>{
    ultimoparagrafo.innerHTML = '<button> olá </bitton>'
})

ultimoparagrafo.addEventListener('click', () => {
 titulo.style.color = 'red'
 titulo.style.textAlign = 'center'
 titulo.style.fontFamily = 'sans-serif'
 titulo.style.border = '1px solid blue'
 titulo.style.borderRadius = '5xp'
 titulo.style.boxShadow = '8px 8px 8px black'
})
ultimoparagrafo.addEventListener('click', () => {
URL=navigator('https://www.google.com/imgres?q=flamengo&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2e%2FFlamengo_braz_logo.svg%2F250px-Flamengo_braz_logo.svg.png&imgrefurl=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FClube_de_Regatas_do_Flamengo&docid=iWwrPv8eDulSpM&tbnid=TJqzZRkfOPnfGM&vet=12ahUKEwjksq2lraqMAxUOq5UCHU9sBCcQM3oECB0QAA..i&w=250&h=310&hcb=2&ved=2ahUKEwjksq2lraqMAxUOq5UCHU9sBCcQM3oECB0QAA')
})