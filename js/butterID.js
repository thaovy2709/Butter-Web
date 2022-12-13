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

const options = document.querySelectorAll('.options .option__item');
const nextButton = document.getElementById('next');

const handleUnactive = () => {
   options.forEach(option => {
      option.classList.remove('active');
   });
}

const disableNextButton = () => {
   nextButton.style.backgroundColor = '#D55634';
   nextButton.style.cursor = 'not-allowed';
   nextButton.style.pointerEvents = 'none';
}

const enableNextButton = () => {
   nextButton.style.backgroundColor = '#F7B500';
   nextButton.style.cursor = 'pointer';
   nextButton.style.pointerEvents = 'auto';
}

disableNextButton();

options.forEach(option => {
   option.addEventListener('click', function () {
      handleUnactive();
      this.classList.add('active');
      enableNextButton();
   });
});
