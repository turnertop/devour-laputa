// so if i make tictactoe game i wont end up like ....
// fuck ima end up like frank this is too hard javascript is out of my forte for my brain omg omg omg im not a developer type guy im like just average joe

let playBoard = ["", "", "", "", "", "", "", "", ""];



// template literals example
const name = "John";
const age = 25;
// reviewing template literals to embed variables and expressions
// the use of backticks ``
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);


// document.querySelector retrieves using CSS thats why there is a .play-area because in CSS notation, they use . for the html elements inside style.css
// enables us to select and manipulate HTML elements
const boardContainer = document.querySelector(".play-area");


//learning forEach for arrays
const array1 = ["a", "b", "c"];
array1.forEach(element => console.log(element));


// why would you need a loop for a tictactoe game
// allows us to modify whats inside the array, which is each cell inside of the tictactoe 0-8 blocks, and to check whether someone has won the game as well
// its basically like a car gooing zoooom zoom zoom thru everything in the array and then by setting up the zoom we can alter what we deliver like in uber eats delivery or skip the dishes like those jobs that i might have to end up doing when its gg or when the end times arrive, i just delayed the reaper but its always there


// so the forEach code to loop inside an array has two parameters element and index
// element refers to whats inside the array at that given point
// index refers to what position that it is in 0-8

const renderBoard = () => {
	boardContainer.innerHTML = "";
	playBoard.forEach((element, index) => {
		boardContainer.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
		if (e == player || e == computer) {
			document.querySelector(`#block_${i}`).classList.add("occupied");
		}
	});
};

// thank sam altman for chatgpt otherwise average joe like me born weak born inferior can close the gap with laputas!!!!!
/*
const renderBoard = () => {
	boardContainer.innerHTML = "";
	playBoard((e, i) => {
};
*/
/*
const render_board = () => {
  board_container.innerHTML = "";
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
    if (e == player || e == computer) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

render_board(); 
 */


// chat gpt simplify using for loop instead of forEach built in for arrays
/*
const render_board = () => {
  let html = "";
  for (let i = 0; i < play_board.length; i++) {
    const value = play_board[i];
    const isOccupied = value == player || value == computer;
    const cssClass = isOccupied ? "block occupied" : "block";
    html += `<div id="block_${i}" class="${cssClass}" onclick="addPlayerMove(${i})">${value}</div>`;
  }
  board_container.innerHTML = html;
};
*/

// is it grippy?
// is it pink?






















