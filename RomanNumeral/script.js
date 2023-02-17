let input = document.querySelector("#numbers");
let button = document.querySelector("#Btn");
let result = document.querySelector(".result");

// Constan variable
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
    }
            result.textContent = accumulator;
            // alert(accumulator);

return; 
});
