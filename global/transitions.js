window.addEventListener('load', () => {
	//grab important elements
	const links = grabAllLinks();
	const transitionPanels = document.querySelector('.transition-panels');
	const animationSettings = {
		duration: 1,
		ease: 'expo.inOut',
	};

	//setup
	links.forEach((link) => link.addEventListener('click', handleLinkClick));
	hidePanels(transitionPanels);

	//functions
	function grabAllLinks() {
		let linkTags = [...document.querySelectorAll('a')];

		//find the internal links only
		const returnTags = linkTags.filter((x) => {
			const ref = String(x.getAttribute('href'));
			const internalTransitionLinks = ['/', '/work', '/about'];

			if (ref.substring(0, 1) === '/') {
				return true;
			}
		});

		return returnTags;
	}

	function handleLinkClick(e) {
		e.preventDefault();

		//change page once transition finishes running
		const href = e.currentTarget.getAttribute('href');
		showPanels(href);
		redirectToPage(href);
	}

	//animations
	function hidePanels() {
		gsap.fromTo(
			transitionPanels,
			{ y: '0%' },
			{
				y: '100%',
				duration: animationSettings.duration,
				ease: animationSettings.ease,
			}
		);
	}

	function showPanels(href) {
		gsap.fromTo(
			transitionPanels,
			{ y: '100%' },
			{
				y: '0%',
				duration: animationSettings.duration,
				ease: animationSettings.ease,
			}
		);
	}

	function redirectToPage(href) {
		setTimeout(() => {
			window.location.href = `${href}`;
		}, animationSettings.duration * 1000);
	}
});
