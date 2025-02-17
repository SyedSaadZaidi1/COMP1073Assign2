// Constants for query selectors
const studentIdElement = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    let color = "white";

    if (userInput < 0 || userInput > 100) {
        color = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        color = "green";
    } else if (userInput > 20 && userInput <= 40) {
        color = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        color = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        color = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        color = "yellow";
    }

    document.body.style.backgroundColor = color;
    studentIdElement.textContent = "Student ID: 123456789"; // Replace with your actual student ID
}

// Function to change background color based on a random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum; // Update input field with the generated number
    changeCustomColor(); // Reuse the same function for color selection
}

// Function to generate options for the select list
function addList() {
    // Clear existing options to prevent duplicates
    imageSelect.innerHTML = '<option value="">Please choose...</option>';

    // Image file names stored in an array
    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

    // Loop through the array and create option elements
    images.forEach(image => {
        const option = document.createElement("option");
        option.value = `img/${image}`;
        option.textContent = image;
        imageSelect.appendChild(option);
    });
}

// Function to change the displayed image
function changeImage() {
    const selectedImage = imageSelect.value;
    if (selectedImage) {
        imageElement.src = selectedImage;
        imageElement.alt = "Selected Image";
    } else {
        imageElement.src = "";
        imageElement.alt = "";
    }
}

// Event listeners for button clicks
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);

// Event listener for select list (generate options when clicked)
imageSelect.addEventListener("focus", addList);

// Event listener for selecting an image
imageSelect.addEventListener("change", changeImage);
