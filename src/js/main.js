// :::: INTERSECTION OBSERVER :::: //

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entrie) => {
      if (entrie.intersectionRatio > 0.5) {
        entrie.target.classList.remove("not-visible");
        observer.unobserve(entrie.target);
      }
      // else{
      //     entrie.target.classList.add('not-visible')
      // }
    });
  },
  {
    threshold: [0.5],
  }
);

let items = document.querySelectorAll(".right_observ");
items.forEach((item) => {
  item.classList.add("not-visible");
  observer.observe(item);
});

let lefts = document.querySelectorAll(".left_observ");
lefts.forEach((left) => {
  left.classList.add("not-visible");
  observer.observe(left);
});

let topObserv = document.querySelectorAll(".top_observ");
topObserv.forEach((top) => {
  top.classList.add("not-visible");
  observer.observe(top);
});

let scaleObserv = document.querySelectorAll(".scale_observ");
scaleObserv.forEach((scale) => {
  scale.classList.add("not-visible");
  observer.observe(scale);
});

const topDef1 = document.querySelectorAll(".toTop");
topDef1.forEach((elem) => {
  elem.classList.add("notShow");
});

const header = document.querySelectorAll(".toTopHeader");
header.forEach((elem) => {
  elem.classList.add("notShow");
});

const btn = document.querySelector(".home-left .toRight");
btn.classList.add("notShowRight");

// window.addEventListener("scroll", function () {
//   var nav = document.querySelector("nav");
//   nav.classList.toggle("displayNav", window.scrollY > 0);
// });
