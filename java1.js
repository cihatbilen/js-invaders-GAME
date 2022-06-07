let player = {
  x: 450,
  y: 550,

  shoot:function(){
    return{
      x:this.x,
      y:this.y,
    };

  },
}

 let bullets = [] ;

 let direction = {
   left:false,
     right:false,
       up:false,
         down:false,
          shoot:false,
 }

function update(){

for (var index = 0; index < bullets.length; index++) {
  bullets[index].y -= 10;
}


      if (direction.left == true){
        if(player.x > 25){
          player.x -= 10;
        }
      }

      if (direction.right == true){
        if(player.x < 875){
        player.x += 10;
        }
      }

      if (direction.up == true){
        if(player.y > 0){
        player.y -=10 ;
        }
      }

      if (direction.down == true){
        if(player.y < 570){
         player.y +=10 ;
        }
      }



      draw();

}
function setup(){
  draw();
}

function draw(){
  let canvas = document.getElementById('invader');
  let context = canvas.getContext("2d");

  context.fillStyle = "black";
  context.fillRect(0, 0, 900, 600);

  context.fillStyle = "white";
  context.font = "48px serif";
  context.fillText("ja", 10 , 50);

  context.fillStyle = "green";
  context.beginPath();
  context.moveTo(player.x, player.y);
  context.lineTo(player.x -25, player.y+30);
  context.lineTo(player.x +25, player.y+30);
  context.fill();

for (var index = 0; index < bullets.length; index++) {
    const bullet = bullets[index];
    context.fillStyle = "red";
    context.beginPath();
    context.arc(bullet.x, bullet.y , 10 , 0 , Math.PI * 2);
    context.fill();
  }


}




function keyDown(event){
  switch (event.key) {
    case "ArrowLeft":
    direction.left = true;
      // player.x -= 50;
    break;

      case "ArrowRight" :
      direction.right = true;
        // player.x += 50;
      break;

      case "ArrowUp":
      direction.up = true;
            // player.y -=50 ;
        break;

          case "ArrowDown":
          direction.down = true;
              // player.y +=50 ;

          break;

          case " ":
          let bullet = player.shoot();
            bullets.push(  bullet);
          break;
  }
}

function keyUp(event){
  switch (event.key) {
    case "ArrowLeft":
    direction.left = false;
      // player.x -= 50;
    break;

      case "ArrowRight" :
      direction.right = false;
        // player.x += 50;
      break;

      case "ArrowUp":
      direction.up = false;
            // player.y -=50 ;
        break;

          case "ArrowDown":
          direction.down = false;
              // player.y +=50 ;
          break;

  }
}

window.addEventListener("load", setup);
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

setInterval(update,50);
