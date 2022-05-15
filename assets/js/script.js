var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var chuckJokesButtonEl = document.getElementById("joke-form");
var chuckJokesEl = document.getElementById("chuck-jokes");
var chuckJokesHeader = document.getElementById("chuck-header");
var chuckJokesContainerEl = document.querySelector("#chuck-jokes-container");
var genderPredictorContainerEl = document.querySelector(
  "#gender-predictor-container"
);
var genderPredictor = document.getElementById("gender-predictor");

// event handler for search form/box
var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var username = nameInputEl.value.trim();

  if (username) {
    getNameAge(username);
    localStorage.setItem("usernameentered", JSON.stringify(username));
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
    if (response.ok) {
      response.json().then(function (data) {
        console.log("genderize info", data);

        let userName = document.createElement("p");
          userName.innerText = data.name +
          " we researched your name and it appears with a " +
          data.probability +
          "% probability, that you are a " +
          data.gender +
          ".";
        console.log(userName);

        genderPredictor.append(userName);
        // genderPredictorContainerEl.append(userName);
      });
    }
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
