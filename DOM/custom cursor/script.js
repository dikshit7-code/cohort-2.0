let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clienty;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})