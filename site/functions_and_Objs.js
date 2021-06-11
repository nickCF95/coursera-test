// Function constructors

function Circle (radius) {
  this.radius = radius;
  console.log(this);
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

var x = Circle(4);
var y = new Circle(4);

//areaX = x.getArea(); This throws a TypeError: x is undefined

var areaY = y.getArea();
console.log(areaY);
var z = new Circle(10);
var areaZ = z.getArea();
console.log(areaZ);

// Object literals and "this"
  var literalCircle = {
    radius: 10,
  
    getArea: function () {
      var self = this;
      console.log(this);
      var increaseRadius = function () {
        self.radius = 20;
        console.log(self);
      };
      increaseRadius();
      console.log(this.radius);
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  console.log(literalCircle)
  console.log(literalCircle.getArea());

  // Example:
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
  }
  
  var max = new Dog("Max", "Buddy");
  max.bark();