

// const quizContainer = document.getElementById("quiz");
// const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const userName = document.getElementById("userName");
const welcomeText = document.querySelector("span");
const restartGame = document.getElementById("newGame");
// const startButton = document.getElementById("start");
const questioN = document.getElementById("questioN")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const answers = document.querySelectorAll('.answer')
const showScore = document.getElementById("showScore")

// userName.addEventListener("input", () => {
//   welcomeText.innerText = userName.value;
// });

const questions = [
  {
    question: "In what town does the show primarily take place?",

    a: "Rosewood",
    b: "Mystic Falls",
    c: "New Orleans",
    d: "Forks"

    ,
    ans: "ans2"
  },
  {
    question: "What is the name Stefan's best friend, who appears in season one and is promptly killed? ",

    a: "Lexi",
    b: "Klaus",
    c: "Alaric",
    d: "Matt",

    ans: "ans1"
  },
  {
    question: "What is the herb called that can protect you from being compelled by a vampire? ",

    a: "Vibranium",
    b: "Mugwort",
    c: "Vervain",
    d: "Molybdenum",

    answer: "ans3"
  },
  {
    question: "Who is Stefan's evil doppelgänger? ",

    a: "Klaus",
    b: "Silas",
    c: "Kol",
    d: "Elijah",

    ans: "ans2"

  },
  {
    question: "Who saves Elena from the car accident that killed her parents? ",

    a: "Caroline",
    b: "Damon",
    c: "Stefan",
    d: "Bonnie",

    ans: "ans3"
  },
  {
    question: "What are the names of Alaric's twin daughters? ",

    a: "Vanessa and Lizzie",
    b: "Lizzie and Caroline",
    c: "Vanessa and Josie",
    d: "Lizzie and Josie",

    ans: "ans4"
  },
];

  restartGame.addEventListener("click", () => {
    location.href = 'index.html';
  
  });
  // // startButton.addEventListener("click", setTime);
  // function setTime(){ console.log("hey");
  //     var count = 15;
  //     var interval = setInterval(function(){
  //       document.getElementById('count').innerHTML=count;
  //       count--;
  //       if (count === 0){
  //         clearInterval(interval);
  //         document.getElementById('count').innerHTML='Done';
  //         // or...
  //         alert("You're out of time!");
  //       }
  //     }, 1000);};
  //    startButton.addEventListener("click", setTime);

  let questionNo = 0;
  let score=0;
  const loadQuestion = () => {
    const questionList = questions[questionNo];
    questioN.innerText = questionList.question;


    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
  }
  loadQuestion();
  submitButton.addEventListener('click', () => {
const  checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);
if(checkedAnswer === questions[questionNo].ans){
score++;
console.log(score);
};
    questionNo++;
    if (questionNo <= questions.length){
      loadQuestion();}
      else{
        if(score==1){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
        <h4>you're a newbie fan Let's watch the series together </h4> `}
       else if(score==2){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
        <h4> Try Again!</h4>`}
      else if(score==3){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct Better luck next time!</h3>
       `}
      else if(score==4){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
       <h4> You are Almost a Vamp Better luck next time! </h4>
       `}
      else if(score==5){
        showScore.innerHTML = ` <h3>Yay You got ${score} out of ${questions.length} correct You're a True Vamp Sire</h3>
       `}
      else if(score==6) {
        showScore.innerHTML = ` <h3>Wohoo! You got ${score} out of ${questions.length} correct </h3> <h4>You're a vampire expert. 
        You get a Stefan Salvatore to take home as your prize. He's a little bit dead, though; sorry🤭.</h4> `}

        showScore.classList.remove('scoreArea');
      }

  });
  const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAns)=>{
      if(currentAns.checked){
        answer =currentAns.id;
      }
      
    }
   
    );
    return answer;

  };
