document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Validation
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Message sent! I'll get back to you soon.");
                form.reset();
            }
        });
    }
});
