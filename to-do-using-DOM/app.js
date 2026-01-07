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

        // Creating a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add= "deleteBtn";
        deleteBtn.textContent = "Delete";

        // Adding it to the list
        list.appendChild(listItem);
        listItem.appendChild(deleteBtn);

        // Clearing the input field
        input.value = "";
    }
})

// Adding the delete functionality to the parent element - Learnt event delegation topic
list.addEventListener("click", (event) => {
    if(event.target.nodeName == "BUTTON"){
        let taskToDelete = event.target.parentElement;
        taskToDelete.remove();
    }
})