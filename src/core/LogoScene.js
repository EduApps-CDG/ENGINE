var LogoScene = function() {
  var r;
  
  this.create = function() {
    r = new Rect2D({
      color:"#FF0000",
    });
  };

  this.draw = function() {
    r.draw();
  }
};