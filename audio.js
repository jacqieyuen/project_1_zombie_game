var bkgdMusic = new Audio();
bkgdMusic.src = "Cooking Mama 5- Bon Appétit! OST - Background Music 3.mp3"

var explosion = new Audio();
explosion.src ="Explosion sound effect (1) (mp3cut.net).mp3";

var lifeUp = new Audio();
lifeUp.src ="lifeup.mp3";

var scoreUp = new Audio();
scoreUp.src ="scoreding.mp3";

playscoreUp = function(){
  scoreUp.play();
};

playlifeUp = function(){
  lifeUp.play();
};

playbkgdMusic = function(){
  bkgdMusic.play();
};

playExplosion = function(){
  explosion.play();
};