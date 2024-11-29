window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const industryBlocks = document.querySelector('.home-industry-blocks');
	const industryBars = industryBlocks.querySelectorAll(
		'.home-industry_bar-fill'
	);

	let tl = gsap.timeline({
		defaults: {
			duration: 1,
			ease: 'power4.out',
		},
		scrollTrigger: {
			trigger: industryBlocks,
			start: 'top 70%',
			onEnter: beginCount,
		},
	});

	tl.from(industryBars, { width: '1.25rem' });

	function beginCount() {
		$('.counter-up').counterUp({
			time: 500,
		});
	}
});
