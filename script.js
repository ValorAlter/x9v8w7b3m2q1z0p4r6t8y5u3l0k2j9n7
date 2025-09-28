function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Atualiza o valor da viewport
window.addEventListener('load', setViewportHeight);
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

const seal = document.getElementById('seal');
const topFlap = document.getElementById('envelopeTop');
const letter = document.getElementById('letter');
const spoiler = document.getElementById('spoiler');
const container = document.querySelector('.envelope-container');

seal.addEventListener('click', () => {
  topFlap.classList.add('open');
  letter.classList.add('show');
  seal.style.display = 'none';

  container.style.height = 'auto';

  spoiler.style.display = 'block';

  for (let i = 0; i < 30; i++) {
    setTimeout(() => createPetal(), i * 150);
  }
});

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.top = '-20px';
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 6000);
}
