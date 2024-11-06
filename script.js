//your JS code here. If required.
// Display existing user button if details are saved
  const existingUserButton = document.getElementById('existing');
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingUserButton.style.display = 'block';
  }

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
      // Save username and password in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // Remove username and password from local storage if unchecked
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    // Display the existing user button if remember me is checked
    if (rememberMe) {
      existingUserButton.style.display = 'block';
    } else {
      existingUserButton.style.display = 'none';
    }
  });

  // Handle existing user login
  existingUserButton.addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
  });
