var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c de context
var c = canvas.getContext('2d');

//arc / circle
for (var i = 0; i < 10; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();

  c.fillStyle = 'green';
  c.fillRect(x + 20, y - 25, 50, 50);

  c.moveTo(x, y);
  c.lineTo(x + 100, y + 50);
  c.lineTo(x + 100, y - 50);
  c.lineTo(x, y);
  c.strokeStyle = 'red';
  c.stroke();
}
