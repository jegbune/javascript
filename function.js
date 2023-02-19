 export function sum(a,b){
    return a+b;
}
export default function sumArray(...args){
    let total = 0;
    for(let i = 0; i < args.length; i++){

        if(typeof args[i] === "number"){
            total += args[i]
        }
    }
        return total;
}

export function convert(number){
    let accumulator = '';
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

    for(const key in lookupTable){
        let numberValue = lookupTable[key];
        while(number >= numberValue){
            number -= numberValue
            accumulator += key;
        }
    }
    
      return accumulator;
    
}
// console.log(sumArray(2,"4",9, "red", true, false));
