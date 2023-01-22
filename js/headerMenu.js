document.addEventListener('DOMContentLoaded', () => {
  const imgNavHamburger = document.getElementById('img-nav-hamburger');
  const divNavLinks = document.querySelector('.div-nav-links');

  imgNavHamburger.addEventListener('click', (e) => {
    if (divNavLinks.classList.contains('hide')) {
      divNavLinks.classList.remove('hide');
    } else {
      divNavLinks.classList.add('hide');
    }
  });
});