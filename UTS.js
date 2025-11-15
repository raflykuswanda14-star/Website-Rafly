// ===== Mode Gelap =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "Mode Terang"
        : "Mode Gelap";
});

// ===== Tahun Otomatis =====
document.getElementById("current-year").textContent = new Date().getFullYear();

// ===== Waktu Real-time =====
function updateTime() {
    const now = new Date();
    document.getElementById("current-time").textContent =
        "⏱ " + now.toLocaleTimeString("id-ID");
}
setInterval(updateTime, 1000);
updateTime();

// ===== Form Contact Validation =====
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi 😊");
        contactForm.reset();
    });
}
