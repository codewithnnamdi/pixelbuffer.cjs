import chai from './chai.js';
import "../src/pixelbuffer.js";

var { expect, assert } = chai;

describe('pixelbuffer', function () {
  it("should create a pixelbuffer", function () {
    var pb = new PixelBuffer(10, 10);
    expect(pb).to.be.an.instanceof(PixelBuffer);
  })

  var pb = new PixelBuffer(10, 10);
  it("should have a width and height", function () {
    expect(pb.getWidth()).to.equal(10);
    expect(pb.getHeight()).to.equal(10);
  })

  it("should have a data array", function () {
    expect(pb.getData()).to.be.an.instanceof(Uint8ClampedArray);
  })

  it("should have a data array of the correct size", function () {
    expect(pb.getData().length).to.equal(10 * 10 * 4);
  })

})