// Variables
let score = 0;

// Allow items to be dropped into drop zones
function allowDrop(event) {
  event.preventDefault();
}

// Handle dragging of an item
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Handle dropping of an item
function drop(event) {
  event.preventDefault();
  const draggedItemId = event.dataTransfer.getData("text");
  const draggedItem = document.getElementById(draggedItemId);
  const dropZone = event.target;

  // Check if the drop is valid
  if (dropZone.classList.contains("dropzone") && dropZone.dataset.match === draggedItemId) {
    dropZone.appendChild(draggedItem);
    updateStatus(`Correct! ${draggedItem.innerText} matched.`);
    score++;
  } else {
    updateStatus(`Incorrect match. Try again!`);
  }

  updateScore();
}

// Update the score display
function updateScore() {
  document.getElementById("score").innerText = score;
}

// Update the status message
function updateStatus(message) {
  document.getElementById("status").innerText = message;
}

// Add event listeners for all draggable items and drop zones
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", drag);
});

document.querySelectorAll(".dropzone").forEach((zone) => {
  zone.addEventListener("dragover", allowDrop);
  zone.addEventListener("drop", drop);
});