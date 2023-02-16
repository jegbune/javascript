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
       let answer = "M";
    }else if(numb >= 500){
        numb -= 500;
        let answer1 = "D"
    }else if(numb >= 100){
        numb -= 100;
        let answer2 = "C"
    }else if(numb >= 50){
        numb -= 50;
        let answer3 = "L"
    }else if(numb >= 10){
        numb -= 10;
        let answer4 = "X"
    }else if(numb >= 5){
        numb -= 5;
        let answer5 = "V"
    }else if(numb >= 1){
        numb -= 1;
        let answer6 = "I"
    }


    return;
    let total = answer + answer1 + answer2 + answer3 + answer4 + answer5 + answer6})

result.textContent = answer + answer 