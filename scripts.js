var header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add('coloured');
  } else {
    header.classList.remove('coloured');
  }
};


// Scrolling
function scrollToTop(event) {
  event.preventDefault();

  var targetElem = document.getElementById('main-idea');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToEducation(event) {
  event.preventDefault();

  var targetElem = document.getElementById('services');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToMission(event) {
  event.preventDefault();

  var targetElem = document.getElementById('mission');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToMentors(event) {
  event.preventDefault();

  var targetElem = document.getElementById('mentors');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToContacts(event) {
  event.preventDefault();

  var targetElem = document.getElementById('get-in-touch');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToLearn(event) {
  event.preventDefault();

  var targetElem = document.getElementById('roles');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}

// open google forms for students
function openLink() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfNB2fk43A2B3tZvHKT2pVpRiCh6fYt6j51I4Mll56rlE4F6g/viewform?usp=sharing', '_blank');
}