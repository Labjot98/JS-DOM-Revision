let input = document.querySelector("#todo");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value == "") {
        alert("Please enter a task to add.")
    }
    else {
        // Getting the value from the input field
        let task = input.value;
        // Creating a list item
        let listItem = document.createElement("li");
        // Setting the value of list item
        listItem.textContent = task;
        // Adding it to the list
        list.appendChild(listItem);

        // Clearing the input field
        input.value = "";
    }
})