//Roman Numeral converter Calculator



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

//conversion from Roman Numeral to Number
// when you click on the button it will make the conversion
button.addEventListener('click', function(){
    let accumulator = '';
    let inputValue = input.value;
    //Maximum number that can be calculated is 3999.
    if(inputValue > 3999){
        inputValue= ''
    }


    // scan through the lookupTable
    for(const i in lookupTable){
        const numberValue = lookupTable[i];
    
        //while the constant number is less than the input value.
        //the constant value will be minus from the inputted value until it get to zero.
        while(numberValue <= inputValue){
        
                inputValue -= numberValue;
                accumulator += i;
    
        }
    }

    //The result container will appear when the button is click
    result.setAttribute('style', "display:flex");
    result.textContent = accumulator;
    
            // alert(accumulator);

        });
























// button1.addEventListener('click', function(){
// let value = '';
//     let input1Value = input1.value;
//     //Maximum number that can be calculated is 3999.
//     // if(inputValue > 3999){
//     //     inputValue= ''
//     // }
//     let input2 = input1Value.toUpperCase();
//     // alert(input2)
//        let input3 = input2.split("")
//         // alert(typeof input3)
    
//         for(const key in lookupTable){
//          const numberValue1 = lookupTable[key];
//         for(const i in input3){
//             const roman = input3[i];

//             while(i <= input3.length){
//                 // value += lookupTable[input2];
//                 // if(roman === key){
                        
//                         alert();    
                        
//                         // alert(lookupTable.input3);
                        
//                         // }
//                 // }
                
//                 //     if(roman === ){
//                 //         value += numberValue1;
//                 //         // alert(numberValue1)
//                 //         alert(value)
       
//                     // }
//                 // }

//             //      if(roman = input3){
//             //      alert(input3.length)
//             //  value += numberValue1;           
//             //  alert(value);
//             //  roman = input3[i]
            
            
//         // }
//        }
//             // alert(input3[i])
//         // if(input2 === i){
//             // if(input2 >= i){
//                 // alert(numberValue1);

//             }

//         }


//         /*while(numberValue <= inputValue){
        
//                 inputValue -= numberValue;
//                 accumulator += i;
    
//         }
//     }
//     result.setAttribute('style', "display:flex");
//     result.textContent = accumulator;
    
//             // alert(accumulator);*/
//     // }

//         });

