
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
function sub(num1, num2){
    const diff = num1 - num2;
    console.log(diff);
    return diff;
}
function div(num1, num2){
    if(num2 ==0){
        throw new Error("pleas change the number")
    }
    const quotint = num1 / num2;
    console.log(quotint);
    return quotint;
}
function mul(num1, num2){
    const product = num1 * num2;
    console.log(product);
    return product;
}
function pow(n, p) {
   if (p === 1) return n; 
   return n * pow(n, p - 1);
  }
  function log(base, number) { 
    return Math.log(number) / Math.log(base);
 } 
 function modulus(num1, num2) { 
    return num1 % num2;
 }
 

let firstNumber = 0;
let secondNumber = 0;


const firstNumberElement = document.getElementById("first-number");

firstNumberElement.addEventListener("change", function (){
    console.log("first number type"+ typeof this.value);
    firstNumber = parseInt(this.value);
});

const secondNumberElement = document.getElementById("second-number");

secondNumberElement.addEventListener("change", function () {
  secondNumber = parseInt(this.value);
});

const calculateButtonElement = document.getElementById("calculate-button");
calculateButtonElement.addEventListener("click", function () {
    const selectedOperation = document.querySelector('input[name="operation"]:checked');
    if (!selectedOperation) {
        alert("Please select an operation");
        return;
    }
  
    let result;
    switch (selectedOperation.id) {
        case "add-button":
            result = add(firstNumber, secondNumber);
            document.getElementById("selected-oprator").innerHTML = " + ";
            break;
        case "sub-button":
            result = sub(firstNumber, secondNumber);
            document.getElementById("selected-oprator").innerHTML = " - ";
            break;
        case "mul-button":
            result = mul(firstNumber, secondNumber);
            document.getElementById("selected-oprator").innerHTML = " * ";
            break;
        case "div-button":
            try {
                result = div(firstNumber, secondNumber);
                document.getElementById("selected-oprator").innerHTML = " / ";
            } catch (error) {
                alert(error.message);
                return;
            }
            break;
        case "pow-button":
            result = pow(firstNumber, secondNumber);
            document.getElementById("selected-oprator").innerHTML = " pow ";
            break;
        case "log-button":
            result = log(firstNumber, secondNumber);
            document.getElementById("selected-oprator").innerHTML = " log ";
            break;
        case "modulus-button":
            result = modulus(firstNumber, secondNumber);
            document.getElementById("selected-oprator").innerHTML = " % ";
            break;
    }

    const h1Element = document.createElement("h1");
    h1Element.innerHTML = "Result: " + result;
    document.body.appendChild(h1Element);
});

const clearButtonElement = document.getElementById("clear-button");
clearButtonElement.addEventListener("click", function () {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("selected-oprator").innerHTML = "";
  const results = document.querySelectorAll("h1");
  results.forEach((result, index) => {
    if (index > 0) result.remove();
  });
  const radios = document.querySelectorAll('input[name="operation"]');
  radios.forEach((radio) => (radio.checked = false));
});