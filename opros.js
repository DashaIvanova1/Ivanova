var questions = [ 

	{

		question: "Какой знак восточного гороскопа следует за знаком Дракона?",

		answer: "змея"

	},

	{

		question: "Где, если верить пословице, любопытной Варваре нос оторвали?",

		answer: "на базаре"

	},

	{

		question: "Как называют период времени, когда солнце в северных широтах не опускается за горизонт?",

		answer: "полярный день"

	},

	{

		question: "Какие семьи, по мнению Л. Н. Толстого, похожи друг на друга?",

		answer: "счастливые"

	},

	{

		question: "Какой цвет получается при смешении синего и красного?",

		answer: "фиолетовый"

	}

]
for(i = 0; i < questions.length; i++) {

	q = questions[i].question

	document.getElementById('question' + [i]).textContent = q

}

function testResults() {

	var correct = 0;

	var incorrect = 0;

	for(i = 0; i < questions.length; i++) {	

		var answer = questions[i].answer

		var guess = document.getElementById('answer' + [i]).value

		var questionSpot = document.getElementById('question' + [i])

		if(answer == guess) {

			questionSpot.className = 'correct'

			correct++

		} else {

			questionSpot.className = 'incorrect'

			incorrect++

		}

	}

	document.getElementById('correct').textContent = correct

	document.getElementById('incorrect').textContent = incorrect

}