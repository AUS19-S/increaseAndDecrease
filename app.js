document.addEventListener("DOMContentLoaded", ()=>{
    const plus = document.getElementById("increase");
    const minus = document.getElementById("decrease");
    const result =  document.getElementById("result");

    let number = 0;

    plus.addEventListener("click", ()=>{
        number ++;
        result.innerHTML = number;
        if(number > 10){
            result.style.backgroundColor = "yellow"
            alert("The number is growing up.")
        }
    });

    minus.addEventListener("click", ()=>{
        number --;
        result.textContent = number;
        if(number < -10){
            result.style.backgroundColor = "grey";
            alert("Attention! The number is going down.")
        }
    })
});