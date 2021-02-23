const menuBtn = document.querySelector('.hamburger-btn');
const sidebar = document.querySelector('.sidebar');
const menuLinks = document.querySelectorAll('.menuLink');
const questions = document.querySelectorAll('.accordion-item-header');
const scrollUpBtn = document.querySelector('.scroll-top-btn');
const yearText = document.getElementById('year');

// Hamburger menu
const childActiveToggle = (child) => {
  child.classList.contains('active')
    ? child.classList.remove('active')
    : child.classList.add('active');
};

const toggleSidebar = () => {
  sidebar.classList.toggle('show-sidebar');
  [...menuBtn.children].forEach(childActiveToggle);
};

const addMenuLinksToggleEvent = (link) => {
  link.addEventListener('click', toggleSidebar);
};

const handleEscape = (e) => {
  if (window.innerWidth <= 648) {
    e.key === 'Escape' ? toggleSidebar() : null;
  }
};

// Scroll to top
const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const showScrollToTop = () => {
  const scrollHeight = window.pageYOffset;

  scrollHeight > 650
    ? scrollUpBtn.classList.add('show-go-to-top')
    : scrollUpBtn.classList.remove('show-go-to-top');
};

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const currentlyActiveQuestion = document.querySelector(
      '.accordion-item-header.active'
    );

    if (currentlyActiveQuestion && currentlyActiveQuestion !== question) {
      currentlyActiveQuestion.classList.toggle('active');
      currentlyActiveQuestion.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle('active');
    const answer = question.nextElementSibling;

    question.classList.contains('active')
      ? (answer.style.maxHeight = answer.scrollHeight + 'px')
      : (answer.style.maxHeight = 0);
  });
});

// Year text footer
yearText.innerHTML = new Date().getFullYear();

// EventListeners
menuLinks.forEach(addMenuLinksToggleEvent);
menuBtn.addEventListener('click', toggleSidebar);
scrollUpBtn.addEventListener('click', handleScrollToTop);
document.addEventListener('keydown', handleEscape);
document.addEventListener('scroll', showScrollToTop);
