// const opt1 = document.getElementById('opt1');
// const opt2 = document.getElementById('opt2');
// const opt3 = document.getElementById('opt3');
// const opt4 = document.getElementById('opt4');
// const opt5 = document.getElementById('opt5');
// const main = document.getElementById('main');
// const next = document.getElementById('next');


// opt1.addEventListener('click', () => next.style.backgroundColor = '#D55634')
// opt2.addEventListener('click', () => next.style.backgroundColor = '#D55634')
// opt3.addEventListener('click', () => next.style.backgroundColor = '#D55634')
// opt4.addEventListener('click', () => next.style.backgroundColor = '#D55634')
// opt5.addEventListener('click', () => next.style.backgroundColor = '#D55634')

const locationPage = window.location.pathname

if (locationPage.includes('butterid_cheese')) {
   const mainImage = document.getElementById('main');
   mainImage.setAttribute('src', localStorage.getItem('nextImage'));
   if (localStorage.getItem('nextImage').includes('vani')) {
      const imageCheese = document.getElementsByClassName('butter_with_cheese')[0]
      const imageNoCheese = document.getElementsByClassName('butter_without_cheese')[0]
      imageCheese.setAttribute('src', '../img/butterID/vanicheese.svg')
      imageNoCheese.setAttribute('src', '../img/butterID/dipvani.svg')
   } else {
      const imageCheese = document.getElementsByClassName('butter_with_cheese')[0]
      const imageNoCheese = document.getElementsByClassName('butter_without_cheese')[0]
      imageCheese.setAttribute('src', '../img/butterID/chococheese.svg')
      imageNoCheese.setAttribute('src', '../img/butterID/dipchoco.svg')
   }
}

if (locationPage.includes('butterid_package')) {
   const mainImage = document.getElementById('main');
   mainImage.setAttribute('src', localStorage.getItem('nextImage'));
}

const options = document.querySelectorAll('.options .option__item');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
   const mainImage = document.getElementById('main').getAttribute('src');
   localStorage.setItem('previousImage', mainImage);
})

const handleUnactive = () => {
   options.forEach(option => {
      option.classList.remove('active');
   });
}

const disableNextButton = () => {
   nextButton.style.backgroundColor = '#979C9E';
   nextButton.style.cursor = 'not-allowed';
   nextButton.style.pointerEvents = 'none';
}

const enableNextButton = () => {
   nextButton.style.backgroundColor = '#D55634';
   nextButton.style.cursor = 'pointer';
   nextButton.style.pointerEvents = 'auto';
}

disableNextButton();

options.forEach(option => {
   option.addEventListener('click', function () {
      const imageMainUrl = this.querySelector('img').getAttribute('src');
      localStorage.setItem('nextImage', imageMainUrl);
      handleUnactive();
      if (locationPage.includes('butterid_cheese')) {
         const mainImage = document.getElementById('main');
         mainImage.setAttribute('src', localStorage.getItem('nextImage'));
      }
      this.classList.add('active');
      enableNextButton();
   });
});
