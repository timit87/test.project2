$(window).scroll(function () {
				$('.l-header').css("left", -$(this).scrollLeft() + "px");
			});
			
			window.addEventListener('scroll', function(e){
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
					shrinkOn = 500,
					header = $(".b-header");
				if (distanceY > shrinkOn) {
					$('.b-header').css("height", "46px");
					$('.b-header__logo').css("height", "23px");
					$('.b-header__lang-text').css("line-height", "46px");
				} else {
					if (distanceY < shrinkOn){
						$('.b-header').css("height", "80px");
						$('.b-header__logo').css("height", "46px");
						$('.b-header__lang-text').css("line-height", "80px");
					}
				}
			});
			
			$(document).ready(function(){
				$("#click-0").click(function(event){			//click logo
					$('html, body').scrollTop(0);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
			   $("#click-1").click(function(event){			//click about us
					$('html, body').scrollTop(150);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
				$("#click-2").click(function(event){		//click industries и expertise 
					$('html, body').scrollTop(600);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
				$("#click-3").click(function(event){		//click industries и expertise 
					$('html, body').scrollTop(600);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
				$("#click-4").click(function(event){		//click ideas & portfolio 
					$('html, body').scrollTop(1250);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
				$("#click-5").click(function(event){		//click careers
					$('html, body').scrollTop(2000);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
				$("#click-6").click(function(event){		//click contact us
					$('html, body').scrollTop(3620);
					event.preventDefault();
					var target_top=$('a[name="'+this.href.split("#")[1]+'"]').offset().top;
					$('html, body').animate({scrollTop:target_top}, 'slow');
				});
			});      
			
			$(document).ready(function(){				//pager_1
				$("#pager_1").click(function() {
					$("a.b-content__top-pager-item").removeClass('active');
					$("#pager_1").addClass('active');
					$('.b-content__top').fadeOut(0);
					$(".b-content__top").fadeIn(100,function(){
						$('.b-content__top').css("background", "url('images/bg-content-top.png') no-repeat");
						$('.b-content__top').css("background-size", "cover");
					});
					$('.b-content__top-title p').fadeOut(0);
					$("#pager-title_1").fadeIn(1000);
					$('.b-content__top-subtitle p').fadeOut(0);
					$("#pager-subtitle_1").fadeIn(1000);
				});
			});
			$(document).ready(function(){				//pager_2
				$("#pager_2").click(function() {
					$('a.b-content__top-pager-item').removeClass('active');
					$("#pager_2").addClass('active');
					$('.b-content__top').fadeOut(0);
					$(".b-content__top").fadeIn(100,function(){
						$('.b-content__top').css("background", "url('images/bg-content-top-2.png') no-repeat");
						$('.b-content__top').css("background-size", "cover");
					});
					$('.b-content__top-title p').fadeOut(0);
					$("#pager-title_2").fadeIn(1000);
					$('.b-content__top-subtitle p').fadeOut(0);
					$("#pager-subtitle_2").fadeIn(1000);
				});
			});
			$(document).ready(function(){				//pager_3
				$("#pager_3").click(function() {
					$("a.b-content__top-pager-item").removeClass('active');
					$("#pager_3").addClass('active');
					$('.b-content__top').fadeOut(0);
					$(".b-content__top").fadeIn(100,function(){
						$('.b-content__top').css("background", "url('images/bg-content-top-3.png') no-repeat");
						$('.b-content__top').css("background-size", "cover");
					});
					$('.b-content__top-title p').fadeOut(0);
					$("#pager-title_3").fadeIn(1000);
					$('.b-content__top-subtitle p').fadeOut(0);
					$("#pager-subtitle_3").fadeIn(1000);
				});
			});
			$(document).ready(function(){				//pager_4
				$("#pager_4").click(function() {
					$("a.b-content__top-pager-item").removeClass('active');
					$("#pager_4").addClass('active');
					$('.b-content__top').fadeOut(0);
					$(".b-content__top").fadeIn(100,function(){
						$('.b-content__top').css("background", "url('images/bg-content-top-4.png') no-repeat");
						$('.b-content__top').css("background-size", "cover");
					});
					$('.b-content__top-title p').fadeOut(0);
					$("#pager-title_4").fadeIn(1000);
					$('.b-content__top-subtitle p').fadeOut(0);
					$("#pager-subtitle_4").fadeIn(1000);
				});
			});
			
			$(document).ready(function(){
				$('.m-content__news-list-item-button_left').hide(0);
					$('.m-content__news-list-item-button_right').click(function() {
						$('.m-content__news-list-item-button_right').hide(500);
						$('.m-content__news-list-item-button_left').show(500);
						$('.b-content__news-list-item-left').hide(500);
					});
					$('.m-content__news-list-item-button_left').click(function() {
						$('.m-content__news-list-item-button_left').hide(500);
						$('.m-content__news-list-item-button_right').show(500);
						$('.b-content__news-list-item-left').show(500);
					});							
			});