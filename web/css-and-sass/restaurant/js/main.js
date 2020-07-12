
let timeline = new TimelineMax();
//parameters: element, duration, transition, delay
timeline.set('#fork', {y: -40});
timeline.to('#fork', {
  y: -70,
  duration: 2,
  delay: 0.5,
});