$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Игроки
	const playersSliders = []

	$('.players .swiper-container').each(function (i) {
		$(this).addClass('players_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				spaceBetween: 16,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					768: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1280: {
						slidesPerView: 3
					}
				}
			}

		playersSliders.push(new Swiper('.players_s' + i, options))

		if (slides > playersSliders[i].params.slidesPerView) {
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			playersSliders[i].destroy(true, true)
			playersSliders[i] = new Swiper('.players_s' + i, options)
		}
	})


	// Фильтр
	$('.filter .type label').click(function () {
		let newPosition = $(this).position().left

		$('.filter .type .roller').css('transform', `translateX(${newPosition}px)`)
	})


	// Турнирная таблица - Лиги
	$('.leaderboard .leagues .btn').click(function () {
		let newPosition = $(this).position().left

		$('.leaderboard .leagues .roller').css('transform', `translateX(${newPosition}px)`)
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header > .close, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!fiestResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			fiestResize = true
		} else {
			fiestResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})