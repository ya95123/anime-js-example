// banner loading
let loadingSetting = {
  duration: 2000,
  easing: "easeInOutQuint",
};

anime({
  targets: ".banner__loading-bar",
  width: "100%",
  duration: loadingSetting.duration,
  easing: loadingSetting.easing,
});

anime({
  targets: ".banner__loading-num",
  innerText: "100 %",
  round: 1,
  duration: loadingSetting.duration,
  easing: loadingSetting.easing,
});

anime({
  targets: ".banner__loading",
  opacity: 0,
  delay: loadingSetting.duration,
  duration: 500,
  easing: loadingSetting.easing,
});
