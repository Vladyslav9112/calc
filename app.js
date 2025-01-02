const resultElement = document.getElementById("result");
const inputWithNumbers = document.getElementById("inputWithNumbers");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const powerBtn = document.getElementById("power");
const modulusBtn = document.getElementById("modulus");
const continueWithNumberBtn = document.getElementById("continueWithNumber");
const addInputBtn = document.getElementById("addInput");

let idCounter = 2;

addInputBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".inputNumbers");

  if (inputs.length == 9) {
    addInputBtn.disabled = true;
  } else {
    addInputBtn.disabled = false;
  }

  const input = document.createElement("input");
  input.type = "number";
  input.className = "form-control mb-2 inputNumbers";
  input.placeholder = `Введіть число`;
  input.id = ``;
  input.value = "";
  inputWithNumbers.appendChild(input);

  idCounter++;
  input.placeholder = `Введите ${idCounter} число`;
});

function calculateSum() {
  const inputFields = document.querySelectorAll(".inputNumbers");
  let sum = null;

  inputFields.forEach((input) => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== "") {
      sum += value;
    }
  });

  return sum;
}

function minusSum() {
  const inputFields = document.querySelectorAll(".inputNumbers");
  let minus = null;

  inputFields.forEach((input) => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== "") {
      minus -= value;
    }
  });

  return minus;
}

function divideSum() {
  const inputFields = document.querySelectorAll(".inputNumbers");
  let divide = null;

  inputFields.forEach((input) => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== "") {
      divide /= value;
    }
  });

  return divide;
}

function multiplySum() {
  const inputFields = document.querySelectorAll(".inputNumbers");
  let multiply = null;

  inputFields.forEach((input) => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== "") {
      multiply *= value;
    }
  });

  return multiply;
}

function powerSum() {
  const inputFields = document.querySelectorAll(".inputNumbers");
  let power = null;

  inputFields.forEach((input) => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== "") {
      power **= value;
    }
  });

  return power;
}

function modulusSum() {
  const inputFields = document.querySelectorAll(".inputNumbers");
  let modulus = null;

  inputFields.forEach((input) => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== "") {
      modulus %= value;
    }
  });

  return modulus;
}

plusBtn.onclick = function () {
  const sum = calculateSum();

  submitBtn.onclick = function () {
    resultElement.textContent = sum;
  };

  continueWithNumberBtn.onclick = function () {
    input1.value = sum;
  };
};

minusBtn.onclick = function () {
  const minus = minusSum();
  submitBtn.onclick = function () {
    resultElement.textContent = minus;
  };
  continueWithNumberBtn.onclick = function () {
    input1.value = minus;
  };
};

divideBtn.onclick = function () {
  const divide = divideSum();
  let result = divide.toFixed(2);
  submitBtn.onclick = function () {
    resultElement.textContent = result;
  };
  continueWithNumberBtn.onclick = function () {
    input1.value = result;
  };
};

multiplyBtn.onclick = function () {
  const multiply = multiplySum();
  submitBtn.onclick = function () {
    resultElement.textContent = multiply;
  };
  continueWithNumberBtn.onclick = function () {
    input1.value = multiply;
  };
};

powerBtn.onclick = function () {
  const power = powerSum();
  submitBtn.onclick = function () {
    resultElement.textContent = power;
  };
  continueWithNumberBtn.onclick = function () {
    input1.value = power;
  };
};

modulusBtn.onclick = function () {
  const modulus = modulusSum();
  submitBtn.onclick = function () {
    resultElement.textContent = modulus;
  };
  continueWithNumberBtn.onclick = function () {
    input1.value = modulus;
  };
};
