var canvas = document.querySelector("canvas");

canvas.width = window.innerHeight;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle ='red';
c.fillRect(100, 100, 100, 100);
c.fillStyle ='blue';
c.fillRect(200, 250, 100, 100);
c.fillStyle ='yellow';
c.fillRect(300, 400, 100, 100);

c.beginPath();
c.moveTo(400, 100);
c.lineTo(500, 100);
c.lineTo(500, 200);
c.lineTo(400, 200);
c.lineTo(400, 100);
c.strokeStyle = 'pink';
c.stroke();

 function x(){
    
    c.clearRect(400, 100, 500, 200);
} 