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