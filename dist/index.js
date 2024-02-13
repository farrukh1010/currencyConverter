// // src/index.ts
// import * as inquirer from 'inquirer';
import inquirer from 'inquirer';
const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    // Add more currencies as needed
];
async function currencyConverter() {
    const questions = [
        {
            type: 'list',
            name: 'fromCurrency',
            message: 'Select the source currency:',
            choices: currencies.map((currency) => `${currency.code} - ${currency.name}`),
        },
        {
            type: 'list',
            name: 'toCurrency',
            message: 'Select the target currency:',
            choices: currencies.map((currency) => `${currency.code} - ${currency.name}`),
        },
        {
            type: 'input',
            name: 'amount',
            message: 'Enter the amount to convert:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
        },
    ];
    const answers = await inquirer.prompt(questions);
    const fromCurrency = currencies.find((currency) => answers.fromCurrency.includes(currency.code));
    const toCurrency = currencies.find((currency) => answers.toCurrency.includes(currency.code));
    const amount = parseFloat(answers.amount);
    // Implement your currency conversion logic here
    const convertedAmount = amount; // Placeholder
    console.log(`${amount} ${fromCurrency.code} is equal to ${convertedAmount} ${toCurrency.code}`);
}
currencyConverter();
