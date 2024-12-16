window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const chart = document.querySelector('.fruits-chart');
	const barFills = [...chart.querySelectorAll('.bar-inner_fill')];

	if (window.innerWidth > 991) {
		gsap.from(barFills, {
			height: '0.25%',
			stagger: { each: 0.0325 },
			duration: 3,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: chart,
				start: 'top 70%',
			},
		});
	}
});
