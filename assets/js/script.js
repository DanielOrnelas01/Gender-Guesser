var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#ingredientname");
var chuckJokesButtonEl = document.getElementById("joke-form");
var chuckJokesEl = document.getElementById("chuck-jokes");
var chuckJokesHeader = document.getElementById("chuck-header");
var chuckJokesContainerEl = document.querySelector("#chuck-jokes-container");


// event handler for search form/box
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

// event handler for joke form/box
var jokeSubmitHandler = function (event) {
  event.preventDefault();
  getChuckJokes();
  // console.log(event); <-- verify click event happened
};

var displayChuckJokes = function(chuckJokes) {
  console.log(chuckJokes);
  
  // clear old content
  chuckJokesContainerEl.textContent = "";
};


var getChuckJokes = function() {
  var apiURL = "https://api.chucknorris.io/jokes/random";

  fetch(apiURL).then(function(response) {
    if (response.ok) {
    response.json().then(function(data) {
      console.log(data);

      let joke = document.createElement("p");
      joke.innerText = data.value;

      chuckJokesHeader.append(joke);
      chuckJokesHeader.append(joke);
      });
    };
  });
};

userFormEl.addEventListener("submit", formSubmitHandler);
chuckJokesButtonEl.addEventListener("click", jokeSubmitHandler);

