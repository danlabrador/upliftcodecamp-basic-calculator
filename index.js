const add = (num1, num2) => {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Input must be numbers";
  }
  
  return num1 + num2;
};

const subtract = (num1, num2) => {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Input must be numbers";
  }
  
  return num1 - num2;
};

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
