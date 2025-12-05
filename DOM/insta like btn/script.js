let container = document.querySelector("#container");
let likeBtn = document.querySelector("i");

container.addEventListener("dblclick", () => {
    likeBtn.style.transform = "translate(-50%,-50%) scale(1)";
    likeBtn.style.opacity = "1";
    setTimeout(() => {
        likeBtn.style.transform = "translate(-50%,-50%) scale(0)";
        likeBtn.style.opacity = "0";
    },1000);
})