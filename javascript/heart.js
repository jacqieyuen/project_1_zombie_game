var heartPic = new Image();
heartPic.src = "images/heart.png";

var heartsList={};

var Hearts = function (id,x,y,spdY,width,height,color) {
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
  };
  heartsList[id] = heart;
};

var randomlyGeneratehearts = function () {
  Hearts(Math.random(),Math.random()*100+500,-((Math.random()*300)+300),spdY_fast,25,25);
};