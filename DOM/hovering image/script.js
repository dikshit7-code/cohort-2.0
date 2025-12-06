let elem = document.querySelectorAll(".elem");

elem.forEach((val)=>{
    

    let img = val.querySelector("img");

    val.addEventListener("mousemove", (e) => {
            img.style.left = e.clientX + "px";
            img.style.top = e.clientY + "px";
            img.style.transform = "translate(-50%,-50%)";
    })
    val.addEventListener("mouseenter", () => {
        img.style.opacity = "1";
        img.style.scale= "1";
        

        
    })
    val.addEventListener("mouseleave", () => {
        img.style.opacity = "0";
        img.style.scale = "0";


    })
    
    
})