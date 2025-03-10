function appendValue(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value) || "";
  } catch (error) {
    alert("Invalid calculation");
    result.value = "";
  }
}
