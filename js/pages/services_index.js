/*==============================
=            QUOTES            =
==============================*/

$('#section-quotes .container-quotes .wrapper-quotes .quote').addClass('hide');
$('#section-quotes .container-quotes .wrapper-quotes .quote:nth-child(1)').removeClass('hide').addClass('show');


var numberEl = $("#section-quotes .container-quotes .wrapper-quotes .quote").length;
var countEl = 0;
var delayQuotesCaroussel = 10000;
function quotesCaroussel(){

	if (countEl < numberEl) {

		$('#section-quotes .container-quotes .wrapper-quotes .quote.show').removeClass('show').addClass('hide');

		setTimeout(function() {
			$('#section-quotes .container-quotes .wrapper-quotes .quote.hide').hide().removeClass('hide');
			countEl++;

			$('#section-quotes .container-quotes .wrapper-quotes .quote:nth-child('+countEl+')').show();
			setTimeout(function() {
				$('#section-quotes .container-quotes .wrapper-quotes .quote:visible').addClass('show');
			}, 50);

		}, 1000);

		setTimeout(function() {
			quotesCaroussel();
		}, delayQuotesCaroussel);

	} else {
		countEl = 0;
		quotesCaroussel();
	};

}

/*=====  End of QUOTES  ======*/

$(document).ready(function() {

	if (window.matchMedia("(min-width: 1250px)").matches) {

		/*===================================
		  =            WRAP LETTER            =
		  ===================================*/

		  $('#section-cover .container-text h1 > span:nth-child(1)').each(function (index) {
		      var characters = $(this).text().split("");
		      
		      $this = $(this);
		      $this.empty();
		      $.each(characters, function (i, el) {
		      $this.append("<span>" + el + "</span");
		      });

		  });

		  /*=====  End of WRAP LETTER  ======*/
		
	}


	if(window.matchMedia("(max-width: 750px)").matches) {
		$("#section-work .container-text").insertAfter("#section-work .container-title h2");
	}
  
  

})

$(window).on('load', function() {
	
	setTimeout(function() {
		$('#section-cover').addClass('anim');
	}, 100);

	quotesCaroussel();


	$window = $(window);
	  var windowHeight = $window.height() / 1.5;

	  var distanceSectionDesc = $('#section-desc').offset().top - windowHeight;
	  var distanceSectionPrEl1 = $('#section-pr-1 .el:nth-child(1)').offset().top - windowHeight;
	  var distanceSectionPrEl2 = $('#section-pr-1 .el:nth-child(2)').offset().top - windowHeight;
	  var distanceSectionQuotes = $('#section-quotes').offset().top - windowHeight;
	  var distanceSectionPrEl3 = $('#section-pr-2 .el:nth-child(1)').offset().top - windowHeight;
	  var distanceSectionPrEl4 = $('#section-pr-2 .el:nth-child(2)').offset().top - windowHeight;
	  var distanceSectionPrEl5 = $('#section-pr-2 .el:nth-child(3)').offset().top - windowHeight;
	  var distanceSectionWork = $('#section-work').offset().top - windowHeight;

	  function scrollAnim(){
	    if ($window.scrollTop() >= distanceSectionDesc) {
	      if (!$('#section-desc').hasClass('anim')) {
	        $('#section-desc').addClass('anim');
	        $('#section-desc .wrapLine').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionPrEl1) {
	      if (!$('#section-pr-1 .el:nth-child(1)').hasClass('anim')) {
	        $('#section-pr-1 .el:nth-child(1)').addClass('anim');
	        $('#section-pr-1 .el:nth-child(1) .wrapLine').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionPrEl2) {
	      if (!$('#section-pr-1 .el:nth-child(2)').hasClass('anim')) {
	        $('#section-pr-1 .el:nth-child(2)').addClass('anim');
	        $('#section-pr-1 .el:nth-child(2) .wrapLine').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionQuotes) {
	      if (!$('#section-quotes').hasClass('anim')) {
	        $('#section-quotes').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionPrEl3) {
	      if (!$('#section-pr-2 .el:nth-child(1)').hasClass('anim')) {
	        $('#section-pr-2 .el:nth-child(1)').addClass('anim');
	        $('#section-pr-2 .el:nth-child(1) .wrapLine').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionPrEl4) {
	      if (!$('#section-pr-2 .el:nth-child(2)').hasClass('anim')) {
	        $('#section-pr-2 .el:nth-child(2)').addClass('anim');
	        $('#section-pr-2 .el:nth-child(2) .wrapLine').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionPrEl5) {
	      if (!$('#section-pr-2 .el:nth-child(3)').hasClass('anim')) {
	        $('#section-pr-2 .el:nth-child(3)').addClass('anim');
	        $('#section-pr-2 .el:nth-child(3) .wrapLine').addClass('anim');
	      }
	    }

	    if ($window.scrollTop() >= distanceSectionWork) {
	      if (!$('#section-work').hasClass('anim')) {
	        $('#section-work').addClass('anim');
	        $('#section-work .wrapLine').addClass('anim');
	      }
	    }
	    

	  }

	  $window.scroll(function() {

	    scrollAnim();

	  });

	  scrollAnim();
});
