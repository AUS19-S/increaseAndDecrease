const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", ()=>{
    let minus = document.getElementById("decrease");
    let plus = document.getElementById("increase");
    let result = document.getElementById("result");
    let reset = document.getElementById("reset");
    let number = 0;

    minus.addEventListener("click", ()=>{
        number --;
        result.textContent = number;
        let numero = number;
        switch(numero){
            case -5:
                alert("you're going down");
                body.style.backgroundColor ="grey"
                break;
            case -10:
                alert("Try to overcome this situation");
                body.style.backgroundColor ="black";
                result.style.color = "white"
                break;    
        }
    });

    reset.addEventListener("click", ()=>{
        number = 0;
        result.textContent = number;
        body.style.backgroundColor = "white";
        result.style.color = "black";
    })

    plus.addEventListener("click", ()=>{
        number ++;
        result.textContent = number;

        let numero = number;
        switch(numero){
            case 5:
                alert("Good Job!");
                body.style.backgroundColor ="green"
                break;
            case 10:
                alert("That's enough!");
                body.style.backgroundColor ="gold"  
        }
    });

     
});
