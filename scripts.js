var header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add('coloured');
  } else {
    header.classList.remove('coloured');
  }
};


// Scrolling
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

function scrollToLearn(event) {
  event.preventDefault();

  var targetElem = document.getElementById('choose-role-buttons');
  targetElem.scrollIntoView({block: "center", behavior: "smooth"});
}