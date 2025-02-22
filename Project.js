// Get the sidebar and button ele
// Function to close the sidebarments
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");

// Function to open the sidebar
function openSidebar() {
    sidebar.style.left = "0"; // Slide the sidebar into view
}

function closeSidebar() {
    sidebar.style.left = "-250px"; // Slide the sidebar out of view
}

// Add event listeners to the buttons
menuButton.addEventListener("click", openSidebar);
closeButton.addEventListener("click", closeSidebar);

// JavaScript to open the form in a new tab
document.getElementById('form-select').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
        window.open(selectedValue, '_blank'); // Open form in new tab
    }
});

/*JavaScript to handle form submission */


document.getElementById('careerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get the selected value (URL)
    const careerPath = document.getElementById('career-path').value;

    if (careerPath) {
        window.open(careerPath, '_blank'); // Open the Google Form link in a new tab
    } else {
        alert('Please select a career path.');
    }
});