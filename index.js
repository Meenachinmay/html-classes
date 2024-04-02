let todos = [
  {
    title: "Grocery Shopping",
    description:
      "Buy milk, eggs, bread, and cheese from the local supermarket.",
    startTimings: "8AM",
  },
  {
    title: "Read Book",
    description: "Finish reading 'The Alchemist' by Paulo Coelho.",
    startTimings: "5AM",
  },
  {
    title: "Exercise",
    description: "Complete a 30-minute workout session at the gym.",
    startTimings: "10AM",
  },
  {
    title: "Exercise",
    description: "Complete a 20-minute workout session again.",
    startTimings: "4PM",
  },
  {
    title: "Work on Project",
    description:
      "Spend 2 hours developing the new feature for the web application.",
    startTimings: "9AM",
  },
];

// take the values from the todo array of objects and save it into an array
//TODO: 1. Create the empty array to store values of timings
// TODO: 2. Map the above todo array and then
// TODO: 3. Apply if-else condition and then store the values (push the values in the array if condition match)

let timings = []; // declared an array which is empty (because i need an array to save the values)

todos.map((todo) => {
  if (todo.title === "Exercise") {
    timings.push(todo.startTimings); // here i am pushing the values into the array on a condtion match
  }
});

// console.log(timings); // i am just printing the output array to the screen

//----------------------------------

// BREAK keyword -> break;
// CONTINUE keyword -> continue -> to continue the loop without executing further lines of code

// let names = ["chinmay", "sulax"];

// for (let i = 0; i <= names.length; i ++) {
//     if (names[i] === "chinmay") {
//         continue; // code after this line will not get executed
//         console.log("after the continue keyword");
//     }else {
//         console.log(names[i]);
//     }
// }

// while loop => we use while loop when we don't know when to stop the loop, there has to be a logic to stop the loop -> we don't have control over the loop
// for loop => we use for loop when we know when to stop the loop => means when we have control over the loop

// ------- Let's build

// define an account object
let accounts = [
  {
    userName: "chinmay",
    balance: "100",
  },
  {
    userName: "sulax",
    balance: "10",
  },
  {
    userName: "rohit",
    balance: "400",
  },
  {
    userName: "anish",
    balance: "0",
  },
];

let exitTheLoop = false;

// when we use === to compare => it checks type and value
// when we use == to compare => it checks value only

// NOTE: if the values are same but types are different, javascript changes the type by itself

let count = accounts.length;

while (true) {
    accounts.map((account) => {
        if (account.balance === "0") {
            console.log("0 account balance");
            console.log("Exiting...");
            exitTheLoop = true;
        } else {
            console.log(account.balance, account.userName);
        }
    })

    if (exitTheLoop === true) {
        break;
    }
}

