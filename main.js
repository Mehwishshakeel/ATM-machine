#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 9898;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter withdraw amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient balance.");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log("Your remaining amount is:" + myBalance);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("Your current balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin code!!");
}
