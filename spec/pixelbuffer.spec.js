var { expect, assert } = chai;

describe('pixelbuffer', function () {
  
  it("should create a pixelbuffer", function () {
    var pb = new PixelBuffer.create(10, 10);
    expect(pb).to.be.an.instanceof(PixelBuffer);
  })

  var pb = new PixelBuffer(10, 10);
  it("should have a width and height", function () {
    expect(pb.getWidth()).to.equal(10);
    expect(pb.getHeight()).to.equal(10);
  })

  it("should have a data array with a length of 400", function () {
    expect(pb.getData()).to.be.an.instanceof(Uint8ClampedArray);
    expect(pb.getData().length).to.equal(10 * 10 * 4);
  })

  it("should have a clear method", function () {
    expect(pb.clear).to.be.a('function');
  })

  it("should have a fill method", function () {
    expect(pb.fill).to.be.a('function');
  })



})