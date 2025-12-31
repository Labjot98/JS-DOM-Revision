let div = document.querySelector("div");
let btn = document.querySelector("button");

// Creating a fuction that generates hex codes
function hexCodeGenerator(){
    let hexColor = "#";
    let combinations = "abcdef0123456789";
    for(let i=0;i<6;i++){
        let randomIdx = Math.floor(Math.random() * combinations.length);
        hexColor += combinations[randomIdx];
    }
    return hexColor;
}

btn.addEventListener("click", function(){
    let color = hexCodeGenerator();
    div.style.backgroundColor = color;
});