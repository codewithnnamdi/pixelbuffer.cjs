
var canvas = document.getElementById('pixelbuffer');
var ctx = canvas.getContext('2d');

var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var data = imageData.data;

for (var i = 0; i < data.length; i += 4) {
    if (Math.random() < 0.05) {
        data[i] = Math.floor(Math.random() * 255);
        data[i + 1] = Math.floor(Math.random() * 255);
        data[i + 2] = Math.floor(Math.random() * 255);
        data[i + 3] = 255
    }
    
}
ctx.putImageData(imageData, 0, 0);


