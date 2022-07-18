
const searchImage = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
let clickSearch = 0;
searchImage.addEventListener('click', () => {
	if (clickSearch == 0) {
		searchInput.classList.add('input__active');
		clickSearch++;
	}
	else {
		searchInput.classList.remove('input__active');
		clickSearch -= 1;
	}
});

$(document).ready(function () {
	$('.header__burger,.nav__link').click(function (event) {
		$('.header__burger,.header__nav,.header__login').toggleClass('active__burger')
		$('body').toggleClass('lock');
	})
})
