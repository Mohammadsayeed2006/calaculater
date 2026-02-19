function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    let result = '';

    switch (operation) {

        case 'sum':
            result = `Sum: ${num1 + num2}`;
            break;

        case 'product':
            result = `Product: ${num1 * num2}`;
            break;

        case 'difference':
            result = `Difference: ${num1 - num2}`;
            break;

        case 'remainder':
            result = `Remainder: ${num1 % num2}`;
            break;

        case 'quotient':
            result = num2 !== 0 
                ? `Quotient: ${num1 / num2}` 
                : 'Cannot divide by zero';
            break;

        case 'power':
            result = `Power: ${Math.pow(num1, num2)}`;
            break;

        case 'sqrt':
            result = `Square Root of ${num1}: ${Math.sqrt(num1)}<br>
                      Square Root of ${num2}: ${Math.sqrt(num2)}`;
            break;

        case 'square':
            result = `Square of ${num1}: ${Math.pow(num1, 2)}<br>
                      Square of ${num2}: ${Math.pow(num2, 2)}`;
            break;

        default:
            result = 'Please select a valid operation';
    }

    document.getElementById('result').innerHTML = result;
}