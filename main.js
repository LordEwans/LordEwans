document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  const button = document.getElementById("btn0");

  body.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn0");
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 140);
    }
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn1");
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 140);
    }
    const buttonId = `btn-${e.key.toLowerCase()}`;
    const button = document.getElementById(buttonId);
    if (button) {
      if (button) {
        if (
          !(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") &&
          !(e.ctrlKey && e.key.toLowerCase() === "r")
        ) {
          e.preventDefault();
          button.classList.add("active");
          setTimeout(() => button.classList.remove("active"), 140);
        }
      }
    }
  });
});
