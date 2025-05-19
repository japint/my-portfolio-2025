let intro = document.getElementById("intro");
let experience = document.getElementById("experience");
let skill = document.getElementById("skill");
let project = document.getElementById("project");
let contact = document.getElementById("contact");

let buttons = document.querySelectorAll("button");

document.querySelector(".cvButton").addEventListener("click", () => {
  gtag("event", "download", {
    file_name: "Angelo_Centeno_CV.pdf",
    category: "engagement",
  });
});

document
  .querySelector('[data-tab="experience"]')
  .addEventListener("click", () => {
    gtag("event", "view_experience", {
      category: "navigation",
    });
  });

let active = "intro";
let zIndex = 2;

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    let tab = button.dataset.tab;
    if (tab !== null && tab !== active) {
      let activeOld = document.querySelector(".tab.active");
      if (activeOld) activeOld.classList.remove("active");
      active = tab;

      let tabActive = document.getElementById(active);
      zIndex++;
      tabActive.style.zIndex = zIndex;
      tabActive.style.setProperty("--x", event.clientX + "px");
      tabActive.style.setProperty("--y", event.clientY + "px");
      tabActive.classList.add("active");
    }
  });
});
