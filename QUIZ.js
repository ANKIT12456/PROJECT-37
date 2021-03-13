class QUIZ{

    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playercount=playerCountRef.val();
              player.getCount();
            }
            question = new QUESTION();
            question.display();
          }
    }

    play(){
        question.hide();
        textSize(25);
        text("RESULT TIME",200,300);
    
        Player.getPlayersInfo();
    
        if(allplayers !== undefined){
            var pos=200;
          for(var i in allplayers){
              var answer="2015";
            if(answer=== allplayers [i].option){
              fill("green");
            }
            else{
              fill("red");
            }
            pos+=50;
            textSize(20);
            text(allplayers[i].name+ " : "+allplayers[i].option,400,pos);
          }
        }
    }
}