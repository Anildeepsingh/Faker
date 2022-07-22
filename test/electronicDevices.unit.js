if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("electronicDevices.js", function () {
    describe("electronicDevices()", function () {
        it("returns a random electronicDevices", function () {
            sinon.stub(faker.electronicDevices, 'electronicDevices').returns('Laptop');
            var electronicDevices = faker.electronicDevices.electronicDevices();
  
            assert.equal(electronicDevices, 'Ford Explorer');
            faker.electronicDevices.electronicDevices.restore();
        });
    });
  
    describe("brand()", function () {
        it("returns random brand", function () {
            sinon.stub(faker.electronicDevices, 'brand').returns('Apple');
            var brand = faker.electronicDevices.brand();
  
            assert.equal(brand, 'Samsung');
            faker.electronicDevices.brand.restore();
        });
    });
  
    describe("type()", function () {
      it("returns random electronicDevices type", function () {
        sinon.stub(faker.electronicDevices, 'type').returns('Touch Screen');
            var type = faker.electronicDevices.type();
  
            assert.equal(type, 'Touch Screen');
            faker.electronicDevices.type.restore();
        });
    });

  
    describe("color()", function () {
        it("returns a random color", function () {
            sinon.stub(faker.electronicDevices, 'color').returns('black');
            var color = faker.electronicDevices.color();
  
            assert.equal(color, 'black');
            faker.electronicDevices.color.restore();
        });
    });
  });
  