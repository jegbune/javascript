let myForm = document.forms.myForm;
let message = document.getElementById("message");
let message1 = document.getElementById("message1");

myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        message.innerHTML= "Please enter a name";
    }
    else{
        message.innerHTML = "";
        return true
    }
    if(myForm.biking.checked == false){
        message1.innerHTML = "please select biking";
    }
    else{
        message1.innerHTML = "";
        return true;
    }
}