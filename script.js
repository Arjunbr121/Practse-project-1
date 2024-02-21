/** @format */

// document.addEventListener("click", () => {
//   alert("its been clicked");
// });

const nav = document.querySelector(".nav");
const blur = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");
const div1 = document.querySelector(".card");

document.addEventListener("mousemove", function (detalis) {
  blur.style.left = detalis.x + "px";
  blur.style.top = detalis.y + "px";
  cursorBlur.style.left = detalis.x - 250 + "px";
  cursorBlur.style.top = detalis.y - 250 + "px";
});

const circle = document.querySelectorAll(".nav h4 ");
circle.forEach(function (details) {
  details.addEventListener("mouseenter", function () {
    blur.style.scale = 3;
    blur.style.border = "0.5px solid #fff";
    blur.style.backgroundColor = "transparent";
  });
  details.addEventListener("mouseleave", function () {
    blur.style.scale = 1;
    blur.style.border = "1px solid #95c11e";
    blur.style.backgroundColor = "#95c11e";
  });
});

const circle1 = document.querySelectorAll(".card-container div");
circle1.forEach(function (details) {
  details.addEventListener("mouseenter", function () {
    blur.style.scale = 3;
    blur.style.border = "0.5px solid #fff";
    blur.style.backgroundColor = "transparent";
    blur.style.zIndux = 10;
  });
  details.addEventListener("mouseleave", function () {
    blur.style.scale = 1;
    blur.style.border = "1px solid #95c11e";
    blur.style.backgroundColor = "#95c11e";
  });
});

gsap.to(nav, {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from(".about-us img,.about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from(".card ", {
  scale: 1,
  opacity: 0,
  duration: 1,
  //   stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".green-div", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".green-div",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 2.5,
  },
});
gsap.from(".colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".page4 h1", {
  y: 80,

  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 90%",
    end: "top 70%",
    scrub: 4,
  },
});
