const burgerBtn = document.querySelector('.burger')
const mobileMenuOverlay = document.querySelector('.burger__nav')

// overlay mobile menu open / close
function handleBurgerBtn() {
  toggleMobileMenu()
  toggleBurgerButton()
}

function toggleMobileMenu() {
  mobileMenuOverlay.classList.toggle('burger__nav_opened')
}

// burger button status Opened/Closed
function toggleBurgerButton() {
  burgerBtn.classList.toggle('burger_close')
}

burgerBtn.addEventListener('click', handleBurgerBtn)