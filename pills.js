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
  }
  pillsList[id] = pill;
}
randomlyGeneratePills = function(){
  Pills(Math.random(),Math.random()*500,-((Math.random()*150)+40),spdY_medium,15,15,"orange");
  Pills(Math.random(),Math.random()*600,-((Math.random()*150)+40),spdY_medium,15,15,"orange");
  Pills(Math.random(),Math.random()*700,-((Math.random()*150)+40),spdY_medium,15,15,"orange");
}
// generatePills = function(){
//   Pills(Math.random(), (Math.random()*40)+25, -((Math.random()*150)+60),spdY_slow,50,50,"orange");
//   }