document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  const button = document.getElementById("btn0");

  body.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn0");
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 140);
      sendMessage();
    }
  });
});
