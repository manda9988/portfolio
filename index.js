// ---------------------------------------
// Click Event
const lamp = document.querySelector("header i");

lamp.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});

// --------------------------------------
// Mouse Events
const mousemouve = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemouve.style.left = e.pageX + "px";
  mousemouve.style.top = e.pageY + "px";
});
