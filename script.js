const textArea = document.getElementById("text");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

let cleanedData;
btn.addEventListener("click", () => {
  const reversed = cleanedData.toLowerCase().split("").reverse().join("");
  if (reversed !== cleanedData) {
    return (output.innerText = `${cleanedData} - is not a Palindrome`);
  }
  return (output.innerText = `${cleanedData} - is a Palindrome`);
});

textArea.addEventListener("keyup", () => {
  cleanedData = textArea.value.replace(/[^A-Z0-9]/gi, "");
  if (cleanedData) {
    return btn.classList.add("active");
  }
  btn.classList.remove("active");
  output.innerText = "";
});
