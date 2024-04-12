document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Login attempt with username:', username, 'and password:', password);
    alert('Login attempt! Check the console for details.');
});
