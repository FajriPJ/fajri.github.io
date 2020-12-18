

const txtElement = ['Welcome to Manaka!']
let count = 0;
let txtIndex = 0;
let currentTxt= '';
let words = '';

(function gerak(){

    if ( count === txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex)
    // console.log(words);
    document.querySelector('.gerak').textContent = words;

    setTimeout(gerak, 200)

    if(words.length === currentTxt.length){
        txtIndex = 0;
    }

})();

    