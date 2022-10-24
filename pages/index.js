const burgerBtn = document.querySelector('.navbar__burger')
const mobileMenuOverlay = document.querySelector('.navbar__overlay-mobile')

function handleBurgerBtn() {
  openMobileMenu()
}

function openMobileMenu() {
  mobileMenuOverlay.classList.toggle('navbar__overlay-mobile_opened')
}

burgerBtn.addEventListener('click', handleBurgerBtn)