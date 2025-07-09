// Variable	Holds a single value
// Array	Holds multiple values (same type)
// Object	Key-value pairs
// JSON	Data format used for APIs
// API	Medium to interact with server data
// Request	Ask data from server
// Response	Server’s reply




// API	URL to interact with server
// JSON	Format to send/receive data
// fetch()	Built-in function to make API calls
// .then()	Used to handle promise (response)
// async/await	Modern way to handle async code

// Structure of web communication:
// User -> Client (browser/mobile) -- Request --> Server (24x7)
//                                 <-- Response -->

// User – real person
// Client – device or browser sending request
// Server – stores/manages data and gives back a response
// API – URL through which request/response happens

// Network request cycle:
// API Call using URL
// Server processes request
// Response comes in the form of a Promise
// .json() to extract usable data
// Use data in HTML/JS

// What is .then()?
// Used to handle promises
// Runs after the fetch is successful


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(Response => Response.json()) // convert into JSON
//     .then((value) => {
//         console.log(value); // Show data in console 
//         value.map((item) => {
//             document.writeln(item.title + "<br>");
//         });
//     });


// async function fetchPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const json = await response.json();
//     return json;
// }
// async function strater() {
//     const posts = await fetchPost();
//     posts.map((post, index) => {
//         document.writeln(index + " - " + post.title + "<br>");

//     });
// }
// strater(); // start the process from here

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((products) => {
//         products.map((product) => {
//             document.writeln(product.title + "<br>");

//         });
//     });



// function displayTodo(todos) {
//   const tBody = document.getElementById("tBody");
//   tBody.innerHTML = "";

// todos.forEach(todo => {
//     const tr = document.createElement("tr");

//     const tdId = document.createElement("td");
//     tdId.textContent = todo.id;

//     const tdTitle = document.createElement("td");
//     tdTitle.textContent = todo.title;

//     const tdBody = document.createElement("td");
//     tdBody.textContent = todo.body;

//     tr.appendChild(tdId);
//     tr.appendChild(tdTitle);
//     tr.appendChild(tdBody);

//     tBody.appendChild(tr);
//   });
// }

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(todos => {
//     displayTodo(todos);
//   })

function displayCase(cases) {
  const tBody = document.getElementById("tBody");
  tBody.innerHTML = "";

  cases.forEach(caseData => {
    const tr = document.createElement("tr");

    Object.values(caseData).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    tBody.appendChild(tr);
  });
}
fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then(response => response.json())
  .then(data => {
    const cases = data.data.regional;
    displayCase(cases);
  })



