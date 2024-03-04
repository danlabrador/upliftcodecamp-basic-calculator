"use strict";
const subtract = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "must be numbers";
  }
  return num1 - num2;
};
