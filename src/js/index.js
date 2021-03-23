console.log("Connected");

import { questions } from "./questions";

const startButton = document.getElementsById("start-btn");
const questionContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function startQuiz() {
  console.log("Quiz go");
  startButton.classlist.add("hide");
  questionContainerElement.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {}

function selectAnswer() {}
