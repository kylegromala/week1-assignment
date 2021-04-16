class Timer {
  constructor(seconds, instance) {
  seconds = seconds;
  instance = instance;
  Timer.prototype.start = () => {
  const timerInterval = setInterval(() => {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
}}};

export default class {Timer};