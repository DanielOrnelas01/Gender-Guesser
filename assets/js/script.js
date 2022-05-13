var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#ingredientname");
var chuckJokesButtonEl = document.getElementById("joke-form");
var chuckJokesEl = document.getElementById("chuck-jokes");


var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var ingredientName = nameInputEl.value.trim();

  if (ingredientName) {
    getIngredientCard(ingredientName)
    // clear old content
    nameInputEl.value = "";
	console.log(ingredientName);
  } else {
    alert("");
  }
};

var jokeSubmitHandler = function (event) {
  event.preventDefault();
  getChuckJokes();
  // console.log(event); <-- verify click event happened
};

var displayChuckJokes = function(chuckJokes) {
  console.log(chuckJokes);
};


// var getIngredientCard = function (ingredientName) {
// // alchol api
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
// 		'X-RapidAPI-Key': '90378b7530msh7d82c41a463e11ep1da2d8jsne90cccb035d1'
// 	}
// };

// fetch('https://the-cocktail-db.p.rapidapi.com/search.php?i=vodka' + ingredientName)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// }

var getChuckJokes = function() {

  var apiURL = "https://api.chucknorris.io/jokes/random";

  fetch(apiURL).then(function(response) {
    response.json().then(function(data) {
      displayChuckJokes(data);
    });
  });
};


userFormEl.addEventListener("submit", formSubmitHandler);
chuckJokesButtonEl.addEventListener("click", jokeSubmitHandler);