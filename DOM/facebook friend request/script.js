let istatus = document.querySelector("#status");
let btn = document.querySelector("#friend");
let check = 0;

btn.addEventListener("click", () => {
    if (check === 0) {
        istatus.textContent = "Friends";
        istatus.style.color = "green";
        btn.textContent = "Remove";
        btn.style.backgroundColor = "#e3e3e39b";
        btn.style.color = "black";
        btn.style.border = "1px solid black";
        check = 1;
    } else {
        istatus.textContent = "Strangers";
        istatus.style.color = "red";
        btn.textContent = "Add Friend";
        btn.style.backgroundColor = "#1877f2";
        btn.style.color = "white";
        btn.style.border = "none";
        check = 0;
    }
})