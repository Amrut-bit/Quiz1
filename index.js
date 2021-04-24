var readlineSync = require('readline-sync');

var username=readlineSync.question("whats your name? ");
console.log("Welcome to Quiz.Dear "+username+" !");

var score=0
  var Question=[{
    questions:"Where do i stay ",
    answer:"Bagalkot"
  },
  {
    questions:"Whats my Born Month ",
    answer:"March"
  },
  {
     questions:"In which collage i finished my Engg ",
    answer:"Oxford"
    }];


for(var i=0;i<Question.length;i++){
  var currentq=Question[i]
  play(currentq.questions,currentq.answer)
};


function play(questionone,Answer){
  var userAns=readlineSync.question(questionone);
  if (userAns.toUpperCase()===Answer.toUpperCase()){
    console.log("right") 
    score++
    console.log("current score",score)
  }else{
    console.log("wrong")
  }
  console.log("---------------")
};
console.log("Your Score",score)