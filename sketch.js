var p1, p2;
var BoundL, BoundR, BoundU, BoundD;
var hp1 = 100;
var hp2 = 100;
var ammo1, ammo2, ammo3;
var bhI, rhI;
var bh, rh;
var hp20, hp210, hp220, hp230, hp240, hp250, hp260, hp270, hp280, hp290;
var hp10, hp110, hp120, hp130, hp140, hp150, hp160, hp170, hp180, hp190;
var p1I, p2I;
var ammo1I, ammo2I, ammo3I;
var Ls;
var gameState = 0;
var banner;
var BannerI;
var Ebanner1, Ebanner1I;
var Ebanner2, Ebanner2I;
var groundI;
var replayI;
var hurtS;
var Sound;
var ChooseI, Choose;
var PVP, PVC;
var PVPI, PVCI;
var TCI,TC;
var T1I,T2I,T3I,T4I,T5I;
var T1,T2,T3,T4,T5;
var theme=0;
var HomeB,HomeBI;
var SoundI1,SoundI2;
var Sound;
var SoundS; 
var SoundV=true;
var LsV=true;
var HurtV=true;
var Choose2,Choose2I;
var chooseP=0;
var Bound=0;

function preload() {
  Sound=loadSound("Sound.mp3");
  SoundI1=loadImage("SoundOn.png");
  SoundI2=loadImage("SoundOff.png");
  Choose2I=loadImage("Choose2.png");
  T1I=loadImage("T1.png");
  T2I=loadImage("T2.png");
  T3I=loadImage("T3.png");
  T4I=loadImage("T4.jpg");
  T5I=loadImage("T5.png");
  HomeBI=loadImage("Home.png");
  TCI=loadImage("TC.png");
  PVPI = loadImage("PVP.png");
  PVCI = loadImage("PVC.png");
  ChooseI = loadImage("Choose.png");
  hurtS = loadSound("Hurt.wav");
  replayI = loadImage("replay.png");
  Ls = loadSound("launcher.mp3");
  bhI = loadImage("Blue.png");
  rhI = loadImage("Red.png");
  p1I = loadAnimation("PG2R.png");
  p2I = loadAnimation("PG2L.png");
  p1CI = loadAnimation("PG1R.png");
  p2CI = loadAnimation("PG1L.png");
  ammo1I = loadImage("fire2.png");
  ammo2I = loadImage("fire.png");
  ammo3I = loadImage("fire.png");
  hp20 = loadImage("hp2/hp20.png");
  hp210 = loadImage("hp2/hp210.png");
  hp220 = loadImage("hp2/hp220.png");
  hp230 = loadImage("hp2/hp230.png");
  hp240 = loadImage("hp2/hp240.png");
  hp250 = loadImage("hp2/hp250.png");
  hp260 = loadImage("hp2/hp260.png");
  hp270 = loadImage("hp2/hp270.png");
  hp280 = loadImage("hp2/hp280.png");
  hp290 = loadImage("hp2/hp290.png");

  hp10 = loadImage("hp1/hp10.png");
  hp110 = loadImage("hp1/hp110.png");
  hp120 = loadImage("hp1/hp120.png");
  hp130 = loadImage("hp1/hp130.png");
  hp140 = loadImage("hp1/hp140.png");
  hp150 = loadImage("hp1/hp150.png");
  hp160 = loadImage("hp1/hp160.png");
  hp170 = loadImage("hp1/hp170.png");
  hp180 = loadImage("hp1/hp180.png");
  hp190 = loadImage("hp1/hp190.png");

  BannerI = loadImage("Banner.png");

  GroundI = loadImage("Ground.png");

  Ebanner1I = loadImage("BW.png");
  Ebanner2I = loadImage("RW.png");
}

function setup() {
  createCanvas(1500, 700);

  bh = createSprite(200, 100);
  bh.addImage(bhI);
  bh.scale = 0.3;

  rh = createSprite(1300, 100);
  rh.addImage(rhI);
  rh.scale = 0.3;

  Ebanner1 = createSprite(750, 400);
  Ebanner1.addImage(Ebanner1I);

  Ebanner2 = createSprite(750, 400);
  Ebanner2.addImage(Ebanner2I);

  banner = createSprite(750, 400);
  banner.addImage(BannerI);
  banner.scale = 0.999;

  Choose2 = createSprite(750, 400);
  Choose2.addImage(Choose2I);

  p1 = createSprite(400, 300, 50, 50);
  // p1.debug=true;
  p1.setCollider("circle", -50, 15, 100);
  p1.addAnimation("p1",p1I);
  p1.addAnimation("p1C",p1CI);

  p2 = createSprite(1000, 650, 50, 50);
  //p2.debug=true;
  p2.setCollider("circle", 50, -15, 100);
  p2.addAnimation("p2",p2I);
  p2.addAnimation("p2C",p2CI);



  replay=createSprite(250,500);
  replay.addImage(replayI);
  replay.scale=0.3;

  Choose = createSprite(750, 400);
  Choose.addImage(ChooseI);

  PVP = createSprite(780, 340, 50, 50);
  PVP.addImage(PVPI);

  PVC = createSprite(780, 480, 50, 50);
  PVC.addImage(PVCI);

  TC =createSprite(750,400);
  TC.addImage(TCI);

  T1=createSprite(500,630,50,50);
  T1.addImage(T1I);
  T1.scale=0.1;

  T2=createSprite(650,630,50,50);
  T2.addImage(T2I);
  T2.scale=0.1; 

  T3=createSprite(800,630,50,50);
  T3.addImage(T3I);
  T3.scale=0.1; 

  T4=createSprite(500,400,50,50);
  T4.addImage(T4I);
  T4.scale=0.1;

  T5=createSprite(1000,630,50,50);
  T5.addImage(T5I);
  T5.scale=0.04;

  HomeB=createSprite(1300,630,50,50);
  HomeB.addImage(HomeBI);
  HomeB.scale=0.1;

  SoundS=createSprite(150,630,50,50);
  SoundS.addImage(SoundI1);
  SoundS.scale=0.5;
  
  BoundL = createSprite(10, 350, 20, 700);
  BoundL.shapeColor = "Black";
  BoundR = createSprite(1490, 350, 20, 700);
  BoundR.shapeColor = "Black";
  BoundU = createSprite(750, 10, 1500, 20);
  BoundU.shapeColor = "Black";
  BoundD = createSprite(750, 690, 1500, 20);
  BoundD.shapeColor = "Black";
  //BoundD.debug=true;

  ammoGroup1 = new Group();
  ammoGroup2 = new Group();
  ammoGroup3 = new Group();
}

function draw() {
  background(GroundI);
    if(SoundV==true){
      LsV=true;
      hurtV=true;
      Sound.play();
    }
    if(SoundV==false){
      hurtV=false;
      LsV=false;
      Sound.stop();
    }
      
      
  
  if(mousePressedOver(SoundS)){
    SoundS.addImage(SoundI2);
    SoundV=false;
  }
  
  if(mousePressedOver(HomeB)){
    gameState=0;
  }
  if(gameState==7){
    background("black");
    p1.visible=true;
    p2.visible=true;
    Choose2.visible=true;
    Choose.visible = false;
    PVP.visible = false;
    PVC.visible = false;
    TC.visible=false;
    replay.visible=false;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;
    ammoGroup1.visible = false;
    ammoGroup2.visible = false;
    rh.visible = false;
    bh.visible = false;
    Ebanner1.visible = false;
    Ebanner2.visible = false;
    banner.visible = false;

    p1.changeAnimation("p1C",p1CI);
    p2.changeAnimation("p2",p2I);
    p1.y=400;
    p1.x=450;
    p2.y=400;
    p2.x=990;
    p1.scale=0.5;
    p2.scale=0.3;


    if(mousePressedOver(p1)){
      chooseP=1;
      gameState=6;
    }
    if(mousePressedOver(p2)){
      chooseP=2;
      gameState=6;
    }
  }
  if (gameState == 1) {
    Choose.visible = true;
    Choose2.visible=false;
    PVP.visible = true;
    PVC.visible = true;
    TC.visible=false;
    replay.visible=false;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;
    if (mousePressedOver(PVP)&&(gameState==1)) {
      gameState = 2;
    }
    if (mousePressedOver(PVC)&&(gameState==1)) {
      gameState = 5;
    }

    if(theme==1){
      background(T1I);
    }else if(theme==2){
      background(T2I);
    }else if(theme==3){
      background(T3I);
    }else if(theme==4){
      background(T4I);
    }else if(theme==5){
      background(T5I);
    }


  }
  if (gameState === 5) {
    banner.visible = false;
    p1.visible = true;
    p2.visible = true;
    ammoGroup1.visible = true;
    ammoGroup2.visible = true;
    rh.visible = true;
    bh.visible = true;
    Ebanner1.visible = false;
    Ebanner2.visible = false;
    Choose.visible = false;
    Choose2.visible=false;
    PVP.visible = false;
    PVC.visible = false;
    TC.visible=false;
    replay.visible=false;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;

    Sound.stop();

    

    if(chooseP==1){
     p1.changeAnimation("p1C",p1I);
     p2.changeAnimation("p2C",p2I);
     p1.scale=0.3;
     p2.scale=0.3;
    }
    if(chooseP==2){
      p1.changeAnimation("p1",p1CI);
      p2.changeAnimation("p2",p2CI);
      p1.scale=0.5;
      p2.scale=0.5;
     }

    if(theme==1){
      background(T1I);
    }else if(theme==2){
      background(T2I);
    }else if(theme==3){
      background(T3I);
    }else if(theme==4){
      background(T4I);
    }else if(theme==5){
      background(T5I);
    }

    if (keyDown("space")) {
      SpawnAmmo1();
      LsV=true;
    }
  

    if (p2.isTouching(BoundD)) {
      Bound=2;
    } else if (p2.isTouching(BoundU)) {
     Bound=1;
    }else{
      p2.velocityY=5;
    }
    console.log(p2.velocityY);

    SpawnAmmo3();

     if(Bound==1){
      p2.velocityY = 5;
     }else if(Bound==2){
      p2.velocityY = -5;
     }

    if (keyDown("W")) {
      p1.velocityY = -5;
      p1.velocityX = 0;
    }
    if (keyDown("S")) {
      p1.velocityY = 5;
      p1.velocityX = 0;
    }

    
    if (ammoGroup1.isTouching(p2)) {
      if(Bound==2){
        Bound=1;
      }if(Bound==1){
        Bound=2;
      }
      hp2 = hp2 - 10;
      ammoGroup1.destroyEach();
      if(hurtV==true){
        hurtS.play();
      }
     
    }
    if (ammoGroup3.isTouching(p1)) {
      hp1 = hp1 - 10;
      ammoGroup3.destroyEach();
      if(hurtV==true){
        hurtS.play();
      }
    }
    if (ammoGroup3.isTouching(ammoGroup1)) {
      ammoGroup1.destroyEach();
      ammoGroup3.destroyEach();
    }

    if (hp1 == 90) {
      bh.addImage(hp190);
    } else if (hp1 == 80) {
      bh.addImage(hp180);
    } else if (hp1 == 70) {
      bh.addImage(hp170);
    } else if (hp1 == 60) {
      bh.addImage(hp160);
    } else if (hp1 == 50) {
      bh.addImage(hp150);
    } else if (hp1 == 40) {
      bh.addImage(hp140);
    } else if (hp1 == 30) {
      bh.addImage(hp130);
    } else if (hp1 == 20) {
      bh.addImage(hp120);
    } else if (hp1 == 10) {
      bh.addImage(hp110);
    } else if (hp1 == 0) {
      bh.addImage(hp10);
    }

    if (hp2 == 90) {
      rh.addImage(hp290);
    } else if (hp2 == 80) {
      rh.addImage(hp280);
    } else if (hp2 == 70) {
      rh.addImage(hp270);
    } else if (hp2 == 60) {
      rh.addImage(hp260);
    } else if (hp2 == 50) {
      rh.addImage(hp250);
    } else if (hp2 == 40) {
      rh.addImage(hp240);
    } else if (hp2 == 30) {
      rh.addImage(hp230);
    } else if (hp2 == 20) {
      rh.addImage(hp220);
    } else if (hp2 == 10) {
      rh.addImage(hp210);
    } else if (hp2 == 0) {
      rh.addImage(hp20);
    }

    textSize(50);
    fill("blue");
    text(hp1, 20, 120);
    fill("red");
    text(hp2, 1100, 120);

    p1.collide(BoundL);
    p1.collide(BoundR);
    p1.collide(BoundU);
    p1.collide(BoundD);
  }

  if (gameState === 2) {
    banner.visible = false;
    p1.visible = true;
    p2.visible = true;
    Choose2.visible=false;
    ammoGroup1.visible = true;
    ammoGroup2.visible = true;
    rh.visible = true;
    bh.visible = true;
    Ebanner1.visible = false;
    Ebanner2.visible = false;
    Choose.visible = false;
    PVP.visible = false;
    PVC.visible = false;
    TC.visible=false;
    replay.visible=false;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;

    Sound.stop();

    if(chooseP==2){
      p1.changeAnimation("p1",p1I);
      p2.changeAnimation("p2",p2I);
      p1.scale=0.3;
      p2.scale=0.3;
     }
     if(chooseP==1){
       p1.changeAnimation("p1C",p1CI);
       p2.changeAnimation("p2C",p2CI);
       p1.scale=0.5;
       p2.scale=0.5;
      }

    if(theme==1){
      background(T1I);
    }else if(theme==2){
      background(T2I);
    }else if(theme==3){
      background(T3I);
    }else if(theme==4){
      background(T4I);
    }else if(theme==5){
      background(T5I);
    }
    
    if (keyDown("space")) {
      SpawnAmmo1();
      LsV=true;
    }
    if (keyDown("enter")) {
      SpawnAmmo2();
      LsV=true;
    }

    if (keyDown("W")) {
      p1.velocityY = -5;
      p1.velocityX = 0;
    }
    if (keyDown("S")) {
      p1.velocityY = 5;
      p1.velocityX = 0;
    }

    if (keyDown("UP_ARROW")) {
      p2.velocityY = -5;
      p2.velocityX = 0;
    }
    if (keyDown("DOWN_ARROW")) {
      p2.velocityY = 5;
      p2.velocityX = 0;
    }

    if (ammoGroup1.isTouching(p2)) {
      hp2 = hp2 - 10;
      ammoGroup1.destroyEach();
      if(hurtV==true){
        hurtS.play();
      }
    }
    if (ammoGroup2.isTouching(p1)) {
      hp1 = hp1 - 10;
      ammoGroup2.destroyEach();
      if(hurtV==true){
        hurtS.play();
      }
    }
    if (ammoGroup2.isTouching(ammoGroup1)) {
      ammoGroup1.destroyEach();
      ammoGroup2.destroyEach();
    }

    if (hp1 == 90) {
      bh.addImage(hp190);
    } else if (hp1 == 80) {
      bh.addImage(hp180);
    } else if (hp1 == 70) {
      bh.addImage(hp170);
    } else if (hp1 == 60) {
      bh.addImage(hp160);
    } else if (hp1 == 50) {
      bh.addImage(hp150);
    } else if (hp1 == 40) {
      bh.addImage(hp140);
    } else if (hp1 == 30) {
      bh.addImage(hp130);
    } else if (hp1 == 20) {
      bh.addImage(hp120);
    } else if (hp1 == 10) {
      bh.addImage(hp110);
    } else if (hp1 == 0) {
      bh.addImage(hp10);
    }

    if (hp2 == 90) {
      rh.addImage(hp290);
    } else if (hp2 == 80) {
      rh.addImage(hp280);
    } else if (hp2 == 70) {
      rh.addImage(hp270);
    } else if (hp2 == 60) {
      rh.addImage(hp260);
    } else if (hp2 == 50) {
      rh.addImage(hp250);
    } else if (hp2 == 40) {
      rh.addImage(hp240);
    } else if (hp2 == 30) {
      rh.addImage(hp230);
    } else if (hp2 == 20) {
      rh.addImage(hp220);
    } else if (hp2 == 10) {
      rh.addImage(hp210);
    } else if (hp2 == 0) {
      rh.addImage(hp20);
    }

    textSize(50);
    fill("blue");
    text(hp1, 20, 120);
    fill("red");
    text(hp2, 1100, 120);

    p1.collide(BoundL);
    p1.collide(BoundR);
    p1.collide(BoundU);
    p1.collide(BoundD);

    // p2.collide(BoundL);
    // p2.collide(BoundR);
    // p2.collide(BoundU);
    // p2.collide(BoundD);
  }

  if (gameState === 0) {
    p1.visible = false;
    p2.visible = false;
    Choose2.visible=false;
    ammoGroup1.visible = false;
    ammoGroup2.visible = false;
    rh.visible = false;
    bh.visible = false;
    banner.visible = true;
    Ebanner1.visible = false;
    Ebanner2.visible = false;
    Choose.visible = false;
    PVP.visible = false;
    PVC.visible = false;
    TC.visible=false;
    replay.visible=false;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;


    background("Black");
    if (keyDown("Space")) {
      gameState = 7;
      LsV=true;
    }
  }
  if(gameState==6){
     p1.visible = false;
     p2.visible = false;
     ammoGroup1.visible = false;
     ammoGroup2.visible = false;
     rh.visible = false;
     bh.visible = false;
    Choose2.visible=false;
     banner.visible = false;
     Ebanner1.visible = false;
     Ebanner2.visible = false;
     Choose.visible = false;
     PVP.visible = false;
     PVC.visible = false;
      TC.visible=true;
      T1.visible=true;
      T2.visible=true;
      T3.visible=true;
      T4.visible=true;
      T5.visible=true;
     background("Black");

     if(mousePressedOver(T1)&&(gameState==6)){
       theme=1;
       gameState=1;
     }
     if(mousePressedOver(T2)&&(gameState==6)){
      theme=2;
      gameState=1;
    }
    if(mousePressedOver(T3)&&(gameState==6)){
      theme=3;
      gameState=1;
    }
    if(mousePressedOver(T4)&&(gameState==6)){
      theme=4;
      gameState=1;
    }
    if(mousePressedOver(T5)&&(gameState==6)){
      theme=5;
      gameState=1;
    }

   }
  
  if (hp1 === 0) {
    gameState = 3;
  }
  if (hp2 === 0) {
    gameState = 4;
  }
  if (gameState == 3) {
    p1.visible = false;
    p2.visible = false;
    ammoGroup1.visible = false;
    ammoGroup2.visible = false;
    rh.visible = false;
    bh.visible = false;
    banner.visible = false;
    Ebanner1.visible = false;
    Ebanner2.visible = true;
    Choose.visible = false;
    PVP.visible = false;
    PVC.visible = false;
    TC.visible=false;
    replay.visible=true;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;


    background("Black");
  }
  if (gameState == 4) {
    p1.visible = false;
    p2.visible = false;
    Choose2.visible=false;
    ammoGroup1.visible = false;
    ammoGroup2.visible = false;
    rh.visible = false;
    bh.visible = false;
    banner.visible = false;
    Ebanner1.visible = true;
    Ebanner2.visible = false;
    Choose.visible = false;
    PVP.visible = false;
    PVC.visible = false;
    TC.visible=false;
    replay.visible=true;
    T1.visible=false;
    T2.visible=false;
    T3.visible=false;
    T4.visible=false;
    T5.visible=false;

    background("Black");
  }

  if(mousePressedOver(replay)) {
    background("Black");
    gameState=0;
    replay.visible=false;
    Ebanner2.visible = false;
    hp1=100;
    hp2=100;
    rh.addImage(rhI);
    bh.addImage(bhI);
    
  }
  console.log(gameState);

  drawSprites();

}
function SpawnAmmo1() {
  if (frameCount % 10 === 0) {
    ammo1 = createSprite(485, p1.y + 20, 40, 10);
    ammo1.addImage(ammo1I);
    ammo1.scale = 0.1;
    ammo1.velocityX = 10;
    ammo1.lifetime = 200;
    //ammo1.debug=true;
    if(LsV==true){
      Ls.play();
    }
    ammo1.setCollider("circle", 0, 0, 100);
    ammoGroup1.add(ammo1);
  }
}
function SpawnAmmo2() {
  if (frameCount % 10 === 0) {
    ammo2 = createSprite(921, p2.y - 25, 40, 10);
    ammo2.addImage(ammo2I);
    ammo2.scale = 0.1;
    ammo2.velocityX = -10;
    ammo2.lifetime = 190;
    //ammo2.debug=true;
    if(LsV==true){
      Ls.play();
    }
    ammo2.setCollider("circle", 0, 0, 100);
    ammoGroup2.add(ammo2);
  }
}
function SpawnAmmo3() {
  if (frameCount % 10 === 0) {
    ammo3 = createSprite(921, p2.y - 25, 40, 10);
    ammo3.addImage(ammo3I);
    ammo3.scale = 0.1;
    ammo3.velocityX = -10;
    ammo3.lifetime = 190;
    //ammo2.debug=true;
    if(LsV==true){
      Ls.play();
    }
    ammo3.setCollider("circle", 0, 0, 100);
    ammoGroup3.add(ammo3);
  }
}
