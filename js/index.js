// banner loading
let loadingSetting = {
  entry: {
    duration: 2000,
    easing: "easeInOutQuint",
  },
  leave: {
    delay: 2000,
    duration: 500,
    easing: "easeInOutQuint",
  },
};

anime({
  targets: ".banner__loading-bar",
  width: "100%",
  duration: loadingSetting.entry.duration,
  easing: loadingSetting.entry.easing,
});

anime({
  targets: ".banner__loading-num",
  innerText: "100 %",
  round: 1,
  duration: loadingSetting.entry.duration,
  easing: loadingSetting.entry.easing,
});

anime({
  targets: ".banner__loading",
  opacity: 0,
  delay: loadingSetting.leave.delay,
  duration: loadingSetting.leave.duration,
  easing: loadingSetting.leave.easing,
});

// banner title
let titleSetting = {
  delay: {
    start: loadingSetting.entry.duration + loadingSetting.leave.duration,
    // start: 0,
    stagger: 500,
  },
  duration: 2000,
  easing: "easeInOutSine",
};

anime({
  targets: ".banner__title path",
  strokeDashoffset: [anime.setDashoffset, 0],
  delay: anime.stagger(titleSetting.delay.stagger, {
    start: titleSetting.delay.start,
  }),
  duration: titleSetting.duration,
  easing: titleSetting.easing,
});
