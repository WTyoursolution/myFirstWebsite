"use script"

const toggleOpen = document.getElementById('toggleOpen');
const toggleClose = document.getElementById('toggleClose');
const collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


// Smooth scroll to blog posts section when button is clicked
// This code assumes you have a button with id 'myButton' and a section with id
document.getElementById('myButton').addEventListener('click', () => {
document.getElementById('blogPosts').scrollIntoView({behavior: 'smooth'});
console.log('Button clicked, scrolling to blog posts section');
})
function saveCommentsToLocalStorage(comments) {
  // Convert the comments array to a JSON string and save it to localStorage
  localStorage.setItem("comments", JSON.stringify(comments)); 
}

function loadCommentsFromLocalStorage() {
  // Retrieve the comments from localStorage and parse the JSON string back to an array
  const comments = JSON.parse(localStorage.getItem("comments")) || []; // If no comments, initialize as an empty array
 const list = document.getElementById(commentsLists);
 list.innerHTML = ""; // Clear the existing list before loading new comments

comments.forEach((c) => {
  const commentEl = document.createElement("li"); // Create a new list item element
})


}



function postComment(event) {
 event.preventDefault();// Prevent the default form submission behavior

//Gather form values and log them to the console
const firstName = document.querySelector("#firstName").value.trim(); // Get the trimmed value of the first name
const email = document.querySelector("#email").value.trim(); // Get the trimmed value of the
const url = document.querySelector("#url").value.trim(); // Get the trimmed value of the URL
const comment = document.querySelector("#commentInput").value.trim(); // Get the trimmed value of the comment

//Validate the form inputs
if (!firstName || !email || !url || !comment) {
  console.error("All fields are required.");
  alert("Please fill in all fields before submitting."); // Alert the user to fill in all fields
  return; // If any field is empty, log an error and exit the function

} 
// If all fields are filled, proceed to post the comment
  console.log("Form submitted successfully:", {
    firstName,
    email,
    url,
    comment,
  });

// Create a new comment element and add it to the comment list
const commentEl = document.createElement("li"); // Create a new list item element
commentEl.className = "bg-white p-3 rounded shadow mb-2"; // Set the class for styling
commentEl.textContent = `${firstName} from ${city} says this: ${comment} ` // Set the text content of the comment

document.getElementById("commentLists").prepend(commentEl); // Add the new comment to the top of the list

// Clear the input fields after posting the comment
document.querySelector("#firstName").value = ""; // Clear the first name input field
document.querySelector("#email").value = ""; // Clear the email input field
document.querySelector("url").value = ""; // Clear the URL input field
document.querySelector("#commentInput").value = ""; // Clear the comment input field
}
