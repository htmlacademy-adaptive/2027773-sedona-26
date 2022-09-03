let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--close')) {
    navMain.classList.remove('nav--close');
    navMain.classList.add('nav');
  } else {
    navMain.classList.add('nav--close');
    navMain.classList.remove('nav');
  }
});
