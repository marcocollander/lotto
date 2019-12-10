'use strict';

class Lotto {
  static counter = 0; 
  constructor(){
    this.fillArray();
    Lotto.counter++;
  }

  fillArray(){
    this.numbers = [];
    for(let i = 0; i < 49; i++){
      this.numbers[i] = i + 1;
    }
    return this.numbers;
  }

  randomNumbers(){
    const result = [];
    let n = 49;
    for (let i = 0; i < 6; i++) {
      let r = Math.floor(Math.random() * n);
      result[i] = this.numbers[r];
      this.numbers[r] = this.numbers[n - 1];
      n--;
    }
    result.sort(function (a, b) {
      return a - b;
    });
    return result;
  }
}