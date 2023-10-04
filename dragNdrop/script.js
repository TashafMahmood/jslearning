function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedText = document.createElement("div");
    draggedText.innerText = data;
    event.target.appendChild(draggedText);
  
    // Remove the text from the original box
    var originalBox = document.getElementById("box1"); // Change to the actual ID of the original box
    originalBox.innerText = "";
  }
  