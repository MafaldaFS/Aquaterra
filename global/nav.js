window.addEventListener('load', () => {
	const navButton = document.querySelector('.mobile-nav-button');
    const navButtonLines = [...navButton.querySelectorAll("*")];
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavElements = [...mobileNav.querySelectorAll(".nav-links > *, .mobile-nav_cta > *")]



    const tl = new gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "power4.out"
        }
    })

    tl.paused(true);

    tl
    .to(mobileNav, {display: "block"})
    .from(navButtonLines[0], {y: "-0.25rem"}, ">")
    .from(navButtonLines[1], {y: "0.25rem"}, "<")
    .to(mobileNav, {height: "100lvh", duration: 1}, "<")
    .to(navButtonLines[0], {delay: 0.35, rotateZ: "45deg"}, "<")
    .to(navButtonLines[1], {rotateZ: "-45deg"}, "<")
    .from(mobileNavElements, {delay: 0.125, opacity: 0, y: "1.25rem", stagger: {each: 0.0325}}, "<")



	function toggleNav() {
		if (navButton.classList.contains('is-open')) {
			navButton.classList.remove('is-open');
            tl.reverse();
		} else {
			navButton.classList.add('is-open');
            tl.restart();
		}
	}

    if (window.innerWidth < 768) {
		navButton.addEventListener('click', toggleNav);
	}
});
