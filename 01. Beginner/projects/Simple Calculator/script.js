function calculate(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  try {
    if (isNaN(num1) || isNaN(num2)) throw "Invalid input!";

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) throw "Division by zero!";
        result = num1 / num2;
        break;
      default:
        throw "Unknown operation!";
    }

    let signCheck = result >= 0 ? "Positive" : "Negative";
    document.getElementById(
      "result"
    ).innerText = `Result: ${result} (${signCheck})`;
  } catch (error) {
    document.getElementById("result").innerText = `Error: ${error}`;
  }
}
