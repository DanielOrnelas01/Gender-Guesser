var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var state = nameInputEl.value.trim();

  if (state) {
    // renderRecents();
    // clear old content
    nameInputEl.value = "";
	console.log(state);
  } else {
    alert("Please enter a State!");
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);