document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("camera-feed");

    // Request Camera Access
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.error("Camera access denied:", err);
        });

    // Form Submission
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        if (!email.endsWith("@gmail.com")) {
            alert("Please enter a valid Gmail address.");
            return;
        }

        // Redirect to MCQ page
        window.location.href = "mcq.html";
    });
});
