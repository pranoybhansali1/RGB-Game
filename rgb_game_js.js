var colors = generate_colors(6);

var squares = document.querySelectorAll(".square");
var picked_color = pick_color();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("answer");
var h1change = document.querySelector("h1");

var but_nc = document.querySelector("#new_colors");
but_nc.addEventListener("click", function() {
		but_nc.textContent = "New Colors";
		colors = generate_colors(6);
		picked_color = pick_color();
		colorDisplay.textContent = picked_color;
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
		}
		h1change.style.backgroundColor = "#232323";
		message.textContent = "";
	});

var but_easy = document.querySelector("#easy");
var but_hard = document.querySelector("#hard");

but_easy.addEventListener("click", function(){
	colors = generate_colors(3);
	picked_color = pick_color();
	colorDisplay.textContent = picked_color;
	but_hard.classList.remove("selected");
	but_easy.classList.add("selected");
	for(var i = 3; i < 6; i++){
		squares[i].style.display = "none";
	}
});

but_hard.addEventListener("click", function(){
	but_easy.classList.remove("selected");
	but_hard.classList.add("selected");
	for(var i = 0; i < 6; i++){
		squares[i].style.display = colors[i];
		squares[i].style.display = "block";
	}
});

colorDisplay.textContent = picked_color;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === picked_color) {
			change_colors(clickedColor);
			message.textContent = "Correct..!!";
			h1change.style.backgroundColor = picked_color;
			but_nc.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "WRONG!!Try Again..";
		}
	});
}

function change_colors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pick_color(){
	var random_color = Math.floor(Math.random() * colors.length);
	return colors[random_color];
}

function generate_colors(n){
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr.push(random_color());
	}
	return arr;
}

function random_color(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}