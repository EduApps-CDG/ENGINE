/**
 * Canvas tools.
 * 
 * @constructor
 * @type class
 */
var Canvas = {
  /**
   * Destroy Global.ACTUAL_SCENE and starts a new
   * scene.
   * 
   * @param { Scene } scene The scene.
   * @see Scene
   */
  startScene: function(scene) {
    if (Global.ACTUAL_SCENE == null) {
      console.warn("[WARNING] <b>Global.ACTUAL_SCENE</b> is null");
    } else {
      Global.ACTUAL_SCENE.destroy();
    }
    scene.create();
    scene.draw();
    Global.ACTUAL_SCENE = scene;
  },
  
  /**
   * Set the rendering width of Canvas
   * 
   * @param { number } width The rendering width of canvas.
   */
  setRenderingWidth: function(width) {
    canvas.width = width;
  },
  /**
   * Set the rendering height of Canvas
   * 
   * @param { number } height The rendering height of canvas.
   */
  setRenderingHeight: function(height) {
    canvas.height = height;
  },
  /**
   * Set the rendering size of Canvas
   * 
   * @param { number } width The rendering width of canvas.
   * @param { number } width The rendering height of canvas.
   */
  setRenderingSize: function(width, height) {
    canvas.width = width;
    canvas.height = height;
  },
  
  /**
   * Set the width of Canvas onscreen
   * 
   * @param { number } width The width of canvas.
   */
  setWidth: function(width) {
    canvas.style.width = width;
  },
  /**
   * Set the height of Canvas onscreen
   * 
   * @param { number } height The height of canvas.
   */
  setHeight: function(height) {
    canvas.style.height = height;
  },
  /**
   * Set the size of Canvas onscreen
   * 
   * @param { number } width The width of canvas.
   * @param { number } height The height of canvas.
   */
  setSize: function(width, height) {
    canvas.style.height = height;
    canvas.style.width = width;
  },
};