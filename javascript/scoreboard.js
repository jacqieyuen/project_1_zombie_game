
var drawScores = function(){
  ctx.save();
  ctx.font = "30px Arial";
  ctx.fillText("HIGH-SCORES",245,200);
  ctx.font="30px Arial";
  ctx.fillText("1.  "+highscores[0],320,250);
  ctx.fillText("2.  "+highscores[1],320,280);
  ctx.fillText("3.  "+highscores[2],320,310);
  ctx.fillText(("Your Score:  "+score),240,350);
  ctx.restore();
  resetVariables();
};

var drawDoneButton = function(){
  ctx.save();
  ctx.fillStyle = button.color;
  ctx.fillRect(button.x,button.y,button.width,button.height);
  ctx.restore();
  ctx.save();
  ctx.font = "20px Arial";
  ctx.fillText("DONE",323,403);
  ctx.restore();
};


var clickDone = function(){
  $('canvas').off().on('click', function(e){
    // console.log("Player clicked on a cell");
    // console.log(cursorX+" "+cursorY);
    if ( checkIfInsideButton(cursorX,cursorY)){
      // console.log("return to instructions page");
        if(!restart){
            // console.log("return to instructions page");
            running = false;
            instructionsBox();
      }

      }
    }
  );
};

var scoreboardBox = function(){
  drawBox();
  drawScores();
  drawDoneButton();
  clickDone();
};



