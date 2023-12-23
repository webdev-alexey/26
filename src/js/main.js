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
      ".promo__img",
      {
        yPercent: 50,
        autoAlpha: 0,
      },
      "<",
    );

  gsap.set(".promo__title", {
    opacity: 1,
  });

  gsap.to(".preview__bg", {
    yPercent: -10,
    scrollTrigger: {
      trigger: ".preview",
      start: "top 150px",
      end: "bottom top",
      scrub: 1,
    },
  });

  // Секция 2
  const tlTitles = gsap.timeline({
    scrollTrigger: {
      trigger: ".promo__info",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  tlTitles
    .to(".promo__title", {
      opacity: 0.1,
    })
    .from(
      ".promo__info",
      {
        opacity: 0.1,
      },
      "<",
    );

  gsap.set(".promo__left-inner", {
    yPercent: 120,
  });

  const tlPromo = gsap.timeline({
    scrollTrigger: {
      trigger: ".promo__wrap",
      start: "top top",
      end: "bottom+=100%",
      scrub: true,
      pin: true,
    },
  });

  tlPromo
    .to(".promo__left-inner", {
      yPercent: 0,
    })
    .to(
      ".promo__img",
      {
        y: "-100vh",
      },
      "<",
    );

  // Секция 3
  const tlFeatures = gsap.timeline({
    scrollTrigger: {
      trigger: ".features__wrap",
      start: "top 85%",
      end: "top 40%",
      scrub: true,
    },
  });

  tlFeatures
    .to(".features__title", {
      opacity: 0.1,
    })
    .from(
      ".features__item",
      {
        opacity: 0,
        yPercent: "random([20, 30, 40])",
        stagger: {
          from: "center",
          each: 0.1,
        },
      },
      "<",
    );

  // Секция 4
  gsap.set(".tradition", {
    background: "#100f0d",
  });
  gsap.set(".tradition__title", {
    color: "#edeae2",
  });

  const tlBg = gsap.timeline({
    scrollTrigger: {
      trigger: ".tradition",
      start: "top 50%",
      end: "bottom 50%",
      duration: 0.7,
      toggleActions: "play reverse play reverse",
    },
  });

  tlBg
    .to("body", {
      background: "#edeae2",
    })
    .to(
      ".features__name",
      {
        color: "#bb9930",
      },
      "<",
    )
    .to(
      ".tradition",
      {
        background: "#edeae2",
      },
      "<",
    )
    .to(
      ".tradition__title",
      {
        color: "#bb9930",
      },
      "<",
    );

  // Паралакс картинок
  gsap.set(".parallax img", {
    scale: 1.3,
    yPercent: 15,
  });

  const parallaxBlocks = document.querySelectorAll(".parallax");
  parallaxBlocks.forEach((block) => {
    const img = block.querySelector("img");
    gsap.to(img, {
      yPercent: -15,
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  });

  const tlCountry = gsap.timeline({
    scrollTrigger: {
      trigger: ".country__right",
      start: "top 40%",
      end: "top 5%",
      scrub: true,
    },
  });

  tlCountry
    .to(".country__title", {
      opacity: 0.1,
    })
    .from(
      ".country__right",
      {
        opacity: 0.1,
      },
      "<",
    );

  // Секция 5
  gsap.set(".story", {
    background: "#100f0d",
  });
  gsap.set(".story__title", {
    color: "#edeae2",
  });

  const tlStory = gsap.timeline({
    scrollTrigger: {
      trigger: ".story",
      start: "top 50%",
      end: "bottom 50%",
      duration: 0.7,
      toggleActions: "play reverse play reverse",
    },
  });

  tlStory
    .to("body", {
      background: "#edeae2",
    })
    .to(
      ".country__right",
      {
        color: "#bb9930",
      },
      "<",
    )
    .to(
      ".story",
      {
        background: "#edeae2",
      },
      "<",
    )
    .to(
      ".story__title",
      {
        color: "#bb9930",
      },
      "<",
    );

  const sections = gsap.utils.toArray(".slider__slide");

  gsap.set(".slider__text", {
    opacity: 0.1,
  });

  const tlHorisontal = gsap.to(".slider__wrapper", {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider__wrapper",
      start: "top top",
      end: `+=${sections.length * 1000}`,
      pin: true,
      scrub: true,
    },
  });

  document.querySelectorAll(".slider__text").forEach((item, index) => {
    if (index != 0) {
      gsap.to(item, {
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "left 60%",
          end: "+=500",
          scrub: 1,
          containerAnimation: tlHorisontal,
        },
      });
    } else {
      gsap.to(item, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".slider__wrapper",
          start: "top top",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  });

  // Секция 6. Футер
  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "90% bottom",
    },
  });
  tlFooter
    .from(".footer__bottom", {
      autoAlpha: 0,
    })
    .from(".footer__logo", {
      autoAlpha: 0,
      scale: 0.6,
      duration: 1,
      ease: "bounce.out",
    });
}
