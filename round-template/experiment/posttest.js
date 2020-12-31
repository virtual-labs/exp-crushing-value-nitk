
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "W<sub>1</sub> is Total weight of sample, W<sub>2</sub> is weight of sample passing 2.36mm sieve, W<sub>3</sub> is weight of sample retained on 2.36mm sieve, then aggregate crushing value is_____",
      answers: {
        a: "(W<sub>2</sub>/W<sub>1</sub>) * 100",
        b: "(W<sub>3</sub>/W<sub>1</sub>) * 100",
        c: "(W<sub>2</sub>/W<sub>3</sub>) * 100",
        d: "(W<sub>1</sub>/W<sub>3</sub>) * 100"
      },
      correctAnswer: "a"
    },

    {
      question: "Load applied by Compression Testing Machine in the test is?",
      answers: {
        a: "4 tonnes per min",
        b: "52 tonnes per min",
        c: "6 tonnes per min",
        d: "40 tonnes per min"
      },
      correctAnswer: "a"
    },

    {
      question: "In crushing test, the aggregate used is passing through ____mm sieve and retained on ____mm.",
      answers: {
        a: "20mm, 16mm",
        b: "16mm, 12.5mm",
        c: "12.5mm, 10mm",
        d: "10mm, 4.75mm"
      },
      correctAnswer: "c"
    },
    {
      question: "The aggregate with crushing value below 30 % is suitable for withstanding heavy load?",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Aggregate crushing value provides the relative measure of resistance to",
      answers: {
        a: "Crushing under gradual increasing load",
        b: "Crushing under sudden loads",
        c: "Crushing under dynamic loads",
        d: "None of the above"
      },
      correctAnswer: "a"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
