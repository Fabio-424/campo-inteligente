document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector(".btn");
 
    btn.addEventListener("click", function(event){
        event.preventDefault();
        alert ("ChatBot em breve!");
    });
});