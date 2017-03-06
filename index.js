const app = "I don't do much."

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function (x,y) {
  this.x = x;
  this.y = y;
  }

Shape.prototype.position = function () {
  return(this.x + ", " + this.y);
}

function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}

function Rectangle(x, y, width, height) {
  Quadrilateral.call(this, x, y, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(x, y, length) {
  Rectangle.call(this, x, y, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var square = new Square(1, 1, 3);
console.log(square.length);
console.log(square.width);
console.log(square.sideOneLength);
console.log(square.position());
console.log(square.move(2, 3));
console.log(square.position());
console.log(square.area());
console.log(square.perimeter());
