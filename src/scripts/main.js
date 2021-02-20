const yearText = document.getElementById('year');
const menuBtn = document.querySelector('.hamburger-btn');
const questions = document.querySelectorAll('.accordion-item-header');
const question = document.querySelectorAll('.accordion-item');
const navbar = document.getElementById('header');
const scrollUpBtn = document.querySelector('.scroll-up');
const sidebar = document.querySelector('.sidebar');

// sidebar
if (sidebar.classList.contains('show-sidebar')) {
  sidebar.addEventListener('click', (e) => {
    if (e.target !== sidebar) {
      sidebar.classList.remove('show-sidebar');
    }
  });
  document.addEventListener('keydown', (e) => {
    e.key === 'Escape' ? sidebar.classList.remove('show-sidebar') : false;
  });
}

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

// closeBtn.addEventListener('click', () => {
//   sidebar.classList.remove('show-sidebar');
// });

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

document.addEventListener('scroll', handleScrollToTop);
// hamburgerBtn.addEventListener('click', handleMenuClick);
