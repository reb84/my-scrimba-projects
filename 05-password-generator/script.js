const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPassword = document.getElementById("pw-one");
let secondPassword = document.getElementById("pw-two");

function generatePassword() {
  // clear fields
  firstPassword.textContent = "";
  secondPassword.textContent = "";

  for (let i = 0; i < 15; i++) {
    const randomIndex1 = Math.floor(Math.random() * characters.length);
    firstPassword.textContent += characters[randomIndex1];

    const randomIndex2 = Math.floor(Math.random() * characters.length);
    secondPassword.textContent += characters[randomIndex2];
  }
}

function copyPasswordOne() {
  if (!firstPassword.textContent) {
    alert("Generate a password first!");
    return;
  }
  navigator.clipboard.writeText(firstPassword.textContent);
  alert("Password copied: " + firstPassword.textContent);
}

function copyPasswordTwo() {
  if (!secondPassword.textContent) {
    alert("Generate a password first!");
    return;
  }
  navigator.clipboard.writeText(secondPassword.textContent);
  alert("Password copied: " + secondPassword.textContent);
}
