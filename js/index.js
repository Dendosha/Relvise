// Burger menu
const burgerButton = document.querySelector('[class*="burger"]');
burgerButton.addEventListener('click', (e) => {
	e.preventDefault();
	const bodyElement = document.querySelector('body');
	const menuList = document.querySelector('.menu__list');
	burgerButton.classList.toggle('--open');
	menuList.classList.toggle('--open');
	bodyElement.classList.toggle('--deactivated');
});

// Scroll listener
const pageHeader = document.querySelector('header.header');
window.addEventListener('scroll', (e) => {
	if (scrollY > 0) pageHeader.classList.add('--scrolled');
	else pageHeader.classList.remove('--scrolled');
});