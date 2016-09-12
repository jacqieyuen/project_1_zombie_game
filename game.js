var Game = function(){

  var score = 0;
  var zombies = [];
  var frame = 0;




  var render = function(){

    for (var i = zombies.length - 1; i >= 0; i--) {
      zombies[i].render();
    }



  }


  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();


  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();

}


var g = new Game();