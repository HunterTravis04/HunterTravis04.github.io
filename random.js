let random
let noa
function numberthatisrandom() {
   random = Math.floor(Math.random()* 100) + 1
   noa = 0
}
function guess(){
    let guess = Number(prompt("What is the number?"))
    if (guess == random) {
     noa ++
     alert("Correct! You guessed " + noa + " times before getting it correct.")
    }
    else if (guess < random) {
     document.getElementById('higherorlower').style.backgroundColor='rgb(255, 24, 24)'
     noa ++
    }
    else if(guess > random){
     document.getElementById('higherorlower').style.backgroundColor='rgb(81, 255, 0)'
     noa ++
    }
}