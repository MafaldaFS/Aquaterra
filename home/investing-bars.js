window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

    const stats = document.querySelector(".home-future_stats");
    const statChildren = [...stats.children];
    const statElements = stats.querySelectorAll(".home-future_stat-wrapper > *");


    let tl = gsap.timeline({
        defaults: {
            duration: 0.75,
            ease: "power4.inOut"
        },
        scrollTrigger: {
            trigger: stats,
            start: 'top 70%' 

        }
    });

    tl.from(statChildren, {width: "1.25rem"})
    .from(statElements, {opacity: 0, y: "1.5rem"}, "<+0.2")
    

});
