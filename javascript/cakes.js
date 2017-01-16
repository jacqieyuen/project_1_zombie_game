  var cakePic = new Image();
  cakePic.src = "images/cake.png";

var cakesList={};

function Cakes(id,x,y,spdY,width,height,color){
  var cake = {
    x:x,
    y:y,
    spdY:spdY,
    id:id,
    width:width,
    height:height,
    color:"orange",
    img: cakePic,
    sx:0,
    sy:0,
    sw:34,
    sh:34,
  };
  cakesList[id] = cake;
}
randomlyGenerateCakes = function(){
  Cakes(Math.random(),Math.random()*100+100,-((Math.random()*150)+600),spdY_medium,30,30,"orange");
  Cakes(Math.random(),Math.random()*100+340,-((Math.random()*150)+200),spdY_medium,30,30,"orange");
  Cakes(Math.random(),Math.random()*100+650,-((Math.random()*150)+50),spdY_medium,30,30,"orange");
};
// generateCakes = function(){
//   Cakes(Math.random(), (Math.random()*40)+25, -((Math.random()*150)+60),spdY_slow,50,50,"orange");
//   }