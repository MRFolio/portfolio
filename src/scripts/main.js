// Scroll-animation init
AOS.init({
  duration: 1000,
  easing: 'ease-out',
  offset: 180,
});

// Selectors
const menuBtn = document.querySelector('.hamburger-btn');
const sidebar = document.getElementById('sidebar');
const menuLinks = document.querySelectorAll('.menuLink');
const questions = document.querySelectorAll('.accordion-item-header');
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const scrollUpBtn = document.querySelector('.scroll-top-btn');
const yearText = document.getElementById('year');

// Hamburger menu
const menuBtnIconToggle = () => {
  menuBtn.classList.toggle('active');
};

const toggleSidebar = () => {
  sidebar.classList.toggle('show-sidebar');
  menuBtnIconToggle();
  let expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;

  menuBtn.setAttribute('aria-expanded', !expanded);
};

const handleLinkClick = () => {
  sidebar.classList.remove('show-sidebar');
  menuBtn.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
};

const addMenuLinksToggleEvent = (link) => {
  link.addEventListener('click', handleLinkClick);
};

const handleOutsideClickClose = (e) => {
  e.target !== sidebar &&
  e.target.parentNode !== sidebar &&
  e.target.parentNode !== menuBtn &&
  e.target !== menuBtn
    ? handleLinkClick()
    : null;
};

const handleEscape = (e) => {
  if (window.innerWidth <= 648) {
    e.key === 'Escape' ? toggleSidebar() : null;
  }
};

// Read more button
const handleToggleShowTextLong = (e) => {
  if (e.currentTarget.classList.contains('extraParagraph')) {
    const textFirstParagraph =
      e.currentTarget.previousElementSibling.previousElementSibling
        .previousElementSibling.children[0];
    const textSecondParagraph =
      e.currentTarget.previousElementSibling.previousElementSibling;
    const textThirdParagraph = e.currentTarget.previousElementSibling;

    textFirstParagraph.classList.toggle('show-more-inline');
    textSecondParagraph.classList.toggle('show-more-block');
    textThirdParagraph.classList.toggle('show-more-block');
  } else {
    const textFirstParagraph =
      e.currentTarget.previousElementSibling.previousElementSibling.children[0];
    const textSecondParagraph = e.currentTarget.previousElementSibling;

    textFirstParagraph.classList.toggle('show-more-inline');
    textSecondParagraph.classList.toggle('show-more-block');
  }

  e.currentTarget.textContent.trim() === 'Read more...'
    ? (e.currentTarget.textContent = 'Read less...')
    : (e.currentTarget.textContent = 'Read more...');
};

const addReadMoreBtnsToggleEvent = (btn) => {
  btn.addEventListener('click', handleToggleShowTextLong);
};

// Scroll to top
const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const showScrollToTop = () =>
  window.pageYOffset > 650
    ? scrollUpBtn.classList.add('show-go-to-top')
    : scrollUpBtn.classList.remove('show-go-to-top');

// Accordion
questions.forEach((question) => {
  question.addEventListener('click', () => {
    const currentlyActiveQuestion = document.querySelector(
      '.accordion-item-header.active'
    );

    if (currentlyActiveQuestion && currentlyActiveQuestion !== question) {
      const activeAnswer = currentlyActiveQuestion.nextElementSibling;
      currentlyActiveQuestion.classList.toggle('active');
      activeAnswer.style.maxHeight = 0;
      activeAnswer.setAttribute('aria-expanded', 'false');
    }

    question.classList.toggle('active');
    const answer = question.nextElementSibling;

    const showAnswer = () => {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.setAttribute('aria-expanded', 'true');
    };

    const hideAnswer = () => {
      answer.style.maxHeight = 0;
      answer.setAttribute('aria-expanded', 'false');
    };

    question.classList.contains('active') ? showAnswer() : hideAnswer();
  });
});

// Year text footer
yearText.innerHTML = new Date().getFullYear();

// EventListeners
menuLinks.forEach(addMenuLinksToggleEvent);
readMoreBtns.forEach(addReadMoreBtnsToggleEvent);
menuBtn.addEventListener('click', toggleSidebar);
scrollUpBtn.addEventListener('click', handleScrollToTop);
document.addEventListener('keydown', handleEscape);
document.addEventListener('scroll', showScrollToTop);
document.addEventListener('mouseup', handleOutsideClickClose);
