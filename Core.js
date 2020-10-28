//array of questions, answer choices & correct answers.
const questions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: [
            {text: "strings", correct: false },
            {text: "booleans", correct: true},
            {text: "alerts", correct: false},
            {text: "numbers", correct: false}
        ]
    },
    
    {
        question: "The condition in an if/else statement is enclosed within...",
        answers: [
            {text: "curly brackets", correct: false },
            {text: "quotes", correct: false},
            {text: "paranthesis", correct: true},
            {text: "square brackets", correct: false}
        ]
    },
    
    {
        question: "Arrays in Javascript can be used to store",
        answers: [
            {text: "numbers & strings", correct: false },
            {text: "booleans", correct: false},
            {text: "other arrays", correct: false},
            {text: "all of the above", correct: true}
        ]
    },
];


// When i click the start button...
var quizStartButton = document.getElementById("startbutton")

quizStartButton.addEventListener("click", function(){
//Timer will begin counting down
    countdown()
//First quiz question will pop up
    nextQuestion();
  });

// timer starts on click...

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
// Interval/quiz ends when timer hits 0 
    if (seconds <= 0) clearInterval(countdown);
}, 1000);


// First question pops up on click... 
function nextQuestion() {
//loop through the array of questions
    for (questionsLoop = 0; i < questions.length; questionsLoop++) {
        // in html <p id=quiz>
     //stuck getting it to loop in html   
      }
}

