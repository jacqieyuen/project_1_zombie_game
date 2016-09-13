drawScoreBoardBox = function(){
    ctx.save(); // make sure to save so that we can revert the color back to normal
    ctx.fillStyle = "green";
    ctx.fillRect(200,150,300,300);; // dimensions of rectangle
    ctx.restore(); // restore ctx to original settings
  }
drawScoreBoard = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillText("HIGH-SCORES",239,200);
    ctx.font="20px Arial";
    ctx.fillText(highscores[0],220,250);
    ctx.fillText(highscores[1],215,270);
    ctx.fillText(highscores[2],215,320);
    ctx.fillText(highscore[3],225,340);
    ctx.restore();
  }
