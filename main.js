function preload() {
	mario_jump=loadSound("jump.wav");//pulou
	mario_coin=loadSound("coin.wav");//pegou moedas
	mario_gameover=loadSound("gameover.wav");//perdeu o jogo
	mario_kick=loadSound("kick.wav"); //derrotou o inimigo
	mario_die=loadSound("mariodie.wav"); //mario morre

	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");

	poseNet = ml5.poseNet(video, carregar);
	poseNet.on('pose', gotPoses);
}

function carregar() {
	console.log("carregado!");
}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		

	}
}

function draw() {
	game();
}






