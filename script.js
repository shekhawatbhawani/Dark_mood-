let btn = document.querySelector('.bap')
let body = document.querySelector("body")
let raj = document.querySelector("#raj")
let div = document.querySelector(".ch")
btn.addEventListener("click",()=>{
   
    body.classList.toggle("body")
    if(div.classList.contains("right")){
        div.classList.add("left");
        div.classList.remove("right");
    }
    else{  
        div.classList.add("right");
        div.classList.remove("left");
    }
    

})