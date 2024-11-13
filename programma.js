

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');

disegno.fillStyle = 'red'

disegno.fillRect(190,60, 80, 100) 

disegno.fillStyle = 'green'

disegno.fillRect(210,120, 100, 50)

disegno.fillStyle = 'yellow'

disegno.fillRect(190,100, 50, 100)