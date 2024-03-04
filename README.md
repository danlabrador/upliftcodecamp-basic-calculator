# Arithmetic Operations Module

This module provides basic arithmetic operations such as addition, subtraction, multiplication, and division. Each operation is a function that takes two numbers as input and returns the result of the operation.

## Functions

### `add(num1, num2)`

This function takes two numbers as input and returns their sum. If the inputs are not numbers, it returns the string "Input must be numbers".

### `subtract(num1, num2)`

This function takes two numbers as input and returns the result of subtracting the second number from the first. If the inputs are not numbers, it returns the string "Input must be numbers".

### `multiply(num1, num2)`

This function takes two numbers as input and returns their product. If the inputs are not numbers, it returns the string "Input must be numbers".

### `divide(num1, num2)`

This function takes two numbers as input and returns the result of dividing the first number by the second, rounded to two decimal places. If the inputs are not numbers, it returns the string "Input must be numbers". If the second number is zero, it returns the string "Cannot divide by zero".

## Usage

```javascript
const result1 = add(1, 2); // 3
const result2 = subtract(5, 2); // 3
const result3 = multiply(3, 2); // 6
const result4 = divide(6, 2); // 3
```

## Contributing

This is a practice project for team collaboration. Feel free to contribute by submitting pull requests.

## License

This project is licensed under the MIT License.
