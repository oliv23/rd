'use strict';

		$(window).load(function() {

			var header = $('header'),
					navBtn = $('.nav-btn'),
					//navlink = $('.nav-link'),
					//expBtn = $('.bttn-exp'),
					// expBtnText = $('.bttn-exp').text(),
					// techFrame,
					$window = $(window),
					// btnPlay = $('.vid-btn'),
					// btnText = btnPlay.text(),
					//poster = $('.vid-ph'),
					// iframe = $('#vid1')[0],
					// vid = $f(iframe),
					// vidPlaying = false,
					$carousel = $('.carousel'),
					//readMore = $('.read-more'),
					// $newsTemplate = $('.hbs-news-posts'),

					handleScrollFn = function () {
						if ($window.scrollTop() > 250) {
					    header.addClass('fixed').removeClass('menu-open');
					  } else {
					    header.removeClass('fixed menu-open');
					  }

						// if ($window.scrollTop() > 580 && vidPlaying) {
						// 	vid.api('pause');
						// }
					},

					resizeHero = function (isMobile) {
						if (isMobile) {
							var vHeight = $window.height();
							$('.hero, .slide').css('height', vHeight + 'px');
						} else {
							$('.hero, .slide').css('height', 'auto');
						}
					},

					handleNav = function (e) {
						header.toggleClass('menu-open');
						//header.hasClass('fixed') ? {} : header.addClass('fixed');
						e.preventDefault();
					};

					// handleNavLink = function (e) {
					// 	header.removeClass('menu-open');
					// 	e.preventDefault();
					// },

					//  format an ISO date using Moment.js
					//  http://momentjs.com/
					//  moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
					//  usage: {{dateFormat creation_date format="MMMM YYYY"}}
					Handlebars.registerHelper('dateFormat', function(context, block) {
						if (window.moment) {
							var f = block.hash.format || 'MMMM Do YYYY, h:mm:ss a';
							return moment(context).format(f); //had to remove Date(context)
						}else{
							return context;   //  moment plugin not available. return data as is.
						}
					});

					// getNewsPosts();
					// initMap();
					$window.on('scroll', handleScrollFn);
					navBtn.on('click', handleNav);
					// navlink.on('click', handleNavLink);
					// $('.vid-btn').on('click', playVid);
					// expBtn.on('click', handleCarousel);
					$(header).scrollupbar();
					// $(readMore).on('click', handleCap);

					handleScrollFn();
					// var wow = new WOW({
					//     boxClass:     'wow',      // animated element css class (default is wow)
					//     animateClass: 'animated', // animation css class (default is animated)
					//     offset:       0,          // distance to the element when triggering the animation (default is 0)
					//     mobile:       true,       // trigger animations on mobile devices (default is true)
					//     live:         true       // act on asynchronously loaded content (default is true)
					//     // callback:     function(box) {
					//     //   // the callback is fired every time an animation is started
					//     //   // the argument that is passed in is the DOM node being animated
					//     // }
					//   }
					// );
					// wow.init();

			if ($window.innerWidth() < 1025) {
				resizeHero(true);
			}

      // Init gallery
		  $carousel.slick({
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: false,
		    swipe: true,
		    autoplay: true,
		    pauseOnHover: true,
		    autoplaySpeed: 60000,
		    infinite: true,
		    speed: 800,
		    fade: true,
		    dots: true,
		    slide: '.slide',
		    cssEase: 'linear'
		  });

		  var $container = $('.grid');
			// init
			$container.packery({
			  itemSelector: '.item',
			  gutter: 0,
			  percentPosition: true
			});


			$window.on('resize', function () {
				if ($(this).innerWidth() < 1025) {
					resizeHero(true);
					// setCapHeight(true);
				} else {
					resizeHero(false);
				}

			});
		});