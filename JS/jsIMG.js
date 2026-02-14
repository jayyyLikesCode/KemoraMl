// Grab the button
const lastPageBtn = document.getElementById("LastPage");

// Add click event
lastPageBtn.addEventListener("click", () => {
  // Navigate to the last page
  window.location.href = "Flower.html"; // change this to your actual last page file
});


// Back button functionality
const backBtn = document.getElementById("backButton");

backBtn.addEventListener("click", () => {
  // Option 1: Go back to previous page
  window.history.back();

  // Option 2: Go to a specific page instead
  // window.location.href = "index.html"; 
});