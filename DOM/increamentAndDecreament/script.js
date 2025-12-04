let h1 = document.querySelector("h1");
let increment = document.querySelector("#in");
let decreament = document.querySelector("#de");

let count = 0;

increment.addEventListener("click", ()=> {
    count++;
    h1.textContent = count;
});

decreament.addEventListener("click", ()=> {
    count--;
    h1.textContent = count;
});
