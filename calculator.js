
function meow() {
    //created 3 variables below the 2 for value i needed to convert from string to int.
    //all variables will prompt user for input
    var firstValue = parseInt(prompt('please enter a number'))
    var secondValue = parseInt(prompt('please enter a second number'))
    var operation = prompt('values: +, -, *, /, ^')
    // here i created functions for all the symbols and given them a return value
    function add(firstValue, secondValue) { return firstValue + secondValue; }
    function minus(firstValue, secondValue) { return firstValue - secondValue; }
    function multiply(firstValue, secondValue) { return firstValue * secondValue; }
    function divide(firstValue, secondValue) { return firstValue / secondValue; }
    function power(firstValue, secondValue) { return Math.pow(firstValue, secondValue); }
    // above i used Math.pow for the power
    //had to create another variable for my switch case below so i can make that equal to the functions above
    let answer = 0
    // made several cases if user inputs the symbol what it will do and if they enter something that isn't that code it will tell them a message
    switch (operation) {
        case '+':
            answer = add(firstValue, secondValue)
            break;
        case '-':
            answer = minus(firstValue, secondValue)
            break;
        case '/':
            answer = divide(firstValue, secondValue)
            break;
        case '^':
            answer = power(firstValue, secondValue)
            break;
        case '*':
            answer = multiply(firstValue, secondValue)
            break;

        default:
            console.log('values must be only: +, -, *, /, ^')
            break;
    }

    //this will output and print for example 8 + 5 = 13
    console.log(`${firstValue} ${operation} ${secondValue} =     ${answer} `)
}
// this will loop as its true and will prompt user if they want want to go again if no it will break if yes go again
while (true) {
    meow()
    let reply = prompt('would you like to do another calculation?')
    if (reply == 'no') {
        break
    }
}

