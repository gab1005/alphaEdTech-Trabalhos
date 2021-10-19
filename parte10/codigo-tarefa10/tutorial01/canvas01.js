var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c de context
var c = canvas.getContext('2d');
c.fillStyle = 'blue';
c.fillRect(100, 100, 50, 50);

console.log(canvas);