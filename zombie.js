//VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES
  var ctx         = document.getElementById("myCanvas").getContext("2d");
  ctx.font        = "30px Arial";
  var HEIGHT      = 600;
  var WIDTH       = 700;
  var frameCount  = 0;
  var score       = 0;
  //different speeds
  var spdY_slow   = 9
  var spdY_medium = 13
  var spdY_fast   = 20
  //empty list of zombies
  var zombieList  = {}
  var spriteSheet = new Image();
  spriteSheet.src = "mushroom.png"

// END of VARIABLES END of VARIABLES END of VARIABLES END of VARIABLES

//*** Create ZOMBIE objects usine Zombie(id,x,y,spdY,width,height,color)
  Zombie("Z0", 25, -50,spdY_slow,50,50,"grey")
  Zombie("Z1", 100, -50,spdY_slow,50,50,"grey")
  Zombie("Z2", 200, -50,spdY_slow,50,50,"grey")
  Zombie("Z3", 300, -50,spdY_slow,50,50,"grey")
  Zombie("Z4", 400, -50,spdY_slow,50,50,"grey")
  Zombie("Z5", 500, -50,spdY_slow,50,50,"grey")
  Zombie("Z6", 600, -50,spdY_slow,50,50,"grey")
  Zombie("Z7", 675, -50,spdY_slow,50,50,"grey")
//Create Zombies for each row -find a way to give it a proper/better ID
generateZombies = function(){
  Zombie(Math.random(), (Math.random()*40)+25, -((Math.random()*150)+60),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+100, -((Math.random()*150)+80),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+200, -((Math.random()*150)+60),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+300, -((Math.random()*150)+40),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+400, -((Math.random()*150)+60),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+500, -((Math.random()*150)+50),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+590, -((Math.random()*150)+40),spdY_slow,50,50,"grey");
  Zombie(Math.random(), (Math.random()*40)+650, -((Math.random()*150)+40),spdY_slow,50,50,"grey");
}
// function Zombie(id,x,y,spdY,width,height,color){
//   var zombie = {
//     x:x,
//     y:y,
//     spdY:spdY,
//     name:"Z",
//     id:id,
//     width:width,
//     height:height,
//     color:color,
//   }
//   zombieList[id] = zombie;
// }
function Zombie(id,x,y,spdY,width,height,color){
  var zombie = {
    x:x,
    y:y,
    spdY:spdY,
    name:"Z",
    id:id,
    width:width,
    height:height,
    color:color,
    img: spriteSheet,
    sx:0,
    sy:0,
    sw:70,
    sh:75,
  }
  zombieList[id] = zombie;
}