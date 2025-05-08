// Button click: Change text and color
document.getElementById("myButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "green";
});

// Hover effect
document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
});

document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "green";
});

// Keypress detection
document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    document.getElementById("keypressOutput").textContent = `You pressed: ${event.key}`;
});

// Double-click secret action
document.getElementById("secretButton").addEventListener("dblclick", function() {
    alert("Double-click detected! Secret unlocked!");
});

// Image Gallery Slideshow
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImage = 0;

function changeImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("imageGallery").src = images[currentImage];
}

setInterval(changeImage, 3000); // Change image every 3 seconds

// Tabs (Accordion-style)
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        let target = document.getElementById(tab.dataset.target);
        let allContent = document.querySelectorAll('.tab-content');
        allContent.forEach(content => content.style.display = 'none');
        target.style.display = 'block';
    });
});

// Form Validation
document.getElementById("form").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let valid = true;

    // Email validation
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
