// main array to store all the links
let savedPages = [];

// grabbing all the buttons and inputs
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// check for previously saved URLs in localStorage
const linksFromLocalStorage = JSON.parse(localStorage.getItem("savedPages"));

// if saved URLs, load them into array and render
if (linksFromLocalStorage) {
  savedPages = linksFromLocalStorage;
  render(savedPages);
}

// save current active tab URL
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    savedPages.push(tabs[0].url);

    // converts array into text for storage
    localStorage.setItem("savedPages", JSON.stringify(savedPages));
    render(savedPages);
  });
});

// double-click to delete saved URLs
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  savedPages = [];
  render(savedPages);
});

// save manually input URL
inputBtn.addEventListener("click", function () {
  savedPages.push(inputEl.value);

  // clear the input field for next entry
  inputEl.value = "";

  localStorage.setItem("savedPages", JSON.stringify(savedPages));
  render(savedPages);
});

function render(links) {
  let listItems = "";
  for (let i = 0; i < links.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
