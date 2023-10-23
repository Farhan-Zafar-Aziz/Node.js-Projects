#! usr/bin/env node 
import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 306.342,
        "EUR": 298.340,
        "PKR": 1,
    },
    "EUR": {
        "USD": 1.23,
        "PKR": 298.340,
        "EUR": 1,
    },
    "USD": {
        "PKR": 306.342,
        "EUR": 1.23,
        "USD": 1,
    }
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EUR"],
        message: "Select your currency: ",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EUR"],
        message: "Select your conversion amount",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: "
    }
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = convertion[from][to];
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
