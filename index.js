var readline = require("readline-sync")

const quizQuestion =
{Maharashtra:"Mumbai",Goa:"Panjim",Rajasthan:'Jaipur',Gujarat:"Ahmedabad"}
const highScores={
  Yash:2,
  Parth:2
}
console.log("Lets see how much you know about Indian State territories")
var name = readline.question("What is your name ")
console.log("Ok lets start")
var score =0
function checkAnswer(input,answer){
  if(toString(input)===toString(answer)){
    score+=1
    console.log("Sahi Jawab ... Chaliye dusre prashna ki aur")
  }
  else{
    console.log("Galat jawab ... ")
  }
}

function highScore(score){
  var flag=false
  for(each in highScore){
    if(highScore[each]>parseInt(score)){
      flag=true
        }
  }
  if(true){
      console.log("Hurrah youre the top scorer ..... please share your screenshot")
  }
  else{
    console.log("Please try again ... maybe you win next time")
  }
  }

function playGame(){
for(key in quizQuestion){
  checkAnswer(readline.question("What is the capital of "+key),quizQuestion[key])
}

console.log("Your score is "+ score)
highScore()

}

playGame()