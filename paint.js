const canvas =  document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

const pen = document.querySelector("input[type=range]")
const palette = document.querySelector("input[type=color]")
const fill = document.querySelector(".control_fill");
const eraser = document.querySelector(".control_reset");
const save = document.querySelector(".control_save");

canvas.width = 700;
canvas.height = 400;
ctx.strokeStyle="black";
ctx.lineWidth = 3;
ctx.lineCap = "round";

let painting = false;
let filling = false;

function stop(e){
    painting = false;
}

function start(){
    painting = true;
}

function draw(e){
    const x = e.offsetX
    const y = e.offsetY
   if(!painting){
       ctx.beginPath();
       ctx.moveTo(e.offsetX, e.offsetY);  
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
   }  
}

function canvasSave(){

    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "Painting"
    link.click();
    }

function reset(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function filled(){
    ctx.fillRect(0,0,canvas.width,canvas.height)
}

function colorChange(e){
    const color = e.target.value;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
}

function widthChange(e){
    const value = e.target.value;
    ctx.lineWidth = value;
}

if(canvas.getContext){
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mouseleave", stop);
}

save.addEventListener("click", canvasSave);
eraser.addEventListener("click",reset);
fill.addEventListener("click", filled);
palette.addEventListener("change",colorChange);
pen.addEventListener("change",widthChange);

