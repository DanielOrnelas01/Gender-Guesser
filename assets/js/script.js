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

// alchol api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
		'X-RapidAPI-Key': '90378b7530msh7d82c41a463e11ep1da2d8jsne90cccb035d1'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/search.php?i=vodka', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

userFormEl.addEventListener("submit", formSubmitHandler);