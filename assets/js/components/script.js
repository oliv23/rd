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
							$('.hero, .hero .slide').css('height', vHeight + 'px');
						} else {
							$('.hero, .hero .slide').css('height', 'auto');
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
					var wow = new WOW({
					    boxClass:     'wow',      // animated element css class (default is wow)
					    animateClass: 'animated', // animation css class (default is animated)
					    offset:       0,          // distance to the element when triggering the animation (default is 0)
					    mobile:       false,       // trigger animations on mobile devices (default is true)
					    live:         true       // act on asynchronously loaded content (default is true)
					    // callback:     function(box) {
					    //   // the callback is fired every time an animation is started
					    //   // the argument that is passed in is the DOM node being animated
					    // }
					  }
					);
					wow.init();

			if ($window.innerWidth() < 1025) {
				resizeHero(true);
			}

      // Init gallery
		  $carousel.slick({
				lazyLoad: 'progressive',
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: false,
		    swipe: true,
		    autoplay: true,
		    pauseOnHover: true,
		    autoplaySpeed: 4000,
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

			var panels = $('.service .panel'),
					terms = [],
					panelTerms = [],
					count = 0;

			function panelAnim(arr) {
			    if (count == arr.length) {
			        count = 0;
			    }

			    panelTerms = terms[count].split(',');

			    var term = panelTerms[Math.floor(Math.random() * panelTerms.length)];
			    
			    $(panels).removeClass('anim')
						.eq(count).addClass('anim')
							.find('.back p').text(term);

					count++;
			    
			    setTimeout(function () {
			        panelAnim(panels);
			    }, 1700);
			}

			if (panels.length) {
				$(panels).each(function () {
					terms.push($(this).data('terms'));
				});
				panelAnim(panels);
			}
			

			$window.on('resize', function () {
				if ($(this).innerWidth() < 1025) {
					resizeHero(true);
					// setCapHeight(true);
				} else {
					resizeHero(false);
				}

			});
		});