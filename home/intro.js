window.addEventListener('load', () => {
	const introSection = document.querySelector('.section.cc-home-intro');
	const introButton = introSection.querySelector('.button');
	const introOverlay = introSection.querySelector('.background-overlay');
	const introText = introSection.querySelector('.overflow-hidden > *');

	introButton.addEventListener('click', hideIntro);

	function hideIntro() {
		gsap.to(introText, { y: '120%', duration: 1.5, ease: 'power4.inOut' });
		gsap.to(introOverlay, {
			opacity: 0,
			duration: 1,
			delay: 1,
			ease: 'power2.out',
		});
		gsap.to(introButton, {
			y: '1.5rem',
			opacity: 0,
			delay: 0.25,
			duration: 1,
			ease: 'power2.inOut',
		});

		setTimeout(() => {
			introButton.remove();
		}, 2000);
	}
});
