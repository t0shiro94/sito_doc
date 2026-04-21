const navRoots = document.querySelectorAll("[data-nav-root]");

for (const root of navRoots) {
  const toggle = root.querySelector("[data-nav-toggle]");
  const nav = root.querySelector(".nav");

  if (!toggle || !nav) {
    continue;
  }

  const closeNav = () => {
    root.dataset.navOpen = "false";
    toggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    root.dataset.navOpen = "true";
    toggle.setAttribute("aria-expanded", "true");
  };

  closeNav();

  toggle.addEventListener("click", () => {
    const isOpen = root.dataset.navOpen === "true";

    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 780) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}
