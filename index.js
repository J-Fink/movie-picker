//add event listener to button
let movies = document.querySelectorAll(".movie");
let movieEntry = document.getElementById("movie-entry");
let addMovieEntry = document.getElementById("add-movie-entry");
const chooseMovie = document.getElementById("choose-movie-entry");
const movieList = document.querySelector(".movie-list");
let moviesArray = [];
button();

function button(){
   addMovieEntry.addEventListener("click", function(){
    var li = document.createElement("li");
    li.innerHTML = movieEntry.value
    li.classList.add("movie");
    movieEntry.value ="";
    movieList.appendChild(li); 
    moviesArray.push(li); 
});
    randMovie();
};
//shuffle function Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  //go through movies and select a random one 
function randMovie(){
    chooseMovie.addEventListener("click", function(){
      shuffle(moviesArray);

      alert(moviesArray[0].innerHTML);
    })}