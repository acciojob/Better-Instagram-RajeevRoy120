//your code here
const images = document.querySelectorAll(".image");

let draggedElement = null;

// Add event listeners for drag-and-drop functionality
images.forEach((image, index) => {
    // Assign IDs dynamically
    image.id = `div${index + 1}`;

    // Apply background images from CSS
    image.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue(`--div${index + 1}`);

    image.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        e.target.classList.add("selected"); // Highlight selected image
    });

    image.addEventListener("dragover", (e) => {
        e.preventDefault(); // Allows the drop
    });

    image.addEventListener("dragenter", (e) => {
        e.preventDefault();
        e.target.style.border = "5px dashed red"; // Show visual cue
    });

    image.addEventListener("dragleave", (e) => {
        e.target.style.border = "none"; // Reset border
    });

    image.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedElement !== e.target) {
            // Swap background images
            let tempBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = tempBg;
        }
        e.target.style.border = "none";
    });

    image.addEventListener("dragend", (e) => {
        e.target.classList.remove("selected"); // Remove selection
    });
});
