/*===================Variables===================*/

var correctGuesses = 0
var incorrectGuesses = 0
var unanswered = 0
var counter = 60

var myVar;

var answers = ['Cogito ergo Sum', 'Hard Problem', 'Pyhhro', 'Edmund Gettier', 'Platonic Theory']
var newList = []


/*==================Functions===================*/

function countdown () {
	counter--
	$('#counter').text(counter);

	if (counter == 0) {
		$('#questions').empty()
		clearInterval(myVar)
	}
}

function timer () {
	myVar = setInterval(countdown, 1000);
}


function getUserAnswers() {
	
}

timer()

$("input[type='radio']").click(function(){


            var answer = $('input:checked').parent().text()

            console.log(answer)
            
            newList.push(answer)

            console.log(newList)
});



/*===================On Click Events===========*/

$('#calculate').click(function () {

})