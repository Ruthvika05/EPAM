// Task 1: Button Click Alert
// ==========================
document.getElementById("alertButton").addEventListener("click", function () {
    alert("Button was clicked!");
  });
  
  // Task 2: Input Field Live Preview
  // ================================
  document.getElementById("liveInput").addEventListener("input", function (e) {
    document.getElementById("livePreview").textContent = e.target.value;
  });
  
  // Task 3: Mouseover Color Change
  // ==============================
  const colorBox = document.getElementById("colorBox");
  colorBox.addEventListener("mouseover", function () {
    colorBox.style.backgroundColor = "salmon";
  });
  colorBox.addEventListener("mouseout", function () {
    colorBox.style.backgroundColor = "lightblue";
  });
  
  // Task 4: Keydown Counter
  // =======================
  let count = 0;
  document.getElementById("keyInput").addEventListener("keydown", function () {
    count++;
    document.getElementById("keyCount").textContent = count;
  });
  