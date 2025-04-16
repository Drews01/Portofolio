function copyEmail() {
  const email = document.getElementById("email").textContent;
  const tooltip = document.querySelector(".tooltip-text");

  // Copy the email to the clipboard
  navigator.clipboard.writeText(email).then(() => {
    // Change the tooltip text to "Copied"
    tooltip.textContent = "Copied!";
    tooltip.style.opacity = "1"; // Ensure it's fully visible

    // Fade out and reset the tooltip text after 2 seconds
    setTimeout(() => {
      tooltip.style.opacity = "0"; // Start fading out
      setTimeout(() => {
        tooltip.textContent = "Copy"; // Change text after fade-out
        tooltip.style.opacity = "1"; // Fade back in
      }, 200); // Wait for fade-out to complete (500ms)
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy email: ", err);
  });
}

let isAnimating = false; // Flag untuk mencegah konflik animasi

document.addEventListener("scroll", () => {
  const viruses = document.querySelectorAll(".virus");
  const popup = document.getElementById("popup");
  const shield = document.querySelector(".shield");
  const projectBox = document.getElementById("project-box");
  const scrollPosition = window.scrollY;

  // Cegah animasi jika sedang berlangsung
  if (isAnimating) return;

  if (scrollPosition > 50) {
    // Jika scroll ke bawah
    isAnimating = true; // Set flag animasi

    viruses.forEach((virus) => {
      virus.classList.add("virus-hidden");
    });

    // Sembunyikan shield
    shield.classList.add("hidden");

    // Tampilkan pop-up dan project box secara bersamaan
    setTimeout(() => {
      popup.classList.remove("hidden");
      popup.style.opacity = "1"; // Munculkan pop-up
      projectBox.classList.remove("hidden");
      projectBox.style.opacity = "1"; // Munculkan project box
      projectBox.style.transform = "translateY(0)"; // Kembalikan posisi box
      isAnimating = false; // Reset flag setelah animasi selesai
    }, 500); // Tunggu hingga transisi virus selesai
  } else {
    // Jika scroll ke atas
    isAnimating = true; // Set flag animasi

    // Tampilkan shield kembali
    shield.classList.remove("hidden");

    // Sembunyikan project box dan pop-up secara bersamaan
    popup.style.opacity = "0";
    projectBox.style.opacity = "0";
    projectBox.style.transform = "translateY(20px)"; // Geser box ke bawah
    setTimeout(() => {
      popup.classList.add("hidden");
      projectBox.classList.add("hidden");
      viruses.forEach((virus) => {
        virus.classList.remove("virus-hidden");
      });
      isAnimating = false; // Reset flag setelah animasi selesai
    }, 500); // Tunggu hingga transisi selesai
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});