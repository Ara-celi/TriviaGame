console.log("DOCUMENT LOAD");
//------------------------------DEFINE VARIABLES-------------------------------------
var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;
var reset;
var choicePicked=false;
var answerWrong="Gag me with a spoon. Like, you're so wrong!!";
var answerCorrect="Like OMG, you're absolutely correct!";
var answerUnanswered="Bummer Dude! You're totally out of time!!";

var imgArray=new Array();
  imgArray[0]=new Image();
  imgArray[0].src='assets/images/mtv.jpeg';
  imgArray[1]=new Image();
  imgArray[1].src='assets/images/elmst.jpeg';
  imgArray[2]=new Image();
  imgArray[2].src='assets/images/bfclub.jpeg';
  imgArray[3]=new Image();
  imgArray[3].src='assets/images/tempest.jpeg';
  imgArray[4]=new Image();
  imgArray[4].src='assets/images/prince.jpeg';
  imgArray[5]=new Image();
  imgArray[5].src='assets/images/punky.jpeg';
  imgArray[6]=new Image();
  imgArray[6].src='assets/images/et.jpeg';
  imgArray[7]=new Image();
  imgArray[7].src='assets/images/penny.jpeg';

var questionsAsked=[
  "What year was the first 'MTV Music Awards' hosted?",
  "Johnny Depp’s first big role was in?",
  "Which actor was NOT part of 'The Breakfast Club'?",
  "Molly Ringwalds big-screen debut was in the film?",
  "Which artist did not participate in the recording of the song, 'We are the World’?",
  "Which 80’s TV series became an animated show?",
  "What was the highest-grossing film in the 80’s?",
  "Which animated cartoon had the character Penny?",
];
var choices=[ ];
choices[0]=['1981', '1984', '1985', '1988'];
choices[1]=['Edward Scissorhands', '21 Jump Street', 'A nightmare on Elm St.', 'Platoon'];
choices[2]=['Paul Gleason', 'Charlie Sheen', 'Anthony Micheal Hall', 'Emilio Estevez'];
choices[3]=['Sixteen Candles', 'The Breakfast Club', 'Pretty in Pink','Tempest'];
choices[4]=['Prince', 'Lionel Richie', 'Michael Jackson', 'Huey Lewis'];
choices[5]=['Small Wonder', 'Punky Brewster', 'Greatest American Hero', 'Saved by the Bell'];
choices[6]=['E.T. the Extra-Terrestrial', 'GhostBusters', 'Jaws', 'Starwars Return of the Jedi'];
choices[7]=['JEM', 'Inspector Gadget', 'Thundercats', 'The Littles'];

var answers=[
'1984',
'A nightmare on Elm St.',
'Charlie Sheen',
'Tempest',
'Prince',
'Punky Brewster',
'E.T. the Extra-Terrestrial',
'Inspector Gadget'
];
console.log("choices all up = "+choices);
//---------------------------DEFINE FUNCTIONS-----------------------------------

//Click start to begin playGame
    //show question and choices to choose from
function playGame(){
      console.log("playGame start")
  for (var i = 0; i < questionsAsked.length; i++){
      console.log("--------looping through question "+i+" -------")
      console.log(questionsAsked[i])
      for (p=0;p<choices[i].length;p++){  
        console.log("choice "+p+" = "+choices[i][p])  
      }
    console.log("---------------------")
  }
  console.log("playGame Ends")
}

//click on an choice
function selectAnswer(){
    console.log("time to choose an answer")
  for (var i = 0; i < answers.length; i++){
      console.log("looping through answers")
      console.log(answers[i])
  } 
  choices=true
  if (choices==true){
    //tell the player they are correct
    document.getElementById("answerChosen").innerHTML="Like OMG, you're absolutely correct!";
    console.log("correct answer ")
    //automatically move to next queston

  }else if (choices==false){
    //if player chooses wrong answer
    document.getElementById("answerChosen").innerHTML="Gag me with a spoon. Like, you're so wrong!!"; 
    //tell player correct answer
    alert("The correct answer is: "+answers);    
    //automatically move to next question 
  }else{
    //tell player they are out of time
    document.getElementById("answerChosen").innerHTML="Bummer Dude! You're totally out of time!!";
    //show correct answer 
    alert("The correct answer is: "+answers);
    //autmatically move to next question
  }
}
 function displayImage() {
  console.log("time to see some images")
  for (var i = 0; i < Array.length; i++){
      console.log("looping through images")
      document.getElementById("answerImage");
 }
   
}


//---------------------------TIE FUNCTIONS TO EVENTS-------------------------------

//gets executed whenever element with class ".choose" is clicked;
$("#start").click(function() {     
      playGame();
});

//gets executed whenever element with class ".choose" is clicked;
$(".choose").click(function() {      
      selectAnswer();
});
$(".choose").click(function() {
      displayImage();
})

