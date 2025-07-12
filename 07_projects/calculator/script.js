let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let result = "";
let arr = Array.from(buttons);
// console.log(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "equalbtn") {
      result = eval(result);
      input.value = result;
      result = result.toString();
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
