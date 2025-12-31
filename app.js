let heading = document.querySelector("h1");
console.log(heading.innerText);

heading.innerText = "Peter Parker";
console.log(heading);

let mainImage = document.getElementById("mainImg");
console.log(mainImage);
console.log(mainImage.src);
console.log(mainImage.tagName);

mainImage.src = "./assets/creation_1.png";
console.log(mainImage);

let oldImages = document.getElementsByClassName("oldImg");      //returns an HTML collection
console.log(oldImages);
console.log(oldImages[0]);
console.log(oldImages[1]);

console.log(oldImages[0].src);

for(let i=0; i<oldImages.length; i++){
    oldImages[i].src = "assets/spiderman_img.png";
}
console.log(oldImages[0].src);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let paragraph = document.querySelector("#description");
console.log(paragraph);

let linkInsideDiv = document.querySelector("div a");
console.log(linkInsideDiv);

console.log(document.querySelectorAll("a"));

let para = document.querySelector("p");
console.log(para);
console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);

let heroImg = document.querySelector("img");
console.log(heroImg);
console.log(heroImg.getAttribute("id"));

heroImg.setAttribute("src", "assets/spiderman_img.png");
console.log(heroImg.src);

// To check the style of any object
console.log(heroImg.style);
heroImg.style.border = "5px solid black";

let img = document.querySelector("img");
console.log(img.classList);
img.classList.add("main-Image");
img.classList.add("abc");
console.log(img.classList);

img.classList.remove("abc");
console.log(img.classList);

// Creating a new element
let newPara = document.createElement("p");
console.dir(newPara);
newPara.innerText = "I am a new paragraph";

// Inserting this new element
// ---adding this to the body at the end
let body = document.querySelector("body");
body.appendChild(newPara);

let btn = document.createElement("button");
let box = document.querySelector(".box");

btn.innerText = "Click Me";
box.appendChild(btn);

// Removing elemnt
box.removeChild(btn);

// Create a new element p with the text that says "Hey I am red"
let newEle = document.createElement("p");
newEle.innerText = "Hey! I am Red"

body.append(newEle);

// Create h3 with blue text that say I am blue h3
let newHeading = document.createElement("h3");
newHeading.innerText = "I am blue h3";
newHeading.style.color = "blue";
body.append(newHeading);

// Create a div with with black border and pink background then insert another h1 inside it that says I am a div and a p that says Me too
let newDiv = document.createElement("div");
newDiv.style.border = "3px solid black";
newDiv.style.backgroundColor = "pink";
body.append(newDiv);

let newH1 = document.createElement("h1");
newH1.innerText = "I am a div";

let anotherP = document.createElement("p");
anotherP.innerText = "Me too";

newDiv.append(newH1);
newDiv.append(anotherP);