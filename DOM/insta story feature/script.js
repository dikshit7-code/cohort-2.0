let arr = [
    {
        dp:"https://i.pinimg.com/736x/c9/b8/d0/c9b8d034f911fb387a0ba6ace66704b3.jpg",

        story:"https://i.pinimg.com/736x/cf/82/ca/cf82cab54165e37db6e6111d21b64ce6.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/db/b3/37/dbb337326975da97651bae643f504f88.jpg",

        story:"https://i.pinimg.com/736x/26/92/30/2692301a198134034ceecd6863bc34ba.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg",

        story:"https://i.pinimg.com/736x/59/cd/b2/59cdb2d00d15b6d2eb09a4e97ffae850.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/bb/f5/1f/bbf51febe6164637a064f21db1ca0465.jpg",

        story:"https://i.pinimg.com/736x/98/96/f7/9896f7bc8b2a75b858f1368765eaccb4.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/8a/d9/f8/8ad9f8400a8bf8221aee075cd38bffa1.jpg",

        story:"https://i.pinimg.com/736x/77/6e/85/776e85fdd825706be48431f7ac124051.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/71/c3/50/71c350f1204e6221a2e45b6c0fb2cb68.jpg",

        story:"https://i.pinimg.com/736x/84/d6/93/84d693fc61372beb1ec13aa9c4968d71.jpg"
    }
]

let storyian = document.querySelector("#storyian");
let clutter = "";
arr.forEach((elem, idx)=>{
    clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt="dp"></div>`;
});

storyian.innerHTML = clutter;

let fullScreen = document.querySelector("#full-screen");
storyian.addEventListener("click", function(e){
    console.log(arr[e.target.id].story);
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[e.target.id].story})`;

    setTimeout(()=>{
        fullScreen.style.display = "none";
    },3000);
});