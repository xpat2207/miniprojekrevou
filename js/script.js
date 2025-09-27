document.addEventListener("DOMContentLoaded", () => {
  // Navbar interactivity: highlight active link and smooth scroll
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      // Smooth scroll
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
      // Active class
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Highlight nav on scroll
  const sectionIds = ["home", "profile", "portfolio", "message"];
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 80;
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  });

  // Message form interactivity
  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");
  const welcomeText = document.getElementById("welcomeText");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const msg = document.getElementById("msg").value;

    // Update welcome text
    welcomeText.textContent = `Hi ${name}, Welcome To Website`;

    // Tampilkan output
    const now = new Date();
    output.innerHTML = `
      <p><strong>Current time:</strong> ${now.toLocaleString()}</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${msg}</p>
    `;
  });
});
