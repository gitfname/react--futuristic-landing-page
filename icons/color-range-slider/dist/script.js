(function() {
  // Helper function
  var update_handle_track_pos;

  // update_handle_track_pos = function(slider, ui_handle_pos) {
  //   var handle_track_xoffset, slider_range_inverse_width;
  //   handle_track_xoffset = -((ui_handle_pos / 100) * slider.clientWidth);
  //   $(slider).find(".handle-track").css("left", handle_track_xoffset);
  //   slider_range_inverse_width = (100 - ui_handle_pos) + "%";
  //   return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
  // };

  get_pos = function(slider, ui_handle_pos, max) {
    var handle_track_xoffset, slider_range_inverse_width;
    handle_track_xoffset = -((ui_handle_pos / max) * slider.clientWidth);
    return handle_track_xoffset
    // $(slider).find(".handle-track").css("left", handle_track_xoffset);
    // slider_range_inverse_width = ((max - ui_handle_pos) / max) * 100 + "%";
    // return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
  };

  update_handle_track_pos = function(slider, ui_handle_pos, max) {
    var handle_track_xoffset, slider_range_inverse_width;
    handle_track_xoffset = -((ui_handle_pos / max) * slider.clientWidth);
    $(slider).find(".handle-track").css("left", handle_track_xoffset);
    slider_range_inverse_width = ((max - ui_handle_pos) / max) * 100 + "%";
    return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
  };
  

  // Init slider
  $(".js-slider").slider({
    range: "min",
    max: 5,
    value: 0,
    create: function(event, ui) {
      var slider;
      slider = $(event.target);
      
      // Append the slider handle with a center dot and it's own track
      slider.find('.ui-slider-handle').append('<span class="dot"><span class="handle-track"></span></span>');
      
      // Append the slider with an inverse range
      slider.prepend('<div class="slider-range-inverse"></div>');
      
      // Set initial dimensions
      slider.find(".handle-track").css("width", event.target.clientWidth);
      
      // for(let i = 0; i<max; i++) {
      //   const pos = update_handle_track_pos(event.target, i, 5);

      // }

      // Set initial position for tracks
      return update_handle_track_pos(event.target, $(this).slider("value"), 5);
    },
    slide: function(event, ui) {
      // Update position of tracks
      return update_handle_track_pos(event.target, ui.value, 5);
    }
  });

}).call(this);