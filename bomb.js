  var bombPic = new Image();
  bombPic.src = "bomb.png";

var bombsList={};

function Bombs(id,x,y,spdY,width,height,color){
  var bomb = {
    x:x,
    y:y,
    spdY:spdY,
    id:id,
    width:width,
    height:height,
    color:"black",
    img: bombPic,
    sx:0,
    sy:0,
    sw:15,
    sh:24,
  }
  bombsList[id] = bomb;
}
randomlyGenerateBombs = function(){
  Bombs(Math.random(),Math.random()*100+100,-((Math.random()*150)+600),spdY_medium,20,25);
}