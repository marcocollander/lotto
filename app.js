import { Lotto } from './Lotto.js';

const app = {
  init: function () {
    this.initLotto();
    //console.log(app);
  },

  initLotto: function () {
    const btn = document.getElementById('random');
    const btnReset = document.getElementById('reset');
    const display = document.getElementById('random-id');

    btn.addEventListener('click', function () {
      this.lotto = new Lotto();

      if (Lotto.counter <= 10) {
        display.innerHTML += this.lotto.randomNumbers().join(', ') + '<br>';
      } else {
        display.innerHTML += 'koniec - resetuj';
        btn.style.visibility = 'hidden';
        Lotto.counter = 0;
      }

    });

    btnReset.addEventListener('click', function () {
      display.innerHTML = ' ';
      btn.style.visibility = 'visible';
    });
  },
};

app.init();

console.log(app);
