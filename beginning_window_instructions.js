var button = {
  x: 300,
  y: 375,
  name:"P",
  lives:"10",
  width:100,
  height:40,
  color: "yellow"
};

drawInstructionsBox = function(){
    ctx.save(); // make sure to save so that we can revert the color back to normal
    ctx.fillStyle = "green";
    ctx.fillRect(200,150,300,300);; // dimensions of rectangle
    ctx.restore();
  }
drawIntructions = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillText("INSTRUCTIONS",239,200);
    ctx.font="20px Arial";
    ctx.fillText("Do not collide with Zombies",220,250);
    ctx.fillText("or you will slowly become one!",215,270);
    ctx.fillText("Capture pills to increase your",215,320);
    ctx.fillText("immune against Zombies!",225,340);
    ctx.restore();
  }

var button = {
  x: 300,
  y: 375,
  name:"P",
  lives:"10",
  width:100,
  height:40,
  color: "yellow"
}
playButton = function(){
  ctx.save(); // make sure to save so that we can revert the color back to normal
  ctx.fillStyle = button.color;
  ctx.fillRect(button.x,button.y,button.width,button.height);
  ctx.restore();
  ctx.save();
  ctx.font = "20px Arial";
  ctx.fillText("PLAY",326,403);
  ctx.restore();
  }
instructionsBox = function(){
  drawInstructionsBox();
  drawIntructions();
  playButton();
  }

clickPlay = function(){
  $('canvas').on('click', function(e){
    console.log("Player clicked on a cell");
    console.log(cursorX+" "+cursorY);
    if ( checkIfInsideButton(cursorX,cursorY)){
      console.log("gamebegins");
      if(!running){
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

startGame = function(){
  clickPlay();
};

instructionsBox();
startGame();



