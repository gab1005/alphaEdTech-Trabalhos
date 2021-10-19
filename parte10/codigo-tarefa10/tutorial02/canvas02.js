var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c de context
var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100, 100, 50, 50);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(50, 250, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(100, 200, 75, 75);

console.log(canvas);

c.beginPath();
c.moveTo(50, 200);
c.lineTo(300, 100)
c.lineTo(400, 300);
c.strokeStyle = 'blue';
c.stroke();

//arc / circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
