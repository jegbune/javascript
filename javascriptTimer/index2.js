let picture = document.getElementsByClassName("picture");
let pic = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
let counts = 0;


function slide1(){
    
    if(counts >= pic.length){
        counts = 0;
    }
    for(let i = 0; i < picture.length; i++){
        
        picture[i].style.backgroundImage = "url(images/" + pic[counts]+ ")";

    }
    counts++;


    

}

setInterval(slide1, 5000);