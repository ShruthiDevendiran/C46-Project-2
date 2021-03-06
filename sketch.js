const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, right, left, up;
var gh, pacMan, maze, mmg;
var score = 0;

function preload(){
 //gh = loadAnimation("./assets/Pacman.png","./assets/Pacman2.png");
 gh = loadImage("./assets/Pacman1.png");
 mmg = loadImage("./assets/maze.png");
 coin = loadImage("./assets/coins.png");
 coral_img = loadImage("./assets/coral.png");
 chuck_img = loadImage("./assets/chuck.png");
 rose_img = loadImage("./assets/rose.png");
 peach_img = loadImage("./assets/peach.png");
 home_img = loadImage("./assets/home.png")
}


function setup() {
  createCanvas(700,700)
  engine = Engine.create();
  world = engine.world;
 
  ground = createSprite(350,690,700,10);
  ground.shapeColor = "blue";
  
  right = createSprite(690,290,10,700);
  right.shapeColor = "blue";

  left = createSprite(10,350,10,700);
  left.shapeColor = "blue";

  up = createSprite(350,10,700,10);
  up.shapeColor = "blue";
  
  pacMan = createSprite(35,35,30,30);
  pacMan.addImage("Ghost Hunter", gh);
  pacMan.scale = 0.06;

  home = createSprite(680,660,50,50);
  home.addImage("home",home_img);
  home.scale = 0.1;

  v_wallsGroup = new Group();
  h_wallsGroup = new Group();
  coins_group = new Group();

 /* maze = createSprite(350,350,700,700);
  maze.addImage("maze",mmg);
  maze.scale = 1.5;*/

  verticalWalls();
  horizontalWalls()

  edges=createEdgeSprites();

  chuck = createSprite(170,550,30,60);
  chuck.addImage("chuck",chuck_img);
  chuck.scale = 0.3;
  chuck.velocityY = 10;
  chuck.velocityX = 5;

  coral = createSprite(620,570,30,60);
  coral.addImage("coral",coral_img);
  coral.scale = 0.15
  coral.velocityY = -5;
  coral.velocityX = -10;

  peach = createSprite(200,100,30,60);
  peach.addImage("peach",peach_img);
  peach.scale = 0.3;
  peach.velocityY = -10;
  peach.velocityX = -5;

  rose = createSprite(600,100,30,60);
  rose.addImage("rose", rose_img);
  rose.scale = 0.2;
  rose.velocityY = 5;
  rose.velocityX = 10;
}

function draw() 
{
  background("black");

  textSize(25);
  fill("white");
  text("Score: "+ score, 260,350)
  textSize(20);
  fill("red");
  text("Come Home =>",530,675);

  Engine.update(engine);1
  if(keyIsDown(LEFT_ARROW)){
   // console.log("I am inside if")
    pacMan.x -= 14;
  }

  if(keyIsDown(RIGHT_ARROW)){
    pacMan.x += 14;
  }

  if(keyIsDown(UP_ARROW)){
    pacMan.y -= 14;
  }

  if(keyIsDown(DOWN_ARROW)){
    pacMan.y += 14;
  }

  if(pacMan.collide(v_wallsGroup)){
    pacMan.x = 35;
    pacMan.y = 35;
  }

  if(pacMan.collide(h_wallsGroup)){
    pacMan.x = 35;
    pacMan.y = 35;
  }

  if(pacMan.collide(up) || pacMan.collide(ground)){
     pacMan.x = 35;
     pacMan.y = 35;
  }

  if(pacMan.collide(right) || pacMan.collide(left)){
     pacMan.x = 35;
     pacMan.y = 35;
  }

  chuck.bounceOff(edges);
  coral.bounceOff(edges);
  peach.bounceOff(edges);
  rose.bounceOff(edges);

  displayCoins()
  drawSprites()
}


function verticalWalls(){
  w1 = createSprite(325,20,6,80);
  w1.shapeColor = "blue";
  v_wallsGroup.add(w1);

  w2 = createSprite(535,20,6,300);
  w2.shapeColor = "blue";
  v_wallsGroup.add(w2);

  w3 = createSprite(270,190,6,270);
  w3.shapeColor = "blue";
  v_wallsGroup.add(w3);

  w4 = createSprite(110,110,6,110);
  w4.shapeColor = "blue";
  v_wallsGroup.add(w4);
  
  w5 = createSprite(642,140,6,165);
  w5.shapeColor = "blue";
  v_wallsGroup.add(w5);

  w6 = createSprite(218,85,6,60);
  w6.shapeColor = "blue";
  v_wallsGroup.add(w6);

  w7 = createSprite(430,85,6,55);
  w7.shapeColor = "blue";
  v_wallsGroup.add(w7);

  w8 = createSprite(165,135,6,55);
  w8.shapeColor = "blue";
  v_wallsGroup.add(w8);

  w9 = createSprite(325,165,6,115);
  w9.shapeColor = "blue";
  v_wallsGroup.add(w9);

  w10 = createSprite(59,219,6,110);
  w10.shapeColor = "blue";
  v_wallsGroup.add(w10);

  w11 = createSprite(218,219,6,100);
  w11.shapeColor = "blue";
  v_wallsGroup.add(w11);

  w12 = createSprite(484,270,6,220);
  w12.shapeColor = "blue";
  v_wallsGroup.add(w12);

  w13 = createSprite(429,270,6,220);
  w13.shapeColor = "blue";
  v_wallsGroup.add(w13);

  w14 = createSprite(376,320,6,220);
  w14.shapeColor = "blue";
  v_wallsGroup.add(w14);

  w15 = createSprite(57,430,6,215);
  w15.shapeColor = "blue";
  v_wallsGroup.add(w15);

  w16 = createSprite(165,350,6,165);
  w16.shapeColor = "blue";
  v_wallsGroup.add(w16);

  w17 = createSprite(112,295,6,60);
  w17.shapeColor = "blue";
  v_wallsGroup.add(w17);

  w18 = createSprite(643,510,6,270);
  w18.shapeColor = "blue";
  v_wallsGroup.add(w18);

  w19 = createSprite(270,560,6,160);
  w19.shapeColor = "blue";
  v_wallsGroup.add(w19);

  w20 = createSprite(377,560,6,160);
  w20.shapeColor = "blue";
  v_wallsGroup.add(w20);

  w21 = createSprite(325,430,6,110);
  w21.shapeColor = "blue";
  v_wallsGroup.add(w21);

  w22 = createSprite(536,400,6,50);
  w22.shapeColor = "blue";
  v_wallsGroup.add(w22);
  
  w23 = createSprite(430,460,6,60);
  w23.shapeColor = "blue";
  v_wallsGroup.add(w23);

  w24 = createSprite(217,460,6,55);
  w24.shapeColor = "blue";
  v_wallsGroup.add(w24);

  w25 = createSprite(590,455,6,60);
  w25.shapeColor = "blue";
  v_wallsGroup.add(w25);

  w26 = createSprite(430,680,6,80);
  w26.shapeColor = "blue";
  v_wallsGroup.add(w26);

  w27 = createSprite(483,535,6,110);
  w27.shapeColor = "blue";
  v_wallsGroup.add(w27);

  w28 = createSprite(589,560,6,55);
  w28.shapeColor = "blue";
  v_wallsGroup.add(w28);

  w30 = createSprite(483,670,6,60);
  w30.shapeColor = "blue";
  v_wallsGroup.add(w30);

  w31 = createSprite(110,560,6,50);
  w31.shapeColor = "blue";
  v_wallsGroup.add(w31);

  w32 = createSprite(535,510,6,55);
  w32.shapeColor = "blue";
  v_wallsGroup.add(w32);

  w33 = createSprite(535,615,6,60);
  w33.shapeColor = "blue";
  v_wallsGroup.add(w33);

  w34 = createSprite(535,298,6,60);
  w34.shapeColor = "blue";
  v_wallsGroup.add(w34);
  
  w35 = createSprite(589,350,6,55);
  w35.shapeColor = "blue";
  v_wallsGroup.add(w35);

  w36 = createSprite(590,240,6,55);
  w36.shapeColor = "blue";
  v_wallsGroup.add(w36);

  w37 = createSprite(643,298,6,58);
  w37.shapeColor = "blue";
  v_wallsGroup.add(w37);
  
}


function horizontalWalls(){
  w38 = createSprite(80,60,55,6);
  w38.shapeColor = "blue";
  h_wallsGroup.add(w38);

  w39 = createSprite(10,110,100,6);
  w39.shapeColor = "blue";
  h_wallsGroup.add(w39);

  w40 = createSprite(10,270,100,6);
  w40.shapeColor = "blue";
  h_wallsGroup.add(w40);

  w41 = createSprite(10,535,100,6);
  w41.shapeColor = "blue";

  w42 = createSprite(218,641,325,6);
  w42.shapeColor = "blue";
  h_wallsGroup.add(w42);

  w43 = createSprite(590,641,110,6);
  w43.shapeColor = "blue";
  h_wallsGroup.add(w43);

  w44 = createSprite(215,60,110,6);
  w44.shapeColor = "blue";
  h_wallsGroup.add(w44);

  w45 = createSprite(350,60,60,6);
  w45.shapeColor = "blue";
  h_wallsGroup.add(w45);

  w47 = createSprite(460,60,55,6);
  w47.shapeColor = "blue";
  h_wallsGroup.add(w47);

  w48 = createSprite(615,60,55,6);
  w48.shapeColor = "blue";
  h_wallsGroup.add(w48);

  w49 = createSprite(456,112,272,6);
  w49.shapeColor = "blue";
  h_wallsGroup.add(w49);

  w50 = createSprite(130,588,180,6);
  w50.shapeColor = "blue";
  h_wallsGroup.add(w50);

  w51 = createSprite(190,430,265,6);
  w51.shapeColor = "blue";
  h_wallsGroup.add(w51);

  w52 = createSprite(455,430,165,6);
  w52.shapeColor = "blue";
  h_wallsGroup.add(w52);

  w53 = createSprite(217,535,220,6);
  w53.shapeColor = "blue";
  h_wallsGroup.add(w53);

  w54 = createSprite(430,535,100,6);
  w54.shapeColor = "blue";
  h_wallsGroup.add(w54);

  w55 = createSprite(510,588,165,6);
  w55.shapeColor = "blue";
  h_wallsGroup.add(w55);

  w56 = createSprite(215,324,105,6);
  w56.shapeColor = "blue";
  h_wallsGroup.add(w56);

  w57 = createSprite(350,323,60,6);
  w57.shapeColor = "blue";
  h_wallsGroup.add(w57);

  w58 = createSprite(350,270,60,6);
  w58.shapeColor = "blue";
  h_wallsGroup.add(w58);

  w59 = createSprite(165,165,110,6);
  w59.shapeColor = "blue";
  h_wallsGroup.add(w59);

  w60 = createSprite(430,165,110,6);
  w60.shapeColor = "blue";
  h_wallsGroup.add(w60);

  w61 = createSprite(616,165,58,6);
  w61.shapeColor = "blue";
  h_wallsGroup.add(w61);

  w62 = createSprite(112,218,115,6);
  w62.shapeColor = "blue";
  h_wallsGroup.add(w62);

  w63 = createSprite(540,218,105,6);
  w63.shapeColor = "blue";
  h_wallsGroup.add(w63);

  w64 = createSprite(665,218,55,6);
  w64.shapeColor = "blue";
  h_wallsGroup.add(w64);

  w65 = createSprite(139,376,60,6);
  w65.shapeColor = "blue";
  h_wallsGroup.add(w65);

  w66 = createSprite(191,270,55,6);
  w66.shapeColor = "blue";
  h_wallsGroup.add(w66);

  w67 = createSprite(85,323,55,6);
  w67.shapeColor = "blue";
  h_wallsGroup.add(w67);

  w68 = createSprite(270,376,110,6);
  w68.shapeColor = "blue";
  h_wallsGroup.add(w68);

  w69 = createSprite(160,483,107,6);
  w69.shapeColor = "blue";
  h_wallsGroup.add(w69);

  w70 = createSprite(350,483,50,6);
  w70.shapeColor = "blue";
  h_wallsGroup.add(w70);

  w71 = createSprite(538,483,110,6);
  w71.shapeColor = "blue";
  h_wallsGroup.add(w71);

  w72 = createSprite(350,588,60,6);
  w72.shapeColor = "blue";
  h_wallsGroup.add(w72);

  w73 = createSprite(510,376,50,6);
  w73.shapeColor = "blue";
  h_wallsGroup.add(w73);

  w74 = createSprite(615,376,60,6);
  w74.shapeColor = "blue";
  h_wallsGroup.add(w74);

  w75 = createSprite(560,323,60,6);
  w75.shapeColor = "blue";
  h_wallsGroup.add(w75);

  w76 = createSprite(615,270,55,6);
  w76.shapeColor = "blue";
  h_wallsGroup.add(w76);

  w77 = createSprite(665,323,55,6);
  w77.shapeColor = "blue";
  h_wallsGroup.add(w77);

}

function displayCoins(){
  c1 = createSprite(615,600,10,10);
  c1.addImage(coin);
  c1.scale = 0.1;
  coins_group.add(c1);

  c2 = createSprite(120,40,10,10);
  c2.addImage(coin);
  c2.scale = 0.05;
  coins_group.add(c2);

  c4 = createSprite(220,40,10,10);
  c4.addImage(coin);
  c4.scale = 0.1;
  coins_group.add(c4);

  c6 = createSprite(360,40,10,10);
  c6.addImage(coin);
  c6.scale = 0.1;
  coins_group.add(c6);

  c8 = createSprite(460,40,10,10);
  c8.addImage(coin);
  c8.scale = 0.1;
  coins_group.add(c8);

  c10 = createSprite(560,40,10,10);
  c10.addImage(coin);
  c10.scale = 0.1;
  coins_group.add(c10);

  c12 = createSprite(660,40,10,10);
  c12.addImage(coin);
  c12.scale = 0.1;
  coins_group.add(c12);

  c14 = createSprite(665,140,10,10);
  c14.addImage(coin);
  c14.scale = 0.1;
  coins_group.add(c14);

  c16 = createSprite(50,665,10,10);
  c16.addImage(coin);
  c16.scale = 0.1;
  coins_group.add(c16);

  c18 = createSprite(150,665,10,10);
  c18.addImage(coin);
  c18.scale = 0.1;
  coins_group.add(c18);

  c20 = createSprite(250,665,10,10);
  c20.addImage(coin);
  c20.scale = 0.1;
  coins_group.add(c20);

  c22 = createSprite(350,665,10,10);
  c22.addImage(coin);
  c22.scale = 0.1;
  coins_group.add(c22);

  c24 = createSprite(455,665,10,10);
  c24.addImage(coin);
  c24.scale = 0.1;
  coins_group.add(c24);

  c26 = createSprite(560,665,10,10);
  c26.addImage(coin);
  c26.scale = 0.1;
  coins_group.add(c26);

  c28 = createSprite(660,665,10,10);
  c28.addImage(coin);
  c28.scale = 0.1;
  coins_group.add(c28);

  c30 = createSprite(665,570,10,10);
  c30.addImage(coin);
  c30.scale = 0.1;
  coins_group.add(c30);

  c32 = createSprite(665,470,10,10);
  c32.addImage(coin);
  c32.scale = 0.1;
  coins_group.add(c32);

  c34 = createSprite(665,370,10,10);
  c34.addImage(coin);
  c34.scale = 0.1;
  coins_group.add(c34);

  c36 = createSprite(665,246,10,10);
  c36.addImage(coin);
  c36.scale = 0.1;
  coins_group.add(c36);

  c38 = createSprite(35,563,10,10);
  c38.addImage(coin);
  c38.scale = 0.1;
  coins_group.add(c38);

  c40 = createSprite(35,460,10,10);
  c40.addImage(coin);
  c40.scale = 0.1;
  coins_group.add(c40);

  c42 = createSprite(35,360,10,10);
  c42.addImage(coin);
  c42.scale = 0.1;
  coins_group.add(c42);

  c44 = createSprite(35,240,10,10);
  c44.addImage(coin);
  c44.scale = 0.1;
  coins_group.add(c44);

  c46 = createSprite(35,140,10,10);
  c46.addImage(coin);
  c46.scale = 0.1;
  coins_group.add(c46);


  c48 = createSprite(90,80,10,10);
  c48.addImage(coin);
  c48.scale = 0.1;
  coins_group.add(c48);

  c50 = createSprite(185,80,10,10);
  c50.addImage(coin);
  c50.scale = 0.1;
  coins_group.add(c50);

  c52 = createSprite(300,80,10,10);
  c52.addImage(coin);
  c52.scale = 0.1;
  coins_group.add(c52);

  c54 = createSprite(400,80,10,10);
  c54.addImage(coin);
  c54.scale = 0.1;
  coins_group.add(c54);

  c56 = createSprite(505,80,10,10);
  c56.addImage(coin);
  c56.scale = 0.1;
  coins_group.add(c56);

  c58 = createSprite(610,80,10,10);
  c58.addImage(coin);
  c58.scale = 0.1;
  coins_group.add(c58);

  c59 = createSprite(350,350,10,10);
  c59.addImage(coin);
  c59.scale = 0.1;
  coins_group.add(c59);

  c60 = createSprite(250,350,10,10);
  c60.addImage(coin);
  c60.scale = 0.1;
  coins_group.add(c60);

  c61 = createSprite(350,450,10,10);
  c61.addImage(coin);
  c61.scale = 0.1;
  coins_group.add(c61);

  c62 = createSprite(200,510,10,10);
  c62.addImage(coin);
  c62.scale = 0.1;
  coins_group.add(c62);

  c63 = createSprite(200,400,10,10);
  c63.addImage(coin);
  c63.scale = 0.1;
  coins_group.add(c63);

  c64 = createSprite(300,200,10,10);
  c64.addImage(coin);
  c64.scale = 0.1;
  coins_group.add(c64);

  c65 = createSprite(560,400,10,10);
  c65.addImage(coin);
  c65.scale = 0.1;
  coins_group.add(c65);

  c66 = createSprite(300,500,10,10);
  c66.addImage(coin);
  c66.scale = 0.1;
  coins_group.add(c66);

  c67 = createSprite(455,300,10,10);
  c67.addImage(coin);
  c67.scale = 0.1;
  coins_group.add(c67);

  c68 = createSprite(195,215,10,10);
  c68.addImage(coin);
  c68.scale = 0.1;
  coins_group.add(c68);

  c69 = createSprite(550,190,10,10);
  c69.addImage(coin);
  c69.scale = 0.1;
  coins_group.add(c69);
}
