$(window).on('load', function() {

	$window = $(window);
  var windowHeight = $window.height() / 1.5;

  var distanceSectionDetailsWrapperContainerText1 = $('#section-details .wrapper .container-text-1').offset().top - windowHeight;

  var distanceSectionDetailsWrapperContainerImg = $('#section-details .wrapper .container-img').offset().top - windowHeight;

  var distanceSectionDetailsWrapperContainerText2 = $('#section-details .wrapper .container-text-2').offset().top - windowHeight;

  var distanceSectionDetailsWrapperContainerMission = $('#section-details .wrapper .container-mission').offset().top - windowHeight;

  var distanceSectionTypo = $('#section-typography').offset().top - windowHeight;
  var distanceSectionTypoIllu = $('#section-typography .illu').offset().top - windowHeight;

  var distanceSectionColors = $('#section-colors').offset().top - windowHeight;

  var distanceSectionScreens1 = $('#section-screens .wrapper-screen-1').offset().top - windowHeight;
  var distanceSectionScreens2 = $('#section-screens .wrapper-screen-2').offset().top - windowHeight;
  var distanceSectionScreens3 = $('#section-screens .wrapper-screen-3').offset().top - windowHeight;

  var distanceSectionMultiscreens = $('#section-multiscreens').offset().top - windowHeight;
  var distanceSectionMultiscreensContent = $('#section-multiscreens .content').offset().top - windowHeight;
  var distanceSectionMultiscreensContainerPhone = $('#section-multiscreens .content .container-phone').offset().top - windowHeight;
  var distanceSectionMultiscreensContainerSlides = $('#section-multiscreens .container-slides .wrapperScreens').offset().top - windowHeight;

  var distanceSectionMultimockup = $('#section-multimockup').offset().top - windowHeight;
  var distanceSectionMultimockupContainerImg = $('#section-multimockup .container-img').offset().top - windowHeight;

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

	    if ($window.scrollTop() >= distanceSectionTypoIllu) {
	      if (!$('#section-typography .illu').hasClass('anim')) {
	        $('#section-typography .illu').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionColors) {
	      if (!$('#section-colors').hasClass('anim')) {
	        $('#section-colors').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionScreens1) {
	      if (!$('#section-screens .wrapper-screen-1').hasClass('anim')) {
	        $('#section-screens .wrapper-screen-1').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionScreens2) {
	      if (!$('#section-screens .wrapper-screen-2').hasClass('anim')) {
	        $('#section-screens .wrapper-screen-2').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionScreens3) {
	      if (!$('#section-screens .wrapper-screen-3').hasClass('anim')) {
	        $('#section-screens .wrapper-screen-3').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionMultiscreens) {
	      if (!$('#section-multiscreens').hasClass('anim')) {
	        $('#section-multiscreens').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionMultiscreensContainerPhone) {
	      if (!$('#section-multiscreens .content .container-phone').hasClass('anim')) {
	        $('#section-multiscreens .content .container-phone').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionMultiscreensContainerSlides) {
	      if (!$('#section-multiscreens .container-slides .wrapperScreens').hasClass('anim')) {
	        $('#section-multiscreens .container-slides .wrapperScreens').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionMultimockup) {
	      if (!$('#section-multimockup').hasClass('anim')) {
	        $('#section-multimockup').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionMultimockupContainerImg) {
	      if (!$('#section-multimockup .container-img').hasClass('anim')) {
	        $('#section-multimockup .container-img').addClass('anim');
	      }
	    }
	    
	    if (window.matchMedia("(min-width: 1260px)").matches) {
	    	var h = $('#section-multiscreens .content').height();
		    if($window.scrollTop() >= ($('#section-multiscreens .content').offset().top)-160) {
				$('#section-multiscreens .content').addClass('stikyTop');
				$('#section-multiscreens .content').removeClass('stikyBottom');
				var left = 340 +  ($('body').width()-1260)/2;
				$('#section-multiscreens .content.stikyTop .container-text').css({'left': left + 'px'});
				//console.log(left);
	   		 }
	   		 else {
	   		 	$('#section-multiscreens .content').removeClass('stikyTop');
	   		 	$('#section-multiscreens .content .container-text').css({'left': 'auto'});
	   		 }
	   		 
	   		 if($window.scrollTop() >= ($('#section-multiscreens .content').offset().top+($('#section-multiscreens .content').outerHeight()/1.5)) ) {
	   		 	$('#section-multiscreens .content').removeClass('stikyTop');
	   		 	$('#section-multiscreens .content').addClass('stikyBottom');
	   		 	$('#section-multiscreens .content .container-text').css({'left': '310px'});
	   		 }
	   		 else {
	   		 	$('#section-multiscreens .content').removeClass('stikyBottom');
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



	/*=========================================
	=            CAROUSEL SCREENS            =
	=========================================*/

	var numSlides = $('#section-multiscreens .container-slides .wrapperScreens img').length;
	var spaceSlides = parseInt($('#section-multiscreens .container-slides .wrapperScreens img').css('margin-right'));
	var widthSlides = $('#section-multiscreens .container-slides .wrapperScreens img').width();

	function initCarousel(){
		setTimeout(function() {
			$('#section-multiscreens .container-slides > .btn .progress').addClass('active');
		}, 50);
		var i = 1
		var init = setInterval(function(){ 
						$('#section-multiscreens .container-slides .wrapperScreens img:nth-child('+i+')').css({
						  	'-webkit-transform' : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
						  	'-moz-transform'    : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
						  	'-ms-transform'     : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
						  	'-o-transform'      : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
						  	'transform'         : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)'
						});
						i++;
						if(i>numSlides) clearInterval(init);
					}, 250);
	}

	function refreshCarousel(i){
		$('#section-multiscreens .container-slides .wrapperScreens img:nth-child('+i+')').css({
		  '-webkit-transform' : 'translateX(' + ((widthSlides * (i - 2)) + (spaceSlides * (i - 2))) + 'px)',
		  '-moz-transform'    : 'translateX(' + ((widthSlides * (i - 2)) + (spaceSlides * (i - 2))) + 'px)',
		  '-ms-transform'     : 'translateX(' + ((widthSlides * (i - 2)) + (spaceSlides * (i - 2))) + 'px)',
		  '-o-transform'      : 'translateX(' + ((widthSlides * (i - 2)) + (spaceSlides * (i - 2))) + 'px)',
		  'transform'         : 'translateX(' + ((widthSlides * (i - 2)) + (spaceSlides * (i - 2))) + 'px)',
		  '-webkit-transition' : '1s',
		  '-o-transition'      : '1s',
		  'transition'         : '1s'
		});
	}

	function refreshLastCarousel() {
		i = numSlides;
		$('#section-multiscreens .container-slides .wrapperScreens img:nth-child('+i+')').css({
		  '-webkit-transform' : 'translateX(' + ((widthSlides * (i)) + (spaceSlides * (i))) + 'px)',
		  '-moz-transform'    : 'translateX(' + ((widthSlides * (i)) + (spaceSlides * (i))) + 'px)',
		  '-ms-transform'     : 'translateX(' + ((widthSlides * (i)) + (spaceSlides * (i))) + 'px)',
		  '-o-transform'      : 'translateX(' + ((widthSlides * (i)) + (spaceSlides * (i))) + 'px)',
		  'transform'         : 'translateX(' + ((widthSlides * (i)) + (spaceSlides * (i))) + 'px)',
		  'opacity' : '1'
		});

		setTimeout(function() {
			$('#section-multiscreens .container-slides .wrapperScreens img:nth-child('+i+')').css({
			  '-webkit-transform' : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
			  '-moz-transform'    : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
			  '-ms-transform'     : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
			  '-o-transform'      : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
			  'transform'         : 'translateX(' + ((widthSlides * (i - 1)) + (spaceSlides * (i - 1))) + 'px)',
			  'opacity' : '1'
			});
		}, 50);
	}

	function scaleFirstCarousel() {
		$('#section-multiscreens .container-slides .wrapperScreens img:nth-child('+1+')').css({
				'opacity'            : '0',
				'-webkit-transform'  : 'scale(0.8)',
      			'-ms-transform'      : 'scale(0.8)',
          		'transform'          : 'scale(0.8)',
				'-webkit-transition' : '1s',
  				'-o-transition'      : '1s',
  				'transition'         : '1s'
			});
	}

	function navCarousel(){
		$('#section-multiscreens .container-slides > .btn .progress').removeClass('active');
		setTimeout(function() {
			$('#section-multiscreens .container-slides > .btn .progress').addClass('active');
		}, 50);
		
		setTimeout(function() {
	        scaleFirstCarousel();
			$('#section-multiscreens .container-slides .wrapperScreens img:first-child').addClass('hide');
	        
	        i=2; 
	        var cardEffect = setInterval(function(){ 
    										refreshCarousel(i);
    										i++; 
    										if(i>numSlides) clearInterval(cardEffect);
 										}, 100);
	        
	        setTimeout(function() {
	        	$('#section-multiscreens .container-slides .wrapperScreens img:first-child').insertAfter($('#section-multiscreens .container-slides .wrapperScreens img:last-child')).removeClass('hide');
	        	refreshLastCarousel();
	        }, numSlides*100 + 100);

	    }, 250);

	    clearInterval(intervalNavCaroussel);
		intervalNavCaroussel = setInterval(function(){ navCarousel() }, 2000);
	}

	$('#section-multiscreens .container-slides > .btn').click(function(){
		navCarousel();
	})
	/*=====  End of CAROUSEL SCREENS  ======*/


	initCarousel();
	var intervalNavCaroussel = setInterval(function(){ navCarousel() }, 2000);

});