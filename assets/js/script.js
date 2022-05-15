var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var chuckJokesButtonEl = document.getElementById("joke-form");
var chuckJokesEl = document.getElementById("chuck-jokes");
var chuckJokesHeader = document.getElementById("chuck-header");
var chuckJokesContainerEl = document.querySelector("#chuck-jokes-container");

// event handler for search form/box
var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var username = nameInputEl.value.trim();

  if (username) {
    getNameAge(username);
    // clear old content
    // repoContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    alert("");
  }
};

// fetch age/name information
var getNameAge = function (name) {
  var apiUrl = "https://api.genderize.io?name=" + name; 
    // https://api.agify.io?name=

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

// event handler for joke form/box
var jokeSubmitHandler = function (event) {
  event.preventDefault();
  getChuckJokes();
  // console.log(event); <-- verify click event happened
};

var displayChuckJokes = function (chuckJokes) {
  console.log(chuckJokes);

  // clear old content
  chuckJokesContainerEl.textContent = "";
};

var getChuckJokes = function () {
  var apiURL = "https://api.chucknorris.io/jokes/random";

  fetch(apiURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        let joke = document.createElement("p");
        joke.innerText = data.value;

        chuckJokesHeader.append(joke);
      });
    }
  });
};

userFormEl.addEventListener("submit", formSubmitHandler);
chuckJokesButtonEl.addEventListener("click", jokeSubmitHandler);
