'use strict';
//  to define the secret number
//  math is a object that javascript give us and random is a method and gives the between 1 to 0 
// for 20 multiply it with 20 
// to remove decimal we use tranc
    let secretNumber = Math.trunc(Math.random()*20)+1;
    let score = 20;
    let highscore = 0;


//    taking the value from user and pushing it in console 
// 1. first we selected the check class through queryselector
// 2. then we added an eventlistener on click event on class check
// 3. then we made a function that whatever the user give u in input in class guess it would be displayed in console
// 4. in javascript we no need to call the function only we call it as soon as event is called

   document.querySelector('.check').addEventListener('click' , function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log( typeof guess , guess);



// when input is 0
// it is 0 means a falsy value but if we need to something there we need to convert 
   if(!guess){
      document.querySelector('.message').textContent = 'No Number!🙄';
   } 
//    WHEN PLAYER WINS
   else if (guess === secretNumber){
   document.querySelector('.message').textContent = "correct number🤩";
   document.querySelector('.number').textContent = secretNumber;

   document.querySelector('.card').style.backgroundColor = 'greenyellow';
  

   if(score > highscore){
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;
   }
//    document.querySelector('body').style.width = '30rem';
   score++;
   document.querySelector('.score').textContent = score;
   }
//    when guess is too high
     else if (guess > secretNumber){
         if(score > 1){
            document.querySelector('.message').textContent = "Too High🙂";
            score--;
            document.querySelector('.score').textContent = score;
         }
         else{
            document.querySelector('.message').textContent = "OPPS!! You Lost the Game 🙁"; 
            document.querySelector('.score').textContent = 0;
            // document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.card').style.backgroundColor = 'rgb(197, 0, 0)';
        }
   
    }

//  when guess is too low
     else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too Low🙃";
            score--;
            document.querySelector('.score').textContent = score;
         }
         else{
            document.querySelector('.message').textContent = "OPPS!! You Lost the Game 🙁 "; 
            document.querySelector('.score').textContent = 0;
        }
        document.querySelector('.message').textContent = "Too low😕";
        score--;
        document.querySelector('.score').textContent = score;
    }
});

// Note- whenever we get any input from users its always in the from of string so we need to convert it to number bcoz we need to compare the user number with other numbers

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing🤔';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
   document.querySelector('.guess').value = '';
   document.querySelector('.card').style.backgroundColor= '#222';
})