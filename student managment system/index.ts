#! usr/bin/env node

import inquirer from "inquirer";

    console.log("Wellcome to Student Data Generation System")
//async function management() {
    
const answers = await inquirer.prompt([
    {
        type: "input",
        name : " Student Data",
        message: "Select your student data list: ",
    },
    {  
    type: "input",
    name:  "student Name",
    message: "Enter student Name: ",
    },
    {  
    type: "input",
    name: "student ID",
    message: "Enter student ID: ",
    },
    {  
        type: "input",
        name: "student Roll Number ",
        message: "Enter student 5 digit roll number: ",
        },
        {  
            type: "input",
            name: "Course ",
            message: "Enter your course: ",
            },
            {  
            type: "input",
            name: "Fees ",
            message: "your fee is: ",
            }
]);
//}
   //await management()
  console.log(answers)
async function again() { 
    do{
        //await management();
        var start = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want add an other student? Type y or n",
            }
        ])
    }while(start.restart === "y")
}
//await again();

