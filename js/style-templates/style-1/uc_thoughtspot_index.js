$(window).on('load', function() {

  $('#section-cover .container-illu img').addClass('anim');

  $window = $(window);
  var windowHeight = $window.height() / 1.5;

  var distanceSectionScreens = $('#section-screens .container-box').offset().top - windowHeight;


  $window.scroll(function() {

    if ($window.scrollTop() >= distanceSectionScreens) {
      if (!$('#section-screens .wrapper-1 .container-screens .container-box').hasClass('animBox')) {
        $('#section-screens .wrapper-1 .container-screens .container-box').addClass('animBox');
        setTimeout(function() {
          $('#section-screens .wrapper-1 .container-screens .container-box').addClass('animLayer');
        }, 500);
      }
    }
  });
});
