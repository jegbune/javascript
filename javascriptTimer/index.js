/*let myMessage =  document.getElementById("message");

function showMessage(){

    myMessage.className = "show";

}

setTimeout(showMessage, 3000);*/


let colourChanger = document.getElementById("colour-changer");

let colours =["red","blue","green","pink"];

let counter = 0;


function changeColor(){

        if(counter >=  colours.length){
            counter = 0;
        }
        colourChanger.style.background = colours[counter];
        counter++;
    }




setInterval(changeColor, 3000) 