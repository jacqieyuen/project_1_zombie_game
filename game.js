//get mouse position, including discrepancy between the screen and canvas
document.onmousemove = function(mouse){
  var mouseX = mouse.clientX-document.getElementById("myCanvas").getBoundingClientRect().left;
  var mouseY = mouse.clientY- document.getElementById("myCanvas").getBoundingClientRect().top;
  if (mouseX < (player.width/2)){
    mouseX = (player.width/2)
  };
  if (mouseX > WIDTH-(player.width/2)){
    mouseX = WIDTH-(player.width/2)
  };
  if (mouseY < (player.height/2)){
    mouseY = (player.height/2)
  };
  if (mouseY > HEIGHT-(player.height/2)){
    mouseY = HEIGHT-(player.height/2)
  };

  player.x = mouseX;
  player.y = mouseY;
}
testCollision = function (yay1,yay2){
    var rect1 = {
    x: yay1.x-((yay1.width)/2),
    y: yay1.y-((yay1.height)/2),
    width: yay1.width,
    height: yay1.height,
    };
    var rect2 = {
    x:yay2.x-((yay2.width)/2),
    y: yay2.y-((yay2.height)/2),
    width:yay2.width,
    height:yay2.height,
    };
    return collisionRect(rect1,rect2);
}
//collision function for rectangles
collisionRect= function(rect1,rect2){
   return (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y);
}
//function to draw rectangles
draw_something = function(something){
  ctx.save(); // make sure to save so that we can revert the color back to normal
  ctx.fillStyle = something.color;
  ctx.fillRect(something.x-((something.width)/2), something.y-((something.width)/2),something.width,something.height); // dimensions of rectangle
  ctx.restore(); // restore ctx to original settings
}
// functions for zombies
update_z = function(something){
  update_z_position(something);
  draw_something(something);
}
//function to update position
update_z_position = function (something) {
  something.y += something.spdY;
}
gameEnd = function(){
  player.color = "red";
  console.log("YOU HAVE DIED! You have a score of "+ score +"!")
  clearInterval(Interval);
}
gameInit = function(){ // initiate game
  Interval = setInterval(update, 30); // SET INTERVAL
  function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    frameCount++;
    if (frameCount%30===0){
      generateZombies();
    };
    if (frameCount%15===0){
      score ++;
    };
    for (var key in zombieList){
      update_z(zombieList[key]);
      var isColliding = testCollision(player,zombieList[key]);
      if (isColliding) {
        console.log('INFECTED!');
        delete zombieList[key];
        player.lives = player.lives - 1;
      };
      if (zombieList[key].y>700){
        delete zombieList[key];
      };
    };

    if (player.lives <= 0){
        gameEnd();
    };
    draw_something(player);
    ctx.fillText(("Player Life: " + player.lives),500,550);
    ctx.fillText(("Score: " + score),500,500);
  }
}
gameInit();



// var Game = function(){

//   var score = 0;
//   var zombies = [];
//   var frame = 0;




//   var render = function(){

//     for (var i = zombies.length - 1; i >= 0; i--) {
//       zombies[i].render();
//     }



//   }


//   window.requestAnimFrame = (function(){
//     return  window.requestAnimationFrame       ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame    ||
//             function( callback ){
//               window.setTimeout(callback, 1000 / 60);
//             };
//   })();


//   (function animloop(){
//     requestAnimFrame(animloop);
//     render();
//   })();

// }


// var g = new Game();