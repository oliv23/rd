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
this["Rhapsody"] = this["Rhapsody"] || {};
this["Rhapsody"]["Templates"] = this["Rhapsody"]["Templates"] || {};

this["Rhapsody"]["Templates"]["newspost"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"pane news-item\">\n	<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.attachments : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"news item\"></a>\n	<p class=\"news-date\">"
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"dateFormat","hash":{
    'format': ("MMMM Do, YYYY")
  },"data":data})))
    + "</p>\n	<p class=\"news-title\"><a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">";
  stack1 = lambda((depth0 != null ? depth0.title : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</a></p>\n	<div class=\"news-desc\">";
  stack1 = lambda((depth0 != null ? depth0.excerpt : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});