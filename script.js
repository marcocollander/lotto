var count;
var textHtml = '';
var number;

function question() {
    count = prompt('Ile chcesz wypełnić zakładów?');
    // alert( count);
   
    for (var j = 0; j < count; j++) {
        number = [];
        for (var i = 0; i < 6; i++) {
            number[i] = (Math.random() / 2 * 100).toFixed();
        }
        
        number.sort(function(a, b){return a-b});
        console.log(number);
        
        for (var i = 0; i < 6; i++) {
            textHtml += number[i].toString() + ',  ';
            document.getElementById('random-id').innerHTML = textHtml;
        }
        textHtml += '<br>';
    }
    document.getElementById('question').style.visibility = 'hidden';
}

function reset(){
    textHtml = ''
    document.getElementById('random-id').innerHTML = textHtml;
    document.getElementById('question').style.visibility = 'visible';
}
