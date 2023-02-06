/**
 * A fixture for testing the PixelBuffer class.
 * A fixture is a UI element that is used to test 
 * the functionality of a class. in the case the 
 * browser node tree is is used to test the class.
 */

var canvas =document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pb = new PixelBuffer(10, 10);
pb.fill(255, 0, 0, 255);
pb.drawPixel(5, 5, 0, 255, 0, 255);
ctx.putImageData(pb.getImageData(), 0, 0);


