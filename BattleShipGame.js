

//elements of the game

var location = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const GUESSES = 8;
var guess= 0;
var isSunk = false;
var shot;
var hits = 0;
var BR = "<br>";
var NumtoID [null, one, two, three, four, five, six, seven, eight, nine, ten, 
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty
];


function GameStart() {
var placeholder1 = Math.floor((Math.random() * 17) + 1);
var placeholder2 = placeholder1 + 1;
var placeholder3 = placeholder2 + 2;
location[placeholder1] = 1;
location[placeholder2] = 1;
location[placeholder3] = 1;
} 




while (!isSunk && guess < GUESSES)   {
function fire(){
shot = document.getElementById("GuessBox");
shot = parseInt(shot);
}
if ( isNaN( shot ) || shot < 0 || shot > 20 ) {

document.getElementById("StatusArea")= document.write( "Quit messing around a guess a number" + BR);
} else {
guess++;

if ( location[ shot ] === 1 ) {
	
	hits++; 
	
document.getElementById("StatusArea")= document.write( "Good shot you got a hit!" + BR);
	
	if ( hits >= 3) {
					isSunk = true;
					document.getElementById("StatusArea")= document.write( "The enemy is chum, victory is ours!" + BR );
				}
			}
			else {	
				document.getElementById("StatusArea")= document.write( "you missed, try again" + BR);
			}
			document.getElementById("StatusArea")= document.write ("Guesses left: " + (GUESSES - guess) + BR );
		}	
    } 	
	
	
	if (isSunk) {
		document.getElementById("StatusArea")= document.write( "You won in " + guess + " guesses" + BR );
	} else {
		document.getElementById("StatusArea")= document.write( "You ran out of guesses, abandon ship!." + BR );
	}
	


function gameboard(){


if ( location[ shot ] === 1 ) {
	
	var x=document.querySelector("NumtoID[shot]");
        x.innerHTML="x";
        x.style.backgroundColor="green";
         x.style.color="red";
         x.style.boarderColor="black";
}

}


















/*


//location of the ship




function ship0{
	
	
location[0] = ship0;
location[1] = ship0 + 1;
location[2] = ship0 + 2;

	
}


//What happens when a user guess
getElementById("GuessBox")

Gameboard


//Marking the GameBoard using ID

var NumtoID [null, one, two, three, four, five, six, seven, eight, nine, ten, 
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty
];

//Where the results are placed


//if the player wins or looses the game button will change and a new game will start.






newgame()












var x=document.querySelector("");
        x.innerHTML="x";
        x.style.backgroundColor="green";
         x.style.color="red";
         x.style.boarderColor="black";
		 
/*
   