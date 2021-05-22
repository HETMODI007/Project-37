class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();    
   textSize(30);
   text("Result of the Quiz ", 120, 100)
    //Contestant.getContestantInfo();

    if(allContestanat !== undefined){
       fill("Blue");
       textSize(20);
       text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
      }
    }

   // if(keyIsDown(UP_ARROW) && contestant.index !== null){
     // contestant.distance +=50
     // contestant.update();
   // }
    //write code to change the background color here
    //write code to show a heading for showing the result of Quiz
    //call getContestantInfo( ) here
    //write condition to check if contestantInfor is not undefined
    //write code to add a note here
    //write code to highlight contest who answered correctly
    
  }

//}
