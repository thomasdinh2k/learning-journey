// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    var screen = document.querySelector(".screen");
    var buttons = document.querySelectorAll(".calc-button");
  
    // Add click event listener to each button
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        var buttonText = this.textContent.trim();
  
        if (buttonText === "C") {
          // Clear the screen
          screen.textContent = "0";
        } else if (buttonText === "←") {
          // Remove the last character from the screen
          var currentText = screen.textContent;
          screen.textContent = currentText.slice(0, -1);
        } else if (buttonText === "÷") {
          // Perform division operation
          // Replace the division symbol with the forward slash
          screen.textContent += "/";
        } else if (buttonText === "×") {
          // Perform multiplication operation
          // Replace the multiplication symbol with the asterisk
          screen.textContent += "*";
        } else if (buttonText === "-") {
          // Perform subtraction operation
          screen.textContent += "-";
        } else if (buttonText === "+") {
          // Perform addition operation
          screen.textContent += "+";
        } else if (buttonText === "±") {
          // Toggle between positive and negative
          var currentText = screen.textContent;
          if (currentText[0] === "-") {
            screen.textContent = currentText.slice(1);
          } else {
            screen.textContent = "-" + currentText;
          }
        } else if (buttonText === "=") {
          // Evaluate the expression on the screen
          var expression = screen.textContent;
          try {
            var result = eval(expression);
            screen.textContent = result;
          } catch (error) {
            screen.textContent = "Error";
          }
        } else {
          // Append the button's text to the screen
          if (screen.textContent === "0") {
            screen.textContent = buttonText;
          } else {
            screen.textContent += buttonText;
          }
        }
      });
    });
  });
  