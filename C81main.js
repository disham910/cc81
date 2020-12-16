canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="white";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    console.log("mymousedown");
    mousex=e.clientX-canvas.offsetLeft;
mousey=e.clientY-canvas.offsetTop;
console.log(mousex+""+mousey);

circle(mousex,mousey);
}
function circle(x,y){
    console.log("circlefunction");
    ctx.beginPath();
    ctx.strokeStyle="white";
    ctx.lineWidth=2;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();


}

