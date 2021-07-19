var bgImg;
var cat;
var mouse
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,650,50,50)
    cat.scale = 0.15
    mouse = createSprite(150,650,20,20)
    mouse.scale = 0.15

}

function draw() {
    cat.addAnimation("cat", catImg1)
    mouse.addAnimation("mouse", mouseImg1)
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocity.x = 0;
        cat.position.x = 250;
        cat.addAnimation("sitting", catImg3)
        cat.changeAnimation("sitting")
        mouse.addAnimation("inspect", mouseImg3)
        mouse.changeAnimation("inspect")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning")
        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing")
        cat.velocity.x = -3;
        mouse.frameDelay = 25;
    }


}
