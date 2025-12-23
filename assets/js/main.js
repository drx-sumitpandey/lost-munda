document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "1s";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 200);
  });
});
