const burgerBtn = document.querySelector('.burger')
const mobileMenuOverlay = document.querySelector('.burger__nav')
// x

// overlay mobile menu open / close  - - -
function handleBurgerBtn() {
  toggleMobileMenu()
  toggleBurgerButton()
}

function toggleMobileMenu() {
  mobileMenuOverlay.classList.toggle('burger__nav_opened')
}

function toggleBurgerButton() {
  burgerBtn.classList.toggle('burger_open')
}

burgerBtn.addEventListener('click', handleBurgerBtn)

// burger button status


// navbar__burger_close