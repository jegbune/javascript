let input = document.querySelector("#numbers");
let button = document.querySelector("#Btn");
let result = document.querySelector(".result");


/*num.addEventListener("blur", function(){
    let numb = parseInt(num.value);

    if(numb >= 1000 && numb >= 3000){
        numb -= 1000;
        first = "M";
       let answer = result.innerHTML = "M";
    }else if(numb >= 500){
        numb -= 500;
        second = "D";
        let answer1 = result.innerHTML = "D"
    }else if(numb >= 100){
        numb -= 100;
        third = "C";
        let answer2 = result.innerHTML = "C"
    }else if(numb >= 50){
        numb -= 50;
        fourth ="L";
        let answer3 = result.innerHTML = "L"
    }else if(numb >= 10){
        numb -= 10;
        fifth = "X";
        let answer4 = result.innerHTML = "X"
    }else if(numb >= 5){
        numb -= 5;
        sixth = "V";
        let answer5 = result.innerHTML = "V"
    }else if(numb >= 1){
        numb -= 1;
        seventh = "I";
        let answer6 = result.innerHTML = "I"
    }

    let total = answer + answer1 + answer2 + answer3 + answer4 + answer5 + answer6

    result.innerHTML = total;
    return;
});*/

const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL:40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,

}
let accumulator = '';
button.addEventListener('click', function(){
   
let inputValue = input.value;
// alert(input.value);
    
    for(const i in lookupTable){
        const numberValue = lookupTable[i];
    
        while(numberValue <= inputValue){
        
                inputValue -= numberValue;
                accumulator += i;
    
        }
        //     result.textContent = accumulator
    }
    alert(accumulator);


});
