var readLineSync = require("readline-sync");

// initialize score 
var score = 0;

var userName = readLineSync.question("What's your name? : ");

console.log(`\nWelcome ${userName} this is quiz is about how much do you know Ashsih Patel \n`);

// questions array
var questionList =  [
    {
      question:"Where do i live?",
      answer:"surat"
    },
    {
      question:"Which is my favorite movie?",
      answer:"iron man"
    },
    {
      question:"What is my favorite food?",
      answer:"vada pav"
    },
    {
      question:"What is my favorite color?",
      answer:"black"
    },
    {
      question:"Mac or Windows?",
      answer:"windows"
    },
     {
      question:"What is my shoe size?",
      answer:"9"
    },
    {
      question:"How do I like to relax?",
      answer:"stand up comedy"
    },
    {
      question:"Which is my favorite sport?",
      answer:"running"
    },
    {
      question:"Who is my favorite superhero?",
      answer:"thor"
    },
    {
      question:"Am I a dog person or a cat person?",
      answer:"none"
    }
]

// play function
function play(questionNumber,question,answer){
  //print questionNumber and question
  console.log(`${questionNumber} ${question}\n`);

  // take answer from user 
  var userAnswer = readLineSync.question(`Write Answer : `);
  
  // compare user answer with  origanl answer
  if(userAnswer.toLowerCase() === answer){
    console.log("\nRight!\n");
    // incremnet score
    score++;
  }
  else{
    console.log(`\nWrong! Right answer is : ${answer.toUpperCase()}\n`);
  }
}


// condition for game y === yes and n === no 
var userWantToPlay = readLineSync.question("Do you want to play? [y/n] : ");

//compare user input
if(userWantToPlay === 'y'){
  console.log('\nHere We Go  🤜\n')
   
   var questionNumber = 0;
   
   // looping over questionList array
   for(var i = 0; i<questionList.length; i++){
      var currentQuestion = questionList[i];
      questionNumber++;
      //function call
      play(
        questionNumber,
        currentQuestion.question,
        currentQuestion.answer
    );
   }

  // printing score
  if(score >= 7){
    console.log(`Congratulations you got ${score}/10 \n\nThis is for you 🏆 🏆 🏆 `);
  }
  else if(score <= 6 && score >= 4 ){
    console.log(`Congratulations you got ${score}/10 \n\nThis is for you 🏆 🏆 `)
  }
  else(
    console.log(`Opps you got ${score}/10 Do Watch Marvel Movies 🏆 `)
  )
}
else{
  console.log(`See you next time ${userName} 👋`)
}
