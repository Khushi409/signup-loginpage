const square = document.getElementById("square");
const frontSide = document.getElementById("frontSide");
const rightSide = document.getElementById("rightSide");
const leftSide = document.getElementById("leftSide");

frontSide.addEventListener("click", () => {
  frontSide.style.display = "none";
  rightSide.style.display = "block";
  leftSide.style.display = "block";
  square.style.transform = "rotate3d(0, 0, 0, 90deg)";
  document.title = "Login page";
});

rightSide.addEventListener("click", () => {
  rightSide.style.display = "none";
  frontSide.style.display = "block";
  leftSide.style.display = "block";
  square.style.transform = "rotate3d(0, -1, 0, 90deg)";
  document.title = "Sign up page";
});

leftSide.addEventListener("click", () => {
  leftSide.style.display = "none";
  frontSide.style.display = "block";
  rightSide.style.display = "none";
  square.style.transform = "rotate3d(0, 1, 0, 90deg)";
  document.title = "Forgot password page";
});




// The code defines four variables: square, frontSide, rightSide, and leftSide. These variables represent the HTML elements with the corresponding IDs.

// The frontSide element is initially displayed. When the user clicks on the frontSide element, the rightSide and leftSide elements are displayed, and the frontSide element is hidden. The square element is also rotated 90 degrees, and the document title is set to "Login page".

// When the user clicks on the rightSide element, the rightSide element is hidden, the frontSide and leftSide elements are displayed, the square element is rotated 90 degrees in the opposite direction, and the document title is set to "Sign up page".

// When the user clicks on the leftSide element, the leftSide element is hidden, the frontSide element is displayed, and the rightSide element is hidden. The square element is rotated 90 degrees in the opposite direction, and the document title is set to "Forgot password page".

// This code can be used to create a simple login, signup, and forgot password page. The code uses the addEventListener() method to attach event listeners to the frontSide, rightSide, and leftSide elements. When the user clicks on one of these elements, the corresponding event handler is executed. The event handlers hide or display the appropriate elements, rotate the square element, and set the document title.