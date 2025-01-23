emailjs.init("FwAtElwFDeICu37HZ"); 

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        emailjs
            .send("portfolio_contact", "portfolio_contact_form", {
                user_name: name,
                user_email: email,
                message: message,
            })
            .then(
                () => {
                    showNotification("Message sent successfully!", "success");
                    form.reset();
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