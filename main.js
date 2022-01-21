
let contElement = document.getElementById ('container')

for (let i=1 ; i <= 100 ; i++ ) {


    if (i % 3 == 0) {
        contElement.innerHTML += "<div class='Fizz'>" + i + "</div>"
    }
    else if  (i % 5 == 0) {
        contElement.innerHTML += "<div class='Buzz'>" + i + "</div>"
    }
    else if ((i % 3 == 0) && (i % 5 == 0)) {
        contElement.innerHTML += "<div class='FlizzBuzz'>" + i + "</div>"
    }
    else {
        contElement.innerHTML += "<div class='box'>" + i + "</div>"
    }

}



//multipli di 3 stampi Fizz

//multipli di 5 stampi Buzz

//multipli di 3 e 5 stampi FlizzBuzz