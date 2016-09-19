var button = {
  x: 300,
  y: 375,
  name:"P",
  lives:"10",
  width:100,
  height:40,
  color: "yellow"
};

drawBox = function(){
    ctx.save(); // make sure to save so that we can revert the color back to normal
    ctx.fillStyle = "grey";
    ctx.fillRect(200,150,300,300);; // dimensions of rectangle
    ctx.restore();
  }
drawIntructions = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("INSTRUCTIONS",239,200);
    ctx.font="20px Arial";
    ctx.fillText("Do not touch Mushrooms",213,250);
    ctx.fillText("Eat cake & increase your score",213,280);
    ctx.fillText("Touch bombs to kill Mushrooms",213,310);
    ctx.fillText("Capture a heart to add a life",213,340);
    ctx.restore();
  }

var button = {
  x: 300,
  y: 375,
  width:100,
  height:40,
  color: "yellow"
}
drawPlayButton = function(){
  ctx.save(); // make sure to save so that we can revert the color back to normal
  ctx.fillStyle = button.color;
  ctx.fillRect(button.x,button.y,button.width,button.height);
  ctx.restore();
  ctx.save();
  ctx.font = "20px Arial";
  ctx.fillText("PLAY",326,403);
  ctx.restore();
  }

clickPlay = function(){
  $('canvas').off().on('click', function(e){
    console.log("Player clicked on a cell");
    console.log(cursorX+" "+cursorY);
    if ( checkIfInsideButton(cursorX,cursorY)){
      if(!running){
        console.log("gamebegins");
        gameInit();
      }
    }
  });
};

checkIfInsideButton = function(something1,something2){
  if(((something1>300)&&(something1<400))&&((something2>375)&&(something2<415))){
    return true;
  }
}

// startGame = function(){
//   clickPlay();
// };

instructionsBox = function(){
  restart=true;
  drawBox();
  drawIntructions();
  drawPlayButton();
  clickPlay();
  };
instructionsBox();
// startGame();



