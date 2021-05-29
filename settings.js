let arr = [];
let squares = document.getElementsByClassName('cell');
let gameStatus = document.getElementById('game--status')
const allEqual = arr => arr.every( v => v === arr[0] )
function set(element) {
    if (element.innerHTML === 'X' || element.innerHTML === 'O') {
        alert('Square is already in use')
        return
    }
    if (element.innerHTML == 0 && arr[arr.length - 1] != 'X') {
        arr.push('X')
        element.innerHTML = arr[arr.length - 1]
    }
    if (element.innerHTML == 0 && arr[arr.length - 1] != 'O') {
        arr.push('O')
        element.innerHTML = arr[arr.length - 1]
    }
    check();
}

function check() {
    let winnings = [
        [squares[0].innerHTML, squares[1].innerHTML, squares[2].innerHTML],
        [squares[3].innerHTML, squares[4].innerHTML, squares[5].innerHTML],
        [squares[6].innerHTML, squares[7].innerHTML, squares[8].innerHTML],
        [squares[0].innerHTML, squares[3].innerHTML, squares[6].innerHTML],
        [squares[1].innerHTML, squares[4].innerHTML, squares[7].innerHTML],
        [squares[2].innerHTML, squares[5].innerHTML, squares[8].innerHTML],
        [squares[0].innerHTML, squares[4].innerHTML, squares[8].innerHTML],
        [squares[2].innerHTML, squares[4].innerHTML, squares[6].innerHTML]
    ]

 if(allEqual(winnings[0]) && winnings[0][0] != ''){
     gameStatus.innerHTML = 'The winner is: ' + winnings[0][0]

 } else if(allEqual(winnings[1]) && winnings[1][0] != ''){
    gameStatus.innerHTML = 'The winner is: ' + winnings[1][0]

 } else if(allEqual(winnings[2]) && winnings[2][0] != ''){
    gameStatus.innerHTML = 'The winner is: ' + winnings[2][0]

 }
 else if(allEqual(winnings[3]) && winnings[3][0] != ''){
    gameStatus.innerHTML = 'The winner is: ' + winnings[3][0]

 }
 else if(allEqual(winnings[4]) && winnings[4][0] != ''){

    gameStatus.innerHTML = 'The winner is: ' + winnings[4][0]
 }
 else if(allEqual(winnings[5]) && winnings[5][0] != ''){
    gameStatus.innerHTML = 'The winner is: ' + winnings[5][0]

 }
 else if(allEqual(winnings[6]) && winnings[6][0] != ''){
    gameStatus.innerHTML = 'The winner is: ' + winnings[6][0]

 }
 else if(allEqual(winnings[7]) && winnings[7][0] != ''){
    gameStatus.innerHTML = 'The winner is: ' + winnings[7][0]

 }
return
}
function restart(){
    for (let i = 0; i < squares.length; i++) {
       squares[i].innerHTML = '';
       arr = [];
       gameStatus.innerHTML = ''
      }
}