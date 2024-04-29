#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// intialized user balance and pin code
let myBalance = 7000;
let myPin = 5454;
// asking question to user enter your pin
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n \t \t \t******** Successfully Login! ********"));
}
else {
    console.log(chalk.red("Invalid pin code plzz Enter a valid pin code"));
}
// print wellcome message
if (pinAnswer.pin === myPin) {
    console.log(chalk.blue(`\n \t ====>>>> Wellcome To Haji Ghulam Hussian-ATM Mashine <<<<====`));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.yellow("Select an operation"),
            choices: ["Fast Cash", "Withdraw", "Check Balance",]
        }
    ]);
    ///fast cash method perform
    if (operationAnswer.operation === "Fast Cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: chalk.yellow("Select your fast cash amount"),
                choices: ["1000", "3000", "5000", "10000"]
            }
        ]);
        if (fastCashAnswer.fastcash > myBalance) {
            console.log(chalk.red(`Insufficiant Balance!`));
            console.log(chalk.green(`Your balance is: ${myBalance}`));
        }
        else {
            myBalance -= fastCashAnswer.fastcash;
            console.log(chalk.green(`${fastCashAnswer.fastcash} withdraw Successfully \nNow your remaining balance is: ${myBalance}`));
        }
    }
    // withdraw method perform
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.yellow("Enter the amount to withdraw")
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log(chalk.red("Insufficiant Balance"));
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(chalk.green(`${amountAnswer.amount} withdraw Successfully \nNow your remaining balance is: ${myBalance}`));
        }
    }
    else if (operationAnswer.operation === "Check Balance")
        console.log(chalk.green(`Your current balance is: ${myBalance}`));
}
