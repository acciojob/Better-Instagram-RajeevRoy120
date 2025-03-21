//your code here
const images = document.querySelectorAll('.image');

let draggedItem = null;

images.forEach(image => {
    image.addEventListener('dragstart', function () {
        draggedItem = this;
        this.classList.add("selected");
        setTimeout(() => this.style.visibility = "hidden", 0);
    });

    image.addEventListener('dragend', function () {
        setTimeout(() => this.style.visibility = "visible", 0);
        this.classList.remove("selected");
        draggedItem = null;
    });

    image.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    image.addEventListener('dragenter', function (event) {
        event.preventDefault();
    });

    image.addEventListener('drop', function () {
        if (draggedItem !== this) {
            // Swap background images
            let temp = this.style.backgroundImage;
            this.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = temp;
        }
    });
});
