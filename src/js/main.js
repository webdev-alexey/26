window.addEventListener("DOMContentLoaded", () => {
  anim();
});

function anim() {
  // Секция 1. Header + Preview + Promo
  gsap.set(".header", {
    height: "100vh",
  });
  gsap.set(".preview__bg", {
    yPercent: 10,
    scale: 1.2,
  });

  const tlHeader = gsap.timeline({
    onComplete: () => {
      ScrollTrigger.refresh();
    },
  });
  tlHeader
    .from(".header__logo img", {
      duration: 0.7,
      autoAlpha: 0,
      yPercent: -100,
      stagger: 0.2,
    })
    .to(".header", {
      duration: 0.8,
      height: "auto",
      delay: 0.3,
    })
    .to(
      ".header__logo",
      {
        duration: 0.8,
        scale: 1,
      },
      "<",
    )
    .from(
      ".preview",
      {
        autoAlpha: 0,
        duration: 1.3,
      },
      "<",
    )
    .from(
      ".promo__title",
      {
        duration: 1,
        yPercent: 50,
        autoAlpha: 0,
      },
      "-=0.7",
    )
    .from(
      ".promo__wrap",
      {
        duration: 1,
        yPercent: 50,
        autoAlpha: 0,
      },
      "<",
    );

  gsap.to(".preview__bg", {
    yPercent: -10,
    scrollTrigger: {
      trigger: ".preview",
      start: "top 150px",
      end: "bottom top",
      scrub: 1,
    },
  });
}
