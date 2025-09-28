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
