function preload(){
    img=loadImage("clock.jpg")
    }
    
    function setup(){
    canvas=createCanvas(300, 300)
    canvas.center();
    }
    
    function draw(){
    image(img, 0, 0, 300, 300);
    }