let slide = document.getElementById("slide");
let array = ["image1.jpg","image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg","image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"];
let count = 0;

function slideshow(){

    if(count >= array.length){
        count = 0;
    }
    slide.style.backgroundImage = "url(images/" + array[count]+ ")";
    count++;
    
}

setInterval(slideshow, 3000);