// let arr = ["Shashi", "Tiwari"];
// let object = {
//   name: "shashi",
//   city: "Siwan",
//   getIntro: function(){
//     console.log(this.name + " from " + this.city);
//   },
// };
// console.log(object.getIntro());

class Shape {
  constructor(h, w) {
    this.color = "red";
    this.height = h;
    this.width = w;
  }

  drawShape() {}
  calculateArea() {
    var area = this.height * this.width;
    return area;
  }
  colorOfShape() {
    return `The shape have area ${this.calculateArea()} and ${this.color}`;
  }
}
// let s = new Shape(4, 5);
// console.log(s.colorOfShape());
