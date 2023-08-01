(function(){
  clearTimeout(timer);
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
	let numWrong = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer == currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect+=2;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
	  
      // if answer is wrong or blank
	  }else
	  {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `You have scored ${numCorrect} points out of 20 points.`
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "(1)->To start off with an easier one..which movie is inspired by Mario puzo's Godfather series?",
      answers: {
        a: "gunaa",
        b: "mahanadhi",
        c: "thevar magan",
		    d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "(2)->Which was the first movie Kamal worked as a director?",
      answers: {
        a: "chachi 420",
        b: "hey ram",
        c: "sankarlal",
		    d: "virumandi"
      },
      correctAnswer: "c"
    },
    {
      question: "(3)->Which Kamal's movie is inspired by the english movie planes,trains and automobiles?",
      answers: {
        a: "magalir mattum",
        b: "sathileelavathi",
        c: "mahanadhi",
        d: "anbe sivam"
      },
      correctAnswer: "d"
    },
	{
	   question: "(4)->Kamal is often compared to tom hanks,the scene in which he rescues hostages in aalavandan is a rip off from which hanks movie?",
	   answers:{
		   a: "the terminal",
		   b: "catch me if u can",
		   c: "saving private ryan",
		   d: "a league of their own"
	   },	
	   correctAnswer: "c" 	
	},
	{
		question: "(5)->In which movie did kamal write his first song?",
		answers:{
			a:"panchathanthiram",
			b:"pammal k sambandham",
			c:"virumandi",
			d:"thenali"
		},
		correctAnswer:"b"
	},
	{
		question: "(6)->How many national awards have been won by Kamal Haasan?",
		answers:{
			a: "1",
			b: "2",
			c: "3",
			d: "4"
		},
		correctAnswer:"d"
	},
	{
		question: "(7)->How many Filmfare awards have been won by Kamal Haasan?",
		answers:{
			a: "26",
			b: "10",
			c: "19",
			d: "7"
		},
		correctAnswer:"c"
	},
	{
		question: "(8)->When did Kamal Haasan start his career as a child artist?",
		answers:{
			a: "1960",
			b: "1962",
			c: "1964",
			d: "1970"
		},
		correctAnswer:"a",
	},
	{
		question: "(9)->What is the name of the debut movie in which Kamal Hassan was a lead actor?",
		answers:{
			a:"Theri",
			b:"Singham",
			c:"Apoorva Ragnangal",
			d:"Sarainodu"
		},
		correctAnswer: "c"
	},
	{
		question: "(10)->When did Kamal Haasan win the Padma Shri award?",
		answers:{
			a:"1987",
			b:"1990",
			c:"1967",
			d:"2000"
		},
		correctAnswer:"b"
	},
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();