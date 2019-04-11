$(window).on('load', function() {

  $window = $(window);
  var windowHeight = $window.height() / 1.5;

  var distanceSectionDetailsWrapperContainerText1 = $('#section-details .wrapper .container-text-1').offset().top - windowHeight;

  var distanceSectionDetailsWrapperContainerImg = $('#section-details .wrapper .container-img').offset().top - windowHeight;

  var distanceSectionDetailsWrapperContainerText2 = $('#section-details .wrapper .container-text-2').offset().top - windowHeight;

  var distanceSectionDetailsWrapperContainerMission = $('#section-details .wrapper .container-mission').offset().top - windowHeight;

  var distanceSectionTypo = $('#section-typography').offset().top - windowHeight;

  var distanceSectionColors = $('#section-colors').offset().top - windowHeight;
  var distanceSectionColorsWrapperContainerText = $('#section-colors .container-text').offset().top - windowHeight;


  var distanceSectionScreensWrapper1      = $('#section-screens .wrapper-1').offset().top - windowHeight;
  var distanceSectionScreensWrapper2      = $('#section-screens .wrapper-2 .container-text').offset().top - windowHeight;
  var distanceSectionScreensWrapperLaptop = $('#section-screens .wrapper-laptop').offset().top - windowHeight;
  var distanceSectionScreensWrapper3      = $('#section-screens .wrapper-3').offset().top - windowHeight;
  var distanceSectionScreensWrapper4      = $('#section-screens .wrapper-4').offset().top - windowHeight;
  var distanceSectionScreensWrapper5      = $('#section-screens .wrapper-5').offset().top - windowHeight;

  function scrollAnim(){
    if ($window.scrollTop() >= distanceSectionDetailsWrapperContainerText1) {
      if (!$('#section-details .wrapper .container-text-1').hasClass('anim')) {
        $('#section-details .wrapper .container-text-1').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionDetailsWrapperContainerImg) {
      if (!$('#section-details .wrapper .container-img').hasClass('anim')) {
        $('#section-details .wrapper .container-img').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionDetailsWrapperContainerText2) {
      if (!$('#section-details .wrapper .container-text-2').hasClass('anim')) {
        $('#section-details .wrapper .container-text-2').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionDetailsWrapperContainerMission) {
      if (!$('#section-details .wrapper .container-mission').hasClass('anim')) {
        $('#section-details .wrapper .container-mission').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionTypo) {
      if (!$('#section-typography').hasClass('anim')) {
        $('#section-typography').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionColors) {
      if (!$('#section-colors').hasClass('anim')) {
        $('#section-colors').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionColorsWrapperContainerText) {
      if (!$('#section-colors .container-text').hasClass('anim')) {
        $('#section-colors  .container-text').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionScreensWrapper1) {
      if (!$('#section-screens .wrapper-1').hasClass('anim')) {
        $('#section-screens .wrapper-1').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionScreensWrapper2) {
      if (!$('#section-screens .wrapper-2').hasClass('anim')) {
        $('#section-screens .wrapper-2').addClass('anim');
        $('#section-screens .wrapper-2 .wrapLine').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionScreensWrapperLaptop) {
      if (!$('#section-screens .wrapper-laptop').hasClass('anim')) {
        $('#section-screens .wrapper-laptop').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionScreensWrapper3) {
      if (!$('#section-screens .wrapper-3').hasClass('anim')) {
        $('#section-screens .wrapper-3').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionScreensWrapper4) {
      if (!$('#section-screens .wrapper-4').hasClass('anim')) {
        $('#section-screens .wrapper-4').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionScreensWrapper5) {
      if (!$('#section-screens .wrapper-5').hasClass('anim')) {
        $('#section-screens .wrapper-5').addClass('anim');
      }
    }
  }

  $window.scroll(function() {

    scrollAnim();

  });

  setTimeout(function() {
    $('#container-general').addClass('ready');
    $('#section-cover').addClass('anim');
    
    setTimeout(function() {
      $('#section-cover .wrapLine').addClass('anim');
      setTimeout(function() {
        scrollAnim();
      }, 500);
    }, 500);
  }, 500);

});