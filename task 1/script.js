gsap.from(".hero-text h1", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".hero-text p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".box", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.4
});
