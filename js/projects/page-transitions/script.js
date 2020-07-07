let about = document.querySelector('#about-link');
let aboutPage = document.querySelector('.about-page');
let aboutBtn = document.querySelector('.about-close');

let AboutState = {
  isOpen: false,
};

if (!AboutState.isOpen) {
  aboutPage.style.display = 'none';
} 

about.addEventListener('click', () => {
  openAbout();
});

aboutBtn.addEventListener('click', () => {
  closeAbout();
});

function closeAbout() {
  AboutState.isOpen = false;
  aboutPage.classList.replace('animate__slideInLeft','animate__slideInRight');
  aboutPage.style.left = '-350px';
}

function openAbout() {
  AboutState.isOpen = true;
  aboutPage.style.left = '0';
  aboutPage.style.display = 'block';
  aboutPage.classList.replace('animate__slideInRight', 'animate__slideInLeft');
}