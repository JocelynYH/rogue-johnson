var player = $('audio').mediaelementplayer();

$(player).on("play", function(event) {

  window.onbeforeunload = function() {
    return "The podcast will stop playing if you navigate away.";
  }

}).on("pause", function(event) {

  window.onbeforeunload = void(0);

});