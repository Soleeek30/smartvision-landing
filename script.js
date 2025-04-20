// Таймер обратного отсчета
function updateCountdown() {
	let minutes = 29
	let seconds = 59

	const countdown = setInterval(() => {
		document.getElementById('countdown').textContent = `${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

		if (seconds === 0) {
			if (minutes === 0) {
				clearInterval(countdown)
				document.getElementById('countdown').textContent = 'Акция завершена!'
				return
			}
			minutes--
			seconds = 59
		} else {
			seconds--
		}
	}, 1000)
}

// Галерея продукта
function initProductGallery() {
	const galleryImages = document.querySelectorAll('.product-gallery img')
	galleryImages.forEach(img => {
		img.addEventListener('click', () => {
			galleryImages.forEach(i => i.classList.remove('active'))
			img.classList.add('active')
		})
	})
}

// Форма заказа
function handleOrderForm() {
	const form = document.querySelector('.order-form')
	form.addEventListener('submit', e => {
		e.preventDefault()

		// Здесь можно добавить отправку данных на сервер
		alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.')
		form.reset()
	})
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
	updateCountdown()
	initProductGallery()
	handleOrderForm()

	// Анимация при скролле
	const animateOnScroll = () => {
		const elements = document.querySelectorAll(
			'.benefit-item, .product-gallery img, .testimonial'
		)

		elements.forEach(element => {
			const elementPosition = element.getBoundingClientRect().top
			const screenPosition = window.innerHeight / 1.3

			if (elementPosition < screenPosition) {
				element.style.opacity = '1'
				element.style.transform = 'translateY(0)'
			}
		})
	}

	// Начальное состояние
	document
		.querySelectorAll('.benefit-item, .product-gallery img, .testimonial')
		.forEach(el => {
			el.style.opacity = '0'
			el.style.transform = 'translateY(20px)'
			el.style.transition = 'all 0.6s ease'
		})

	window.addEventListener('scroll', animateOnScroll)
	animateOnScroll() // Инициализация при загрузке
})
