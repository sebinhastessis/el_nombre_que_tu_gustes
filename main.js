var cuevas= new fabric.Canvas("myCanvas");
var cosasX_=50;
var cosasY_=50;
var cocos=30; chicle=30;
var cliche="chile";
var correo="epico";
function ñ(){
 fabric.Image.fromURL("166px-Mob1.png", function(hola){
    correo=hola;
    correo.scaleToWidth(750);
    correo.scaleToHeight(550);
    correo.set({
    top:cosasX_,left: cosasY_
    })
cuevas.add(correo);
 })
}
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	cliche = Img;

	cliche.scaleToWidth(cocos);
	cliche.scaleToHeight(cocos);
	cliche.set({
	top:player_y,
	left:player_x
	});
	cuevas.add(cliche);

	});

}

window.addEventListener("keydown",no_se);

function no_se(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

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
	
  
  
  
  
  
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
