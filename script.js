document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
      // Redirect to dashboard page
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password');
    }
  });