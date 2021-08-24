const quizData=[
{
    question:'How old is Esraa?',
    a:"10",
    b:"20",
    c:"110",
    d:"23",
    correct:"d"
},
{
    question:'What is the nost used programming language in 2019',
    a:"java",
    b:"javascript",
    c:"python",
    d:"c#",
    correct:"b"
},
{
    question:'Who is the presindent in US',
    a:"Esraa Ananzeh",
    b:"Donald Trump",
    c:"Ivan Saldano",
    d:"Mihai Andria",
    correct:"b"
},
{
    question:'What does HTML stand for?',
    a:"Hypertext Markup Language",
    b:"cascading style sheet",
    c:"jasson object notaion",
    d:"Application Terminals Lamborginis",
    correct:"a"
},
{
    question:'when years was javascript Launched',
    a:"1994",
    b:"2020",
    c:"2019",
    d:"none of the above",
    correct:"d"
}

]
const question=document.getElementById('question')
const submitBtn=document.getElementById('submit')

const aText=document.getElementById("a-text")
const bText=document.getElementById("b-text")
const cText=document.getElementById("c-text")
const dText=document.getElementById("d-text")
const answerEls=document.querySelectorAll('.answer')
const quiz=document.getElementById("quiz")

let curretnQuiz=0;
let score=0;

loadQuiz();


function loadQuiz(){
    deSelect();
    const currentQuizData=quizData[curretnQuiz]
    question.innerText=currentQuizData.question
    aText.innerText=currentQuizData.a
    bText.innerText=currentQuizData.b
    cText.innerText=currentQuizData.c
    dText.innerText=currentQuizData.d



}
// let input=document.querySelectorAll('label')
// console.log(input)
// function findAnswer(e){
//     console.log(e.target.innerText)

//     //  currentQuizData1=quizData[curretnQuiz].correct
//     console.log(quizData[curretnQuiz].correct)

//     // if(e.target.innerText===quizData[curretnQuiz].currentQuizData ){
//     //    result++
//     //    console.log(result)
//     //     return result
//     // }else{
//     //     return result
//     // }

// }

// input.forEach(key=>key.addEventListener('click',findAnswer))


function getSelected(){

let firstAnswer=undefined;

    answerEls.forEach(answer=>{
        console.log(answer.checked)
   if(answer.checked){
     firstAnswer= answer.id
   }
})
    return firstAnswer

}

function deSelect(){
    answerEls.forEach(answer=>{
   answer.checked=false
})

}




submitBtn.addEventListener('click',()=>{
let correctAnswer=getSelected()
console.log(correctAnswer)
 if(correctAnswer){
     if(correctAnswer===quizData[curretnQuiz].correct){
         score++
     }
    curretnQuiz++;

    if(curretnQuiz<quizData.length){
    loadQuiz()
}
else{
   quiz.innerHTML=`<h2>you answered correctly at ${score}/${quizData.length} questions.
   </h2>`;
   submitBtn.innerText='Reload'
   submitBtn.setAttribute('onclick','location.reload()')
   
}

 }



})


