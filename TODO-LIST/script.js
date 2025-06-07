// todo list
const inputbox = document.getElementById("inputbox");
const Button = document.getElementById("button");
const input = document.getElementById("input-box");
const output = document.getElementById("output-box");
let todos = ["Wake up Boiiii", "work out", "Read a book"];

button.addEventListener("click", () => {
    const value = input.value;
    const p = document.createElement("p");
    p.textContent = value;
    output.appendChild(p);

});



function displayTodos() {
    output.innerHTML = "";
    todos.forEach(todo => {
        const div = document.createElement("Div");
        const p = document.createElement("p");
        const buttton = document.createElement("button");
        const delbuttton = document.createElement("delButton");

         buttton.addEventListener("click" , () => {
             })
        div.className = "d-flex justify-content-between align-items-center";
        delbuttton.className = "btn btn-danger";

        p.textContent = todo;
        const value = input.value;
        todos.push(value);
        delbuttton.addEventListener("click", () => {
            
            displayTodos();
        });
        delbuttton.textContent = "Delete";

        div.appendChild(p);
        div.appendChild(delbuttton);

        output.appendChild(div);
    });
}

