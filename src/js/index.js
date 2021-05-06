console.log("Connected");

import {questions} from "./questions"

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

loadQuiz(questions, quizContainer, resultsContainer, submitButton);

    function loadQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        let output = [];
        let answers;
        let letter;

    for(var i=0; i<questions.length; i++){
      
    answers = [];

    for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }
        
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    let choice = '';
    let numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      choice = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(choice===questions[i].correctAnswer){
        numCorrect++;
      }
      else{
        console.log('?')
      }
    }
    resultsContainer.innerHTML = numCorrect + ' / ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}