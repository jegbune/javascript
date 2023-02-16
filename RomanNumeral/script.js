let num = document.querySelector("#numbers");
let button = document.querySelector(".Btn");
let result = document.querySelector(".result");

/*i = [1,5,10,50,100,500,1000];
let I = i[0];
let V = i[1];
let X = i[2];
let L = i[3];
let C = i[4];
let D = i[5];
let M = i[6];*/


button.addEventListener("click", function(){
    let numb = parseInt(num.value);

    if(numb >= 1000 && numb >= 3000){
        numb -= 1000;
       let answer = result.innerHTML = "M";
    }else if(numb >= 500){
        numb -= 500;
        let answer = result.innerHTML = "D"
    }else if(numb >= 100){
        numb -= 100;
        let answer = result.innerHTML = "C"
    }else if(numb >= 50){
        numb -= 50;
        let answer = result.innerHTML = "L"
    }else if(numb >= 10){
        numb -= 10;
        let answer = result.innerHTML = "X"
    }else if(numb >= 5){
        numb -= 5;
        let answer = result.innerHTML = "V"
    }else if(numb >= 1){
        numb -= 1;
        let answer = result.innerHTML = "I"
    }

    if(numb > 1000 && numb <= 3000){
        numb -= 1000;
       let answer = result.innerHTML = "M";
    }else if(numb >= 500 && numb < 1000){
        numb -= 500;
        let answer = result.innerHTML = "D"
    }else if(numb >= 100 && numb < 500){
        numb -= 100;
        let answer = result.innerHTML = "C"
    }else if(numb >= 50 && numb < 100){
        numb -= 50;
        let answer = result.innerHTML = "L"
    }else if(numb >= 10 && numb < 50){
        numb -= 10;
        let answer = result.innerHTML = "X"
    }else if(numb >= 5 && numb < 10){
        numb -= 5;
        let answer = result.innerHTML = "V"
    }else if(numb >= 1 && numb < 5){
        numb -= 1;
        let answer = result.innerHTML = "I"
    }


    return;
    let answer = answer+answer+answer
})

result.textContent = answer + answer 