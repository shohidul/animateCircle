var p = document.getElementById('para');

var a = ['A', 'B', 'C', 'D'];
 
for (var i=1; i<10; i++) {
    p.innerHTML +=i;
    for (var j=1; j<i; j++) {
    
    p.innerHTML +=j +'<br>';
    
}
}