console.log("Connected");

// import {questions} from "./questions"

const startButton = document.getElementById("start-btn");
const containerElement = document.getElementById("container");
const questionContainerElement = document.getElementById("questionContainer");
const titleElement = document.getElementById("title");

startButton.addEventListener("click", start);

// $('#start-btn').on('click', function(){
//   console.log('Clicked')
// })

function start() {
  console.log("started");
  startButton.classList.add("hide");
  containerElement.classList.remove("hide");
  questionContainerElement.classList.remove("hide");
  titleElement.classList.add("hide");
  game.start();
}

let game = {
  correct: 0,
  incorrect: 0,
  counter: 20,

  countdown: function () {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },

  start: function () {
    const timer = setInterval(game.countdown, 1000);
    $("#questionContainer").prepend(
      "<h2> Time Remaining: <span id= 'counter'>20</span>seconds</h2>"
    );
    for (var i = 0; i < questions.length; i++) {
      $("#questionContainer").append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].choices.length; j++) {
        $("#questionContainer").append(
          "<h2><input type = 'radio' name='question- " +i +"'value='</h2>" +questions[i].choices[j] +"'>" +questions[i].choices[j]
        );
      }
    }
    //appends each question with radio button with answer, value within button
  },

  done: function () {
    $.each($('input[name="questions- 0"]:checked'), function () {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="questions- 1"]:checked'), function () {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="questions- 2"]:checked'), function () {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="questions- 3"]:checked'), function () {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="questions- 4"]:checked'), function () {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="questions- 5"]:checked'), function () {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="questions- 6"]:checked'), function () {
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
    $("#questionContainer h2").remove();
    $("#questionContainer").append("<h3>Quiz Over!</h3>");
    $("#questionContainer").append(
      "<h3>Correct Answers: " + this.correct + "</h3>"
    );
    $("#questionContainer").append(
      "<h3>Incorrect Answers: " + this.incorrect + "</h3>"
    );
    $("#questionContainer").append(
      "<h3>Unanswered Questions: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  },
};

let questions = [
  {
    question: "What is 1+1?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "2",
  },
  {
    question: "Which is not a fruit?",
    choices: ["Carrot", "Apple", "Orange", "Banana"],
    correctAnswer: "Carrot",
  },
  {
    question: "How many letters are in One?",
    choices: ["1", "3", "5", "8"],
    correctAnswer: "3",
  },
  {
    question: "Which of the following is a mammal?",
    choices: ["Baboon", "Snake", "Fish", "Birds"],
    correctAnswer: "Baboon",
  },
  {
    question: "What is the default flavor of ice cream?",
    choices: ["Milk", "Chocolate", "Mint", "Vanilla"],
    correctAnswer: "Vanilla",
  },
  {
    question: "How do you check if a watermelon is ripe?",
    choices: [
      "Check the weight",
      "Look for the yellow spot",
      "Spank it",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "What is H2O?",
    choices: ["Water", "Oxygen", "Hydrogen", "Carbon Dioxide"],
    correctAnswer: "Water",
  },
];
