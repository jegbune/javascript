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

// console.log(sumArray(2,"4",9, "red", true, false));
