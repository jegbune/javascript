let input = document.querySelector("#numbers");
let input1 = document.querySelector("#numbers1");
let button = document.querySelector("#Btn");
let button1 = document.querySelector("#Btn1");
let result = document.querySelector(".result");

// Constant variables
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
//when you click on the button it will make the conversion
// button.addEventListener('click', function(){
//     let accumulator = '';
//     let inputValue = input.value;
//     //Maximum number that can be calculated is 3999.
//     if(inputValue > 3999){
//         inputValue= ''
//     }

// // alert(input.value);
    
//     for(const i in lookupTable){
//         const numberValue = lookupTable[i];
    
//         while(numberValue <= inputValue){
        
//                 inputValue -= numberValue;
//                 accumulator += i;
    
//         }
//     }
//     result.setAttribute('style', "display:flex");
//     result.textContent = accumulator;
    
//             // alert(accumulator);

//         });

button1.addEventListener('click', function(){
    let value = '';
    let input1Value = input1.value;
    //Maximum number that can be calculated is 3999.
    // if(inputValue > 3999){
    //     inputValue= ''
    // }
    let input2 = input1Value.toUpperCase();
    // alert(input2)
       let input3 = input2.split("")
        // alert(typeof input3)
    
        for(const i in input3){
            const roman = input3[i];
            for(const key in lookupTable){
             const numberValue1 = lookupTable[key];
            alert(numberValue1);
        if(roman === key){
            alert();
                
            }
            
        }
       }
            // alert(input3[i])
        // if(input2 === i){
            // if(input2 >= i){
                // alert(numberValue1);

            // }

        // }


        /*while(numberValue <= inputValue){
        
                inputValue -= numberValue;
                accumulator += i;
    
        }
    }
    result.setAttribute('style', "display:flex");
    result.textContent = accumulator;
    
            // alert(accumulator);*/
    // }

        });

