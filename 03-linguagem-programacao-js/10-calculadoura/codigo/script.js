
function addition() {
  let a = parseFloat(document.querySelector(".primeiro").value);
  let b = parseFloat(document.querySelector(".segundo").value);

  a = a ? a : 0;
  b = b ? b : 0;
  let resultAddiction = a + b;
  const textResult = document.querySelector(".text-result");

  textResult.innerHTML = `= ${resultAddiction}`;

  console.log(a, b, resultAddiction)
}

function subtraction() {
  let a = parseFloat(document.querySelector(".primeiro").value);
  let b = parseFloat(document.querySelector(".segundo").value);

  a = a ? a : 0;
  b = b ? b : 0;
  let resultAddiction = a - b;
  const textResult = document.querySelector(".text-result");

  textResult.innerHTML = `= ${resultAddiction}`;

  console.log(a, b, resultAddiction)
}

function multiplication() {
  let a = parseFloat(document.querySelector(".primeiro").value);
  let b = parseFloat(document.querySelector(".segundo").value);

  a = a ? a : 1;
  b = b ? b : 1;
  let resultAddiction = a * b;
  const textResult = document.querySelector(".text-result");

  textResult.innerHTML = `= ${resultAddiction}`;

  console.log(a, b, resultAddiction)
}

function division() {
  let a = parseFloat(document.querySelector(".primeiro").value);
  let b = parseFloat(document.querySelector(".segundo").value);

  a = a ? a : 1;
  b = b ? b : 1;
  let resultAddiction = a / b;
  const textResult = document.querySelector(".text-result");

  textResult.innerHTML = `= ${resultAddiction}`;

  console.log(a, b, resultAddiction)
}

