
drawScores = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillText("HIGH-SCORES",239,200);
    ctx.font="20px Arial";
    ctx.fillText(highscores[0],235,250);
    ctx.fillText(highscores[1],235,270);
    ctx.fillText(highscores[2],235,320);
    ctx.fillText(highscores[3],235,340);
    ctx.restore();
  }

drawDoneButton = function(){
  ctx.save();
  ctx.fillStyle = button.color;
  ctx.fillRect(button.x,button.y,button.width,button.height);
  ctx.restore();
  ctx.save();
  ctx.font = "20px Arial";
  ctx.fillText("DONE",323,403);
  ctx.restore();
  }


clickDone = function(){
  $('canvas').off().on('click', function(e){
    console.log("Player clicked on a cell");
    console.log(cursorX+" "+cursorY);
    if ( checkIfInsideButton(cursorX,cursorY)){
      console.log("return to instructions page");
        if(!restart){
            console.log("return to instructions page");
            running = false;
            instructionsBox();
      }

      }
    }
  );
};

scoreboardBox = function(){
  drawBox();
  drawScores();
  drawDoneButton();
  clickDone();
}



