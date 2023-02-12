let s = document.getElementsByClassName("product-picture");
let pics = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
let count = 0;
function slide(){
    
    if(count >= pics.length){
        count = 0;
    }
    let i;
    for(i = 0; i < pictur.length; i++)
    slides[i].
    // slides[i].style.backgroundImage = "url(images/" + pics[count] + ")";
    count++;

}

setInterval(slide, 3000);