let [hours, min, sec] = [0, 0, 0];
let h1 = document.querySelector("h1");
let timer = null;
let stopwatch = () => {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) hours++;
  let h = hours < 10 ? "0" + hours : hours;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  h1.innerHTML = h + ":" + m + ":" + s;
};
let watchstart = () => {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
};
let stop = () => {
  clearInterval(timer);
};
let reset = () => {
  clearInterval(timer);
  [hours, min, sec] = [0, 0, 0];
  h1.innerHTML = "00:00:00";
};
