/*let myMessage =  document.getElementById("message");

function showMessage(){

    myMessage.className = "show";

}

setTimeout(showMessage, 3000);*/


let colourChanger = document.getElementById("colour-changer");

let colours =["red","blue","green","pink","yellow"];
let image = ["image1.jpg", "image2.jpg", "image3.jpg","image4.jpg","image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"]
let counter = 0;


function changeColor(){

        if(counter >=  colours.length){
            counter = 0;
        }
        colourChanger.style.background = colours[counter];
        counter++;
    }




let myTimer = setInterval(changeColor, 3000)
/*function changeImage(){

    if(counter >=  image.length){
        counter = 0;
    }
    colourChanger.style.backgroundImage = "url(images/"+ image[counter] +")";

    counter++;
}




let myTimer = setInterval(changeImage, 1000)


colourChanger.ondblclick = function(){

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped"
}*/