window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);
	const pillarsContent = document.querySelector('.home-pillars_content');
	const pillars = [...pillarsContent.children];

	//set init
	function setInit() {
		for (let i = 0; i < pillars.length; i++) {
			gsap.set(pillars[i].children, { opacity: 0, y: '15%' });
		}
	}

	//set scrolltrigger and run anim
	function setTrigger() {
		ScrollTrigger.create({
			trigger: pillarsContent,
			start: 'top 50%',
			onEnter: runAnim,
		});
	}

	//run the anim
	function runAnim() {
		for (let i = 0; i < pillars.length; i++) {
			setTimeout(() => {
				gsap.to(pillars[i].children, {
					opacity: 1,
					y: '0%',
                    duration: 1,
                    ease: "power2.out",
					stagger: { each: 0.025 },
				});
			}, i * 150);
		}
	}

	//run anims
	setInit();
	setTrigger();
});
