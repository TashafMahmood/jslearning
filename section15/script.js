function createCounter() {
    let count = 0;  // This variable is enclosed within the function
  
    function increment() {
      count++;
      return count;
    }
  
    return increment;
  }
  
  const incrementButton = document.getElementById('incrementButton');
  const counterDisplay = document.getElementById('counter');
  
  const incrementCounter = createCounter();
  
  incrementButton.addEventListener('click', () => {
    const updatedCount = incrementCounter();
    counterDisplay.textContent = updatedCount;
  });
  