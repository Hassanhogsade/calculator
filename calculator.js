function meow() {
    var firstValue = parseInt(prompt('please enter a number'))
    var secondValue = parseInt(prompt('please enter a second number'))
    var operation = prompt('values: +, -, *, /, ^')

    function add(firstValue, secondValue) { return firstValue + secondValue; }
    function minus(firstValue, secondValue) { return firstValue - secondValue; }
    function multiply(firstValue, secondValue) { return firstValue * secondValue; }
    function divide(firstValue, secondValue) { return firstValue / secondValue; }
    function power(firstValue, secondValue) { return Math.pow(firstValue, secondValue); }

    let answer = 0

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


    console.log(`${firstValue} ${operation} ${secondValue} =     ${answer} `)
}

while (true) {
    meow()
    let reply = prompt('do you want to continue?')
    if (reply == 'no') {
        break
    }
}

