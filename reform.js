// Transparent Header Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 35) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Instant Single-Page Navigation
function showPage(pageId, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active-link'));
  if (el && el.classList.contains('nav-item')) {
    el.classList.add('active-link');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('show');
}

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// Contact Category Pill Switcher
function selectCategory(btn, categoryName) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active-cat'));
  btn.classList.add('active-cat');
  document.getElementById('selectedCategory').value = categoryName;
}

// Phone Validation (100% English Error Message)
const consultForm = document.getElementById('consultForm');
if (consultForm) {
  consultForm.addEventListener('submit', function(e) {
    const phone = document.getElementById('fPhone').value.trim();
    const err = document.getElementById('formError');
    const clean = phone.replace(/\s/g, '').replace('+91', '');

    if (!/^[6-9]\d{9}$/.test(clean)) {
      e.preventDefault();
      err.innerText = "Please enter a valid 10-digit mobile number.";
      return;
    }
    err.innerText = "";
  });
}

// Footer Newsletter Feedback
function subscribeNews(e) {
  e.preventDefault();
  document.getElementById('newsMsg').innerText = "Subscribed successfully. Thank you.";
  document.getElementById('newsEmail').value = "";
}