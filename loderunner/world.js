canvas = document.getElementById("canvas");
canvas.height = window.innerHeight-40;
canvas.width = window.innerWidth-44;
ctx = canvas.getContext("2d");
map_W = 30;
map_H = 15;
tile_H = Math.floor(canvas.height/map_H);
tile_W = Math.floor(canvas.width/map_W);


level1Map = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
             1,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,0,3,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,0,3,0,0,0,0,2,2,3,0,0,0,2,2,2,2,2,2,2,3,2,2,1,
             1,0,0,0,0,0,0,0,3,0,0,0,0,2,2,3,0,0,0,0,0,0,0,0,0,0,3,0,0,1,
             1,2,2,3,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,1,
             1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,
             1,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,0,0,0,3,4,4,4,4,4,4,4,4,4,4,3,0,0,0,0,0,0,0,1,
             1,0,0,0,0,3,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,1,
             1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
             1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
             1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
            ]

class Sprite{
  constructor(id,imageName,isDestroyable){
    this.id = id;
    this.image = null;
    this.destroyable = isDestroyable;

    if (imageName != undefined && imageName!= "" && imageName!= null){
      this.image = new Image();
      this.image.src =  imageName;

    }
    else{
      console.log("not loaded");
    }
  }
  draw(x,y,w,h){
      ctx.drawImage(this.image,x,y,w,h);
  }
}

let block = new Sprite(1,"block.png",false);
let brick = new Sprite(2,"brick.png",true);
let ladder = new Sprite(3,"ladder.png",false);
let pipe = new Sprite(4,"pipe.png",false);

setInterval(()=>{
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,canvas.width,canvas.height);
mapIndex = 0;
for (i = 0; i < map_H;i++){
  for (j= 0; j < map_W; j++,mapIndex++){
    var tile_x = j * tile_W;
    var tile_y = i * tile_H;
    if (level1Map[mapIndex] == 1){
      block.draw(tile_x,tile_y,tile_W,tile_H);
    }
    else if (level1Map[mapIndex] == 2){
      brick.draw(tile_x,tile_y,tile_W,tile_H);
    }
    else if (level1Map[mapIndex] == 3){
      ladder.draw(tile_x,tile_y,tile_W,tile_H);
    }
    else if (level1Map[mapIndex] == 4){
      pipe.draw(tile_x,tile_y,tile_W,tile_H);
    }
  }
}
},25)


