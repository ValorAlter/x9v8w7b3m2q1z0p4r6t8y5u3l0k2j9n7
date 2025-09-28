function setViewportHeight() {
  // calcula 1% da altura da viewport visível
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Executa ao carregar e quando ajustar a tela/orientação
window.addEventListener('load', setViewportHeight);
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

const seal = document.getElementById('seal');
const topFlap = document.getElementById('envelopeTop');
const letter = document.getElementById('letter');
const spoiler = document.getElementById('spoiler');

seal.addEventListener('click', () => {
  topFlap.classList.add('open');
  letter.classList.add('show');
  seal.style.display = 'none';

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
