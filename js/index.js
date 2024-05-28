let bannerAnime = anime
  .timeline({
    targets: ".banner__loading-bar",
    width: "100%",
    duration: 2000,
    easing: "easeInOutQuint",
  })
  .add(
    {
      targets: ".banner__loading-num",
      innerText: "100 %",
      round: 1,
    },
    0
  )
  .add({
    targets: ".banner__loading",
    opacity: 0,
    duration: 500,
  })
  .add({
    targets: ".banner__title path",
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: anime.stagger(500),
    easing: "easeInOutSine",
  });

// banner meteor
let meteorSetting = {
  delay: {
    // start: titleSetting.delay.start + titleSetting.duration,
    start: 0,
    stagger: 2000,
  },
  duration: 1000,
  easing: "easeInOutQuad",
};

// TODO 各自分開結束 & loop / 換背景
// anime({
//   targets: ".banner__meteor",
//   height: [anime.random(40, 60), anime.random(90, 100)],
//   translateX: [0, -100],
//   translateY: [0, 60],
//   rotate: [60, 60],
//   opacity: [0, 1],
//   delay: anime.stagger(meteorSetting.delay.stagger, {
//     start: meteorSetting.delay.start,
//   }),
//   duration: meteorSetting.duration,
//   easing: meteorSetting.easing,
//   // direction: "alternate",
//   loop: true,
// });
