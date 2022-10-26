const burgerBtn = document.querySelector('.navbar__burger')
const mobileMenuOverlay = document.querySelector('.navbar__overlay-mobile')
// x

// overlay mobile menu open / close  - - -
function handleBurgerBtn() {
  toggleMobileMenu()
  toggleBurgerButton()
}

function toggleMobileMenu() {
  mobileMenuOverlay.classList.toggle('navbar__mobile_opened')
}
function toggleBurgerButton() {
  burgerBtn.classList.toggle('navbar__burger_close')
}

burgerBtn.addEventListener('click', handleBurgerBtn)

// burger button status


// navbar__burger_close