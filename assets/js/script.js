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
// get modal element
var modal = document.getElementById("simpleModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// event handler for search form/box
var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var username = nameInputEl.value.trim();

  let name = JSON.parse(localStorage.getItem("name")) || [];

  const nameEntered = {
    name: username,
  };

  console.log("newName in saveName", nameEntered);

  name.push(nameEntered);
  console.log("name entered", name);
  localStorage.setItem("name", JSON.stringify(name));

  if (username) {
    getNameAge(username);
    // clear old content
    nameInputEl.value = "";
    return username;
  } else {
    // alert("");
    // listen for click
    modalBtn.addEventListener("click", openModal);
    // listen for close click
    closeBtn.addEventListener("click", closeModal);
    // outside click
    window.addEventListener("click", outsideClick);

    // function to open modal
    function openModal() {
      // console.log(123);
      modal.style.display = "block";
    }

    // function to close modal
    function closeModal() {
      // console.log(123);
      modal.style.display = "none";
    }

    // function to close modal if outside click
    function outsideClick(e) {
      // console.log(123);
      if (e.target == modal) {
        modal.style.display = "none";
      }
    }

    // get modal element
    var modal = document.getElementById("simpleModal");
    // get open modal button
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
        userName.innerText =
          "Hello " +
          data.name +
          "," +
          " we researched your name and it appears with a " +
          data.probability * 100 +
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
