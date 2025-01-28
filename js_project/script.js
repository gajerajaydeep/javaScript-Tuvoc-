//questions
const quizDB = [
    {
      q: "Q1. Full form of HTML",
      a: "Hyper Text Markup Language",
      b: "Hyer Text Lan",
      c: "Hypr Markup Lan",
      d: "123",
      ans: "ans1"
    },
    {
      q: "Q2. Full form of CSS",
      a: "Hyer Text Markup Lan",
      b: "Cascading Style Sheet",
      c: "123",
      d: "Hyper Text Markup Language",
      ans: "ans2"
    },
    {
      q: "Q3. Full form of JSX",
      a: "Hyer Text Markup Lan",
      b: "Hyer Text Lan",
      c: "JS XML",
      d: "123",
      ans: "ans3"
    }
  ];
  
  //DOM selectors
  const question = document.querySelector(".question");
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const submit = document.querySelector("#submit");
  const answers = document.querySelectorAll(".answer");
  const restart = document.querySelector('.restart');
  
  const showScore = document.querySelector(".show-score");
  const timer = document.querySelector(".timer");
  
  let questionCount = 0;
  let score = 0;
  
  const QUESTION_TIMEOUT = 1000; 
  
  //timer function
  function startTimer() {
    let timeOut = 15; 
    let myInterval = setInterval(function () {
      timeOut--;
  
      if (timeOut === 0) {
        alert("Time's up!");
        clearInterval(myInterval);
        nextQuestion();
      }
  
      timer.innerText = timeOut;
    }, QUESTION_TIMEOUT);
  }
  
  //loding questions function
  function loadQuestion() {
    if (questionCount < quizDB.length) {
      const questionList = quizDB[questionCount];
      question.innerHTML = questionList.q;
      option1.innerText = questionList.a;
      option2.innerText = questionList.b;
      option3.innerText = questionList.c;
      option4.innerText = questionList.d;
      startTimer(); 
    } else {
        alert(`Your Score is ${score} / ${quizDB.length}`)
    //   showScore.innerText = `Your Score is ${score} / ${quizDB.length}`;
    //   restart.style.display = "block"; 
    }
  }
  
  function getCheckedAnswer() {
    let answer;
    answers.forEach(function (currentAnsElem) {
      if (currentAnsElem.checked) {
        answer = currentAnsElem.id;
      }
    });
    return answer;
  }
  
  function nextQuestion() {
    questionCount++;
    loadQuestion();
    answers.forEach(function (currentAnsElem) {
        //reset all past radio button data
      currentAnsElem.checked = false; 
    });
  }
  
  submit.addEventListener('click', function () {
    const checkedAnswer = getCheckedAnswer();
  
    if (checkedAnswer === quizDB[questionCount].ans) {
      score++;
    }
  
    nextQuestion();
  });
  
  loadQuestion();

