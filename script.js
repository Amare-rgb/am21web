const navToggler = document.querySelector('[data-navToggler]');
const navbar = document.querySelector('[data-navbar]');

// Toggle navbar for mobile
navToggler.addEventListener('click', () => {
  navbar.classList.toggle('active'); // toggle visibility
  navToggler.classList.toggle('active'); // toggle button state
});


  document.addEventListener("DOMContentLoaded", () => {
  const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

  $toggleBtns.forEach(($btn) => {
    $btn.addEventListener("click", () => {
      $btn.classList.toggle("active");
    });
  });
});



  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop page refresh

        // show success message
        successMsg.classList.add("show");

        // hide message after 3 seconds
        setTimeout(() => {
            successMsg.classList.remove("show");
        }, 3000);

        // clear form
        form.reset();
    });
});



  
















