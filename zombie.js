//VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES
  var ctx         = document.getElementById("myCanvas").getContext("2d");
  ctx.font        = "30px Arial";
  var HEIGHT      = 600;
  var WIDTH       = 700;
  var frameCount  = 0;
  var score       = 0;
  //different speeds
  var spdY_slow   = 9
  var spdY_medium = 15
  var spdY_fast   = 20
  //empty list of zombies
  var zombieList  = {}
// END of VARIABLES END of VARIABLES END of VARIABLES END of VARIABLES

//*** Create ZOMBIE objects usine Zombie(id,x,y,spdY,width,height,color)
  Zombie("Z1", 100, -50,spdY_slow,30,30,"grey")
  Zombie("Z2", 200, -50,spdY_slow,20,20,"grey")
  Zombie("Z3", 300, -50,spdY_slow,40,40,"grey")
  Zombie("Z4", 400, -50,spdY_slow,30,30,"grey")
  Zombie("Z5", 500, -50,spdY_slow,30,30,"grey")
  Zombie("Z6", 600, -50,spdY_slow,30,30,"grey")
//Create Zombies for each row -find a way to give it a proper/better ID
generateZombies = function(){
  Zombie(Math.random(), 100, -50,spdY_slow,30,30,"grey");
  Zombie(Math.random(), 200, -50,spdY_slow,20,20,"grey");
  Zombie(Math.random(), 300, -50,spdY_slow,40,40,"grey");
  Zombie(Math.random(), 400, -50,spdY_slow,30,30,"grey");
  Zombie(Math.random(), 500, -50,spdY_slow,30,30,"grey");
  Zombie(Math.random(), 600, -50,spdY_slow,30,30,"grey");
}
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
  }
  zombieList[id] = zombie;
}






// var Zombie = function() {

//   var img = "";
//   var position = {
//     x:50,
//     y:0
//   };

//   var speed = 2;

//   var create = function() {

//     // Create HTML element and add to #game
//   }

//   var destroy = function(){

//   }

//   this.render = function(){

//     // Change Top to current + speed

//   }

//   create();
// }