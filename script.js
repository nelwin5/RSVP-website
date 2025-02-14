document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    const imageText = document.querySelector(".image-container p");

    // Apply effects when page loads
    loginContainer.classList.add("show");
    imageText.classList.add("show");

    function animateAndNavigate(callback) {
        loginContainer.classList.add("hide");
        imageText.classList.add("hide");

        setTimeout(callback, 600); // Wait for animation to finish
    }
    // Handle normal link clicks (e.g., "Forgot Password", "Sign Up")
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href") && !this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                let href = this.getAttribute("href");

                animateAndNavigate(() => window.location.href = href);
            }
        });
    });
});
