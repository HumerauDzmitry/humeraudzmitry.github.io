const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const persents = document.querySelectorAll('.persent'),
	  lines = document.querySelectorAll('.levels__item__strip .levels__item__strip-front');

console.log(persents);
persents.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
})