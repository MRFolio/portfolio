const menuBtn = document.querySelector('.hamburger-btn');
const sidebar = document.querySelector('.sidebar');
const menuLinks = document.querySelectorAll('.menuLink');
const questions = document.querySelectorAll('.accordion-item-header');
// const question = document.querySelectorAll('.accordion-item');
// const navbar = document.getElementById('header');
const scrollUpBtn = document.querySelector('.scroll-up');
const yearText = document.getElementById('year');

// sidebar
// document.addEventListener('click', (e) => {
//   if (sidebar.classList.contains('show-sidebar')) {
//     document.addEventListener('click', (e) => {
//       console.log(e.target, e.currentTarget);
//       if (e.currentTarget !== sidebar) {
//         sidebar.classList.remove('show-sidebar');
//       }
//     });
//     document.addEventListener('keydown', (e) => {
//       e.key === 'Escape' ? sidebar.classList.remove('show-sidebar') : false;
//     });
//   }
// });

// console.log(sidebar.classList.contains('show-sidebar'));

// Hamburger Menu
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
  e.key === 'Escape' ? toggleSidebar() : false;
};

// Scroll To Top
const handleScrollToTop = () => {
  const scrollHeight = window.pageYOffset;

  scrollHeight > 500
    ? scrollUpBtn.classList.add('show-goToTop')
    : scrollUpBtn.classList.remove('show-goToTop');
};

// accordion
// const handleAccordionClick = () => {};
// question.forEach((questio) => {
//   const btn = question.querySelector('.accordion-item-header');
//   btn.addEventListener('click', () => {
//     questions.forEach((item) => {
//       console.log('tere');
//       item !== questio ? item.classList.remove('show-text') : false;
//     });
//     question.classList.toggle('show-text');
//   });
// });

questions.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener('click', (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      '.accordion-item-header.active'
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle('active');
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// year text footer
yearText.innerHTML = new Date().getFullYear();

menuLinks.forEach(addMenuLinksToggleEvent);
menuBtn.addEventListener('click', toggleSidebar);
document.addEventListener('keydown', handleEscape);
document.addEventListener('scroll', handleScrollToTop);
// hamburgerBtn.addEventListener('click', handleMenuClick);
