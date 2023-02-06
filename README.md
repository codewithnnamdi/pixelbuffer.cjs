# pixelbuffer.js
## Manipulate Pixel from NodeJS and on the HTMl5Canvas.

## Usage
```js
var PixelBuffer = require('pixelbuffer');
var pb = new PixelBuffer(100, 100);

// set some pixels
for (var i = 0; i < 100; i++) {
  pb.setPixel(i, i, 0xff0000);
}
```