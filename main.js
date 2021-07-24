function add() {
    backgroud_imgTag = new Image();
    backgroud_imgTag.onload = uploadBackground;
    backgroud_imgTag.src = backgroud_imgage;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_imgage;

}

function uploadBackground(){
   ctx.drawImage(backgroud_imgTag,0,0,canvas.width, canvas.height);    
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,canvas.width, canvas.height);    
}

window,addEventListener("keydown",my_keydown);

function my_keydown(){
    keyPressed = e.my_keydown;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
       left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
       right();
        console.log("right");
    }
}