const body = document.body; //done
const main = document.querySelector("main"); //done

let scrollsX = 0;
let scrollsY = 0;
let deltaX = scrollsX;
let deltaY = scrollsY;

body.style.height = main.clientHeight + "px";

main.style.position = "fixed";
main.style.top = 0;
main.style.left = 0;

window.addEventListener("scroll", easeScroll);

function easeScroll() {
  scrollsX = window.scrollX;
  scrollsY = window.scrollY;
}

window.requestAnimationFrame(render);

function render() {
  deltaX = li(deltaX, scrollsX, 0.07);
  deltaY = li(deltaY, scrollsY, 0.07);

  deltaX = Math.floor(deltaX * 100) / 100;
  deltaY = Math.floor(deltaY * 100) / 100;

  main.style.transform = `translate3d(-${deltaX}px, -${deltaY}px, 0px)`;

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
