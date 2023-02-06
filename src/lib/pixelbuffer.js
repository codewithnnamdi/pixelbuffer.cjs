// close all unclosed modules
; (function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], () => (root.PixelBuffer = factory()));
  } else if ((typeof module === 'object') && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();

  } else if ((typeof exports !== 'undefined') && !(module.exports)) {
    // For CommonJS with exports, don't create a global.
    // but without module.exports,
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    exports["default"] = factory();
  }
  
  else {
    // Browser globals (root is window)
    root.PixelBuffer = factory();
  }

}(typeof this !== "undefined" ? this : globalThis, function (root) {

  // UMD Definition above, do not remove this line
  'use strict';
  /**
   * @constructor PixelBuffer
   * A Pixebuffer is a 2D array of pixels.
   *  Each pixel is represented by 4 bytes (RGBA).
   * @param {*} width 
   * @param {*} height 
   * @returns 
   */

  var PixelBuffer = function (width, height) {
    this.width = width;
    this.height = height;
    this.data = new Uint8ClampedArray(width * height * 4);
    return this;
  }

  /**
   * @member Pixebuffer - get the pixel at x,y
   * @param {number} x 
   * @param {number} y 
   * @returns 
   */
  PixelBuffer.prototype.getPixel = function (x, y) {
    var index = (y * this.width + x) * 4;
    return {
      r: this.data[index],
      g: this.data[index + 1],
      b: this.data[index + 2],
      a: this.data[index + 3]
    }
  }

  /**
   * @memberof Pixebuffer - set the pixel at x,y
   * @param {*} x 
   * @param {*} y 
   * @param {*} r 
   * @param {*} g 
   * @param {*} b 
   * @param {*} a 
   */
  PixelBuffer.prototype.setPixel = function (x, y, r, g, b, a) {
    var index = (y * this.width + x) * 4;
    this.data[index] = r;
    this.data[index + 1] = g;
    this.data[index + 2] = b;
    this.data[index + 3] = a;
  }


  /**
   * @memberof Pixebuffer - get the pixel data
   * @returns {Uint8ClampedArray}
   */
  PixelBuffer.prototype.getData = function () {
    return this.data;
  }

  /**
  * @memberof PixelBuffer 
   * @member getWidth - get the width of the pixel buffer
   * @returns number
   */
  PixelBuffer.prototype.getWidth = function () {
    return this.width;
  }

  PixelBuffer.prototype.getHeight = function () {
    return this.height;
  }

  PixelBuffer.prototype.setData = function (data) {
    this.data = data;
  }
  PixelBuffer.prototype.setWidth = function (width) {
    this.width = width;
  }

  PixelBuffer.prototype.setHeight = function (height) {
    this.height = height;
  }

  PixelBuffer.prototype.clear = function (r, g, b, a) {
    var data = this.data;
    var len = data.length;
    for (var i = 0; i < len; i += 4) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = a;
    }
  }

  PixelBuffer.prototype.fill = function (r, g, b, a) {
    var data = this.data;
    var len = data.length;
    for (var i = 0; i < len; i += 4) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = a;
    }
  }
  /**
   * Draw a pixel buffer onto this pixel buffer
   * @param {*} pixelBuffer 
   * @param {*} x 
   * @param {*} y 
   */
  PixelBuffer.prototype.drawPixelBuffer = function (pixelBuffer, x, y) {
    var data = this.data;
    var pixelBufferData = pixelBuffer.getData();
    var pixelBufferWidth = pixelBuffer.getWidth();
    var len = pixelBufferData.length;
    var index;
    var pixelBufferIndex;
    for (var i = 0; i < len; i += 4) {
      index = ((y + Math.floor(i / 4 / pixelBufferWidth)) * this.width + x + (i / 4) % pixelBufferWidth) * 4;
      pixelBufferIndex = i;
      data[index] = pixelBufferData[pixelBufferIndex];
      data[index + 1] = pixelBufferData[pixelBufferIndex + 1];
      data[index + 2] = pixelBufferData[pixelBufferIndex + 2];
      data[index + 3] = pixelBufferData[pixelBufferIndex + 3];
    }
  }


  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @param {*} r 
   * @param {*} g 
   * @param {*} b 
   * @param {*} a 
   */

  PixelBuffer.prototype.drawPixel = function (x, y, r, g, b, a) {
    var index = (y * this.width + x) * 4;
    this.data[index] = r;
    this.data[index + 1] = g;
    this.data[index + 2] = b;
    this.data[index + 3] = a;
  }


  PixelBuffer.prototype.toStrRGBA = function () {
    var data = this.data;
    var len = data.length;
    var str = '';
    for (var i = 0; i < len; i += 4) {
      str += 'rgba(' + data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ',' + data[i + 3] / 255 + ')';
    }

    return str;
  }

  PixelBuffer.prototype.toRGBA = function (i, j) {
    var index = (j * this.width + i) * 4;
    return {
      r: this.data[index],
      g: this.data[index + 1],
      b: this.data[index + 2],
      a: this.data[index + 3]
    }
  }

  PixelBuffer.prototype.toStrHSLA = function () {
    var data = this.data;
    var len = data.length;
    var str = '';
    for (var i = 0; i < len; i += 4) {
      str += 'hsla(' + data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ',' + data[i + 3] / 255 + ')';
    }
    return str;
  }

  PixelBuffer.create = function (width, height) {
    return new PixelBuffer(width, height);
  }

  PixelBuffer.prototype.setImageData = function (imageData) {
    this.data = imageData.data;
    this.width = imageData.width;
    this.height = imageData.height;
  }

  PixelBuffer.prototype.getImageData = function () {
    return new ImageData(this.data, this.width, this.height);
  }

  PixelBuffer.prototype.toString = function (type) {
    switch (type) {
      case 'rgba':
        return this.toStrRGBA();
      case 'hsla':
        return this.toStrHSL();
      default:
        return this.toStrRGBA();

    }

  }

  return PixelBuffer

}));
