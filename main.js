
let contElement = document.getElementById  ('container')

for (let i=1 ; i <= 100 ; i++ ) {
    
    if ((i % 3 == 0) && (i % 5 == 0)) {
        contElement.innerHTML += "<div class='box FizzBuzz'> FizzBuzz </div>"
    }
    else if  (i % 3 == 0) {
        contElement.innerHTML += "<div class='box Fizz'> Fizz </div>"
    }
    else if (i % 5 == 0) {
        contElement.innerHTML += "<div class='box Buzz'> Buzz </div>"
    }
    else {
        contElement.innerHTML += "<div class='box none'>" + i + "</div>"
    }

}



//multipli di 3 stampi Fizz

//multipli di 5 stampi Buzz

//multipli di 3 e 5 stampi FlizzBuzz