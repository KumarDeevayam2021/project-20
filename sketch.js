var cat
var garden
var mouse
function preload() {
catimage=loadImage(cat1.png,cat2.png,cat3.png,cat4.png,);
gardenimage=loadImage("garden.png");
mouseimage=loadImage(mouse1.png,mouse2.png,mouse3.pngmouse4.png);


}

function setup(){
    createCanvas(1000,800);
cat=createSprite(50,160,20,50);
garden=createSprite(1000,800);
mouse=createSprite(50,160,20,50);
}

function draw() {

    background(255);
    

    drawSprites();
}
function keyPressed(){

}
