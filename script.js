// ================================
// ELITE INDIA WEBSITE JAVASCRIPT
// ================================


// DOWNLOAD POPUP

const modal = document.getElementById("comingModal");
const modalTitle = document.getElementById("modalTitle");


function showComingSoon(platform) {

  modalTitle.textContent = `${platform} App Coming Soon`;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}


function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";
}


document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {
    closeModal();
  }

});


// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (e) {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
  ".feature-card, .screen, .community, .about-grid"
);


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(35px)";
  element.style.transition = "opacity .8s ease, transform .8s ease";

  observer.observe(element);

});


// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(8,8,12,.88)";
    navbar.style.borderColor = "rgba(255,255,255,.15)";

  } else {

    navbar.style.background = "rgba(10,10,14,.70)";
    navbar.style.borderColor = "rgba(255,255,255,.10)";

  }

});


// SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// 3D TILT EFFECT

document.querySelectorAll(".feature-card").forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform =
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});