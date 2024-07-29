let dayNight = document.querySelector(".dayNight");
let border = document.querySelector(".border");
dayNight = addEventListener("click", () => {
  border.classList.toggle("Night");
});
let typingEffect = new Typed("#text", {
  strings: ["DropXOut", "YouTube"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});
