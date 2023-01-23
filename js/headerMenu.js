document.addEventListener('DOMContentLoaded', () => {
  const imgNavHamburger = document.getElementById('img-nav-hamburger');
  const divNavLinks = document.querySelector('.div-nav-links');
  const listItemPinterest = document.getElementById('list-item-pinterest');
  const listItemTwitter = document.getElementById('list-item-twitter');
  const listItemReddit = document.getElementById('list-item-reddit');
  const listItemGoogle = document.getElementById('list-item-google');
  const listItemSlack = document.getElementById('list-item-slack');

  imgNavHamburger.addEventListener('click', (e) => {
    if (divNavLinks.classList.contains('hide')) {
      divNavLinks.classList.remove('hide');
    } else {
      divNavLinks.classList.add('hide');
    }
  });


  if (window.innerWidth >= 767) {
    imgNavHamburger.classList.add('hide');
    divNavLinks.classList.remove('hide');
    listItemPinterest.classList.remove('hide');
    listItemTwitter.classList.remove('hide');
  } else {
    imgNavHamburger.classList.remove('hide');
    divNavLinks.classList.add('hide');
    listItemPinterest.classList.add('hide');
    listItemTwitter.classList.add('hide');
  }

  if (window.innerWidth >= 1200) {
    listItemReddit.classList.remove('hide');
    listItemGoogle.classList.remove('hide');
    listItemSlack.classList.remove('hide');
  } else {
    listItemReddit.classList.add('hide');
    listItemGoogle.classList.add('hide');
    listItemSlack.classList.add('hide');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 767) {
      imgNavHamburger.classList.add('hide');
      divNavLinks.classList.remove('hide');
      listItemPinterest.classList.remove('hide');
      listItemTwitter.classList.remove('hide');
    } else {
      imgNavHamburger.classList.remove('hide');
      divNavLinks.classList.add('hide');
      listItemPinterest.classList.add('hide');
      listItemTwitter.classList.add('hide');
    }

    if (window.innerWidth >= 1200) {
      listItemReddit.classList.remove('hide');
      listItemGoogle.classList.remove('hide');
      listItemSlack.classList.remove('hide');
    } else {
      listItemReddit.classList.add('hide');
      listItemGoogle.classList.add('hide');
      listItemSlack.classList.add('hide');
    }
  });
});