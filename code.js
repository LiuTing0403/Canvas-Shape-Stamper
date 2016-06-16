var shape = "";
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
$("button.shape").on("click", function(e){
  var $e = $(e.target);
  $("button").filter(".active").removeClass("active");
  $e.addClass("active");
  shape = $e.data().type;
});
$("canvas").on("click", function(e){
  var side = 50;
  var startX = e.offsetX;
  var startY = e.offsetY;
  var color = $("[type='text']").val();
  ctx.fillStyle = color;
  if (shape === "circle") { drawCircle(startX, startY, side); }
  else if (shape === "square") { drawSquare(startX, startY, side); }
  else if (shape === "triangle") { drawTriangle(startX, startY, side); }
});
$("#clear").on("click", function(){
  clearCanvas();
});
function drawCircle(startX, startY, side){
  ctx.beginPath();//beginPath and close Path 不可以缺，否则画多个图形的时候有bug，clear的时候也会有问题
  ctx.arc(startX, startY, side/2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath;
}
function drawSquare(startX, startY, side){
  var x = startX - side/2;
  var y = startY - side/2
  ctx.beginPath();
  ctx.fillRect(x, y, side, side);
  ctx.fill();
  ctx.closePath();
}
function drawTriangle(startX, startY, side) {
  ctx.beginPath();
  ctx.moveTo(startX, startY - side/2);
  ctx.lineTo(startX + side/2, startY + side/2);
  ctx.lineTo(startX - side/2, startY + side/2);
  ctx.lineTo(startX, startY - side/2);
  ctx.fill();
  ctx.closePath();
}
function clearCanvas(){
  ctx.clearRect(0, 0, 800, 600)
}

