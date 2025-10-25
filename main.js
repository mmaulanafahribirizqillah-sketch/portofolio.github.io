// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function updateThemeIcon() {
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateThemeIcon();
  // Simpan preferensi di localStorage
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Inisialisasi tema dari localStorage
if(localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  updateThemeIcon();
}

// Animasi fade-in saat scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(function(el) {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

// Untuk kartu proyek, fade-in saat scroll
function revealCards() {
  document.querySelectorAll('.card').forEach(function(card) {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', () => {
  revealOnScroll();
  revealCards();
});

// Initial reveal
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  revealCards();
  updateThemeIcon();
});
