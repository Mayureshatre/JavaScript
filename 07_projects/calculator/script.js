let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let result = "";
let arr = Array.from(buttons);
// console.log(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "equalbtn") {
      result = result.replaceAll("^", "**");
      result = eval(result);
      input.value = result;
      result = result.toString();
    } else if (e.target.id === "square") {
      result = Math.pow(input.value, 2);
      input.value = result;
      result = result.toString();
    } else if (e.target.id === "squareroot") {
      result = Math.sqrt(input.value);
      input.value = result;
      result = result.toString();
    } else if (e.target.id === "power") {
      result += "^";
      input.value = result;
    } else if (e.target.id === "AC") {
      result = "";
      input.value = result;
    } else if (e.target.id === "DEL") {
      result = result.slice(0, -1);
      input.value = result;
    } else {
      result += e.target.innerHTML;
      input.value = result;
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "input") {
    e.preventDefault();
  }

  if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "." ||
    (e.key >= "0" && e.key <= "9")
  ) {
    result += e.key;
    input.value = result;
  } else if (e.key === "^") {
    result += "^";
    input.value = result;
  } else if (e.key === "Backspace") {
    result = result.slice(0, -1);
    input.value = result;
  } else if (e.key === "Delete") {
    result = "";
    input.value = result;
  } else if (e.key === "Enter") {
    result = eval(result);
    input.value = result;
    result = result.toString();
  }
});
