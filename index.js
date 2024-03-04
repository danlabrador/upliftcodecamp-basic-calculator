const add = (num1, num2) => {
  return num1 + num2;
};

const divide = (num1, num2) => {
  // If num2 is 0, return a string
  if (num2 === 0){
    return `Cannot divide by zero`;
  }

  // Return the result rounded to 2 decimal places
  return Math.round((num1 / num2) * 100) / 100;
}