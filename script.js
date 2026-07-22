/* =========================================================
   M Sarki Royal Services — Vanilla JS
   ========================================================= */

// --- Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// --- Gallery data (20 premium images) ---
const galleryImages = [
  { src: 'images/akkb.jpg', cls: 'tall' },
  { src: 'images/2.jpg', cls: '' },
  { src: 'images/3.jpg', cls: 'wide' },
  { src: 'images/kaya.jpg', cls: '' },
  { src: 'images/5.jpg', cls: 'tall' },
  { src: 'images/6.jpg', cls: '' },
  { src: 'images/bg.jpg', cls: '' },
  { src: 'images/8.jpg', cls: 'wide' },
  { src: 'images/kja.jpg', cls: '' },
  { src: 'images/10.jpg', cls: 'tall' },
  { src: 'images/11.jpg', cls: '' },
  { src: 'images/12.jpg', cls: '' },
  { src: 'images/13.jpg', cls: 'wide' },
  { src: 'images/14.jpg', cls: '' },
  { src: 'images/15.jpg', cls: 'tall' },
  { src: 'images/16.jpg', cls: '' },
  { src: 'images/17.jpg', cls: '' },
  { src: 'images/ss.jpg', cls: 'wide' },
  { src: 'images/wedding (2).jpg', cls: '' },
  { src: 'images/20.jpg', cls: '' },
];

const galleryGrid = document.getElementById('galleryGrid');
galleryImages.forEach((g, i) => {
  const div = document.createElement('div');
  div.className = 'gallery-item ' + g.cls;
  div.innerHTML = `<img src="${g.src}" alt="Royal design ${i+1}" loading="lazy" />`;
  div.addEventListener('click', () => openLightbox(g.src));
  galleryGrid.appendChild(div);
});

// --- Lightbox ---
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img alt="Preview" />`;
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');
function openLightbox(src){ lightboxImg.src = src; lightbox.classList.add('active'); }
function closeLightbox(){ lightbox.classList.remove('active'); }
lightbox.addEventListener('click', e => { if (e.target === lightbox || e.target.classList.contains('lightbox-close')) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// --- Reveal on scroll ---
const revealTargets = document.querySelectorAll('.section-head, .service-card, .why-card, .testimonial-card, .about-media, .about-text, .ceo-image, .ceo-text, .contact-info, .contact-form, .gallery-item');
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));

// --- Contact form: submits via FormSubmit (mailto fallback if blocked) ---
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', () => {
  note.textContent = 'Sending your message...';
});
