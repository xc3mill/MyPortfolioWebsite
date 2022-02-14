// gsap.fromTo(".frontimages", {y: -300}, {y: 0, duration: 2 });
// gsap.fromTo(".wave", {y: 200}, {y: 0, duration: 2 });

//  animation first page  : 
const tl = gsap.timeline({defaults: {duration: 1.5, ease: "power1.out"}})

tl.fromTo(".frontimages", {x: 900}, {x: 0})
tl.fromTo(".iam", {x: -900}, {x: 0}, "<")
tl.fromTo(".wave", {y: 370}, {y: 0})
tl.fromTo(".icon", {y: 370}, {y: 0, duration: 2.5, ease: "elastic.out(0.8, 0.1)"}, "<")
tl.fromTo("nav", {y:-70}, {y: 0}, "<")
tl.fromTo(".likebutton", {x:200}, {x:0, duration: 0.2, delay: 1.5, ease:"power1.out"}, "<")

// Like BUTTON : 
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

// end Button Like ! 

// QUIZ 

// const quizData = [
//   {
//     question: "How are you today ?",
//     a: "I'm fine. ", 
//     b: "answer number two",
//     c: "Perfect",
//     correct: "a",
//   },
//   {
//     question: "question 2How are you today ?",
//     a: "I'm fine. ", 
//     b: "answer number two",
//     c: "Perfect",
//     correct: "a",
//   },
//   {
//     question: "question 3How are you today ?",
//     a: "I'm fine. ", 
//     b: "answer number two",
//     c: "Perfect",
//     correct: "a",
//   },
// ];

// const quiz = document.getElementById('quiz')
// const answerEls = document.querySelectorAll('.answer')
// const questionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const submitBtn = document.getElementById('submit')

// let currentQuiz = 0 
// let score = 0

// loadQuiz()

// function loadQuiz() {
//   deselectAnswers()
//   const currentQuizData = quizData[currentQuiz]
//   questionEl.innerText = currentQuizData.question
//   a_text.innerText = currentQuizData.a
//   b_text.innerText = currentQuizData.b
//   c_text.innerText = currentQuizData.c
// }
// function deselectAnswers() {
//   answerEls.forEach(answerEl => answerEl.checked = false)
// }
// function getSelected() {
//   let answer
//   answerEls.forEach(answerEl => {
//     if(answerEl.checked) {
//       answer = answerEl.id
//     } 
//   })
//   return answer
// }

// submitBtn.addEventListener('click', () => {
//   const answer = getSelected()
//   if(answer) {
//     if(answer === quizData[currentQuiz].correct)
//     score++
//   }
//   currentQuiz++

//   if(currentQuiz < quizData.length) {
//     loadQuiz()
//   } else {
//     quiz.innerHTML = 
//     <><h2>You answered ${score}/${quizData.length} question correctly</h2><button onclick="location.reload()">Reload</button></>
//   }
// })