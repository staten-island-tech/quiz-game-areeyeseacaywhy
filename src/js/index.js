console.log("Connected");

// import {questions} from "./questions"

const containerElement = document.getElementById("container");
const questionContainerElement = document.getElementById("questionContainer");
const titleElement = document.getElementById("title");
const startbtnElement = document.getElementById("start");

// startButton.addEventListener("click", start);

$('#start').on('click', function () {
  game.start();
});

var questions = [
  {
    question: 'What is 1+1?',
    answers: ['2', '3', '4', '5'],
    correctAnswer: '2'
  },
  {
    question: 'Which is not a fruit?',
    answers: ['Carrot', 'Apple', 'Orange', 'Banana'],
    correctAnswer: 'Carrot'
  },
  {
    question: 'How many letters are in One?',
    answers: ['1', '3', '5', '8'],
    correctAnswer: '3'
  },
  {
    question: 'Which of the following is a mammal?',
    answers: ['Baboon', 'Snake', 'Fish', 'Birds'],
    correctAnswer: 'Baboon'
  },
  {
    question: 'What is the default flavor of ice cream?',
    answers: ['Milk', 'Chocolate', 'Mint', 'Vanilla'],
    correctAnswer: 'Vanilla'
  },
  {
    question: 'How do you check if a watermelon is ripe?',
    answers: ['Check the weight', 'Look for the yellow spot', 'Spank it', 'All of the above',],
    correctAnswer: 'All of the above'
  },
  {
    question: 'What is H2O?',
    answers: ['Water', 'Oxygen', 'Hydrogen', 'Carbon Dioxide'],
    correctAnswer: 'Water'
  }
];


var game = {
  correct: 0,
  incorrect: 0,
  counter: 10,
  countdown: function () {
      game.counter--;
      $('#counter').html(game.counter);
      if (game.counter <= 0) {
          console.log("Time is up!");
          game.done();
      }
  },

  start: function () {
    console.log("started");
    timer = setInterval(game.countdown, 1000);
    $('#questionContainer').prepend('<h2>Time Remaining: <span id="counter">10</span> seconds </h2>');
    $('#start').remove();
    containerElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    titleElement.classList.add("hide");
    for (var i = 0; i < questions.length; i++) {
      $('#questionContainer').append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#questionContainer').append("<h2><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
      }
    }
    // var startbtn = document.getElementById("start");
    // startbtn.parentNode.removeChild(startbtn);
    //appends each question with radio button with answer, value within button
  },

  done: function () {
    $.each($('input[name="question-0"]:checked'),
    function () {
        if ($(this).val() == questions[0].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name="question-1"]:checked'),
    function () {
        if ($(this).val() == questions[1].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name="question-2"]:checked'),
    function () {
        if ($(this).val() == questions[2].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name="question-3"]:checked'),
    function () {
        if ($(this).val() == questions[3].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name="question-4"]:checked'),
    function () {
        if ($(this).val() == questions[4].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name="question-5"]:checked'),
    function () {
        if ($(this).val() == questions[5].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name="question-6"]:checked'),
    function () {
        if ($(this).val() == questions[6].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
        this.result();

  },
    result: function () {
      clearInterval(timer);
      $('#questionContainer h2').remove();
      $('#questionContainer').append("<h3>Quiz Over!</h3>");
      $('#questionContainer').append(
        "<h3>Correct Answers:" +this.correct+ "</h3>"
      );
      $('#questionContainer').append(
        "<h3>Incorrect Answers:" +this.incorrect+ "</h3>"
      );
      $('#questionContainer').append(
        "<h3>Unanswered:" + (questions.length - (this.incorrect + this.correct)) + "</h3>"
      );
    },
  };
