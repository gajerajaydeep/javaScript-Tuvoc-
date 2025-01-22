const quizeDB = [
    {
        q: "Q1. full form of HTML",
        a: "hyper text markup language",
        b: "hyer text  lan",
        c: "hypr  markp lan",
        d: "123",
        ans: "ans1"
    },
    {
        q: "Q2. full form of CSS",
        a: "hypr text markp lan",
        b: "cascading styles sheet",
        c: "123",
        d: "hyper text markup language",
        ans: "ans2"
    }, {
        q: "Q3. full form of jsx",
        a: "hypr text markp lan",
        b: "hyer text  lan",
        c: "js XML",
        d: "123",
        ans: "ans3"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector("#submit")
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector(".show-score")

let questionCount = 0;
let score = 0;
let timeout;
const QUESTION_TIMEOUT = 1000;

function loadQuestion() {

    const questionList = quizeDB[questionCount];
    question.innerHTML = questionList.q;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
clearTimeout(timeout);
timeout = setTimeout(() => {
    alert("Time's up for this question!");
    moveToNextQuestion();
}, QUESTION_TIMEOUT);
loadQuestion();


const getCheckAnswer = function () {
    let answer;

    answers.forEach(function (curentAnsElem) {
        if (curentAnsElem.checked) {
            answer = curentAnsElem.id;

        }
    });
    return answer;


};

submit.addEventListener('click', function () {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizeDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    if (questionCount < quizeDB.length) {
        loadQuestion()
    } else {
        showScore.innerText = alert(`Your Score is ${score} / ${quizeDB.length} `)

    }

    clearTimeout(timeout);
    moveToNextQuestion();

});

loadQuestion();