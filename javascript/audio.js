var bkgdMusic = new Audio();
bkgdMusic.src = "audio/Cooking Mama 5- Bon Appétit! OST - Background Music 3.mp3"

var explosion = new Audio();
explosion.src ="audio/Explosion sound effect (1) (mp3cut.net).mp3";

var lifeUp = new Audio();
lifeUp.src ="audio/lifeup.mp3";

var scoreUp = new Audio();
scoreUp.src ="audio/scoring.mp3";

var hitZ = new Audio();
hitZ.src = "audio/cooking_mama_background_music.mp3";
// "audio/hit.mp3";

var dead = new Audio();
dead.src ="audio/dead.mp3";

var playdead = function(){
  dead.play();
};

var playhitZ = function(){
  hitZ.play();
};

var playscoreUp = function(){
  scoreUp.play();
};

var playlifeUp = function(){
  lifeUp.play();
};

var playbkgdMusic = function(){
  bkgdMusic.play();
};

var pausebkgdMusic = function(){
  bkgdMusic.pause();
};

var playExplosion = function(){
  explosion.play();
};