window.addEventListener('scroll', onScroll);

function onScroll() {
   showNavOnScroll();
   showBackToTopButtonOnScroll();

   activatemenuAtCurrentSection(home);
   activatemenuAtCurrentSection(services);
   activatemenuAtCurrentSection(about);
   activatemenuAtCurrentSection(contact);
}
onScroll();

function activatemenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2;

   // verificar se a seção passou da targetLine
   const sectionTop = section.offsetTop;
   const sectionHeight = section.offsetHeight;

   // O top da seção chegou ou ultrapassou a targetLine
   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;


   // Verificar se a base está abaixo da targetLine
   // Onde a seção termina 
   const sectionEndAt = sectionTop + sectionHeight;
   const sectionEndPassedTargetline = sectionEndAt <= targetLine;

   // Limites da seção  
   const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline;

   const sectionId = section.getAttribute('id');
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

   menuElement.classList.remove('active');
   if (sectionBoundaries) {
      menuElement.classList.add('active');
   }
}

function showNavOnScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll');
   } else {
      navigation.classList.remove('scroll');
   }
}

function showBackToTopButtonOnScroll() {
   if (scrollY > 550) {
      backToTopButton.classList.add('show');
   } else {
      backToTopButton.classList.remove('show');
   }
}

function openMenu() {
   document.body.classList.add('menu-expanded');
}


function closeMenu() {
   document.body.classList.remove('menu-expanded');
}


ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700
}).reveal(`
   #home, 
   #home img, 
   #home .stats, 
   #services,
   #services header, 
   #services .card,
   #about,
   #about header,
   #about content
`);

