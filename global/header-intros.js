window.addEventListener('load', () => {
	const headerTitle = document.querySelector('.header-title');
	const headerVisual = document.querySelector('.header-visual');
	const headerText = document.querySelector('.header-text');
	const headerVisualChildren = document.querySelectorAll(
		'.header-visual > *:not(img)'
	);
	const navComponent = document.querySelector('.nav-component');

	if (headerTitle) {
		gsap.set(
			[
				headerTitle,
				headerText,
				headerVisual,
				headerVisualChildren,
				navComponent,
			],
			{
				opacity: 1,
				autoAlpha: 1,
			}
		);

		const tl = new gsap.timeline({
			defaults: {
				duration: 1,
				ease: 'power4.out',
			},
		});

		tl.from([headerTitle, headerVisual, headerText, headerVisualChildren], {
			y: '2.5rem',
			opacity: 0,
			stagger: 0.125,
		}).from(navComponent, { y: '-100%', opacity: 1, delay: 0.5 }, '<');
	} else {
		gsap.set(navComponent, {
			opacity: 1,
			autoAlpha: 1,
		});
	}
});
