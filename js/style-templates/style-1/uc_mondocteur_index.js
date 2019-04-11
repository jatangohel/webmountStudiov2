$(window).on('load', function() {

	$('#section-cover .container-illu').addClass('anim');

});

$.App = {};
$.App.mondocteur = (function () {

	var that = {
		init: function () {
			$('.sectionFtr-containerFtr-ftr').addClass('show');

			var ftrAnim1 = bodymovin.loadAnimation({
			  	container: document.getElementById('cdr-icn-anim-1'),
			  	renderer: 'svg',
			  	loop: false,
			  	autoplay: false,
			  	path: '/AgenceMeV4/bodymovin/mondocteur/01-gagnez.json'
			})
			var ftrAnim2 = bodymovin.loadAnimation({
			  	container: document.getElementById('cdr-icn-anim-2'),
			  	renderer: 'svg',
			  	loop: false,
			  	autoplay: false,
			  	path: '/AgenceMeV4/bodymovin/mondocteur/02-reduisez.json'
			})
			var ftrAnim3 = bodymovin.loadAnimation({
			  	container: document.getElementById('cdr-icn-anim-3'),
			  	renderer: 'svg',
			  	loop: false,
			  	autoplay: false,
			  	path: '/AgenceMeV4/bodymovin/mondocteur/03-multipliez.json'
			})
			var ftrAnim4 = bodymovin.loadAnimation({
			  	container: document.getElementById('cdr-icn-anim-4'),
			  	renderer: 'svg',
			  	loop: false,
			  	autoplay: false,
			  	path: '/AgenceMeV4/bodymovin/mondocteur/04-simplifiez.json'
			})
			var ftrAnim5 = bodymovin.loadAnimation({
			  	container: document.getElementById('cdr-icn-anim-5'),
			  	renderer: 'svg',
			  	loop: false,
			  	autoplay: false,
			  	path: '/AgenceMeV4/bodymovin/mondocteur/05-collaborez.json'
			})
			var ftrAnim6 = bodymovin.loadAnimation({
			  	container: document.getElementById('cdr-icn-anim-6'),
			  	renderer: 'svg',
			  	loop: false,
			  	autoplay: false,
			  	path: '/AgenceMeV4/bodymovin/mondocteur/06-cabinet.json'
			})

			var sectionCover 	= $('.sectionCover-containerInput'),
				sectionPtc 		= $('.sectionPtc-containerCdr-cdr');
				

			$('#container-general').addClass('ready');
			$('#header-desktop').addClass('stick');

			// init des animations
			// .eq(index) jQuery
			that.launchAnimation(sectionPtc.eq(0), ftrAnim1);
			that.launchAnimation(sectionPtc.eq(1), ftrAnim2);
			that.launchAnimation(sectionPtc.eq(2), ftrAnim3);
			that.launchAnimation(sectionPtc.eq(3), ftrAnim4);
			that.launchAnimation(sectionPtc.eq(4), ftrAnim5);
			that.launchAnimation(sectionPtc.eq(5), ftrAnim6);

			if (window.matchMedia("(min-height: 1000px)").matches) {
			  	$('.sectionPtc-containerCdr-cdr').addClass('show');
				$('.sectionPtc-containerText').addClass('show');
			} else {
			  $window = $(window);
			    var windowHeight = $window.height() / 1.5;
			    
			    var distanceSectionPtc = $('.sectionPtc').offset().top - windowHeight;

			    $window.scroll(function() {
			    	if ($window.scrollTop() >= distanceSectionPtc) {
			            if (!$('.sectionPtc').hasClass('reach')) {
			                $('.sectionPtc').addClass('reach');
			                $('.sectionPtc-containerCdr-cdr').addClass('show');
							$('.sectionPtc-containerText').addClass('show');
			            };
			        };

			    });
			}

			
		},

		launchAnimation (element, anim) {
			element.mouseenter(function(){
				anim.stop();
				anim.play();
			})
		}
	};

	return that;
})();