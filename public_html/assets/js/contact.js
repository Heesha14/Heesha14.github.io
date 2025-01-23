// Initialize EmailJS
emailjs.init("FwAtElwFDeICu37HZ"); // Replace with your actual EmailJS public key

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Select the form element

    // Add a submit event listener to the form
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect the form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Send email using EmailJS
        emailjs
            .send("portfolio_contact", "portfolio_contact_form", {
                user_name: name,
                user_email: email,
                message: message,
            })
            .then(
                () => {
                    showNotification("Message sent successfully!", "success");
                    form.reset(); // Clear the form fields after success
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    showNotification("Failed to send message. Please try again.", "error");
                }
            );
    });

    /**
     * Show a notification with the given message and type.
     * @param {string} message - The notification message.
     * @param {string} type - The type of notification: "success" or "error".
     */
    function showNotification(message, type) {
        const notification = document.createElement("div");
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Auto-hide the notification after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});


/* // Initialize EmailJS
emailjs.init("FwAtElwFDeICu37HZ"); // Replace "your-public-key" with your actual EmailJS public key

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Contact JS JavaScript Loaded!");
    const form = document.querySelector("form"); // Select the form element

    // Add a submit event listener to the form
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log("Contact Form Submitted!");

        // Collect the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Sending EmailJS Request...");

        // Send email using EmailJS
        emailjs
            .send("portfolio_contact", "portfolio_contact _form", {
                user_name: name,
                user_email: email,
                message: message,
            })
            .then(
                () => {
                    console.log("Email Sent Successfully!");
                    alert("Message sent successfully!");
                    form.reset(); // Clear the form fields after success
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    alert("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
    });
});
 */