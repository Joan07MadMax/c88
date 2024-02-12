var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 15;
player_y = 15;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToHeight(150);
        player_object.scaleToWidth(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img

        block_image_object.scaleToHeight(block_width = 30);
        block_image_object.scaleToWidth(block_height = 30);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed)
    if(e.shiftkey == true && keyPressed == '80')
    {
        console.log("se presiona sift + P" );
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("ancho_actua").innerHTML = block_width;
        document.getElementById("alto_actua").innerHTML = block_height;
    }

    if(e.shiftkey && keyPressed == '77')
    {
        console.log("se presiona sift + M" );
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("ancho_actua").innerHTML = block_width;
        document.getElementById("alto_actua").innerHTML = block_height;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("arriba");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("abajo");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("izquierda");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("derecha");
    }
    if(keyPressed == '87')
    {
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed == '76')
    {
        new_image("light_green.png");
        console.log("l");
    }
    if(keyPressed == '71')
    {
        new_image("ground.png");
        console.log("g");
    }
    if(keyPressed == '84')
    {
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == '82')
    {
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed == '89')
    {
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == '68')
    {
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed == '67')
    {
        new_image("cloud.jpg");
        console.log("c");
    }
    if(keyPressed == '85')
    {
        new_image("unique.png");
        console.log("u");
    }

}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y  - block_height;
        console.log("altura del bloque = " + block_height);
        console.log("Coando se precione la flecha de ariba, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y  + block_height;
        console.log("altura del bloque = " + block_height);
        console.log("Coando se precione la flecha de abajo, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x  - block_width;
        console.log("ancho del bloque = " + block_width);
        console.log("Coando se precione la flecha de izquierda, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x  + block_width;
        console.log("ancho del bloque = " + block_width);
        console.log("Coando se precione la flecha de derecha, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}