const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.fromTo(".emphasize-text", { opacity: 0 }, { color: "darkviolet", opacity: 1, duration: .75 },"-=.25");
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.to(".intro", {opacity: 0, display:"none"});
tl.fromTo(".nav-container", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: .75 });
tl.to(".big-text", { opacity: 0, duration: 2},);
