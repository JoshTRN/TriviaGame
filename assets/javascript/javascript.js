/*===================Variables===================*/

var correctGuesses = 0
var incorrectGuesses = 0
var unanswered = 0
var counter = 60

var myVar;

var answers = ['Cogito Ergo Sum', 'Hard Problem', 'Pyhhro', 'Edmund Gettier', 'Why should we think the future will resemble the past?', 'Platonic Theory']
var newList = []


/*==================Functions===================*/

function countdown () {
	counter--
	$('#counter').text(counter);

	if (counter == 0) {
		$('#questions').empty()
		clearInterval(myVar);
		compareAnswers();
		displayResults();
	}
}

function timer () {
	myVar = setInterval(countdown, 1000);
}


function compareAnswers () {
	for (var i = 0; i < answers.length; i++) {
		if (newList[i] === undefined) {
			unanswered++
		}
		else if ((answers[i] === newList[i])) {
			correctGuesses++
		}
		else {
			incorrectGuesses ++
		}
	}
}

function displayResults() {

	$('#questions').append('<h3>Correct Guesses: ' + correctGuesses + '</h3>')
	$('#questions').append('<h3>Incorrect Guesses: ' + incorrectGuesses + '</h3>')
	$('#questions').append('<h3>Unanswered: ' + unanswered + '</h3>')
}

timer()



/*===================On Click Events===========*/

$('#results').click(function () {
	$('#questions').empty();
	clearInterval(myVar);
	compareAnswers();
	displayResults();


})

$("input[type='radio']").click(function(){

	var qnum = $(this).attr('name')

	var answer = $(this).attr('data-name')

	console.log(qnum)
	console.log(answer)

	newList[qnum -1] = answer

	console.log(newList)


});






