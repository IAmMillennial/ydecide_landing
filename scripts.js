var header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add('coloured');
  } else {
    header.classList.remove('coloured');
  }
};