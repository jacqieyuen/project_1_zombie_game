  var heartPic = new Image();
  heartPic.src = "heart.png";

var heartsList={};

function Hearts(id,x,y,spdY,width,height,color){
  var heart = {
    x:x,
    y:y,
    spdY:spdY,
    id:id,
    width:width,
    height:height,
    color:"black",
    img: heartPic,
    sx:0,
    sy:0,
    sw:49,
    sh:48,
  }
  heartsList[id] = heart;
}
randomlyGeneratehearts = function(){
  Hearts(Math.random(),Math.random()*200+100,-((Math.random()*300)+500),spdY_fast,25,25);
}