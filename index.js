var readlineSync=require('readline-sync');
var userName=readlineSync.question('What is your name? ');
console.log('Welcome '+userName+' to this quiz');
console.log('How much you know about India');
var score=0;
var questions=[{
    question:'Which Indian city is the capital of two states? ',
    answer:'Chandigarh'
},
  {
    question:'What is capital of Gujarat? ',
    answer:'Gandhinagar'
  },
  {
    question:'Who is the current president Of  India? ',
    answer:'Ram Nath Kovind'
  },
  {
    question:'Which is India smallest state? ',
    answer:'Goa'
  },
  {
    question:'When is India Independence Day? ',
    answer:'15 August'
  }
]

for(var i=0;i<questions.length;i++)
{
 var a=questions[i];
 play(a.question,a.answer);
 console.log('---------------');
}

function play(question, answer)
{
  var userAnswer=readlineSync.question(question);
  if(answer == userAnswer)
  {
    console.log('Right!');
    score+=1;
  }
  else
  {
    console.log('Wrong!');
  }
}
console.log('Score: '+score);