img=0;
noseX=0;
noseY=0;
MarioX=0;
MarioY=0;
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_coin=loadSound("coin.wav");
	mario_die=loadSound("mariodie.wav");
	mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent('gameConsole')
	

	pose=ml5.poseNet(video, modelLoaded );
	pose.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("modelLoaded");
}

function draw() {
	game();
	//if(noseX>400){
		//MarioX=MarioX-1
	//}
	//if(noseX<400){
	//	MarioX=MarioX+1
	//}
	///if(noseY<200){
		//MarioY=MarioY-1
	//}	
	//if(noseY>200){
	//	MarioY=MarioY+1
//	}	
}
function gotPoses(results){
	console.log(results);
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log(noseX+" "+" "+noseY);
	}
}







