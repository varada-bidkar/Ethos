document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const createAccountForm = document.getElementById("createAccountForm");
    const createAccountLink = document.getElementById("createAccountLink");
    const closeModal = document.getElementById("closeModal");
    const createAccountModal = document.getElementById("createAccountModal");

    // Open create account modal
    createAccountLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        createAccountModal.style.display = "block"; // Show modal
    });

    // Close create account modal
    closeModal.addEventListener("click", () => {
        createAccountModal.style.display = "none"; // Hide modal
    });

    // Validate and handle login form
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            console.log("Login Attempt:", { username, password }); // Log to console
            alert("Login successful!"); // For demonstration purposes
            // Optionally, you could store login information in local storage
            localStorage.setItem("lastLogin", JSON.stringify({ username, password }));
        }
    });

    // Validate and handle create account form
    createAccountForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newUsername === "" || newPassword === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Log account creation details to console
        console.log("Account Created:", { newUsername, newPassword }); // Log to console
        alert("Account created successfully!"); // For demonstration purposes

        // Store new account information in local storage (optional)
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        accounts.push({ username: newUsername, password: newPassword });
        localStorage.setItem("accounts", JSON.stringify(accounts));

        // Close modal after successful account creation
        createAccountModal.style.display = "none";
    });
});
