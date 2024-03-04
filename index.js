/**
 * Returns the result of an operation on two numbers.
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @returns result of the operation.
 */

// Add
const add = (num1, num2) => {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Input must be numbers";
  }
  
  // Return the result
  return num1 + num2;
};


// Subtract
const subtract = (num1, num2) => {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Input must be numbers";
  }
  
  // Return the result
  return num1 - num2;
};


// Multiply
const multiply = (num1, num2) => {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Input must be numbers";
  }

  // Return the result
  return num1 * num2;
};


// Divide
const divide = (num1, num2) => {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Input must be numbers";
  }
  
  // If num2 is 0, return a string
  if (num2 === 0){
    return `Cannot divide by zero`;
  }

  // Return the result rounded to 2 decimal places
  return Math.round((num1 / num2) * 100) / 100;
}
