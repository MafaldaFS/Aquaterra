window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const contentWrapper = [...document.querySelectorAll('[kdv-content-block]')];
	console.log(contentWrapper);

	if (contentWrapper.length > 0) {
		contentWrapper.forEach((block) => {
			const setting = block.getAttribute('kdv-content-block');
			let direction = {
				y: '2.5rem',
				x: '0rem',
			};

			//set direction
			if (setting === 'from-left') {
				direction = null;
				direction = {
					y: '0rem',
					x: '-2.5rem',
				};
			}

			if (setting === 'from-right') {
				direction = null;
				direction = {
					y: '0rem',
					x: '2.5rem',
				};
			}

			if (setting === 'from-bottom') {
				direction = null;
				direction = {
					y: '2.5rem',
					x: '0rem',
				};
			}

			if (setting === 'from-top') {
				direction = null;
				direction = {
					y: '-2.5rem',
					x: '0rem',
				};
			}

			let tl = gsap.timeline({
				defaults: {
					duration: 1,
					ease: 'power4.out',
				},
				scrollTrigger: {
					trigger: block,
					start: 'top 60%',
				},
			});

			tl.from(block.children, {
				y: direction.y,
				x: direction.x,
				opacity: 0,
				stagger: 0.125,
			});
		});
	}
});
