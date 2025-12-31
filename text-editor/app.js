// We have two more event types, "change" and "input". Change tracks the initial and final state. Input tracks all the changes
let container = document.querySelector("#textarea");
let input = document.querySelector("#text")

input.addEventListener("input", () => {
    console.log("Input was changed");
    console.log(input.value)
    container.value = input.value;
});