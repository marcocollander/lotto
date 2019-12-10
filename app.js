'use strict';

const app = {
  init: function () {
    this.initLotto();
  },

  initLotto: function () {
    const btn = document.getElementById('random');
    const btnReset = document.getElementById('reset');

    btn.addEventListener('click', function () {
      this.lotto = new Lotto();

      if (Lotto.counter <= 10) {
        document.getElementById('random-id').innerHTML += this.lotto.randomNumbers().join(', ') + '<br>';
      }
      else {
        document.getElementById('random-id').innerHTML += 'koniec - resetuj';
        document.getElementById('random').style.visibility = 'hidden';
        Lotto.counter = 0;
      }

    });

    btnReset.addEventListener('click', function () {
      document.getElementById('random-id').innerHTML = ' ';
      document.getElementById('random').style.visibility = 'visible';
    });
  }

};

app.init();

