// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

// Get all the save buttons
const saveButtons = document.querySelectorAll(".saveBtn");

// This adds an event listener for each save button
saveButtons.forEach(function(saveButton) {
  saveButton.addEventListener("click", function() {
  // This gets the user input for the current time-block
    const userInput = this.parentNode.querySelector(".description").value;


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

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // Get the current time and date using Day.js
    const currentTime = () => {
      return dayjs().format("dddd MMMM DD, YYYY");
    };

    // Update the current time every second
    setInterval(() => {
      document.getElementById("currentDay").textContent = currentTime();
    }, 1000);

});
