console.log("Connected");

// import {questions} from "./questions"

const startButton = document.getElementById('start-btn')
const containerElement = document.getElementById('container')
const questionContainerElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')

let currentQuestionsIndex

startButton.addEventListener('click', start)

function start() {
  console.log('started')
  startButton.classList.add('hide')
  containerElement.classList.remove('hide')
  questionContainerElement.classList.remove('hide')
  currentQuestionsIndex = 0
  showQuestionsContainer()
}

function showQuestionsContainer(question) {
  showQuestions(currentQuestionsIndex)
  questionElement.innertext = question.question
}

const questions = [
  {
    question: 'What is 1+1',
    choices: [
      { Text: '2', correct: true},
      { text: '3', correct: false}
    ]
  }
]