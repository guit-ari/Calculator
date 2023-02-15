let firstNumber = 0;
let operator;

one.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "1";
});
two.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "2";
});
three.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "3";
});
four.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "4";
});
five.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "5";
});
six.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "6";
});
seven.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "7";
});
eight.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "8";
});
nine.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "9";
});
zero.addEventListener("click", function () {
  document.getElementById("display").innerHTML =
    document.getElementById("display").innerHTML + "0";
});

ac.addEventListener("click", function () {
  if (confirm("Sei sicuro di cancellare i dati?") == true) {
    firstNumber = 0;
    document.getElementById("display").innerHTML = "";
  } else {
    document.getElementById("display").innerHTML;
  }
});
add.addEventListener("click", function () {
  firstNumber = parseInt(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  operator = "add";
});
subtract.addEventListener("click", function () {
  firstNumber = parseInt(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  operator = "subtract";
});
multiply.addEventListener("click", function () {
  firstNumber = parseInt(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  operator = "multiply";
});
divide.addEventListener("click", function () {
  firstNumber = parseInt(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  operator = "divide";
});
result.addEventListener("click", function () {
  switch (operator) {
    case "add":
      firstNumber =
        firstNumber + parseInt(document.getElementById("display").innerHTML);
      break;
    case "subtract":
      firstNumber =
        firstNumber - parseInt(document.getElementById("display").innerHTML);
      break;
    case "multiply":
      firstNumber =
        firstNumber * parseInt(document.getElementById("display").innerHTML);
      break;
    case "divide":
      firstNumber =
        firstNumber / parseInt(document.getElementById("display").innerHTML);
      break;
  }
  document.getElementById("display").innerHTML = firstNumber;
});
