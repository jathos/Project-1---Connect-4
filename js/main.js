//element variables
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const column1 = [a1, a2, a3, a4, a5, a6];

const button1 = document.getElementById('button1');

let playerTurn = "red";


//event listeners
button1.addEventListener('click', function() {
    alternatePlayer();
    a1.style.backgroundColor = playerTurn;
});

//functions
function alternatePlayer() {
    if (playerTurn == "red") {
        playerTurn = "blue";
    } else {
        playerTurn = "red";
    }
};