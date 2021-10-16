const quizDB = [
  {
    question: "Q1: Age at which PCOS is commonly diagnosed is",
    a: "18 to 44 years",
    b: "Less than 13 years",
    c: "More than 50 years",
    d: "All of the above",
    ans: "ans1"
  },
  {
    question: "Q2: The major reason for women with PCOS to suffer from infertility is",
    a: "Obesity",
    b: "Anovulatory menstrual cycles",
    c: "Excess insulin levels",
    d: "All of the above",
    ans: "ans2"
  },
  {
    question: "Q3: Women suffering from PCOS are at an increased risk of developing",
    a: "Diabetes",
    b: "Dyslipidemias-elevated cholesterol and lipid abnormalities",
    c: "Endometrial cancer- uterine cancer",
    d: "All of the above",
    ans: "ans4"
  },
  {
    question: "Q4: Diagnostic imaging tests done in suspected PCOS include",
    a: "Pelvic ultrasound",
    b: "Transvaginal ultrasound",
    c: "MRI",
    d: "All of the above",
    ans: "ans4"
  },
  {
    question: "Q5: Which of the following listed below occurs in PCOS are attributable to hyperandrogenism-elevated testosterone levels",
    a: "Weight loss inspite of increased apetite",
    b: "Excess body and facial hair",
    c: "Tall stature",
    d: "None of the above",
    ans: "ans2"
  },
  {
    question: "Q6: PCOS was first described by",
    a: "Louis Pasteur",
    b: "Stein and Levinthal",
    c: "Pavlov",
    d: "None of the above",
    ans: "ans2"
  },
  {
    question: "Q7: The drug of choice to treat PCOS associated with infertility is",
    a: "Clomiphene Citrate",
    b: "Metformine",
    c: "Letrozole",
    d: "All of the above",
    ans: "ans1"
  },
  {
    question: "Q8: The diagnostic criterea employed for the diagnosis of PCOS is termed",
    a: "Framingham criterea",
    b: "Nottingham criterea",
    c: "Rotterdam criteria",
    d: "None of the above",
    ans: "ans3"
  },
  {
    question: "Q9: The choice of treatment for symptoms of Androgen excess such as excess body and facial hair, is which of the following",
    a: "Thyroxine",
    b: "Oral contraceptive pills",
    c: "Metformin",
    d: "All of the above",
    ans: "ans2"
  }

  ];
const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2  = document.querySelector('#option2');
const option3  = document.querySelector('#option3');
const option4  = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
  if(curAnsElem.checked){
    answer = curAnsElem.id;
  }
  });

    return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click',() => {
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer == quizDB[questionCount].ans){
    score++;
  };

  questionCount++;

  deselectAll();

  if(questionCount < quizDB.length){
    loadQuestion();
  }else{
    showScore.innerHTML = `
    <h3> You Scored ${score}/ ${quizDB.length} </h3>

    `;

    showScore.classList.remove('scoreArea');
  }

});
