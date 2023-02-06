/**
 * A fixture for testing the PixelBuffer class.
 * A fixture is a UI element that is used to test 
 * the functionality of a class. in the case the 
 * browser node tree is is used to test the class.
 */

var canvas =document.getElementById('pb');
var ctx = canvas.getContext('2d');

// a color screen(roygbiv)
var colors = [
    {r:255, g:0, b:0, a:255}, // red
    {r:255, g:165, b:0, a:255}, // orange
    {r:255, g:255, b:0, a:255}, // yellow
    {r:0, g:255, b:0, a:255}, // green
    {r:0, g:0, b:255, a:255}, // blue
    {r:75, g:0, b:130, a:255}, // indigo
    {r:238, g:130, b:238, a:255} // violet
];

// from left to right
var x = 0;
var y = 0;
var width = canvas.width / colors.length; 
var height = canvas.height ;

var pb = new PixelBuffer(canvas.width, canvas.height);

// create a noise pattern
// use the pixel buffer to draw the noise pattern
for(var i = 0; i < pb.width; i++){
   
    for(var j = 0; j < pb.height; j++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var a = 255;
        pb.setPixel(i, j, r, g, b, a);
        ctx.fillStyle = pb.toRGBA(i, j)
        .toString();

    }
    ctx.fillRect(x, y, width, height);
    x += width;
}

// for(var i = 0; i < colors.length; i++){
//     var color = colors[i];
//     ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
//     ctx.fillRect(x, y, width, height);
//     x += width;

   

// }
