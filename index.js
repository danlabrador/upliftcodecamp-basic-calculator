"use strict";
const subtract = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Both arguments must be numbers";
  }
  return num1 - num2;
};
