$(window).on('scroll',function () { //скролл l-header по горизонтали
	$('.l-header').css("left", -$(this).scrollLeft() + "px");
});
			
$(window).on('scroll', function() { //уменьшение b-header при вертикальном скролле
	if (window.scrollY > 500) {
		$('.b-header').addClass('m-header_small');
	} else {
		$('.b-header').removeClass('m-header_small');
	}
});

$('.b-header__menu-item, .b-header__logo, .b-header__button').on('click', function() {
	var targetTop;
	if ($(this).hasClass('m-header__logo_click')) {
		targetTop = 0;
	} else if ($(this).hasClass('m-header__menu-item_1')) {
		targetTop = 150;
	} else if ($(this).hasClass('m-header__menu-item_2')) {
		targetTop = 600;
	} else if ($(this).hasClass('m-header__menu-item_3')) {
		targetTop = 600;
	} else if ($(this).hasClass('m-header__menu-item_4')) {
		targetTop = 1250;
	} else if ($(this).hasClass('m-header__menu-item_5')) {
		targetTop = 2000;
	} else if ($(this).hasClass('m-header__button_click')) {
		targetTop = 3620;
	}
	$('html, body').animate({
		scrollTop: targetTop
	}, 'slow');

	return false;
});
			
			//переключение табов
$('.b-content__top-pager-item').on('click', function() {   // кликаем по любой из кнопочек
	if(!$(this).hasClass('m-content__top-pager-item_active')) {  //если она не активена
		$('.b-content__top-pager-item').removeClass('m-content__top-pager-item_active');	//убираем модификатор из автивной кнопки
		$(this).addClass('m-content__top-pager-item_active');	//делаем активной кнопочку которую мы кликнули
		$('.b-content__top-item').css('opacity', 0);	//скрываем в прозрачность отображаемые элементы
		$('.b-content__top-item').eq($(this).index()).css('opacity', 1);	//выбираем нужный элемент и выводим его из прозрачности. Я так понял что выбирается по порядковому номеру, если нажимаем допустим 3-ю кнопку, то третий элемент и выводит.
		}
		return false;	
});

	
			
				
