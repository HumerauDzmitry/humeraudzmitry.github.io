
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false,
	responsive: {
		0: {
			nav: true,
			gutter: 100
		},
		575: {
			nav: true,
			gutter: 100
		},
		767: {
        	nav: true,
			gutter: 100
      	},
		991: {
			nav: false
		}
	}
	
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});