var Importer = {
  help: function() {
    console.log("Importer.js V1.0.0 by EduApps\n<> - needed variable.\n[] - not needed variable.\n\ncommands:\n    help     - show this help message()\n    imports  - import a script/module(<url>,[onAppend],[type])");
  },

  imports: function(url, onAppend, type) {
    if (type === null) {
      type = "text/javascript";
    }

    var script = document.createElement("script");
    script.src = url;
    script.type = type;
    document.body.appendChild(script);

    if (onAppend !== null) {
      onAppend();
    }

    return script;
  }
}