let path = anime.path(".banner__bg-path path");

let bannerTimeLine = anime.timeline({
  duration: 2000,
  easing: "easeInOutQuint",
});

let bannerEagleAnime = anime({
  targets: ".banner__bg-eagle",
  translateX: path("x"),
  translateY: path("y"),
  rotate: [68, 54, 0],
  easing: "linear",
  duration: 6000,
  autoplay: false,
  loop: true,
});

bannerTimeLine
  .add({
    targets: ".banner__loading-bar",
    width: "100%",
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
    complete: () => bannerEagleAnime.play(),
  });
