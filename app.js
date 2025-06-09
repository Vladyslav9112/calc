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

addInputBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".inputNumbers");

  if (inputs.length >= 10) {
    addInputBtn.disabled = true;
    return;
  }

  const inputWrapper = document.createElement("div");
  inputWrapper.className = "d-flex align-items-center gap-2 mb-2";

  const input = document.createElement("input");
  input.type = "number";
  input.className = "form-control inputNumbers";
  const inputNumber = inputs.length + 1;
  input.placeholder = `Введіть ${inputNumber} число`;
  input.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn btn-s btn-danger";
  deleteBtn.innerText = "🗑️";

  deleteBtn.addEventListener("click", () => {
    inputWrapper.remove();
    const updatedInputs = document.querySelectorAll(".inputNumbers");
    if (updatedInputs.length < 10) {
      addInputBtn.disabled = false;
    }
    updatedInputs.forEach((el, index) => {
      el.placeholder = `Введіть ${index + 1} число`;
    });
  });

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(deleteBtn);
  inputWithNumbers.appendChild(inputWrapper);
});

function getValidValues() {
  return Array.from(document.querySelectorAll(".inputNumbers"))
    .map((input) => Number(input.value))
    .filter((val) => !isNaN(val));
}

function calculateSum() {
  return getValidValues().reduce((acc, val) => acc + val, 0);
}

function minusSum() {
  const values = getValidValues();
  if (values.length === 0) return 0;
  return values.slice(1).reduce((acc, val) => acc - val, values[0]);
}

function divideSum() {
  const values = getValidValues();
  if (values.length === 0) return 0;

  for (let i = 1; i < values.length; i++) {
    if (values[i] === 0) return;
  }

  return values.slice(1).reduce((acc, val) => acc / val, values[0]);
}

function multiplySum() {
  const values = getValidValues();
  if (values.length === 0) return 0;
  return values.reduce((acc, val) => acc * val, 1);
}

function powerSum() {
  const values = getValidValues();
  if (values.length === 0) return 0;
  return values.slice(1).reduce((acc, val) => acc ** val, values[0]);
}

function modulusSum() {
  const values = getValidValues();
  if (values.length === 0) return 0;

  for (let i = 1; i < values.length; i++) {
    if (values[i] === 0) return;
  }

  return values.slice(1).reduce((acc, val) => acc % val, values[0]);
}

plusBtn.onclick = function () {
  const result = calculateSum();
  submitBtn.onclick = () => (resultElement.textContent = result);
  continueWithNumberBtn.onclick = () => (input1.value = result);
};

minusBtn.onclick = function () {
  const result = minusSum();
  submitBtn.onclick = () => (resultElement.textContent = result);
  continueWithNumberBtn.onclick = () => (input1.value = result);
};

divideBtn.onclick = function () {
  const result = divideSum();
  submitBtn.onclick = () => {
    resultElement.textContent =
      typeof result === "string"
        ? result
        : Number.isInteger(result)
        ? result
        : result.toFixed(2);
  };
  continueWithNumberBtn.onclick = () => {
    input1.value = typeof result === "string" ? "" : result;
  };
};

multiplyBtn.onclick = function () {
  const result = multiplySum();
  submitBtn.onclick = () => (resultElement.textContent = result);
  continueWithNumberBtn.onclick = () => (input1.value = result);
};

powerBtn.onclick = function () {
  const result = powerSum();
  submitBtn.onclick = () => (resultElement.textContent = result);
  continueWithNumberBtn.onclick = () => (input1.value = result);
};

modulusBtn.onclick = function () {
  const result = modulusSum();
  submitBtn.onclick = () => (resultElement.textContent = result);
  continueWithNumberBtn.onclick = () =>
    (input1.value = typeof result === "string" ? "" : result);
};
