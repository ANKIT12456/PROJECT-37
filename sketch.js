var canvas;

var gameState=0, playercount , database, quiz, question , player,allplayers;

function setup(){
   database=firebase.database();

  canvas = createCanvas(1000,600);

  quiz=new QUIZ();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(playercount === 4){
    quiz.update(1);
  }

  if(gameState === 1){
    quiz.play();
  }
}
