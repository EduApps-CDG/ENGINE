window.onload = function() {
  $.when(
    $.getScript("src/engine/Canvas.js"),
    $.getScript("src/engine/Scene.js"),
    $.getScript("src/Global.js"),
    
    $.getScript("src/core/LogoScene.js"),
    $.getScript("src/main.js"),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
    })
  ).done(function() {
    $("#load").hide();
    $("#content").show();
    main();
  });
};