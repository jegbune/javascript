// window.onload = function(){
        

        let content = document.getElementById("content");
        let button = document.getElementById("show-more");
        
        button.onclick = function(){
            if(content.className === "open"){
        
                content.className = "";
                button.innerHTML = "show more"
        
            }else{
                content.className = "open";
                button.innerHTML = "show less"
            }
        }
    
// } 