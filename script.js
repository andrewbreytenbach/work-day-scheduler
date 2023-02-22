// This is the function (run using jQuery) that will allow the whole page to be interactive.
$(function () {

// Get all the save buttons
const saveButtons = document.querySelectorAll(".saveBtn");

// This adds an event listener for each save button
saveButtons.forEach(function(saveButton) {
  saveButton.addEventListener("click", function() {
    // This gets the user input for the current time-block
    const userInput = this.parentNode.querySelector(".description").value;
    // This gets the id of the current time-block but using the parent-child relationship
    const timeBlockId = this.parentNode.id;
    // This saves the user input in local storage using the time-block's id as a key
    localStorage.setItem(timeBlockId, userInput);
    });
  });

  // This will use 24 hour time to do comparisons with the id inside of the row class.
  
    // Get the current hour using Day.js
    const currentHour = dayjs().hour();

    // Loop through each time-block element suing a for loop (forEach) function
    const timeBlock = document.querySelectorAll(".time-block");
    timeBlock.forEach(timeBlock => {

      // Get the id attribute of each time-block element and store it as a new constant
      const timeBlockId = timeBlock.getAttribute("id");

      // Extract the hour value from the id attribute, which is in the 1 place in the array.
      const hour = parseInt(timeBlockId.split("-")[1]);

      // Compare the hour value to the current hour (must be in 24 hours)
      if (hour < currentHour) {
        // If the hour value is less than the current hour, add the "past" class to the element
        timeBlock.classList.add("past");
      } else if (hour === currentHour) {
        // If the hour value is equal to the current hour, add the "present" class to the element
        timeBlock.classList.add("present");
      } else {
        // If the hour value is greater than the current hour, add the "future" class to the element
        timeBlock.classList.add("future");
      }
      });


  // This gets all the time-blocks on the page and assigns them to a new variable.
  const timeBlocks = document.querySelectorAll(".time-block");

  // This loops through each time-block using a forEach function.
  timeBlocks.forEach(function(timeBlock) {
    // This gets the id of the current time-block and reassigns it to a new variable.
    const timeBlockId = timeBlock.id;

    // This gets the user input for the current time-block from local storage and assigns it to a variable.
    const userInput = localStorage.getItem(timeBlockId);

     // This says if the constant userInput exists, set the value of the description field in the time-block to the saved input so it displays to the HTML.
      if (userInput) {
        timeBlock.querySelector(".description").value = userInput;
      }
    });


  // This gets the current time and date using Day.js
    const currentTime = () => {
      return dayjs().format("dddd MMMM DD, YYYY");
    };

    // This will update the current time every second
    setInterval(() => {
      document.getElementById("currentDay").textContent = currentTime();
    }, 1000);

});
