// code based on: http://bl.ocks.org/weiglemc/6185069

///////////////////////
// DECLARE VARIABLES //
///////////////////////

//margin around the scatterplot
var margin = {top: 30, right: 20, bottom: 30, left: 20};

//width + height of scatterplot
var width = 600 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

// variable to store the x positions and y positions of each point
// var xpos, ypos;

//////////////////////
// APPEND SVG GRAPH //
//////////////////////

//variable that holds the svg graph
// var svg = d3.select(".graph").append("svg")
d3.select("#graph").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	;

///////////////////
// MAKE MEASURES //
///////////////////

d3.select("svg").append("rect")
	.attr("x", margin.top)
	.attr("y", height/2 + margin.top + 2)
	.attr("width", width)
	.attr("height", 3)
	.attr("fill", "#000");

d3.select("svg").append("rect")
	.attr("x", width/2 + margin.left - 6)
	.attr("y", margin.top)
	.attr("width", 3)
	.attr("height", height)
	.attr("fill", "#000");




// for (i = 0; i < 12; i++) {
// 	d3.select("svg").append("rect")
// 	.attr("x", margin.left)
// 	.attr("y", margin.top + i * 50)
// 	.attr("width", width - 10)
// 	.attr("height", 1)
// 	.attr("fill", "#D6D6D6");
// }

// for (i = 0; i < 12; i++) {
// 	d3.select("svg").append("rect")
// 	.attr("x", margin.left + i * 50)
// 	.attr("y", margin.top)
// 	.attr("width", 1)
// 	.attr("height", height + 10)
// 	.attr("fill", "#D6D6D6");
// }

/////////////////
// MAKE LABELS //
/////////////////

// d3.select("svg").append("text")
// 	.css("transform", "rotate(45deg)");


//////////////
// ADD DATA //
//////////////

// load the data into d3
d3.csv("https://docs.google.com/spreadsheets/d/1rU3NGfj791J1F79Xj4aGyx-6WiD03F8SZV5N_22AZ00/pub?output=csv", function(error, data) {



	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_1_feel * 50 + margin.left;
		var ypos = data[i].scent_1_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "red")
			.style("opacity", "0.8")
			.attr("class", "scent_1_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_2_feel * 50 + margin.left;
		var ypos = data[i].scent_2_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "salmon")
			.style("opacity", "0.8")
			.attr("class", "scent_2_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_3_feel * 50 + margin.left;
		var ypos = data[i].scent_3_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "gold")
			.style("opacity", "0.8")
			.attr("class", "scent_3_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_4_feel * 50 + margin.left;
		var ypos = data[i].scent_4_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "yellowgreen")
			.style("opacity", "0.8")
			.attr("class", "scent_4_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_5_feel * 50 + margin.left;
		var ypos = data[i].scent_5_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "green")
			.style("opacity", "0.8")
			.attr("class", "scent_5_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_6_feel * 50 + margin.left;
		var ypos = data[i].scent_6_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "cornflowerblue")
			.style("opacity", "0.8")
			.attr("class", "scent_6_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_7_feel * 50 + margin.left;
		var ypos = data[i].scent_7_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "blue")
			.style("opacity", "0.8")
			.attr("class", "scent_7_dot");
	}

	for(var i = 0; i < data.length; i++) {
		var xpos = data[i].scent_8_feel * 50 + margin.left;
		var ypos = data[i].scent_8_strength * 50 + margin.top;
		d3.select("svg").append("circle")
			.attr("cx", xpos)
			.attr("cy", ypos)
			.attr("r", 5)
			.style("fill", "purple")
			.style("opacity", "0.8")
			.attr("class", "scent_8_dot");
	}

});


/////////////////////////////////////
// TURN ON CERTAIN PIECES OF GRAPH //
/////////////////////////////////////

//new try
var isClicked1 = false;
var isClicked2 = false;
var isClicked3 = false;
var isClicked4 = false;
var isClicked5 = false;
var isClicked6 = false;
var isClicked7 = false;
var isClicked8 = false;

$("#clearButton").click(function() {
	isClicked1 = false;
	isClicked2 = false;
	isClicked3 = false;
	isClicked4 = false;
	isClicked5 = false;
	isClicked6 = false;
	isClicked7 = false;
	isClicked8 = false;
	$(".scent_1_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_2_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_3_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_4_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_5_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_6_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_7_dot").css("opacity", "0.8")
		.attr("r", 5);
	$(".scent_8_dot").css("opacity", "0.8")
		.attr("r", 5);
});

$("#button1").click(function() {
	isClicked1 = !isClicked1;
	dimDots();
});

$("#button2").click(function() {
	// console.log(isClicked2);
	isClicked2 = !isClicked2;
	dimDots();
});

$("#button3").click(function() {
	console.log(isClicked3);
	isClicked3 = !isClicked3;
	dimDots();
});

$("#button4").click(function() {
	isClicked4 = !isClicked4;
	dimDots();
});

$("#button5").click(function() {
	isClicked5 = !isClicked5;
	dimDots();
});

$("#button6").click(function() {
	isClicked6 = !isClicked6;
	dimDots();
});

$("#button7").click(function() {
	isClicked7 = !isClicked7;
	dimDots();
});

$("#button8").click(function() {
	isClicked8 = !isClicked8;
	dimDots();
});


function dimDots() {
	if (isClicked1 === false) {
		$(".scent_1_dot").css("opacity", "0.1")
			.attr("r", 5);
			// .attr("r", 5);
	} else {
		$(".scent_1_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked2 === false) {
		$(".scent_2_dot").css("opacity", "0.1")
			.attr("r", 5);
			
	} else {
		$(".scent_2_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked3 === false) {
		$(".scent_3_dot").css("opacity", "0.1")
			.attr("r", 5);
	} else {
		$(".scent_3_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked4 === false) {
		$(".scent_4_dot").css("opacity", "0.1")
			.attr("r", 5);
	} else {
		$(".scent_4_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked5 === false) {
		$(".scent_5_dot").css("opacity", "0.1")
			.attr("r", 5);
	} else {
		$(".scent_5_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked6 === false) {
		$(".scent_6_dot").css("opacity", "0.1")
			.attr("r", 5);
	} else {
		$(".scent_6_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked7 === false) {
		$(".scent_7_dot").css("opacity", "0.1")
			.attr("r", 5);
	} else {
		$(".scent_7_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if (isClicked8 === false) {
		$(".scent_8_dot").css("opacity", "0.1")
			.attr("r", 5);
	} else {
		$(".scent_8_dot").css("opacity", "0.8")
			.attr("r", 10);
	}

	if ((isClicked1 === false) &&
		(isClicked2 === false) &&
		(isClicked3 === false) &&
		(isClicked4 === false) &&
		(isClicked5 === false) &&
		(isClicked6 === false) &&
		(isClicked7 === false) &&
		(isClicked8 === false)) {

		$(".scent_1_dot").css("opacity", "0.8");
		$(".scent_2_dot").css("opacity", "0.8");
		$(".scent_3_dot").css("opacity", "0.8");
		$(".scent_4_dot").css("opacity", "0.8");
		$(".scent_5_dot").css("opacity", "0.8");
		$(".scent_6_dot").css("opacity", "0.8");
		$(".scent_7_dot").css("opacity", "0.8");
		$(".scent_8_dot").css("opacity", "0.8");
	}
}






