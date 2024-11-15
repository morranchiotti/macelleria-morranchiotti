
let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');

disegno.fillStyle = 'black'

disegno.fillRect(0,0, 500, 500) 

disegno.fillStyle = 'red'

disegno.fillRect(140,0, 360, 360 ) 

disegno.fillStyle = 'white'

disegno.fillRect(0,0, 125, 140 ) 

disegno.fillStyle = 'white'

disegno.fillRect(0,160, 125, 200 ) 

disegno.fillStyle = 'blue'

disegno.fillRect(0,375, 125, 250 ) 

disegno.fillStyle = 'white'

disegno.fillRect(140,370, 300, 200)


let foglio2 = document.getElementById('foglio2');

let disegno2 = foglio2.getContext('2d');

foglio2.addEventListener('click', (evento) => {
}) 