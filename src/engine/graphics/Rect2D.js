/**
 * Create a 2D Rectangle
 * @constructor
 * @param {Object} params parameters.
 * @param {number} params.x The X position of the Rect2D.
 * @param {number} params.y The Y position of the Rect2D.
 * @param {number} params.width The width of the Rect2D, if null will be 50.
 * @param {number} params.height The height of the Rect2D, if null will be 50.
 * @param {number} params.stroke The stroke width of the Rect2D, if null will be 1.
 * @param {string} params.color color of the Rect2D, if null will be green.
 * @param {boolean} params.fill will the color fill the Rect2D? if null will be false.
 * @type Rect2D
 */
function Rect2D(params = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  color: "#00FF00",
  fill: false,
  stroke: 1
}) {
  this.X = params.x;
  this.Y = params.y;
  this.WIDTH = params.width;
  this.HEIGHT = params.height;
  this.COLOR = params.color;
  this.FILL = params.fill;
  
  this.draw = function() {
    if (this.FILL == true) {
      ctx.fillStyle = this.COLOR;
      ctx.fillRect(this.X,this.Y,this.WIDTH,this.HEIGHT);
      ctx.fillStyle = Color.BLACK;
    } else {
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.COLOR;
      ctx.strokeRect(this.X,this.Y,this.WIDTH,this.HEIGHT);
      ctx.strokeStyle = Color.BLACK;
    }
  }
};