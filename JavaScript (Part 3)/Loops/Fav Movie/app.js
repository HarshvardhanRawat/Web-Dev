const movie = "avengers";
let guess = prompt("Guess the movie");


while((guess != movie) && (guess != "quit")){
    guess = prompt("Wrong movie please guess the movie again");
}

if(guess == movie){
    console.log("congrats!");
}else{
    console.log("Better luck next time"); 
}