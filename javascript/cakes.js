  var pillPic = new Image();
  pillPic.src = "images/cake.png";

var pillsList={};

function Pills(id,x,y,spdY,width,height,color){
  var pill = {
    x:x,
    y:y,
    spdY:spdY,
    id:id,
    width:width,
    height:height,
    color:"orange",
    img: pillPic,
    sx:0,
    sy:0,
    sw:34,
    sh:34,
  };
  pillsList[id] = pill;
}
randomlyGeneratePills = function(){
  Pills(Math.random(),Math.random()*100+100,-((Math.random()*150)+600),spdY_medium,30,30,"orange");
  Pills(Math.random(),Math.random()*100+340,-((Math.random()*150)+200),spdY_medium,30,30,"orange");
  Pills(Math.random(),Math.random()*100+650,-((Math.random()*150)+50),spdY_medium,30,30,"orange");
};
// generatePills = function(){
//   Pills(Math.random(), (Math.random()*40)+25, -((Math.random()*150)+60),spdY_slow,50,50,"orange");
//   }