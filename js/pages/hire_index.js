$(window).on('load', function() {

	setTimeout(function() {
		$('#container-general').addClass('ready');
	}, 500);
	

	$('#container-wrapper .wrapper.right form .li-qs .qs:nth-child(1) .container-input input').focus();

	$('body').click(function(){
		$('#container-wrapper .wrapper.right form .li-qs .qs').removeClass('select');
		$('#container-wrapper .wrapper.right form .li-qs .qs .container-input.op-dp .dropdown').removeClass('show').hide();
	})

	$('#container-wrapper .wrapper.right form .li-qs .qs .container-input.op-dp input').click(function(event){
		event.stopPropagation();
		$('#container-wrapper .wrapper.right form .li-qs .qs').removeClass('select');
		$('#container-wrapper .wrapper.right form .li-qs .qs .container-input.op-dp .dropdown').removeClass('show').hide();
		$(this).closest('.qs').addClass('select').find('.dropdown').show();
		setTimeout(function() {
			$('#container-wrapper .wrapper.right form .li-qs .qs.select .container-input.op-dp .dropdown').addClass('show');
		}, 50);
	})
	
	$('#container-wrapper .wrapper.right form .li-qs .qs .container-input.op-dp input').focus(function(){
		$('#container-wrapper .wrapper.right form .li-qs .qs').removeClass('select');
		$('#container-wrapper .wrapper.right form .li-qs .qs .container-input.op-dp .dropdown').removeClass('show').hide();
		$(this).closest('.qs').addClass('select').find('.dropdown').show();
		setTimeout(function() {
			$('#container-wrapper .wrapper.right form .li-qs .qs.select .container-input.op-dp .dropdown').addClass('show');
		}, 50);
	})

	$('#container-wrapper .wrapper.right form .li-qs .qs .container-input .dropdown .container-el .el').click(function(){
		$(this).closest('.container-input').find('input').val($(this).data('value'));
		$(this).closest('.container-el').find('.el').removeClass('select');
		$(this).addClass('select');
		$(this).closest('.dropdown').removeClass('show');
		setTimeout(function() {
			$('#container-wrapper .wrapper.right form .li-qs .qs .container-input .dropdown').hide();
		}, 50);
	})


	var elOpacityScroll = $('#container-general h1');
	var range = 50;

	$('#container-wrapper .wrapper.right').on('scroll', function () {
	  
	  var scrollTop = $(this).scrollTop(),
	      height = elOpacityScroll.outerHeight(),
	      offset = height / 2,
	      calc = 1 - (scrollTop - offset + range) / range;

	  elOpacityScroll.css({ 'opacity': calc });

	  if (calc > '1') {
	    elOpacityScroll.css({ 'opacity': 1 });
	  } else if ( calc < '0' ) {
	    elOpacityScroll.css({ 'opacity': 0 });
	  }
	  
	});


	/* --- CHECK ---  */

	function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}

	function validate() {
	  var email = $(".label-mail.require input").val();
	  if (validateEmail(email)) {
	    $(".label-mail.require").removeClass('error');
	  } else {
	    $(".label-mail.require").addClass('error');
	  }
	  return false;
	}

	$("form .submit").bind("click", validate);

    $('form .submit').click(function(){

        $('.label-input').removeClass('error');
        $('.label-input.require input:text').filter(function(){return $(this).val() == "";}).closest('.label-input').addClass('error');
        if (!$(".label-input.require textarea").val()) {
		    $('.label-input.require textarea').closest('.label-input').addClass('error');
		}

		validate();

      	var numError = $('.label-input.require.error').length;

      	if (numError == 0) {
            
            $('#container-wrapper .wrapper.right form .container-submit .submit').addClass('valid');
            setTimeout(function() {
               $.ajax(
					{	type: "post",
						url: "/AgenceMeV4/send_mail.php",
						data: $("#form").serialize(),
						success: function(response)
						{	
							$('#lightbox-validation').show();
							$('#header-desktop .container-logo').addClass('white');
							setTimeout(function() {
								$('#lightbox-validation').addClass('show');
								setTimeout(function() {
									$('#lightbox-validation .content').addClass('show');
								}, 250);
							}, 50);
						}
					});
            },500);
            
      	} else { 
      		$('#container-wrapper .wrapper.right form .container-submit .submit').addClass('error');
            setTimeout(function() {
                $('#container-wrapper .wrapper.right form .container-submit .submit').removeClass('error');
            }, 1500);
      	}
        

    })

    /* --- CHECK ---  */

})