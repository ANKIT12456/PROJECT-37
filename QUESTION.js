class QUESTION {
    constructor() {
      this.name=createInput("ENTER YOUR NAME");
      this.answer=createInput("enter ur answer here");
      this.button2=createButton("SUBMIT");
      this.question=createElement('h3');
      this.option1=createButton("2016");
      this.option2=createButton("2017");
      this.option3=createButton("2015");
      this.option4=createButton("2021");


    }
  
    hide(){
      this.name.hide();
      this.button2.hide();
      this.answer.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("MY QUIZ GAME");
      title.position(400, 0);
      
      this.question.html("WHEN WAS THE MOVIE HERO RELEASED ??");
      this.question.position(400, 100);
      this.option1.position(400,160);
      this.option2.position(400,200);
      this.option3.position(400,240);
      this.option4.position(400,280);
      this.name.position(400,320);
      this.button2.position(600,320);

      this.answer.position(400,350);
  
      this.button2.mousePressed(()=>{
        this.name.hide();
        this.answer.hide();
        this.button2.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();

        player.name = this.name.value();
        player.option=this.answer.value();
        
        playercount+=1;
        player.index=playercount;
        player.update();
        player.updateCount(playercount);

      });
  
    }
  }