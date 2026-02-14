onload = () => {
  document.body.classList.remove("container");
};

// Back button functionality
const backBtn = document.getElementById("backButton");

backBtn.addEventListener("click", () => {
  // Go back to previous page
  window.history.back();

  // OR go to a specific page
  // window.location.href = "index.html";
});
