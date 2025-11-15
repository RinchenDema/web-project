document.addEventListener("DOMContentLoaded", () => {
  const goBtn = document.getElementById("go-btn");
  const roleSelect = document.getElementById("role");

  goBtn.addEventListener("click", () => {
    const role = roleSelect.value;
    if (role === "user") {
      window.location.href = "user-login.html";
    } else if (role === "admin") {
      window.location.href = "admin-login.html";
    } else {
      alert("⚠️ Please select your role first!");
    }
  });
});

// Notification simulation — you can later replace with real logic
const hasNotification = true; // change to false if no notifications

document.addEventListener("DOMContentLoaded", () => {
  const notifDot = document.getElementById("notifDot");

  // Show red dot if there is a notification
  if (hasNotification) {
    notifDot.style.display = "block";
  } else {
    notifDot.style.display = "none";
  }

  // Role selection logic (if not already added)
  const goBtn = document.getElementById("go-btn");
  const roleSelect = document.getElementById("role");

  goBtn.addEventListener("click", () => {
    const selected = roleSelect.value;
    if (selected === "user") {
      window.location.href = "user-login.html";
    } else if (selected === "admin") {
      window.location.href = "admin-login.html";
    } else {
      alert("Please select a role.");
    }
  });
});


function handleUserLogin() {
    // Redirect to user login page
    window.location.href = 'user-login.html';
}

function handleAdminLogin() {
    // Redirect to admin login page
    window.location.href = 'admin-login.html';
}