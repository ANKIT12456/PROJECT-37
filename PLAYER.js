class Player {
    constructor(){
       this.index=null;
       this.option=0;
       this.name=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playercount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        option:this.option
      });
    }
  
    static getPlayersInfo(){
      var playerInforef=database.ref("players");
      playerInforef.on("value",(data)=>{
        allplayers=data.val();
      })
  
    }
  }