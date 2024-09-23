const color = (document.getElementById(
  "donation-button"
).style.backgroundColor = "#B4F461");

// donation sction
document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    showSectionById("donation-section");

    // makeColor();
  });
document
  .getElementById("history-button")
  .addEventListener("click", function () {
    showSectionById("history-section");
    // makeColor();
  });

//   nav button for another page added
document.getElementById("question-btn").addEventListener("click", function () {
  newTab("../question.html");
});
document.getElementById("home-btn").addEventListener("click", function () {
  newTab("../index.html");
});
