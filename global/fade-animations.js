window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const slideInElements = [...document.querySelectorAll('.slide-in')];
	if (slideInElements.length > 0) {
		slideInElements.forEach((n) => setSlideAnim(n));
	}

	const fadeInElements = [...document.querySelectorAll('.fade-in')];
	if (fadeInElements.length > 0) {
		fadeInElements.forEach((n) => setFadeAnim(n));
	}

	function setFadeAnim(element) {
		gsap.set(element, { opacity: 1, autoAlpha: 1 });

		gsap.from(element, {
			opacity: 0,
			duration: 0.75,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 70%',
			},
		});
	}

	function setSlideAnim(element) {
		gsap.set(element, { opacity: 1, autoAlpha: 1 });

		gsap.from(element, {
			y: '2.5rem',
			opacity: 0,
			duration: 0.75,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 50%',
			},
		});
	}
});
