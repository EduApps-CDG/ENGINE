function load() {
  $.when(
    $.getScript(".js"),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
    })
  ).done(function() {
    $("#load").style.display = "hidden";
    $("game").style.display = "visible";
  });
}