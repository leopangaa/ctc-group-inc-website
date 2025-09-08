const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', function() {
    mainNav.classList.toggle('show');
  });
}
window.addEventListener('click', function(e) {
  if (mainNav.classList.contains('show') && !mainNav.contains(e.target) && !hamburger.contains(e.target)) {
    mainNav.classList.remove('show');
  }
});