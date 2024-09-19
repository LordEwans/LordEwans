document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // handle keydown events for navigation and button activation
  body.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn0");
      button.classList.add("active");
    }
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn1");
      button.classList.add("active");
    }
    const buttonId = `btn-${e.key.toLowerCase()}`;
    const buttons = document.querySelectorAll(`button#${buttonId}`);
    if (
      !(e.ctrlKey && e.shiftKey && e.key.length == 1) &&
      !(e.ctrlKey && e.key.length == 1)
    ) {
      buttons.forEach((button) => {
        e.preventDefault();
        button.classList.add("active");
        button.click();
      });
    }
  });
  // handle keyup events for navigation and button deactivation
  body.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn0");
      button.click();
      button.classList.remove("active");
    }
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn1");
      button.click();
      button.classList.remove("active");
    }
    const buttonId = `btn-${e.key.toLowerCase()}`;
    const buttons = document.querySelectorAll(`button#${buttonId}`);
    if (
      !(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") &&
      !(e.ctrlKey && e.key.toLowerCase() === "r")
    ) {
      console.log(buttons);
      buttons.forEach((button) => {
        e.preventDefault();
        button.click();
        button.classList.remove("active");
      });
    }
  });

  // get all the sections you want to track
  const sections = document.querySelectorAll("section"); // replace 'section' with your actual section selector if needed

  // loop through each section
  sections.forEach((section) => {
    // get the section's position relative to the viewport
    const rect = section.getBoundingClientRect();

    // check if the section is more than 50% visible in the viewport
    if (
      rect.top < window.innerHeight * 0.5 ||
      rect.bottom > window.innerHeight * 0.5
    ) {
      // find the corresponding button in the navigation
      const navButton = document.querySelector(`nav button#${section.id}`); // assuming you have anchor links in your navigation

      // add the 'active' class to the button
      navButton.classList.add("active");
    } else {
      const navButton = document.querySelector(`nav button#${section.id}`);
      // remove the 'active' class if the section is not visible
      navButton.classList.remove("active");
    }
  });

  // add an event listener for scroll events
  window.addEventListener("scroll", () => {
    // get all the sections you want to track
    const sections = document.querySelectorAll("section"); // replace 'section' with your actual section selector if needed

    // loop through each section
    sections.forEach((section) => {
      // get the section's position relative to the viewport
      const rect = section.getBoundingClientRect();

      // check if the section is more than 50% visible in the viewport
      if (
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5
      ) {
        // find the corresponding button in the navigation
        const navButton = document.querySelector(`nav button#${section.id}`); // assuming you have anchor links in your navigation

        // add the 'active' class to the button
        navButton.classList.add("active");
      } else {
        const navButton = document.querySelector(`nav button#${section.id}`);
        // remove the 'active' class if the section is not visible
        navButton.classList.remove("active");
      }
    });
  });

  // select all navigation buttons
  const navButtons = document.querySelectorAll("nav button");

  // add click event listeners to each button
  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default jumpy behavior

      // use smooth scrolling to reach the target section
      document.querySelector(`section#${button.id}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  });

  const buttons = document.querySelectorAll("button");

  const techLinks = {
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tailwindcss: "https://tailwindcss.com/",
    ts: "https://www.typescriptlang.org/",
    nextjs: "https://nextjs.org/",
    nuxtjs: "https://nuxt.com/",
    go: "https://go.dev/",
    docker: "https://www.docker.com/",
    linux: "https://www.linux.org/",
    postgresql: "https://www.postgresql.org/",
    drizzle: "https://www.drizzle.org/",
    mongodb: "https://www.mongodb.com/",
    github: "https://github.com/lordewans",
    likedin: "https://linkedin.com/in/ewanretorokugbe",
    twitter: "https://x.com/ewanretorokugbe",
    linktree: "https://linktr.ee/lordewan",
    caldotcom: "https://cal.com/ewanretor-giwa-okugbe-u0xylh",
    email: "mailto:hey@lordewan.xyz",
    telegram: "https://t.me/lordewan"
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tech = button.querySelector("img").alt;
      const link = techLinks[tech];
      if (link) {
        window.open(link, "_blank");
      }
    });
  });
  const projectsContainer = document.querySelector(".projects");
  const firstProject = projectsContainer.firstElementChild;

  function setProjectsWidth() {
    projectsContainer.style.width = `${firstProject.offsetWidth}px`;
  }

  setProjectsWidth();

  window.addEventListener("resize", setProjectsWidth);
  const projectBoxes = document.querySelectorAll(".project-box");
  const prevButton = document.querySelector(".show-prev");
  const nextButton = document.querySelector(".show-next");
  let currentProjectIndex = 0;

  function showProject(index) {
    projectBoxes.forEach((box) => {
      const translateXValue = `translateX(-${index * 100}%)`;
      box.style.transform = translateXValue;
      currentProjectIndex = index;
    });
  }

  function showNextProject() {
    const nextIndex = (currentProjectIndex + 1) % projectBoxes.length;
    showProject(nextIndex);
    console.log(nextIndex);
  }

  function showPrevProject() {
    const prevIndex =
      (currentProjectIndex - 1 + projectBoxes.length) % projectBoxes.length;
    showProject(prevIndex);
    console.log(prevIndex);
  }

  prevButton.addEventListener("click", showPrevProject);
  nextButton.addEventListener("click", showNextProject);

  showProject(currentProjectIndex);
});

// provides smooth scrolling functionality
function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new ie

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // opera
      else return -e.detail / 3; // firefox
    } else return e.wheelDelta / 120; // ie,safari,chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestanimationframe cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}
