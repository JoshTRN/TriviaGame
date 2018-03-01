/*===================Variables===================*/

var correctGuesses = 0
var incorrectGuesses = 0
var unanswered = 0
var counter = 60

/*===================Objects====================*/

var questions = [{
	question: 'What was DeCartes famous argument?',
	answer:  'Cogito ergo Sum'
}, {
	question: 'What problem is David Chalmers Famous For?',
	answer: 'Hard Problem' 
}, {
	question: 'Who was the so-called founder of skeptical philosophy?',
	answer: 'Pyhhro'
}, {
	question: 'What is the name of the philosopher who changed the way we think about epistemology',
	answer: 'Edmund Gettier'
}, {
	question: 'The problem of induction is...?',
	answer: 'Why should we think the future will resemble the past?'
}, {
	question: 'Which of these is NOT a theory of truth?',
	answer: 'Platonic Theory'
}]


/*==================Functions===================*/

function countdown () {
	counter--
	$('#counter').text(counter);
}

function timer () {
	setInterval(countdown, 1000);
	console.log(counter);
}

timer()

/*===================On Click Events===========*/

$('#calculate').click(function () {

})